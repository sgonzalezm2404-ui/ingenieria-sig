-- =============================================================================
-- CONSULTORA AI — ESQUEMA RELACIONAL POSTGRESQL (21 TABLAS)
-- Departamento digital autónomo de marketing, prospección y ventas B2B
-- Compatible con Supabase, PostgreSQL 14+, Row-Level Security (RLS) y Triggers
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -----------------------------------------------------------------------------
-- 1. TABLA: organizations (Firmas de Consultoría / Tenants)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    legal_tax_id VARCHAR(50), -- NIT / RUT
    country VARCHAR(100) DEFAULT 'Colombia',
    currency VARCHAR(10) DEFAULT 'COP',
    timezone VARCHAR(50) DEFAULT 'America/Bogota',
    website VARCHAR(255) DEFAULT 'https://sig2ingenieria.github.io/ingenieria-sig/',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 2. TABLA: users (Usuarios del Sistema, Roles y Permisos)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'CONSULTANT', -- SUPER_ADMIN, COMMERCIAL_DIRECTOR, CONSULTANT, CONTENT_OPERATOR
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 3. TABLA: business_units (Las 4 Unidades de Negocio Independientes)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.business_units (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
    slug VARCHAR(100) NOT NULL UNIQUE, -- geotecnia, sst_hseq, ambiental, transformacion_digital
    name VARCHAR(255) NOT NULL,
    description TEXT,
    target_audience TEXT,
    monthly_budget_cop NUMERIC(15, 2) DEFAULT 2500000.00,
    daily_budget_cop NUMERIC(15, 2) DEFAULT 80000.00,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 4. TABLA: services (Catálogo Especializado por Unidad de Negocio)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_unit_id UUID REFERENCES public.business_units(id) ON DELETE CASCADE,
    slug VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    technical_deliverables TEXT,
    applicable_regulations TEXT, -- ej. NSR-10, Dec. 1072, Res. 40595, ANLA
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 5. TABLA: agents (Los 7 Agentes Lógicos de Inteligencia Artificial)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.agents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
    code VARCHAR(50) NOT NULL UNIQUE, -- AGENT_1_MARKET, AGENT_2_PROSPECT, AGENT_3_STRATEGY, AGENT_4_CONTENT, AGENT_5_SOCIAL, AGENT_6_ADS, AGENT_7_SALES
    name VARCHAR(255) NOT NULL,
    description TEXT,
    model_name VARCHAR(100) DEFAULT 'gpt-4o',
    system_prompt TEXT NOT NULL,
    autonomy_level VARCHAR(50) DEFAULT 'SUPERVISED', -- SUPERVISED, SEMIAUTO, AUTONOMOUS
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 6. TABLA: agent_runs (Ejecuciones y Trazabilidad de Agentes IA)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.agent_runs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
    business_unit_id UUID REFERENCES public.business_units(id) ON DELETE SET NULL,
    trigger_type VARCHAR(50) NOT NULL, -- CRON_SCHEDULED, USER_MANUAL, WEBHOOK_N8N
    input_payload JSONB,
    output_payload JSONB,
    tokens_consumed INT DEFAULT 0,
    status VARCHAR(50) DEFAULT 'COMPLETED', -- RUNNING, COMPLETED, FAILED, WAITING_APPROVAL
    error_message TEXT,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    finished_at TIMESTAMP WITH TIME ZONE
);

-- -----------------------------------------------------------------------------
-- 7. TABLA: companies (Empresas Investigadas y Prospectadas B2B)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
    business_unit_id UUID REFERENCES public.business_units(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    tax_id VARCHAR(50), -- NIT si está público
    sector VARCHAR(100) NOT NULL,
    website VARCHAR(255),
    city VARCHAR(100) DEFAULT 'Colombia',
    address TEXT,
    public_email VARCHAR(255),
    public_phone VARCHAR(50),
    data_source VARCHAR(100) NOT NULL, -- REGISTRO_MERCANTIL_PUBLICO, RUES_PUBLICO, SITIO_WEB_OFICIAL, LINKEDIN_CORP
    opportunity_level VARCHAR(50) DEFAULT 'ALTA', -- ALTA, MEDIA, BAJA
    detected_need TEXT,
    verification_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 8. TABLA: contacts (Personas de Contacto B2B Públicas)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    full_name VARCHAR(255) NOT NULL,
    job_title VARCHAR(255), -- ej. Director de Proyectos, Jefe HSEQ, Gerente de Operaciones
    email VARCHAR(255),
    phone VARCHAR(50),
    linkedin_url VARCHAR(255),
    is_primary BOOLEAN DEFAULT FALSE,
    habeas_data_consent BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 9. TABLA: leads (Prospectos Cualificados & Trazabilidad de Origen)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    contact_id UUID REFERENCES public.contacts(id) ON DELETE SET NULL,
    business_unit_id UUID REFERENCES public.business_units(id) ON DELETE CASCADE,
    service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
    source_channel VARCHAR(50) NOT NULL, -- PROSPECCION_IA, GOOGLE_ADS, META_ADS, LINKEDIN_ORGANIC, FORMULARIO_WEB, WHATSAPP_DIRECTO
    qualification_score INT DEFAULT 85,
    qualification_notes TEXT,
    assigned_user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 10. TABLA: opportunities (Pipeline Comercial de 10 Etapas)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.opportunities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    stage VARCHAR(50) NOT NULL DEFAULT 'EMPRESA_IDENTIFICADA',
    -- 10 Etapas Oficiales:
    -- EMPRESA_IDENTIFICADA, PROSPECTO_INVESTIGADO, CONTACTO_PENDIENTE_APROBACION,
    -- CONTACTADO, INTERESADO, REUNION_AGENDADA, COTIZACION_ENVIADA, EN_NEGOCIACION,
    -- CLIENTE_GANADO, PERDIDO
    estimated_value_cop NUMERIC(15, 2),
    probability_percent INT DEFAULT 20,
    expected_closing_date DATE,
    lost_reason TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 11. TABLA: campaigns (Campañas de Marketing & Publicidad)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_unit_id UUID REFERENCES public.business_units(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- GOOGLE_SEARCH, META_LEAD_GEN, LINKEDIN_B2B, EMAIL_NURTURING
    status VARCHAR(50) DEFAULT 'DRAFT', -- DRAFT, UNDER_REVIEW, APPROVED, ACTIVE, PAUSED, COMPLETED
    daily_budget_cop NUMERIC(15, 2) NOT NULL,
    total_budget_cop NUMERIC(15, 2),
    target_audience JSONB,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 12. TABLA: advertisements (Piezas Publicitarias y Anuncios)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.advertisements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    campaign_id UUID REFERENCES public.campaigns(id) ON DELETE CASCADE,
    headline VARCHAR(255) NOT NULL,
    body_text TEXT NOT NULL,
    media_url TEXT,
    call_to_action VARCHAR(50) DEFAULT 'CONTACTAR_INGENIERO',
    target_url VARCHAR(255) NOT NULL,
    platform_ad_id VARCHAR(100),
    status VARCHAR(50) DEFAULT 'DRAFT',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 13. TABLA: social_accounts (Cuentas Oficiales de Redes Sociales)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.social_accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
    platform VARCHAR(50) NOT NULL, -- LINKEDIN, INSTAGRAM, FACEBOOK
    account_name VARCHAR(255) NOT NULL,
    platform_account_id VARCHAR(100) NOT NULL,
    access_token_encrypted TEXT,
    token_expires_at TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 14. TABLA: social_posts (Publicaciones y Calendario Editorial)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.social_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_unit_id UUID REFERENCES public.business_units(id) ON DELETE CASCADE,
    social_account_id UUID REFERENCES public.social_accounts(id) ON DELETE CASCADE,
    post_format VARCHAR(50) NOT NULL, -- ARTICULO, CARRUSEL, POST_IMAGEN, GUION_VIDEO
    content_text TEXT NOT NULL,
    hashtags TEXT,
    media_urls JSONB,
    scheduled_for TIMESTAMP WITH TIME ZONE,
    published_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(50) DEFAULT 'BORRADOR', -- BORRADOR, EN_REVISION, APROBADO, PROGRAMADO, PUBLICADO, RECHAZADO, ERROR
    platform_post_id VARCHAR(100),
    engagement_metrics JSONB DEFAULT '{"likes": 0, "comments": 0, "shares": 0, "clicks": 0}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 15. TABLA: content_assets (Activos Multimedia y Material Comercial)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.content_assets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_unit_id UUID REFERENCES public.business_units(id) ON DELETE SET NULL,
    asset_name VARCHAR(255) NOT NULL,
    asset_type VARCHAR(50) NOT NULL, -- IMAGE_JPG, VECTOR_SVG, PDF_CASE_STUDY, VIDEO_SCRIPT
    storage_path TEXT NOT NULL,
    file_size_bytes BIGINT,
    generated_by_ai BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 16. TABLA: approval_requests (Centro de Aprobaciones Human-in-the-Loop)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.approval_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
    item_type VARCHAR(50) NOT NULL, -- SOCIAL_POST, AD_CAMPAIGN, B2B_OUTREACH, BUDGET_INCREASE
    item_id UUID NOT NULL,
    business_unit_id UUID REFERENCES public.business_units(id) ON DELETE SET NULL,
    requested_by_agent_code VARCHAR(50) NOT NULL,
    proposed_content JSONB NOT NULL,
    status VARCHAR(50) DEFAULT 'EN_REVISION', -- BORRADOR, EN_REVISION, APROBADO, RECHAZADO
    reviewed_by_user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMP WITH TIME ZONE,
    review_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 17. TABLA: marketing_metrics (Métricas Agregadas por Fecha y Unidad)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.marketing_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_unit_id UUID REFERENCES public.business_units(id) ON DELETE CASCADE,
    metric_date DATE NOT NULL,
    companies_investigated INT DEFAULT 0,
    new_leads INT DEFAULT 0,
    qualified_leads INT DEFAULT 0,
    contacts_made INT DEFAULT 0,
    responses_received INT DEFAULT 0,
    meetings_scheduled INT DEFAULT 0,
    quotes_sent INT DEFAULT 0,
    clients_won INT DEFAULT 0,
    ad_spend_cop NUMERIC(15, 2) DEFAULT 0,
    cost_per_lead_cop NUMERIC(15, 2) DEFAULT 0,
    conversion_rate_pct NUMERIC(5, 2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(business_unit_id, metric_date)
);

-- -----------------------------------------------------------------------------
-- 18. TABLA: automation_workflows (Los 12 Workflows de n8n)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.automation_workflows (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workflow_code VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    trigger_frequency VARCHAR(50) NOT NULL, -- DAILY, HOURLY, WEEKLY, WEBHOOK_EVENT
    n8n_webhook_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    last_run_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 19. TABLA: automation_logs (Logs de Ejecución, Reintentos y Errores n8n)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.automation_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workflow_id UUID REFERENCES public.automation_workflows(id) ON DELETE CASCADE,
    execution_status VARCHAR(50) NOT NULL, -- SUCCESS, WARNING, FAILED, RETRYING
    items_processed INT DEFAULT 0,
    error_details TEXT,
    retry_count INT DEFAULT 0,
    executed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 20. TABLA: integrations (Conexiones de Servicios Externos & Tokens)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.integrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
    service_name VARCHAR(100) NOT NULL UNIQUE, -- OPENAI, GOOGLE_ADS, META, LINKEDIN, N8N, SUPABASE
    is_connected BOOLEAN DEFAULT FALSE,
    connection_mode VARCHAR(50) DEFAULT 'SANDBOX', -- SANDBOX, PRODUCTION
    encrypted_credentials JSONB,
    last_health_check TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 21. TABLA: audit_logs (Auditoría Forense de Toda la Plataforma)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE,
    actor_type VARCHAR(50) NOT NULL, -- AI_AGENT, HUMAN_USER, N8N_WORKFLOW, SYSTEM
    actor_id VARCHAR(255) NOT NULL,
    action VARCHAR(100) NOT NULL,
    target_table VARCHAR(100),
    target_id UUID,
    details_before JSONB,
    details_after JSONB,
    ip_address VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- ÍNDICES DE ALTO RENDIMIENTO
-- -----------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_companies_unit ON public.companies(business_unit_id);
CREATE INDEX IF NOT EXISTS idx_companies_opp ON public.companies(opportunity_level);
CREATE INDEX IF NOT EXISTS idx_opportunities_stage ON public.opportunities(stage);
CREATE INDEX IF NOT EXISTS idx_approval_status ON public.approval_requests(status);
CREATE INDEX IF NOT EXISTS idx_social_posts_status ON public.social_posts(status);
CREATE INDEX IF NOT EXISTS idx_marketing_metrics_date ON public.marketing_metrics(metric_date DESC);
CREATE INDEX IF NOT EXISTS idx_audit_created ON public.audit_logs(created_at DESC);

-- -----------------------------------------------------------------------------
-- HABILITACIÓN DE SEGURIDAD ROW-LEVEL SECURITY (RLS)
-- -----------------------------------------------------------------------------
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agent_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.advertisements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.approval_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marketing_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Políticas Maestras de Acceso para Usuarios Autenticados
CREATE POLICY "Auth Users Access Organizations" ON public.organizations FOR ALL TO authenticated USING (true);
CREATE POLICY "Auth Users Access Units" ON public.business_units FOR ALL TO authenticated USING (true);
CREATE POLICY "Auth Users Access Companies" ON public.companies FOR ALL TO authenticated USING (true);
CREATE POLICY "Auth Users Access Opportunities" ON public.opportunities FOR ALL TO authenticated USING (true);
CREATE POLICY "Auth Users Access Approvals" ON public.approval_requests FOR ALL TO authenticated USING (true);
CREATE POLICY "Auth Users Access Metrics" ON public.marketing_metrics FOR ALL TO authenticated USING (true);
CREATE POLICY "Auth Users Access Workflows" ON public.automation_workflows FOR ALL TO authenticated USING (true);
CREATE POLICY "Auth Users Access Audit" ON public.audit_logs FOR ALL TO authenticated USING (true);
