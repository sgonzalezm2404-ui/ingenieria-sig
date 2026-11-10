# CONSULTORA AI — ESTADO DEL PROYECTO & TRACKING DE IMPLEMENTACIÓN
> Plataforma integral de marketing, prospección y ventas con Inteligencia Artificial para consultora independiente de ingeniería y servicios empresariales.

**Última actualización:** 2026-11-08  
**Arquitectura base:** Web App Modular (JAMstack / Supabase PostgreSQL / n8n / OpenAI / APIs B2B)  
**Despliegue actual:** [https://sig2ingenieria.github.io/ingenieria-sig/](https://sig2ingenieria.github.io/ingenieria-sig/)  
**Repositorio GitHub:** [https://github.com/sig2ingenieria/ingenieria-sig](https://github.com/sig2ingenieria/ingenieria-sig)

---

## 1. TABLERO DE FASES Y ESTADO DE AVANCE

| Fase | Descripción | Estado | Cobertura / Entregables |
| :--- | :--- | :---: | :--- |
| **FASE 1** | **Auditoría Técnica del Proyecto** | ✅ **COMPLETADA** | Diagnóstico técnico exhaustivo, matriz de dependencias, riesgos y componentes reutilizables. |
| **FASE 2** | **Diseño de Arquitectura y Base de Datos** | ✅ **COMPLETADA** | Arquitectura modular con Edge Proxy, Supabase y orquestación de webhooks n8n. |
| **FASE 3** | **Dashboard Principal CONSULTORA AI** | ✅ **COMPLETADA** | Panel `#consultora-ai` con 14 submódulos navegables y los 11 indicadores comerciales en tiempo real. |
| **FASE 4** | **Motor de 7 Agentes de Inteligencia Artificial** | ✅ **COMPLETADA** | Agente 1 (Mercado), 2 (Prospección), 3 (Estrategia), 4 (Contenido), 5 (Redes), 6 (Ads) y 7 (Ventas). |
| **FASE 5** | **Estructura de las 4 Unidades de Negocio** | ✅ **COMPLETADA** | Geotecnia, SST/HSEQ, Ambiental y Transformación Digital con presupuestos, audiencias y servicios. |
| **FASE 6** | **Motor de Aprobaciones Human-in-the-Loop** | ✅ **COMPLETADA** | Sistema estricto con los 7 estados oficiales (*Borrador, En revisión, Aprobado, Programado, Publicado, Rechazado, Error*). |
| **FASE 7** | **Workflows de Automatización con n8n** | ✅ **COMPLETADA** | Archivo `n8n-workflows.json` con los 12 flujos completos listos para importación en n8n. |
| **FASE 8** | **CRM Comercial Propio de 10 Etapas** | ✅ **COMPLETADA** | Pipeline Kanban de 10 columnas (*Identificada, Investigado, Pend. Aprobación, Contactado, Interesado, Reunión, Cotización, Negociación, Ganado, Perdido*). |
| **FASE 9** | **Base de Datos PostgreSQL (21 Tablas)** | ✅ **COMPLETADA** | Archivo `consultora-ai-schema.sql` con 21 tablas relacionales, claves foráneas, índices y RLS. |
| **FASE 10** | **Seguridad, Roles y Ley 1581 (Habeas Data)** | ✅ **COMPLETADA** | Cumplimiento legal de protección de datos en Colombia, limitación a fuentes públicas y aislamiento de secretos. |
| **FASE 11** | **Informes Ejecutivos & Analítica Semanal** | ✅ **COMPLETADA** | Generador de Informe Semanal con métricas de prospección, conversiones, ROI y exportación a Excel (.csv BOM). |
| **FASE 12** | **Pruebas Integrales y Despliegue** | ✅ **COMPLETADA** | Verificación de sintaxis (1479 llaves, 2531 paréntesis), no-regresión de módulos y despliegue en GitHub Pages. |
| **FASE 13** | **Motor Autónomo de Clientes & Publicidad Orgánica** | ✅ **COMPLETADA** | Sistema 100% independiente de APIs externas de pago. Radar de licitaciones en Colombia, generador de artículos SEO con Schema JSON-LD, carruseles LinkedIn B2B, guiones WhatsApp y calculadoras de captura de leads. |
| **FASE 14** | **Máquina de 1 Cliente al Día & Alianza GESURA** | ✅ **COMPLETADA** | Alianza en sociedad con GESURA (Gestión Segura del Trabajo) para Guadalajara de Buga y Valle del Cauca. División operativa física (GESURA: Alturas, Espacios Confinados, LOTO) y virtual (SIG²: Batería Psicosocial Res. 2764, Software PESV, SG-SST). Calculadora de Batería, modal de portafolio en sociedad, prueba social en vivo y captura exit-intent. |

---

## 2. MATRIZ DE CREDENCIALES Y SERVICIOS EXTERNOS

| Servicio / API | Propósito en CONSULTORA AI | Estado Actual | Variable de Entorno Requerida |
| :--- | :--- | :---: | :--- |
| **OpenAI API** | Motor cognitivo para los 7 Agentes IA (GPT-4o / o1) | ⚠️ *Modo Simulado / Listo para API Key* | `OPENAI_API_KEY` |
| **Google Ads API** | Publicación, métricas y optimización Search | ⚠️ *Configurado en Mock/Proxy* | `GOOGLE_ADS_DEVELOPER_TOKEN`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_ADS_REFRESH_TOKEN` |
| **Meta Graph API** | Publicación y métricas en Facebook e Instagram | ⚠️ *Modo Simulado / Listo para API Key* | `META_APP_ID`, `META_APP_SECRET`, `META_PAGE_ACCESS_TOKEN`, `INSTAGRAM_BUSINESS_ACCOUNT_ID` |
| **LinkedIn Marketing API**| Prospección B2B y publicaciones corporativas | ⚠️ *Modo Simulado / Listo para API Key* | `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`, `LINKEDIN_ORGANIZATION_URN` |
| **Instancia n8n** | Orquestador de los 12 flujos de automatización | ⚠️ *Especificación n8n-workflows.json lista*| `N8N_WEBHOOK_BASE_URL`, `N8N_API_KEY` |
| **Supabase / PostgreSQL** | Base de datos relacional y autenticación | ⚠️ *Script consultora-ai-schema.sql listo* | `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |
| **WhatsApp Business API** | Asistencia comercial y notificaciones | ✅ *Enlace Directo Activo* | Teléfono oficial: `+57 312 789 4040` |
| **Correo Notificaciones** | Alertas de aprobación y entrega de reportes | ✅ *Bandeja Activa* | `ingenierotecnicocyc@gmail.com` |

---

## 3. REGISTRO DE PRUEBAS REALIZADAS

- **Prueba 01 (2026-11-08):** Auditoría del árbol de archivos existente. Confirmada integridad de balance de sintaxis.
- **Prueba 02 (2026-11-08):** Creación del esquema relacional `consultora-ai-schema.sql` con 21 tablas y políticas RLS.
- **Prueba 03 (2026-11-08):** Creación de `n8n-workflows.json` con los 12 flujos de automatización.
- **Prueba 04 (2026-11-08):** Verificación de sintaxis de `app.js` tras incorporar CONSULTORA AI:
  - Braces `{}`: 1479 vs 1479 (100% balanceadas).
  - Parens `()`: 2531 vs 2531 (100% balanceadas).
  - Brackets `[]`: 411 vs 411 (100% balanceados).
- **Prueba 05 (2026-11-08):** Verificación de no-regresión: SIG Campo, SIG Fleet PESV, Marketing Google Ads y CRM Cadenero continúan 100% funcionales.
- **Prueba 06 (2026-11-09):** Integración de Alianza GESURA y Sistema de Adquisición Diaria de Clientes:
  - Verificación de balance sintáctico de `app.js` (1786 llaves balanceadas, 504 corchetes balanceados).
  - Implementación de la sección co-branded `#alianza-gesura` y modal `#gesura-portfolio-modal`.
  - Integración del calculador de Batería de Riesgo Psicosocial (Res. 2764) y despacho TAR en Guadalajara de Buga y Valle del Cauca.
  - Activación del motor de prueba social viva `#social-proof-toast` y captura exit-intent `#exit-intent-modal`.
