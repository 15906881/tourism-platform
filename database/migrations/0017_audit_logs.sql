CREATE TABLE IF NOT EXISTS core.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  tenant_id UUID,
  user_id UUID,
  
  action TEXT NOT NULL,
  entity_type TEXT,
  entity_id UUID,
  
  old_values JSONB,
  new_values JSONB,
  
  ip_address INET,
  user_agent TEXT,
  metadata JSONB DEFAULT '{}',
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS audit_logs_tenant_id_idx ON core.audit_logs(tenant_id);
CREATE INDEX IF NOT EXISTS audit_logs_user_id_idx ON core.audit_logs(user_id);
CREATE INDEX IF NOT EXISTS audit_logs_action_idx ON core.audit_logs(action);
CREATE INDEX IF NOT EXISTS audit_logs_entity_idx ON core.audit_logs(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS audit_logs_created_at_idx ON core.audit_logs(created_at DESC);

GRANT SELECT, INSERT ON core.audit_logs TO app_user;
