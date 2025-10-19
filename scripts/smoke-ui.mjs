import * as ui from '@weblynk/ui';

if (!('Badge' in ui)) {
  console.error('❌ Smoke: export "Badge" missing from @weblynk/ui');
  process.exit(1);
}
console.log('✅ Smoke: @weblynk/ui ESM import + Badge export OK');
