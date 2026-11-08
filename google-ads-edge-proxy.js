/**
 * =============================================================================
 * SIG² | SISTEMAS Y SOLUCIONES • INTEGRADO E INGENIERÍA • GEOGRÁFICO Y GESTIÓN
 * PROXY DE ALTA SEGURIDAD PARA GOOGLE ADS API (EDGE FUNCTION / SERVERLESS)
 * =============================================================================
 * Este módulo se ejecuta en el servidor seguro (Supabase Edge Function / Node.js)
 * y NUNCA expone Developer Tokens ni Client Secrets en el frontend de GitHub Pages.
 */

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_ADS_API_BASE = 'https://googleads.googleapis.com/v17';

// Variables de entorno cargadas de forma segura en el servidor
const ENV = {
  DEVELOPER_TOKEN: process.env.GOOGLE_ADS_DEVELOPER_TOKEN || '',
  CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
  CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
  REFRESH_TOKEN: process.env.GOOGLE_ADS_REFRESH_TOKEN || '',
  LOGIN_CUSTOMER_ID: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID || '',
  DEFAULT_CUSTOMER_ID: process.env.GOOGLE_ADS_CUSTOMER_ID || '',
  HARD_DAILY_LIMIT_COP: parseFloat(process.env.HARD_DAILY_LIMIT_COP || '500000')
};

/**
 * Obtiene un Access Token fresco mediante el Refresh Token OAuth 2.0
 */
async function getFreshAccessToken() {
  if (!ENV.CLIENT_ID || !ENV.CLIENT_SECRET || !ENV.REFRESH_TOKEN) {
    throw new Error('CONFIG_MISSING: Faltan credenciales OAuth 2.0 en el servidor.');
  }

  const params = new URLSearchParams({
    client_id: ENV.CLIENT_ID,
    client_secret: ENV.CLIENT_SECRET,
    refresh_token: ENV.REFRESH_TOKEN,
    grant_type: 'refresh_token'
  });

  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OAUTH_REFRESH_FAILED: ${response.status} - ${errorText}`);
  }

  const tokenData = await response.json();
  return tokenData.access_token;
}

/**
 * Ejecuta una consulta GAQL (Google Ads Query Language)
 */
async function executeGoogleAdsQuery(customerId, gaqlQuery) {
  const cleanCustomerId = (customerId || ENV.DEFAULT_CUSTOMER_ID).replace(/-/g, '');
  const accessToken = await getFreshAccessToken();

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'developer-token': ENV.DEVELOPER_TOKEN,
    'Content-Type': 'application/json'
  };

  if (ENV.LOGIN_CUSTOMER_ID) {
    headers['login-customer-id'] = ENV.LOGIN_CUSTOMER_ID.replace(/-/g, '');
  }

  const endpoint = `${GOOGLE_ADS_API_BASE}/customers/${cleanCustomerId}/googleAds:searchStream`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query: gaqlQuery })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`GOOGLE_ADS_API_ERROR: ${response.status} - ${err}`);
  }

  return await response.json();
}

/**
 * Validador estricto de seguridad presupuestal antes de mutaciones
 */
function validateBudgetSafety(amountDailyCop) {
  if (amountDailyCop > ENV.HARD_DAILY_LIMIT_COP) {
    throw new Error(`SECURITY_BREACH: El presupuesto diario solicitado ($${amountDailyCop} COP) excede el límite máximo inviolable ($${ENV.HARD_DAILY_LIMIT_COP} COP).`);
  }
  return true;
}

/**
 * Handler HTTP principal para Edge Function
 */
export async function handleRequest(request) {
  // Manejo de CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-sig-api-key'
      }
    });
  }

  try {
    const url = new URL(request.url);
    const action = url.pathname.split('/').pop();

    if (action === 'status') {
      const isConfigured = Boolean(ENV.DEVELOPER_TOKEN && ENV.CLIENT_ID && ENV.REFRESH_TOKEN);
      return new Response(JSON.stringify({
        status: isConfigured ? 'READY' : 'CREDENTIALS_REQUIRED',
        customerId: ENV.DEFAULT_CUSTOMER_ID ? `***-***-${ENV.DEFAULT_CUSTOMER_ID.slice(-4)}` : 'NO_CONFIGURADO',
        hardDailyLimitCop: ENV.HARD_DAILY_LIMIT_COP,
        timestamp: new Date().toISOString()
      }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    if (action === 'query-campaigns') {
      const gaql = `
        SELECT 
          campaign.id, 
          campaign.name, 
          campaign.status, 
          campaign.advertising_channel_type,
          campaign_budget.amount_micros,
          metrics.clicks,
          metrics.impressions,
          metrics.ctr,
          metrics.average_cpc,
          metrics.cost_micros,
          metrics.conversions
        FROM campaign 
        WHERE campaign.status != 'REMOVED'
        ORDER BY metrics.cost_micros DESC
      `;
      const data = await executeGoogleAdsQuery(ENV.DEFAULT_CUSTOMER_ID, gaql);
      return new Response(JSON.stringify({ success: true, data }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    return new Response(JSON.stringify({ error: 'Ruta no encontrada' }), { status: 404 });

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Error interno del servidor'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}
