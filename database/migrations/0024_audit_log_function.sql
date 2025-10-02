-- Create audit action enum
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'audit_action') THEN
    CREATE TYPE core.audit_action AS ENUM (
      'user.login', 'user.logout',
      'listing.created','listing.updated','listing.deleted',
      'lead.created','lead.status_changed',
      'site.published'
    );
  END IF;
END$$;

-- Safe audit logging function
CREATE OR REPLACE FUNCTION core.log_event(
  p_action      core.audit_action,
  p_entity_type text,
  p_entity_id   uuid,
  p_old_values  jsonb DEFAULT NULL,
  p_new_values  jsonb DEFAULT NULL,
  p_ip          inet  DEFAULT NULL,
  p_user_agent  text  DEFAULT NULL,
  p_user_id     uuid  DEFAULT NULL
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = core, public
AS $$
DECLARE
  v_tenant uuid := NULLIF(current_setting('app.tenant_id', true), '')::uuid;
  v_user   uuid := COALESCE(p_user_id, NULLIF(current_setting('app.user_id', true), '')::uuid);
  v_id     uuid;
BEGIN
  IF v_tenant IS NULL THEN
    RAISE EXCEPTION 'app.tenant_id is not set';
  END IF;

  INSERT INTO core.audit_logs (
    id, tenant_id, user_id,
    action, entity_type, entity_id,
    old_values, new_values,
    ip_address, user_agent, metadata, created_at
  ) VALUES (
    gen_random_uuid(), v_tenant, v_user,
    p_action::text, p_entity_type, p_entity_id,
    p_old_values, p_new_values,
    p_ip, p_user_agent, '{}'::jsonb, now()
  )
  RETURNING id INTO v_id;

  RETURN v_id;
END
$$;

-- Grant execute to app_service
REVOKE ALL ON FUNCTION core.log_event FROM PUBLIC;
GRANT EXECUTE ON FUNCTION core.log_event TO app_service;
