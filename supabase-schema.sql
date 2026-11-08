-- =============================================================================
-- SIG² | SISTEMAS Y SOLUCIONES • INTEGRADO E INGENIERÍA • GEOGRÁFICO Y GESTIÓN
-- ESQUEMA DE BASE DE DATOS POSTGRESQL PARA EL AGENTE DE GOOGLE ADS CON IA
-- Soporta Supabase, PostgreSQL 14+, Row-Level Security (RLS) y Auditoría
-- =============================================================================

-- Habilitar extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -----------------------------------------------------------------------------
-- 1. TABLA: google_ads_accounts (Cuentas Publicitarias y Credenciales OAuth)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.google_ads_accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id VARCHAR(20) NOT NULL UNIQUE, -- ID de 10 dígitos sin guiones (ej. 1234567890)
    descriptive_name VARCHAR(255) NOT NULL,
    currency_code VARCHAR(10) DEFAULT 'COP',
    time_zone VARCHAR(50) DEFAULT 'America/Bogota',
    is_manager_account BOOLEAN DEFAULT FALSE,
    manager_customer_id VARCHAR(20),
    oauth_client_id VARCHAR(255),
    oauth_refresh_token TEXT, -- Encriptado en reposo
    oauth_access_token TEXT,
    token_expires_at TIMESTAMP WITH TIME ZONE,
    connection_status VARCHAR(50) DEFAULT 'DISCONNECTED', -- CONNECTED, DISCONNECTED, ERROR, REVOKED
    sync_frequency_minutes INT DEFAULT 60,
    last_synced_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 2. TABLA: budgets (Presupuestos Diarios y Mensuales con Hard Limits)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.budgets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    account_id UUID REFERENCES public.google_ads_accounts(id) ON DELETE CASCADE,
    google_budget_resource_id VARCHAR(100), -- Resource name en Google Ads API
    name VARCHAR(255) NOT NULL,
    amount_daily_micros BIGINT NOT NULL, -- Valor diario en micros (ej. 50,000 COP = 50,000,000,000 micros)
    amount_daily_display NUMERIC(15, 2) NOT NULL,
    monthly_cap_display NUMERIC(15, 2) NOT NULL,
    delivery_method VARCHAR(50) DEFAULT 'STANDARD', -- STANDARD o ACCELERATED
    is_hard_limit_enforced BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 3. TABLA: ad_campaigns (Campañas Publicitarias)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.ad_campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    account_id UUID REFERENCES public.google_ads_accounts(id) ON DELETE CASCADE,
    budget_id UUID REFERENCES public.budgets(id) ON DELETE SET NULL,
    google_campaign_id VARCHAR(100) UNIQUE,
    category_slug VARCHAR(100) NOT NULL, -- sst, ingenieria_geotecnia, ambiental, soluciones_digitales
    name VARCHAR(255) NOT NULL,
    advertising_channel_type VARCHAR(50) DEFAULT 'SEARCH', -- SEARCH, PERFORMANCE_MAX, DISPLAY
    status VARCHAR(50) DEFAULT 'PAUSED', -- ENABLED, PAUSED, REMOVED, DRAFT, UNDER_REVIEW
    serving_status VARCHAR(50) DEFAULT 'PENDING',
    bidding_strategy_type VARCHAR(100) DEFAULT 'TARGET_CPA', -- TARGET_CPA, MAXIMIZE_CONVERSIONS, MANUAL_CPC
    target_cpa_display NUMERIC(15, 2),
    geo_targeting_json JSONB DEFAULT '{"locations": ["Colombia", "Bogota", "Antioquia", "Santander", "Boyaca"]}',
    language_codes JSONB DEFAULT '["es"]',
    is_ai_managed BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 4. TABLA: ad_groups (Grupos de Anuncios Segmentados por Especialidad)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.ad_groups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    campaign_id UUID REFERENCES public.ad_campaigns(id) ON DELETE CASCADE,
    google_ad_group_id VARCHAR(100) UNIQUE,
    name VARCHAR(255) NOT NULL,
    service_slug VARCHAR(100) NOT NULL, -- ej. sondeos_spt, sg_sst, eia_licencias, desarrollo_web
    status VARCHAR(50) DEFAULT 'ENABLED',
    type VARCHAR(50) DEFAULT 'SEARCH_STANDARD',
    cpc_bid_micros BIGINT,
    cpc_bid_display NUMERIC(15, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 5. TABLA: ads (Anuncios RSA - Responsive Search Ads)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.ads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ad_group_id UUID REFERENCES public.ad_groups(id) ON DELETE CASCADE,
    google_ad_id VARCHAR(100) UNIQUE,
    type VARCHAR(50) DEFAULT 'RESPONSIVE_SEARCH_AD',
    status VARCHAR(50) DEFAULT 'ENABLED',
    headlines JSONB NOT NULL, -- Array de objetos: [{"text": "Estudio de Suelos NSR-10", "pinned": false}]
    descriptions JSONB NOT NULL, -- Array de objetos: [{"text": "Ensayos de laboratorio certificados...", "pinned": false}]
    path1 VARCHAR(15),
    path2 VARCHAR(15),
    final_urls JSONB NOT NULL DEFAULT '["https://sgonzalezm2404-ui.github.io/sig2ingenieria/#servicios"]',
    sitelinks_json JSONB,
    callouts_json JSONB,
    call_extension_phone VARCHAR(50) DEFAULT '+573127894040',
    ad_strength VARCHAR(50) DEFAULT 'EXCELLENT', -- POOR, AVERAGE, GOOD, EXCELLENT
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 6. TABLA: keywords (Palabras Clave Positivas y Negativas)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.keywords (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ad_group_id UUID REFERENCES public.ad_groups(id) ON DELETE CASCADE,
    google_criterion_id VARCHAR(100),
    keyword_text VARCHAR(255) NOT NULL,
    match_type VARCHAR(50) NOT NULL, -- EXACT, PHRASE, BROAD
    is_negative BOOLEAN DEFAULT FALSE,
    search_intent VARCHAR(50) DEFAULT 'TRANSACTIONAL', -- TRANSACTIONAL, COMMERCIAL, INFORMATIONAL
    quality_score INT DEFAULT 8,
    estimated_cpc_display NUMERIC(15, 2),
    potential_roi_tier VARCHAR(50) DEFAULT 'HIGH', -- HIGH, MEDIUM, LOW
    status VARCHAR(50) DEFAULT 'ENABLED',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 7. TABLA: conversions (Eventos de Conversión Publicitaria)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.conversions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    account_id UUID REFERENCES public.google_ads_accounts(id) ON DELETE CASCADE,
    google_conversion_action_id VARCHAR(100),
    name VARCHAR(255) NOT NULL, -- Formulario Web, WhatsApp Click, Llamada Telefónica, Solicitud Cotización
    category VARCHAR(50) DEFAULT 'LEAD', -- LEAD, SUBMIT_LEAD_FORM, CONTACT, PHONE_CALL
    value_display NUMERIC(15, 2) DEFAULT 0,
    count_type VARCHAR(50) DEFAULT 'ONE_PER_CLICK',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 8. TABLA: leads (Prospectos Comerciales Integrados al CRM con Atribución)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    service_requested VARCHAR(255) NOT NULL,
    category_slug VARCHAR(100),
    
    -- Atribución de Marketing y Google Ads
    campaign_id UUID REFERENCES public.ad_campaigns(id) ON DELETE SET NULL,
    campaign_name VARCHAR(255),
    keyword_id UUID REFERENCES public.keywords(id) ON DELETE SET NULL,
    keyword_text VARCHAR(255),
    utm_source VARCHAR(100) DEFAULT 'google',
    utm_medium VARCHAR(100) DEFAULT 'cpc',
    utm_campaign VARCHAR(255),
    utm_content VARCHAR(255),
    utm_term VARCHAR(255),
    gclid VARCHAR(255), -- Google Click Identifier
    
    -- Estado Comercial y Pipeline
    status VARCHAR(50) DEFAULT 'NUEVO_LEAD', -- NUEVO_LEAD, CALIFICADO, PROPUESTA_EMITIDA, EN_NEGOCIACION, GANADO, PERDIDO
    qualification_score INT DEFAULT 85,
    estimated_project_value NUMERIC(15, 2),
    assigned_technician VARCHAR(255) DEFAULT 'Dirección Comercial SIG²',
    notes TEXT,
    contact_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    closed_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 9. TABLA: ai_recommendations (Propuestas de Optimización del Agente IA)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.ai_recommendations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    campaign_id UUID REFERENCES public.ad_campaigns(id) ON DELETE CASCADE,
    type VARCHAR(100) NOT NULL, -- PAUSE_EXPENSIVE_KEYWORD, ADD_NEGATIVE_KEYWORD, ADJUST_BUDGET, RSA_COPY_REFRESH, EXPAND_GEO
    priority VARCHAR(50) DEFAULT 'MEDIUM', -- CRITICAL, HIGH, MEDIUM, LOW
    headline VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    impact_projection TEXT,
    suggested_changes JSONB NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING_APPROVAL', -- PENDING_APPROVAL, APPROVED, REJECTED, AUTO_EXECUTED
    requires_approval BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    resolved_at TIMESTAMP WITH TIME ZONE
);

-- -----------------------------------------------------------------------------
-- 10. TABLA: audit_logs (Historial Riguroso de Operaciones y Cambios)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    campaign_id UUID REFERENCES public.ad_campaigns(id) ON DELETE SET NULL,
    action_type VARCHAR(100) NOT NULL, -- CREATE_CAMPAIGN, UPDATE_BUDGET, PAUSE_KEYWORD, KILL_SWITCH_TRIGGERED
    triggered_by VARCHAR(50) NOT NULL, -- IA_AGENT_AUTONOMOUS, IA_AGENT_SUPERVISED, ADMIN_HUMAN
    actor_email VARCHAR(255) DEFAULT 'ingenierotecnicocyc@gmail.com',
    details_before JSONB,
    details_after JSONB,
    description TEXT NOT NULL,
    ip_address VARCHAR(50),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 11. TABLA: automation_rules (Reglas de Automatización y Límites de Seguridad)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.automation_rules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    security_mode VARCHAR(50) DEFAULT 'SUPERVISED', -- SUPERVISED (Modo 1), SEMIAUTO (Modo 2), AUTONOMOUS (Modo 3)
    max_daily_budget_cop NUMERIC(15, 2) DEFAULT 300000.00,
    max_monthly_budget_cop NUMERIC(15, 2) DEFAULT 7500000.00,
    max_budget_increase_percent NUMERIC(5, 2) DEFAULT 15.00, -- Máximo incremento permitido sin autorización humana
    cpa_ceiling_cop NUMERIC(15, 2) DEFAULT 80000.00, -- Costo por lead máximo aceptable
    auto_pause_zero_conversion_days INT DEFAULT 7,
    is_emergency_kill_switch_active BOOLEAN DEFAULT FALSE,
    updated_by VARCHAR(255) DEFAULT 'Admin SIG²',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 12. TABLA: approvals (Solicitudes de Aprobación Pendientes de Ejecución)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.approvals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    recommendation_id UUID REFERENCES public.ai_recommendations(id) ON DELETE CASCADE,
    campaign_id UUID REFERENCES public.ad_campaigns(id) ON DELETE CASCADE,
    operation_title VARCHAR(255) NOT NULL,
    operation_payload JSONB NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING', -- PENDING, APPROVED, REJECTED, EXPIRED
    reviewed_by VARCHAR(255),
    reviewed_at TIMESTAMP WITH TIME ZONE,
    comments TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 13. TABLA: error_logs (Registro de Errores de API y Fallas de Red)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.error_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    service VARCHAR(100) DEFAULT 'GOOGLE_ADS_API',
    error_code VARCHAR(100),
    error_message TEXT NOT NULL,
    request_endpoint VARCHAR(255),
    request_payload JSONB,
    retry_count INT DEFAULT 0,
    resolved BOOLEAN DEFAULT FALSE,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- ÍNDICES DE ALTO RENDIMIENTO
-- -----------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_campaigns_category ON public.ad_campaigns(category_slug);
CREATE INDEX IF NOT EXISTS idx_campaigns_status ON public.ad_campaigns(status);
CREATE INDEX IF NOT EXISTS idx_ad_groups_service ON public.ad_groups(service_slug);
CREATE INDEX IF NOT EXISTS idx_keywords_text ON public.keywords(keyword_text);
CREATE INDEX IF NOT EXISTS idx_leads_campaign ON public.leads(campaign_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_audit_timestamp ON public.audit_logs(timestamp DESC);

-- -----------------------------------------------------------------------------
-- POLÍTICAS DE SEGURIDAD ROW-LEVEL SECURITY (RLS)
-- -----------------------------------------------------------------------------
ALTER TABLE public.google_ads_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.budgets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ad_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ad_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keywords ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.approvals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.error_logs ENABLE ROW LEVEL SECURITY;

-- Política de lectura y escritura para usuarios autenticados autorizados
CREATE POLICY "Admin All Access" ON public.google_ads_accounts FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin All Access Campaigns" ON public.ad_campaigns FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin All Access Leads" ON public.leads FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin All Access Audit" ON public.audit_logs FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin All Access Rules" ON public.automation_rules FOR ALL TO authenticated USING (true);

-- Inserción de la Regla de Seguridad Maestra por Defecto (Modo 1: Supervisado)
INSERT INTO public.automation_rules (
    name, security_mode, max_daily_budget_cop, max_monthly_budget_cop, 
    max_budget_increase_percent, cpa_ceiling_cop, is_emergency_kill_switch_active
) VALUES (
    'Regla de Seguridad Operativa SIG²', 'SUPERVISED', 350000.00, 8500000.00, 
    15.00, 75000.00, false
) ON CONFLICT DO NOTHING;
