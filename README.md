# SIG² | Plataforma Web Corporativa de Alta Ingeniería & Soluciones Digitales

![SIG² Logo Oficial](assets/logo-oficial-sig2.jpg)

Bienvenido al repositorio oficial del código fuente de la plataforma web corporativa de **SIG²** (*Sistemas y Soluciones | Integrado e Ingeniería | Geográfico y Gestión | Logística*).

- 🌐 **Enlace Público GitHub Pages:** [https://sgonzalezm2404-ui.github.io/sig2ingenieria/](https://sgonzalezm2404-ui.github.io/sig2ingenieria/)
- 📱 **Canal Directo WhatsApp:** [+57 312 789 4040](https://wa.me/573127894040)
- ✉️ **Bandeja Oficial CRM & Auditoría:** `ingenierotecnicocyc@gmail.com`

---

## 1. Identidad Visual Oficial

- **Paleta Cromática Extraída de la Marca:**
  - **Azul SIG (`#06466C` / `#04324E`)**: Solidez, autoridad institucional e ingeniería de clase mundial.
  - **Verde Teal (`#168F8A` / `#106E6A`)**: Innovación, precisión tecnológica y sustentabilidad ambiental.
  - **Gris Grafito (`#66696B`) & Gris Claro (`#9A9C9D`)**: Soporte tipográfico, líneas y mallas técnicas.
  - **Blanco Puro (`#FFFFFF`)**: Claridad ejecutiva y sobriedad.
- **Tipografía Unificada:** Arial (`Arial, 'Helvetica Neue', Helvetica, sans-serif`), números tabulares (`tabular-nums`) e iconografía vectorial SVG de alta definición.
- **Cero Precios Monetarios:** Enfoque 100% en cotización personalizada, consultoría técnica y demostraciones en faena.

---

## 2. Módulos y Soluciones Integradas

### 1. Soluciones Digitales & Apps
- **SIG Campo (Software Geotécnico & Perforación PWA):**
  - Registro digital de sondeos mecánicos a rotación y percusión (homologado bajo NSR-10 Título H / ASTM D1586).
  - Cálculo inmediato de resistencia a la penetración $N_{medido} = N_2 + N_3$ y corrección energética $N_{60}$.
  - Estratigrafía interactiva, control de nivel freático y exportación CSV compatible con Geo5, Slide2 y Plaxis.
- **SIG Fleet & PESV (App de Monitoreo de Flotas & Res. 40595 de 2022):**
  - Telemetría satelital en tiempo real con conmutación de capas: Satelital HD, Topografía LiDAR y Geocercas de Faena.
  - Inspección preoperacional digital para eliminar planillas de papel y control de fatiga ADAS.
- **Dashboards BI & Telemetría IoT:** Supervisión en vivo de piezómetros e inclinómetros digitales para alerta temprana en faenas.

### 2. CRM Corporativo & Pipeline Comercial (`#crm-hub`)
- **4 Cuadrantes de Atracción:** Minería & Obras Civiles (Clientes), Socios Estratégicos & Consorcios, Contratistas de Faena, y Cumplimiento Legal PESV/Ambiental.
- **Formulario de Calificación Rápida de Leads:** Captura de datos técnicos con persistencia en `localStorage`.
- **Tablero Ejecutivo con 4 KPIs Tabulares en Vivo:** Total Contactos, Clientes Calificados, Socios & Alianzas, y Propuestas Emitidas.
- **Directorio Interactivo de Leads:** Filtro por perfiles y actualización de estado en tiempo real (*Nuevo Lead, Calificado, Propuesta Emitida, En Negociación, Ganado*).
- **Mensajería Segmentada Automática:** Plantillas para Clientes, Socios y Contratistas con despacho directo a WhatsApp.
- **Automatización de Master Excel & Correo:**
  - Descarga instantánea de archivo `SIG2_CRM_Master_Leads_YYYY-MM-DD.csv` con codificación UTF-8 BOM para Microsoft Excel.
  - Despacho consolidado automático hacia **`ingenierotecnicocyc@gmail.com`**.

### 3. Agente Autónomo de Google Ads con IA (`#marketing-ia-ads`)
- **Administración Centralizada de Publicidad Digital:**
  - Panel integral de 8 KPIs: Inversión, Clics, Impresiones, CTR, CPC, Conversiones, CPL y control presupuestal diario/mensual.
  - **4 Categorías Comerciales Independientes:**
    1. *Seguridad y Salud en el Trabajo & PESV:* SG-SST, Asesorías, Res. 40595, HSEQ y Capacitaciones.
    2. *Ingeniería y Geotecnia:* Estudios de suelos NSR-10, Sondeos SPT, Tomografía eléctrica, Refracción sísmica, Geología e Instrumentación.
    3. *Consultoría Ambiental:* Estudios de impacto ambiental (EIA), Hidrología, Hidrogeología, PMA/ICA y Gestión de Riesgos.
    4. *Soluciones Digitales:* Desarrollo web para ingeniería, Automatización con IA, CRM y Telemetría.
- **Laboratorio IA de Keyword Research & Generador RSA:**
  - Clasificación semántica de intención de búsqueda (*Transaccional, Comercial B2B*).
  - Generador de anuncios RSA con 15 títulos y 4 descripciones bajo límites oficiales de caracteres.
  - Previsualizador interactivo idéntico a la SERP de Google Search.
  - Base de palabras clave negativas para blindaje presupuestal.
- **Sistema de Seguridad Tripartito:**
  - *Modo 1: Supervisado* (Aprobación humana obligatoria antes de publicar en Google Ads).
  - *Modo 2: Semiautomático* (Publicación y optimización dentro de límites estrictos autorizados).
  - *Modo 3: Autónomo* (Gestión continua de pujas y reasignación de saldo).
  - *Parada de Emergencia (Kill-Switch):* Detención instantánea en 1 clic de todas las automatizaciones.
- **Trazabilidad y Atribución al CRM:**
  - Registro de prospectos con atribución publicitaria (*Campaña, Palabra Clave detonante, UTM Source/Medium/Campaign y GCLID*).
  - Exportación directa de Master de Atribución en formato Excel con codificación UTF-8 BOM.
- **Persistencia y Backend Seguro:**
  - Esquema relacional PostgreSQL con RLS en [`supabase-schema.sql`](supabase-schema.sql) (13 tablas relacionales).
  - Proxy seguro para Edge Functions en [`google-ads-edge-proxy.js`](google-ads-edge-proxy.js) protegiendo el Developer Token y Client Secret fuera del frontend.

### 4. Asistente Virtual Inteligente "Cadenero"
- Chatbot flotante especializado en captación y calificación de leads técnicos.
- Generación de expediente técnico CRM consolidado y transferencia directa a WhatsApp (+57 312 789 4040).

---

## 3. Despliegue en GitHub Pages

Este repositorio cuenta con un flujo de trabajo automatizado en `.github/workflows/deploy.yml` que compila y publica los activos estáticos (`index.html`, `styles.css`, `app.js`, `assets/`) en:
👉 **`https://sgonzalezm2404-ui.github.io/sig2ingenieria/`**

---

© 2026 SIG² Sistemas e Ingeniería. Todos los derechos reservados.
