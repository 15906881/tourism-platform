#!/bin/bash
set -e

echo '🏗️ Setting up Environment Smoke Test in Monorepo...'

# Create scripts directory structure
mkdir -p scripts/test

# Create the environment smoke test script
cat > scripts/test/env-smoke-test.sh << 'ENDOFFILE'
#!/bin/bash
set -e

echo '🧪 ENVIRONMENT SMOKE TEST'
echo '=========================='
echo 'Branch: '$(git branch --show-current)
echo 'Date: '$(date)
echo ''

# Test 1: Verify all environment files are accessible
echo '1. Testing environment file accessibility...'
for env_file in $(find . -name '.env*' -type f | grep -v node_modules | sort); do
  if [ -r "$env_file" ]; then
    echo '   ✅ '"$env_file"' is readable'
  else
    echo '   ❌ '"$env_file"' is NOT readable'
    exit 1
  fi
done

# Test 2: Verify DATABASE_URL format in all apps
echo ''
echo '2. Testing DATABASE_URL consistency...'
for app in admin onboarding photos-entry site-renderer tenant-dashboard; do
  env_file="./apps/$app/.env.local"
  if [ -f "$env_file" ]; then
    if grep -q 'DATABASE_URL.*tourism_dev.*schema=core&search_path=core,public' "$env_file"; then
      echo '   ✅ '"$app"': DATABASE_URL correct'
    else
      echo '   ❌ '"$app"': DATABASE_URL incorrect'
      exit 1
    fi
  fi
done

# Test 3: Verify Cognito configuration
echo ''
echo '3. Testing Cognito configuration...'
COGNITO_VARS=('COGNITO_REGION' 'COGNITO_USER_POOL_ID' 'COGNITO_CLIENT_ID' 'COGNITO_JWKS_URL')
for app in admin onboarding photos-entry site-renderer tenant-dashboard; do
  env_file="./apps/$app/.env.local"
  if [ -f "$env_file" ]; then
    all_present=true
    for var in "${COGNITO_VARS[@]}"; do
      if ! grep -q "^$var=" "$env_file" || grep "^$var=" "$env_file" | grep -q '=$'; then
        echo '   ❌ '"$app"': '"$var"' missing or empty'
        all_present=false
      fi
    done
    if [ "$all_present" = true ]; then
      echo '   ✅ '"$app"': All Cognito variables present'
    fi
  fi
done

# Test 4: Verify no accidental public exposure of secrets
echo ''
echo '4. Testing for accidental public secret exposure...'
for app in admin onboarding photos-entry site-renderer tenant-dashboard; do
  env_file="./apps/$app/.env.local"
  if [ -f "$env_file" ]; then
    if grep -q 'NEXT_PUBLIC_.*SECRET' "$env_file" || \
       grep -q 'NEXT_PUBLIC_DATABASE_URL' "$env_file" || \
       grep -q 'NEXT_PUBLIC_COGNITO_' "$env_file"; then
      echo '   ❌ '"$app"': Potential secret exposure via NEXT_PUBLIC_'
      exit 1
    else
      echo '   ✅ '"$app"': No accidental public secret exposure'
    fi
  fi
done

# Test 5: Verify packages have correct database config
echo ''
echo '5. Testing packages database configuration...'
for pkg in db server; do
  env_file="./packages/$pkg/.env"
  if [ -f "$env_file" ]; then
    if grep -q 'DATABASE_URL.*tourism_dev' "$env_file"; then
      echo '   ✅ '"$pkg"': DATABASE_URL points to tourism_dev'
    else
      echo '   ❌ '"$pkg"': DATABASE_URL incorrect'
      exit 1
    fi
  fi
done

echo ''
echo '🎉 ALL SMOKE TESTS PASSED!'
echo 'Environment configuration is consistent and ready for use.'
ENDOFFILE

# Make the script executable
chmod +x scripts/test/env-smoke-test.sh

echo '✅ Environment smoke test created: scripts/test/env-smoke-test.sh'

# Create a simple CI test runner
cat > scripts/test/run-ci-tests.sh << 'ENDOFFILE'
#!/bin/bash
set -e

echo '🚀 RUNNING CI TEST SUITE'
echo '========================'

# Run environment smoke test
echo '1. Running environment smoke test...'
./scripts/test/env-smoke-test.sh

echo ''
echo '✅ ALL CI TESTS COMPLETED SUCCESSFULLY'
ENDOFFILE

chmod +x scripts/test/run-ci-tests.sh

echo '✅ CI test runner created: scripts/test/run-ci-tests.sh'

echo ''
echo '🎉 Environment smoke test setup complete!'
echo ''
echo '🚀 Usage:'
echo '   ./scripts/test/env-smoke-test.sh'
echo '   ./scripts/test/run-ci-tests.sh'
