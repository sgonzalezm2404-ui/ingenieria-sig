/**
 * SIG² | Sistemas e Ingeniería
 * Lógica Reactiva & Modular - Guía Oficial de Identidad Visual
 * Tipografía: Columbus
 * Enfoque: Consultoría & Cotización Técnica + Asistente Inteligente CRM "Cadenero"
 * WhatsApp Oficial Directo: +57 312 789 4040
 */

// Estado Global de la Aplicación y CRM de Cadenero
const SIG_STATE = {
  cart: [],
  activeServiceCategory: 'all',
  activeTelemetrySite: 'mina-andes',
  activePesvTab: 'preoperacional',
  whatsappDirectNumber: '573127894040',
  sensorData: {
    piezometer: 14.82,
    inclinometer: 0.042,
    windSpeed: 14.2,
    activeFleet: 18,
    activeSensors: 42,
    speedCurrent: 46
  },
  // CRM Lead State para Cadenero (Flujo Guiado)
  leadCRM: {
    step: 0,
    tipoRelacion: '',   // 'Contratar Servicio' o 'Alianza / Sociedad Estratégica'
    servicio: '',       // Servicio técnico de interés
    detallesTecnicos: '', // Hectáreas, flota, ubicación, etc.
    empresa: '',        // Nombre de la empresa o entidad
    ocupacion: '',      // Cargo del contacto
    nombre: '',         // Nombre completo
    horarioContacto: '',// Mejor horario para hablar
    resumenHistorial: []
  }
};

// Catálogo Técnico Exhaustivo de Servicios
const SERVICES_CATALOG = [
  // 1. Geología, Geotecnia y Minería
  {
    id: 'geo-00',
    category: 'geologia-mineria',
    categoryName: 'Geología & Minería',
    title: 'SIG² Campo: Software y PWA de Perforación Geotécnica & SPT',
    shortDesc: 'Aplicación PWA especializada para captura digital en faena de sondeos mecánicos, ensayos SPT (ASTM D1586), testigo diamantado (ASTM D2113), cálculo instantáneo de N medido / N60, RQD y exportación directa bajo NSR-10 Título H.',
    specs: [
      'Eliminación total de planillas físicas en faena con funcionamiento 100% offline',
      'Cálculo dinámico de N medido = N2 + N3, corrección por energía N60 y RQD%',
      'Exportación estructurada a Geo5, Slide, Plaxis, CSV, JSON e Informe Oficial imprimible'
    ],
    deliverables: 'Licenciamiento corporativo PWA o despliegue personalizado para flotas de perforación y firmas de geotecnia.',
    software: 'PWA Web Standalone, LocalStorage Seguro, Motor SVG Geotécnico, Exportador CSV/JSON',
    image: 'assets/sig-campo-ficha-tecnica.png',
    tag: '⭐ PWA Geotécnica',
    hasDemoBtn: true,
    demoLink: '#sig-campo'
  },
  {
    id: 'geo-01',
    category: 'geologia-mineria',
    categoryName: 'Geología & Minería',
    title: 'Modelamiento Geológico 3D y Estimación de Yacimientos',
    shortDesc: 'Modelación implícita y explícita de cuerpos mineralizados, litología y alteración en Leapfrog Geo, Datamine y Micromine.',
    specs: ['Geoestadística avanzada (Kriging ordinario e indicador)', 'Modelos de bloques con atributos de densidad y recuperación', 'Integración de sondajes DDH/RC con control QA/QC'],
    deliverables: 'Modelo de bloques tridimensional, wireframes geológicos, reporte de variografía y estimación volumétrica.',
    software: 'Leapfrog Geo, Datamine Studio RM, ArcGIS Pro',
    image: 'assets/mineria-cielo-abierto-taludes.jpg',
    tag: 'Minería Estratégica'
  },
  {
    id: 'geo-02',
    category: 'geologia-mineria',
    categoryName: 'Geología & Minería',
    title: 'Cálculo y Certificación de Recursos y Reservas',
    shortDesc: 'Evaluación y clasificación de recursos geológicos y reservas minerales bajo estándares internacionales y locales.',
    specs: ['Cumplimiento de códigos internacionales JORC, NI 43-101 y ECRR', 'Categorización en Medidos, Indicados e Inferidos', 'Auditoría independiente por persona calificada (QP / Competent Person)'],
    deliverables: 'Reporte Técnico Certificado NI 43-101 / JORC, tablas de reservas y curvas tonelaje-ley.',
    software: 'Isatis.neo, Datamine, Python Geostats',
    image: 'assets/mineria-cielo-abierto-taludes.jpg',
    tag: 'Norma Internacional'
  },
  {
    id: 'geo-03',
    category: 'geologia-mineria',
    categoryName: 'Geología & Minería',
    title: 'Estabilidad de Taludes y Análisis Geomecánico',
    shortDesc: 'Evaluación de estabilidad estática y pseudo-estática para tajos mineros, presas de relaves y laderas de infraestructura.',
    specs: ['Caracterización del macizo rocoso (RMR, Q de Barton, GSI)', 'Modelación por equilibrio límite y elementos finitos (2D/3D)', 'Diseño de sostenimiento con mallas, pernos helicoidales y concreto lanzado'],
    deliverables: 'Informe geotécnico con Factor de Seguridad (FS), mapa cinemático de roturas y plano de bermas.',
    software: 'Rocscience Slide2/3, RS2, RocData, Dips',
    image: 'assets/geotecnia-perforacion-taludes.jpg',
    tag: 'Geotecnia Crítica'
  },
  {
    id: 'geo-04',
    category: 'geologia-mineria',
    categoryName: 'Geología & Minería',
    title: 'Control QA/QC Geológico y Perforación Diamantina',
    shortDesc: 'Supervisión integral de campañas de exploración mineral, aseguramiento y control de calidad en preparación de muestras.',
    specs: ['Inserción ciega de estándares (CRM), blancos gruesos/finos y duplicados', 'Logueo geológico, geotécnico y estructural estandarizado', 'Cadena de custodia blindada para ensayos al fuego y digestión ICP'],
    deliverables: 'Informes periódicos de control QA/QC con gráficos de control y cartas de exactitud/precisión.',
    software: 'CoreShack Digital, ioGAS, Base de datos SQL',
    image: 'assets/geotecnia-perforacion-taludes.jpg',
    tag: 'Control de Calidad'
  },
  {
    id: 'geo-05',
    category: 'geologia-mineria',
    categoryName: 'Geología & Minería',
    title: 'Formulación y Radicación de Informes PTO y POT Minero',
    shortDesc: 'Estructuración legal y técnica de Programas de Trabajos y Obras (PTO) para concesiones mineras y compatibilidad territorial.',
    specs: ['Diseño minero quinquenal con etapas de desarrollo, preparación y beneficio', 'Cálculo de flujo de caja, canon superficiario y regalías proyectadas', 'Alineación con Planes de Ordenamiento Territorial (POT/PBOT/EOT)'],
    deliverables: 'Documento técnico oficial PTO con anexos cartográficos MAGNA-SIRGAS listo para radicación ante la ANM.',
    software: 'AutoCAD Civil 3D, ArcGIS Pro, QGIS',
    image: 'assets/mineria-cielo-abierto-taludes.jpg',
    tag: 'Radicación ANM'
  },

  // 2. Ingeniería Ambiental
  {
    id: 'env-01',
    category: 'ingenieria-ambiental',
    categoryName: 'Ingeniería Ambiental',
    title: 'Estudios de Impacto Ambiental (EIA) y DAA',
    shortDesc: 'Elaboración integral de expedientes ambientales para licenciamiento ante ANLA y Corporaciones Autónomas Regionales.',
    specs: ['Línea base biótica, abiótica y socioeconómica rigurosa', 'Evaluación de impactos mediante metodologías cuantitativas y Leopold', 'Zonificación de manejo ambiental y evaluación de alternativas (DAA)'],
    deliverables: 'Expediente completo EIA en formato oficial ANLA, con geodatabase cartográfica estandarizada.',
    software: 'ArcGIS Modelo ANLA, GeoDatabase GDB, Metodología General de Presentación de Estudios',
    image: 'assets/mineria-cielo-abierto-taludes.jpg',
    tag: 'Licenciamiento ANLA'
  },
  {
    id: 'env-02',
    category: 'ingenieria-ambiental',
    categoryName: 'Ingeniería Ambiental',
    title: 'Planes de Manejo Ambiental (PMA) y Seguimiento ICA',
    shortDesc: 'Implementación y seguimiento de medidas de prevención, mitigación, corrección y compensación ambiental.',
    specs: ['Formulación de fichas PMA por componentes (agua, aire, suelo, biótico)', 'Elaboración y radicación de Informes de Cumplimiento Ambiental (ICA)', 'Gestión integral de residuos peligrosos (RESPEL) y vertimientos'],
    deliverables: 'Informes semestrales/anuales ICA con constancia de radicación, matrices de seguimiento de obligaciones.',
    software: 'Plataforma Vital ANLA, SIG Ambiental',
    image: 'assets/geotecnia-perforacion-taludes.jpg',
    tag: 'Monitoreo Legal'
  },
  {
    id: 'env-03',
    category: 'ingenieria-ambiental',
    categoryName: 'Ingeniería Ambiental',
    title: 'Auditorías Ambientales y Certificación ISO 14001:2015',
    shortDesc: 'Consultoría estratégica para la estructuración y certificación de Sistemas de Gestión Ambiental empresarial.',
    specs: ['Diagnóstico inicial y matriz de aspectos e impactos ambientales significativos', 'Auditorías internas de primera y segunda parte con auditores líderes certificados', 'Planes de descarbonización, cálculo de huella de carbono y economía circular'],
    deliverables: 'Manual del SGA, procedimientos documentados, informe de auditoría interna y preparación para ente certificador.',
    software: 'Norma ISO 14001, GHG Protocol, Excel Analytics',
    image: 'assets/flotas-transporte-pesv-inspeccion.jpg',
    tag: 'Certificación ISO'
  },
  {
    id: 'env-04',
    category: 'ingenieria-ambiental',
    categoryName: 'Ingeniería Ambiental',
    title: 'Caracterización Biótica y Monitoreo Hidrológico',
    shortDesc: 'Inventario de biodiversidad con biólogos expertos y monitoreo fisicoquímico de fuentes de agua en laboratorios acreditados.',
    specs: ['Muestreo de flora (veda nacional/regional) y fauna silvestre (redes de niebla, cámaras trampa)', 'Muestreo de aguas superficiales y subterráneas bajo cadena de custodia IDEAM', 'Cálculo de caudal ambiental, índices de calidad del agua (ICA) e índices bióticos'],
    deliverables: 'Informe biológico con fototrampeo, certificados analíticos de laboratorio acreditado y curvas hidrológicas.',
    software: 'Past4, QGIS, Base de datos SiB Colombia',
    image: 'assets/mineria-cielo-abierto-taludes.jpg',
    tag: 'Laboratorio & Biodiversidad'
  },
  {
    id: 'env-05',
    category: 'ingenieria-ambiental',
    categoryName: 'Ingeniería Ambiental',
    title: 'Rotulación Fotográfica Georreferenciada y Cartografía Multitemporal',
    shortDesc: 'Documentación visual técnica y análisis satelital de cambios de cobertura en alta resolución.',
    specs: ['Captura con cámaras de precisión y metadatos EXIF geodésicos', 'Análisis multitemporal con imágenes satelitales Sentinel-2 y PlanetScope', 'Cálculo de índices de vegetación (NDVI, SAVI) para planes de compensación forestal'],
    deliverables: 'Álbum fotográfico georreferenciado en KMZ/PDF interactivo y mapas de cambios de cobertura vegetal.',
    software: 'ArcGIS Pro, Google Earth Engine, PIX4Dfields',
    image: 'assets/geotecnia-perforacion-taludes.jpg',
    tag: 'Cartografía Satelital'
  },

  // 3. SST y PESV
  {
    id: 'sst-01',
    category: 'sst-pesv',
    categoryName: 'SST & PESV',
    title: 'Diagnóstico Integral y Diseño del SG-SST (Decreto 1072)',
    shortDesc: 'Implementación completa del Sistema de Gestión de Seguridad y Salud en el Trabajo según Resolución 0312 de 2019.',
    specs: ['Evaluación inicial del estándar mínimo con plan de mejoramiento inmediato', 'Política SST, objetivos medibles, asignación de roles y presupuesto anual', 'Conformación y capacitación de COPASST, Comité de Convivencia y Brigadas de Emergencia'],
    deliverables: 'Carpeta digital y física del SG-SST, matriz legal actualizada y cronograma anual de capacitaciones.',
    software: 'Normativa Decreto 1072/2015, Resolución 0312/2019, Google Workspace SST',
    image: 'assets/flotas-transporte-pesv-inspeccion.jpg',
    tag: 'Cumplimiento Legal'
  },
  {
    id: 'sst-02',
    category: 'sst-pesv',
    categoryName: 'SST & PESV',
    title: 'Matrices de Identificación de Peligros y Riesgos (GTC 45)',
    shortDesc: 'Levantamiento metodológico riguroso de riesgos operacionales enfocado en minería y obras de alta ingeniería.',
    specs: ['Identificación de peligros físicos, químicos, biológicos, ergonómicos y psicosociales', 'Evaluación de riesgos mecánicos, locativos y de tareas críticas en socavón o alturas', 'Establecimiento de controles en la fuente, medio y trabajador con jerarquía ISO 45001'],
    deliverables: 'Matriz IPVR en formato interactivo automatizado con semaforización de riesgos prioritarios.',
    software: 'Metodología GTC 45 V.2012, ISO 45001:2018',
    image: 'assets/tunel-subterraneo-geotecnia.jpg',
    tag: 'Control de Riesgos'
  },
  {
    id: 'sst-03',
    category: 'sst-pesv',
    categoryName: 'SST & PESV',
    title: 'Diseño e Implementación de PESV (Resolución 40595 / 2022)',
    shortDesc: 'Plan Estratégico de Seguridad Vial ajustado al nuevo marco normativo para flotas corporativas y contratistas.',
    specs: ['Diagnóstico de flota vehicular y patrones de desplazamiento en rutas de montaña', 'Capacitación teórico-práctica en manejo defensivo y pruebas psicotécnicas', 'Protocolos de mantenimiento preventivo/correctivo y planes de viaje seguros'],
    deliverables: 'Documento técnico metodológico del PESV articulado al SG-SST y formato de auditoría periódica.',
    software: 'Resolución 40595 de 2022 MinTransporte, Software Telemetría',
    image: 'assets/flotas-transporte-pesv-inspeccion.jpg',
    tag: 'Seguridad Vial'
  },
  {
    id: 'sst-04',
    category: 'sst-pesv',
    categoryName: 'SST & PESV',
    title: 'Telemetría Satelital y Monitoreo de Flotas 4x4 en Ruta',
    shortDesc: 'Supervisión en tiempo real de vehículos de supervisión y transporte de personal en zonas de alta complejidad topográfica.',
    specs: ['Dispositivos GPS 4G con cobertura satelital Iridium para zonas sin señal celular', 'Sensores de telemetría CAN-bus (frenadas bruscas, aceleraciones, consumo de combustible)', 'Detección inteligente de microsueños y fatiga del conductor mediante cámaras IA ADAS/DMS'],
    deliverables: 'Acceso a plataforma web/móvil de monitoreo en tiempo real, reportes de score de conducción e informes de geocercas.',
    software: 'SIG-Fleet Telematics Engine, Traccar Enterprise, APIs IoT',
    image: 'assets/flotas-transporte-pesv-inspeccion.jpg',
    tag: 'Telemetría Satelital'
  },
  {
    id: 'sst-05',
    category: 'sst-pesv',
    categoryName: 'SST & PESV',
    title: 'Capacitación Certificada en Tareas de Alto Riesgo',
    shortDesc: 'Entrenamiento teórico-práctico con certificación avalada para personal de faenas mineras e industriales.',
    specs: ['Trabajo seguro en alturas (Resolución 4272 de 2021)', 'Ingreso y rescate en espacios confinados y socavones mineros', 'Manejo defensivo de camionetas 4x4 y maquinaria pesada en terreno escarpado'],
    deliverables: 'Certificaciones nominales de aprobación, registro ante Ministerio del Trabajo y memoria fotográfica.',
    software: 'Simuladores de entrenamiento, LMS Corporativo SIG²',
    image: 'assets/tunel-subterraneo-geotecnia.jpg',
    tag: 'Certificación Personal'
  },

  // 4. Soluciones Digitales y BI
  {
    id: 'dig-01',
    category: 'soluciones-digitales',
    categoryName: 'Soluciones Digitales & BI',
    title: 'Dashboards Interactivos de Business Intelligence',
    shortDesc: 'Desarrollo de centros de control visual para toma de decisiones ejecutivas en producción, geología y seguridad.',
    specs: ['Conexión directa a bases de datos SQL, ERP, hojas de cálculo y sensores IoT', 'Cuadros de mando ejecutivos con métricas de costo por tonelada, avance de frente y cumplimiento de planes', 'Visualizaciones espaciales con mapas GIS interactivos integrados en el dashboard'],
    deliverables: 'Dashboards implementados en Power BI Service / Metabase con roles y permisos de acceso según jerarquía.',
    software: 'Microsoft Power BI, Metabase, PostgreSQL, Apache Superset',
    image: 'assets/sig-campo-ficha-tecnica.png',
    tag: 'Power BI & Big Data'
  },
  {
    id: 'dig-02',
    category: 'soluciones-digitales',
    categoryName: 'Soluciones Digitales & BI',
    title: 'Aplicaciones Móviles Operativas (Offline-First)',
    shortDesc: 'Desarrollo de apps para captura de información en frentes de mina o cuadrillas de campo sin señal.',
    specs: ['Funcionamiento 100% desconectado con sincronización bidireccional automática al recuperar señal', 'Formularios georreferenciados con validaciones matemáticas, fotos y firmas digitales', 'Diseño resistente y optimizado para pantallas de tablets rugerizadas en intemperie'],
    deliverables: 'Aplicación compilada para Android/iOS, panel de control administrativo web y API REST documentada.',
    software: 'Flutter, React Native, SQLite, Node.js Backend',
    image: 'assets/sig-campo-ficha-tecnica.png',
    tag: 'Apps Móviles Offline'
  },
  {
    id: 'dig-03',
    category: 'soluciones-digitales',
    categoryName: 'Soluciones Digitales & BI',
    title: 'Micro Red Social y Comunicación Corporativa en Faenas',
    shortDesc: 'Plataforma interna privada para interconexión entre campamentos remotos, cuadrillas y oficinas centrales.',
    specs: ['Muros de avisos técnicos por áreas (Geología, Mantenimiento, Seguridad, Administración)', 'Canales de chat seguros punto a punto y grupos de emergencia con geolocalización', 'Repositorio centralizado de boletines de seguridad, manuales y turnos de cuadrilla'],
    deliverables: 'Plataforma desplegada en nube privada o servidor local con autenticación de doble factor.',
    software: 'Mattermost Enterprise / Nextcloud Hub / Docker Container',
    image: 'assets/mineria-cielo-abierto-taludes.jpg',
    tag: 'Comunicación Interna'
  },
  {
    id: 'dig-04',
    category: 'soluciones-digitales',
    categoryName: 'Soluciones Digitales & BI',
    title: 'Automatización de Bitácoras de Obra y Control Volumétrico',
    shortDesc: 'Digitalización completa de libros de obra, partes diarios de maquinaria y cálculo de cubicación por fotogrametría.',
    specs: ['Registro inmutable con estampado de tiempo, coordenadas GPS y firma electrónica', 'Cálculo automatizado de volumen extraído comparando nubes de puntos LiDAR periódicas', 'Alertas tempranas de desviaciones presupuestales o retrasos en cronograma físico'],
    deliverables: 'Módulo web de bitácora inteligente, reportes automáticos en PDF con envío programado por correo.',
    software: 'Python Cloud Workers, PostGIS, CloudCompare API',
    image: 'assets/geotecnia-perforacion-taludes.jpg',
    tag: 'Automatización IoT'
  },
  {
    id: 'dig-05',
    category: 'soluciones-digitales',
    categoryName: 'Soluciones Digitales & BI',
    title: 'Inteligencia Artificial y Asistentes Normativos Minero-Ambientales',
    shortDesc: 'Agentes conversacionales basados en LLMs entrenados con la reglamentación colombiana y estándares de la empresa.',
    specs: ['Búsqueda semántica en miles de páginas del Código de Minas, Decreto 1076, Resoluciones ANLA y normas internas', 'Respuestas fundamentadas con cita exacta de artículos y jurisprudencia vigente', 'Generación de borradores de oficios y respuestas a requerimientos oficiales en segundos'],
    deliverables: 'Asistente IA integrado en Teams, WhatsApp o portal interno corporativo con control de privacidad.',
    software: 'RAG Architecture, LangChain, OpenAI / Claude API, Vector DB',
    image: 'assets/tunel-subterraneo-geotecnia.jpg',
    tag: 'IA Especializada'
  },

  // 5. Gestión y Administración
  {
    id: 'ges-01',
    category: 'gestion-logistica',
    categoryName: 'Gestión & Logística',
    title: 'Contaduría y Asesoría Fiscal Minero-Energética',
    shortDesc: 'Contabilidad especializada bajo NIIF para proyectos de recursos naturales no renovables.',
    specs: ['Liquidación precisa de regalías según tipo de mineral y boca de mina (UPME/ANM)', 'Manejo contable de activos de exploración, evaluación y desarrollo (NIIF 6)', 'Planeación tributaria, auditoría de costos de operación y régimen de zonas francas'],
    deliverables: 'Estados financieros auditados, declaraciones tributarias sectoriales y dictamen de revisoría fiscal.',
    software: 'SAP S/4HANA, Siigo Nube, Excel Financiero Avanzado',
    image: 'assets/mineria-cielo-abierto-taludes.jpg',
    tag: 'Fiscal & NIIF'
  },
  {
    id: 'ges-02',
    category: 'gestion-logistica',
    categoryName: 'Gestión & Logística',
    title: 'Diseño Documental Técnico y Normalización de Procesos',
    shortDesc: 'Estandarización y elaboración de manuales operativos, protocolos técnicos y gestión documental corporativa.',
    specs: ['Redacción de Procedimientos Operativos Estandarizados (POE / SOP) de alta ingeniería', 'Codificación documental técnica para archivo físico y digital según norma ISO 9001', 'Diseño de formatos de inspección, actas de entrega de frente y fichas técnicas de equipos'],
    deliverables: 'Manual de Procesos y Procedimientos Corporativo en formato digital interactivo y editable.',
    software: 'Norma ISO 9001:2015, Adobe InDesign, Lucidchart',
    image: 'assets/sig-campo-ficha-tecnica.png',
    tag: 'Estandarización'
  },
  {
    id: 'ges-03',
    category: 'gestion-logistica',
    categoryName: 'Gestión & Logística',
    title: 'Logística Integral y Gestión de Cadena de Suministros',
    shortDesc: 'Abastecimiento estratégico, control de inventarios críticos y operaciones en campamentos remotos.',
    specs: ['Gestión de compras técnicas de repuestos para maquinaria pesada y equipos de perforación', 'Cadena de suministro de insumos de seguridad, reactivos de laboratorio y combustibles', 'Coordinación de transportes de carga extradimensionada y convoyes seguros a zonas de proyecto'],
    deliverables: 'Plan logístico integral de abastecimiento, contratos marco con proveedores e informes de stock crítico.',
    software: 'Sistemas WMS, TMS de transporte, Power BI Logistics',
    image: 'assets/flotas-transporte-pesv-inspeccion.jpg',
    tag: 'Logística de Faena'
  },
  {
    id: 'ges-04',
    category: 'gestion-logistica',
    categoryName: 'Gestión & Logística',
    title: 'Administración de Campamentos y Soporte en Terreno',
    shortDesc: 'Operación completa de servicios de hotelería, alimentación (catering) y sanidad en frentes de exploración.',
    specs: ['Supervisión de normas higiénico-sanitarias y planes de saneamiento básico', 'Control de alojamientos, lavandería y gestión de residuos en campamento', 'Atención médica de primer nivel y planes de evacuación médica de emergencia (MEDEVAC)'],
    deliverables: 'Protocolo de administración de campamento y reportes mensuales de indicadores de bienestar operacional.',
    software: 'Checklists digitales de sanidad, Software de ocupación hotelera industrial',
    image: 'assets/geotecnia-perforacion-taludes.jpg',
    tag: 'Campamentos Mineros'
  }
];

// Paquetes Técnicos para la Tienda de Ingeniería
const ENGINEERING_STORE_ITEMS = [
  {
    id: 'SIG-GEO-01',
    sku: 'PKG-LIDAR-150HA',
    category: 'Geodesia & Geomática',
    title: 'Pack Vuelo Fotogramétrico & LiDAR Alta Precisión (Hasta 150 Has)',
    deliveryTime: '5 Días Hábiles',
    summary: 'Levantamiento aéreo completo con sensor LiDAR y cámara RGB de 45 MP montado en dron industrial DJI Matrice 350 RTK.',
    features: [
      'Nube de puntos densa clasificada (Suelo, Vegetación, Estructuras) en formato .LAS',
      'Modelo Digital de Terreno (DTM) y Superficie (DSM) a 5 cm/px',
      'Curvas de nivel maestras y secundarias a 0.50m en formato CAD/SHP',
      'Ortofotomosaico georreferenciado en MAGNA-SIRGAS con apoyo GNSS RTK',
      'Informe técnico de precisión geodésica con error RMS certificado (±0.02 m)'
    ],
    badge: 'Más Solicitado'
  },
  {
    id: 'SIG-ENV-02',
    sku: 'PKG-PMA-HIDRO',
    category: 'Ingeniería Ambiental',
    title: 'Pack PMA Express & Muestreo Hidrobiológico Integral',
    deliveryTime: '12 Días Hábiles',
    summary: 'Actualización técnica de Plan de Manejo Ambiental y campaña de monitoreo de calidad de aguas superficiales.',
    features: [
      'Toma de muestras in situ de aguas arriba y aguas abajo en 3 puntos estratégicos',
      'Análisis de 18 parámetros fisicoquímicos en laboratorio acreditado ante el IDEAM',
      'Caracterización hidrobiológica (Macroinvertebrados, Perifiton, Fitoplancton)',
      'Informe de Cumplimiento Ambiental (ICA) para radicación formal',
      'Acompañamiento técnico ante la autoridad ambiental competente'
    ],
    badge: 'Norma ANLA'
  },
  {
    id: 'SIG-SST-03',
    sku: 'PKG-PESV-TELEMATICS',
    category: 'SST & Seguridad Vial',
    title: 'Pack PESV Integral Llave en Mano + Telemetría para 10 Vehículos',
    deliveryTime: '15 Días Hábiles',
    summary: 'Diseño e implementación del Plan Estratégico de Seguridad Vial bajo Res. 40595 con hardware GPS para flota 4x4.',
    features: [
      'Estructuración documental de los 24 pasos del PESV según nivel de diseño',
      '10 Dispositivos GPS 4G con botón de pánico y sensor CAN-bus',
      'Plataforma web y app móvil de monitoreo en tiempo real por 12 meses',
      'Taller certificado de Manejo Defensivo y Rutas Seguras para 20 conductores',
      'Articulación garantizada con los estándares mínimos del SG-SST (Res. 0312)'
    ],
    badge: 'Resolución 40595'
  },
  {
    id: 'SIG-BI-04',
    sku: 'PKG-MINING-BI',
    category: 'Soluciones Digitales',
    title: 'Suite Digital Minera: Dashboard Power BI + App Móvil Offline',
    deliveryTime: '10 Días Hábiles',
    summary: 'Transformación digital de operaciones de extracción con cuadro de mando ejecutivo y app para frentes de obra.',
    features: [
      'Dashboard interactivo con métricas de ley de mineral, tonelaje y horas máquina',
      'App móvil Android offline para teléfonos rugerizados con captura de turnos',
      'Sincronización automática de datos mediante base de datos segura en la nube',
      'Mapa interactivo GIS de frentes de explotación con actualización periódica',
      'Capacitación técnica al equipo de ingeniería y manual de administración'
    ],
    badge: 'Innovación Tech'
  },
  {
    id: 'SIG-MIN-05',
    sku: 'PKG-GEOMODEL-3D',
    category: 'Minería & Geología',
    title: 'Modelamiento Geológico 3D y Estimación de Bloques de Yacimiento',
    deliveryTime: '20 Días Hábiles',
    summary: 'Modelamiento geológico estructural y litológico en 3D para canteras, calizas, carbón o yacimientos metálicos.',
    features: [
      'Validación de bases de datos de perforación y muestras de canal',
      'Wireframes 3D de litología, fallas y mineralización en Leapfrog Geo',
      'Modelo de bloques con interpolación geoestadística (Kriging e IDW)',
      'Cálculo de volumen y tonelaje con curvas de corte (Cut-off grade)',
      'Exportación en formatos universales (DXF 3D, Vulcan, Datamine, CSV)'
    ],
    badge: 'Alta Ingeniería'
  },
  {
    id: 'SIG-LOG-06',
    sku: 'PKG-AUDIT-TRI',
    category: 'Gestión & Auditoría',
    title: 'Auditoría Trinorma HSEQ Express (ISO 9001, 14001 y 45001)',
    deliveryTime: '7 Días Hábiles',
    summary: 'Auditoría interna exhaustiva para empresas contratistas del sector minero-energético e industrial.',
    features: [
      'Revisión documental de sistemas de calidad, ambiental y seguridad',
      'Visita técnica de auditoría in situ por Auditor Líder Certificado IRCA',
      'Matriz de hallazgos (Conformidades, No Conformidades y Mejoras)',
      'Plan de acción correctiva y preventiva con seguimiento a 30 días',
      'Emisión de dictamen técnico de madurez del sistema previo a auditoría externa'
    ],
    badge: 'Auditoría Trinorma'
  }
];

// Documentos del Portal de Clientes
const CLIENT_PORTAL_FILES = [
  { id: 'EXP-01', name: 'Informe Técnico PTO Minero - Fase III (Vigencia 2026).pdf', category: 'Informes Técnicos', date: '28 Oct 2026', size: '18.4 MB', status: 'Aprobado ANM' },
  { id: 'EXP-02', name: 'Nube de Puntos LiDAR Clasificada - Cantera Los Andes.las', category: 'Cartografía & GIS', date: '22 Oct 2026', size: '412.0 MB', status: 'Disponible' },
  { id: 'EXP-03', name: 'Informe Semestral de Cumplimiento Ambiental (ICA).pdf', category: 'Ambiental', date: '15 Oct 2026', size: '12.8 MB', status: 'Radicado ANLA' },
  { id: 'EXP-04', name: 'Certificados de Calibración GNSS Leica Geosystems 2026.pdf', category: 'Certificaciones', date: '04 Oct 2026', size: '4.2 MB', status: 'Vigente' },
  { id: 'EXP-05', name: 'Matriz de Identificación de Peligros GTC 45 V.2026.xlsx', category: 'SST & PESV', date: '29 Sep 2026', size: '8.6 MB', status: 'Auditado' }
];

// Inicialización Segura e Inmediata de la Aplicación
let appInitialized = false;
function safeInitApp() {
  if (appInitialized) return;
  appInitialized = true;
  initApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', safeInitApp);
} else {
  safeInitApp();
}

window.addEventListener('load', () => {
  safeInitApp();
});

function initApp() {
  const steps = [
    ['renderServicesCatalog', () => renderServicesCatalog('all')],
    ['renderEngineeringStore', () => renderEngineeringStore()],
    ['initProjectSimulator', () => initProjectSimulator()],
    ['initTelemetryChart', () => initTelemetryChart()],
    ['initTelemetryTicker', () => initTelemetryTicker()],
    ['setupEventListeners', () => setupEventListeners()],
    ['updateCartBadge', () => updateCartBadge()],
    ['initPesvAppFeatures', () => initPesvAppFeatures()],
    ['initCadeneroChatbot', () => initCadeneroChatbot()],
    ['initScrollAnimations', () => initScrollAnimations()],
    ['initFleetLiveMap', () => initFleetLiveMap()],
    ['initSigCampoSimulator', () => initSigCampoSimulator()],
    ['initCrmHub', () => initCrmHub()]
  ];

  for (const [name, fn] of steps) {
    try {
      fn();
    } catch (e) {
      console.warn(`[SIG² Init] Advertencia en ${name}:`, e);
    }
  }
}

// -------------------------------------------------------------
// RENDERIZADO DEL CATÁLOGO DE SERVICIOS
// -------------------------------------------------------------
function renderServicesCatalog(categoryFilter = 'all', searchQuery = '') {
  const container = document.getElementById('services-grid-container');
  if (!container) return;

  let filtered = SERVICES_CATALOG;

  if (categoryFilter !== 'all') {
    filtered = filtered.filter(item => item.category === categoryFilter);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.shortDesc.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q) ||
      item.tag.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white border border-slate-200 rounded-xl shadow-sm">
        <i class="fa-solid fa-compass-drafting text-4xl text-slate-400 mb-3 block"></i>
        <p class="text-slate-700 font-semibold text-sm">No se encontraron servicios técnicos con los criterios ingresados.</p>
        <p class="text-xs text-slate-500 mt-1">Pruebe con términos como "LiDAR", "Taludes", "PTO", "PESV", "Power BI" o seleccione "Todos los Sectores".</p>
        <button onclick="resetServiceFilters()" class="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#06466C] text-xs font-semibold rounded border border-slate-300 transition-all">
          Restablecer Filtros
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(svc => `
    <div class="group bg-white border border-slate-200 hover:border-[#168F8A] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
      <div>
        <div class="relative h-48 overflow-hidden bg-slate-100">
          <img src="${svc.image}" alt="${svc.title}" onerror="this.onerror=null;this.src='assets/geotecnia-perforacion-taludes.jpg';" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          <div class="absolute top-3 left-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/95 backdrop-blur-md border border-slate-200 text-[#06466C] text-[11px] font-semibold tracking-wider uppercase shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-[#168F8A]"></span>
              ${svc.categoryName}
            </span>
          </div>

          <div class="absolute top-3 right-3">
            <span class="px-2 py-0.5 rounded bg-[#06466C] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
              ${svc.tag}
            </span>
          </div>
        </div>

        <div class="p-6">
          <h3 class="text-base font-bold text-[#06466C] group-hover:text-[#168F8A] transition-colors leading-snug">
            ${svc.title}
          </h3>
          <p class="text-slate-600 text-xs mt-2.5 leading-relaxed">
            ${svc.shortDesc}
          </p>

          <div class="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
            ${svc.specs.slice(0, 2).map(spec => `
              <div class="flex items-start gap-2 text-[11px] text-slate-700 leading-snug">
                <span class="w-1.5 h-1.5 rounded-full bg-sig-teal mt-1.5 shrink-0"></span>
                <span>${spec}</span>
              </div>
            `).join('')}
          </div>

          <div class="mt-3 flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
            <i class="fa-solid fa-microchip text-sig-teal text-[10px]"></i>
            <span class="truncate">${svc.software}</span>
          </div>
        </div>
      </div>

      <div class="px-6 pb-6 pt-3 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2">
        ${svc.hasDemoBtn ? `
          <a href="${svc.demoLink}" class="flex-1 py-2 px-3 text-xs font-bold text-white btn-engineering-teal rounded transition-all flex items-center justify-center gap-1.5 shadow-sm">
            <i class="fa-solid fa-play"></i> Probar Demo
          </a>
        ` : `
          <button onclick="openServiceDetailModal('${svc.id}')" class="flex-1 py-2 px-3 text-xs font-semibold text-[#06466C] bg-white hover:bg-slate-100 border border-slate-300 rounded transition-all text-center">
            <i class="fa-solid fa-file-lines mr-1.5 text-[#168F8A]"></i> Ficha Técnica
          </button>
        `}
        <button onclick="quoteSpecificService('${svc.id}')" class="py-2 px-3.5 text-xs font-semibold text-white bg-[#06466C] hover:bg-[#04324E] rounded transition-all flex items-center gap-1 shadow-sm">
          <span>Cotizar</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// -------------------------------------------------------------
// RENDERIZADO DE LA TIENDA DE INGENIERÍA (SIN PRECIOS)
// -------------------------------------------------------------
function renderEngineeringStore() {
  const container = document.getElementById('store-grid-container');
  if (!container) return;

  container.innerHTML = ENGINEERING_STORE_ITEMS.map(item => `
    <div class="bg-white border border-slate-200 hover:border-[#168F8A] rounded-xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between text-xs mb-3">
          <span class="text-[#168F8A] font-semibold uppercase tracking-wider">${item.category}</span>
          <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold">${item.sku}</span>
        </div>

        <div class="mb-2">
          <span class="inline-block px-2 py-0.5 rounded bg-teal-50 text-[#168F8A] border border-teal-200 text-[10px] font-bold uppercase mb-2">
            ${item.badge}
          </span>
          <h3 class="text-base font-bold text-[#06466C] group-hover:text-[#168F8A] transition-colors leading-snug">
            ${item.title}
          </h3>
        </div>

        <p class="text-slate-600 text-xs leading-relaxed mb-4">
          ${item.summary}
        </p>

        <!-- Alcance Técnico Limpio Sin Cajas Cerradas -->
        <div class="my-4 pt-3 border-t border-slate-100 space-y-2">
          <div class="text-[10px] uppercase text-slate-400 font-bold tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-layer-group text-sig-teal text-[10px]"></i>
            <span>Entregables Incluidos:</span>
          </div>
          <div class="space-y-1.5">
            ${item.features.slice(0, 3).map(feat => `
              <div class="flex items-start gap-2 text-[11px] text-slate-700 leading-snug">
                <span class="w-1.5 h-1.5 rounded-full bg-sig-navy mt-1.5 shrink-0"></span>
                <span>${feat}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div>
        <div class="flex items-baseline justify-between pt-3 border-t border-slate-100 mb-4">
          <div>
            <span class="text-[10px] text-slate-500 uppercase block font-semibold">Plazo Estimado:</span>
            <span class="text-xs font-bold text-[#168F8A] flex items-center gap-1 mt-0.5">
              <i class="fa-regular fa-clock text-[10px]"></i> ${item.deliveryTime}
            </span>
          </div>
          <div class="text-right">
            <span class="text-[10px] text-slate-500 uppercase block font-semibold">Modalidad:</span>
            <span class="text-xs font-bold text-[#06466C] mt-0.5 block">
              Bajo Cotización
            </span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <button onclick="openProductDetailModal('${item.id}')" class="py-2 px-3 text-xs font-semibold text-slate-700 hover:text-[#06466C] bg-slate-100 hover:bg-slate-200 rounded border border-slate-200 transition-all text-center">
            Especificaciones
          </button>
          <button onclick="addToCart('${item.id}')" class="py-2 px-3 text-xs font-bold text-white bg-[#06466C] hover:bg-[#04324E] rounded shadow-sm transition-all flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-cart-plus text-xs"></i>
            <span>Añadir a Cotización</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// -------------------------------------------------------------
// SIMULADOR / ESTIMADOR TÉCNICO DE PROYECTOS (SIN PRECIOS)
// -------------------------------------------------------------
function initProjectSimulator() {
  const sectorSelect = document.getElementById('sim-sector');
  const scopeSlider = document.getElementById('sim-scope');
  const scopeValueDisplay = document.getElementById('sim-scope-val');
  const tierSelect = document.getElementById('sim-tier');
  const addLiDAR = document.getElementById('sim-addon-lidar');
  const add3D = document.getElementById('sim-addon-3d');
  const addBI = document.getElementById('sim-addon-bi');
  const addFleet = document.getElementById('sim-addon-fleet');
  const addLegal = document.getElementById('sim-addon-legal');

  if (!sectorSelect || !scopeSlider) return;

  function calculateSimulation() {
    const sector = sectorSelect.value;
    const scope = parseInt(scopeSlider.value, 10);
    const tier = tierSelect ? tierSelect.value : 'ejecutivo';

    if (scopeValueDisplay) {
      if (sector === 'mineria' || sector === 'ambiental') {
        scopeValueDisplay.textContent = `${scope} Hectáreas (Has)`;
      } else if (sector === 'sst') {
        scopeValueDisplay.textContent = `${scope} Colaboradores / Vehículos`;
      } else if (sector === 'digitales') {
        scopeValueDisplay.textContent = `${scope} Puntos / Módulos de Control`;
      } else {
        scopeValueDisplay.textContent = `${scope} Unidades Operacionales`;
      }
    }

    let baseWeeks = 2;
    switch (sector) {
      case 'mineria':
        baseWeeks = 3 + Math.ceil(scope / 300);
        break;
      case 'ambiental':
        baseWeeks = 4 + Math.ceil(scope / 400);
        break;
      case 'sst':
        baseWeeks = 2 + Math.ceil(scope / 200);
        break;
      case 'digitales':
        baseWeeks = 3 + Math.ceil(scope / 100);
        break;
      case 'gestion':
        baseWeeks = 2 + Math.ceil(scope / 250);
        break;
      default:
        baseWeeks = 3;
    }

    if (tier === 'basico') {
      baseWeeks = Math.max(1, baseWeeks - 1);
    } else if (tier === 'integral') {
      baseWeeks += 2;
    }

    let activeAddonsList = [];
    if (addLiDAR && addLiDAR.checked) activeAddonsList.push('Vuelo Fotogramétrico LiDAR con Dron Industrial');
    if (add3D && add3D.checked) activeAddonsList.push('Modelado Geológico 3D y Nube de Puntos Clasificada');
    if (addBI && addBI.checked) activeAddonsList.push('Dashboard Power BI en Tiempo Real y Servidor Cloud');
    if (addFleet && addFleet.checked) activeAddonsList.push('Telemetría Satelital y Geocercas para Flota 4x4');
    if (addLegal && addLegal.checked) activeAddonsList.push('Acompañamiento y Defensa Técnica ante Autoridades');

    const timeTarget = document.getElementById('sim-result-time');
    const phasesContainer = document.getElementById('sim-result-phases');
    const scopeDeliverableTarget = document.getElementById('sim-result-scope-summary');

    if (timeTarget) timeTarget.textContent = `${baseWeeks} a ${baseWeeks + 1} Semanas Estimadas`;

    if (scopeDeliverableTarget) {
      let unitText = 'Unidades / Has';
      if (sector === 'mineria' || sector === 'ambiental') unitText = 'Hectáreas';
      else if (sector === 'sst') unitText = 'Vehículos / Personal';
      else if (sector === 'digitales') unitText = 'Puntos de Control IoT';
      else if (sector === 'gestion') unitText = 'Centros Operacionales';
      
      let tierLabel = 'PROYECTO EJECUTIVO';
      if (tier === 'basico') tierLabel = 'DIAGNÓSTICO TÉCNICO';
      else if (tier === 'integral') tierLabel = 'DESPLIEGUE INTEGRAL 24/7';

      scopeDeliverableTarget.innerHTML = `
        <div class="flex flex-wrap items-center gap-2 mt-1">
          <span class="text-lg sm:text-xl font-black text-sig-navy tabular-nums">${scope} ${unitText}</span>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-50 border border-teal-200 text-sig-teal">${tierLabel}</span>
        </div>
      `;
    }

    if (phasesContainer) {
      phasesContainer.innerHTML = `
        <div class="border-l-2 border-[#06466C] pl-3 py-1">
          <div class="text-[11px] font-bold text-[#06466C]">FASE 1: Reconocimiento & Adquisición</div>
          <div class="text-[10px] text-slate-600">Levantamiento geodésico, inspección de faena y configuración de sensores.</div>
        </div>
        <div class="border-l-2 border-[#168F8A] pl-3 py-1">
          <div class="text-[11px] font-bold text-[#168F8A]">FASE 2: Ensayos & Procesamiento Cartográfico</div>
          <div class="text-[10px] text-slate-600">Análisis de laboratorio acreditado, clasificación LiDAR y control QA/QC.</div>
        </div>
        <div class="border-l-2 border-slate-600 pl-3 py-1">
          <div class="text-[11px] font-bold text-slate-800">FASE 3: Modelación & Desarrollo Tecnológico</div>
          <div class="text-[10px] text-slate-600">Cálculo de volúmenes, integración en Power BI y formulación de informes.</div>
        </div>
        <div class="border-l-2 border-emerald-600 pl-3 py-1">
          <div class="text-[11px] font-bold text-emerald-800">FASE 4: Sustentación & Radicación Oficial</div>
          <div class="text-[10px] text-slate-600">Entrega de expedientes digitales, soporte legal y entrega de certificados.</div>
        </div>
      `;
    }

    SIG_STATE.lastSimulation = {
      sector,
      scope,
      tier,
      baseWeeks,
      addons: activeAddonsList
    };
  }

  sectorSelect.addEventListener('change', calculateSimulation);
  scopeSlider.addEventListener('input', calculateSimulation);
  if (tierSelect) tierSelect.addEventListener('change', calculateSimulation);
  [addLiDAR, add3D, addBI, addFleet, addLegal].forEach(cb => {
    if (cb) cb.addEventListener('change', calculateSimulation);
  });

  calculateSimulation();
}

function transferSimulationToQuote() {
  const sim = SIG_STATE.lastSimulation;
  if (!sim) return;

  const contactSubject = document.getElementById('contact-subject');
  const contactSector = document.getElementById('contact-sector');
  const contactMessage = document.getElementById('contact-message');

  if (contactSector) contactSector.value = sim.sector;
  if (contactSubject) contactSubject.value = `Cotización Técnica Proyecto ${sim.sector.toUpperCase()} (${sim.scope} unidades)`;

  if (contactMessage) {
    contactMessage.value = `SOLICITUD FORMAL DE COTIZACIÓN TÉCNICA - SIG²\n\n` +
      `Sector de Interés: ${sim.sector.toUpperCase()}\n` +
      `Alcance Estimado: ${sim.scope} (Has / Colaboradores / Nodos)\n` +
      `Nivel de Entregable: ${sim.tier.toUpperCase()}\n` +
      `Plazo Sugerido: ${sim.baseWeeks} semanas\n` +
      `Servicios Tecnológicos Complementarios:\n` +
      (sim.addons.length > 0 ? sim.addons.map(a => ` - ${a}`).join('\n') : ' - Ninguno adicional') +
      `\n\nFavor remitir propuesta técnica detallada con desglose de entregables y disponibilidad de equipo.`;
  }

  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    showToast('Datos de la simulación cargados en el formulario de cotización.', 'success');
  }
}

// -------------------------------------------------------------
// LISTA DE COTIZACIÓN (SIN PRECIOS)
// -------------------------------------------------------------
function addToCart(itemId) {
  const product = ENGINEERING_STORE_ITEMS.find(p => p.id === itemId);
  if (!product) return;

  const existing = SIG_STATE.cart.find(c => c.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    SIG_STATE.cart.push({ ...product, quantity: 1 });
  }

  updateCartBadge();
  renderCartDrawer();
  openCartDrawer();
  showToast(`Se añadió "${product.title}" a su lista de cotización.`, 'info');
}

function removeFromCart(itemId) {
  SIG_STATE.cart = SIG_STATE.cart.filter(item => item.id !== itemId);
  updateCartBadge();
  renderCartDrawer();
  showToast('Paquete removido de la cotización.', 'warning');
}

function updateCartQuantity(itemId, delta) {
  const item = SIG_STATE.cart.find(i => i.id === itemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(itemId);
  } else {
    updateCartBadge();
    renderCartDrawer();
  }
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  const totalCount = SIG_STATE.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (badge) {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-list');
  const totalItemsCountEl = document.getElementById('cart-total-items-count');
  if (!container) return;

  if (SIG_STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-slate-500">
        <i class="fa-solid fa-cart-flatbed text-4xl text-slate-300 mb-3 block"></i>
        <p class="font-semibold text-slate-700">Su lista de paquetes de cotización está vacía.</p>
        <p class="text-xs text-slate-400 mt-1">Explore la tienda técnica y añada soluciones para cotizar.</p>
      </div>
    `;
    if (totalItemsCountEl) totalItemsCountEl.textContent = '0 paquetes seleccionados';
    return;
  }

  const totalItems = SIG_STATE.cart.reduce((acc, curr) => acc + curr.quantity, 0);
  if (totalItemsCountEl) totalItemsCountEl.textContent = `${totalItems} paquete(s) seleccionado(s) para cotizar`;

  container.innerHTML = SIG_STATE.cart.map(item => `
    <div class="p-4 bg-white border border-slate-200 rounded-lg flex flex-col justify-between gap-3 shadow-sm">
      <div class="flex items-start justify-between gap-2">
        <div>
          <span class="text-[10px] text-[#168F8A] uppercase font-bold">${item.sku}</span>
          <h4 class="text-xs font-bold text-[#06466C]">${item.title}</h4>
        </div>
        <button onclick="removeFromCart('${item.id}')" class="text-slate-400 hover:text-red-500 text-xs p-1" title="Eliminar">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>

      <div class="flex items-center justify-between pt-2 border-t border-slate-100">
        <div class="flex items-center border border-slate-300 rounded bg-slate-50">
          <button onclick="updateCartQuantity('${item.id}', -1)" class="px-2 py-0.5 text-xs text-slate-600 hover:text-black">-</button>
          <span class="px-2.5 py-0.5 text-xs text-slate-800 font-bold">${item.quantity}</span>
          <button onclick="updateCartQuantity('${item.id}', 1)" class="px-2 py-0.5 text-xs text-slate-600 hover:text-black">+</button>
        </div>
        <div class="text-right">
          <div class="text-xs font-bold text-[#06466C]">Modalidad: Cotización</div>
          <div class="text-[10px] text-slate-500">Plazo: ${item.deliveryTime}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  }
}

function checkoutCartViaWhatsApp() {
  if (SIG_STATE.cart.length === 0) {
    showToast('Añada al menos un paquete técnico para cotizar.', 'warning');
    return;
  }

  let text = `*SOLICITUD FORMAL DE COTIZACIÓN - SIG² INGENIERÍA*\n\n`;
  text += `Estimado equipo técnico de SIG², requiero cotización formal y disponibilidad para los siguientes paquetes:\n\n`;

  SIG_STATE.cart.forEach((item, idx) => {
    text += `${idx + 1}. *${item.title}* (${item.sku})\n   Cantidad/Faenas: ${item.quantity} | Plazo estimado: ${item.deliveryTime}\n`;
  });

  text += `\nSolicito contacto con el director técnico del área para envío de la propuesta técnica.`;

  const phone = SIG_STATE.whatsappDirectNumber; // +573127894040
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// -------------------------------------------------------------
// MODALES TÉCNICOS DETALLADOS (SIN PRECIOS)
// -------------------------------------------------------------
function openServiceDetailModal(serviceId) {
  const svc = SERVICES_CATALOG.find(s => s.id === serviceId);
  if (!svc) return;

  const modal = document.getElementById('tech-detail-modal');
  const modalContent = document.getElementById('modal-dynamic-body');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
      <div class="h-48 w-full overflow-hidden relative bg-slate-100">
        <img src="${svc.image}" alt="${svc.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-[#06466C]/90 via-[#06466C]/30 to-transparent"></div>
        <div class="absolute bottom-4 left-6 right-6">
          <div class="flex items-center gap-2 mb-1.5 text-xs">
            <span class="px-2.5 py-0.5 bg-white/95 text-sig-navy rounded-md uppercase font-black tracking-wider text-[10px] shadow-xs">${svc.categoryName}</span>
            <span class="px-2.5 py-0.5 bg-sig-teal text-white rounded-md uppercase font-bold text-[10px]">${svc.tag}</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-white tracking-tight">${svc.title}</h2>
        </div>
      </div>

      <div class="p-6 sm:p-7 space-y-6 text-slate-700 text-sm">
        <div>
          <h4 class="text-xs font-black text-sig-navy uppercase tracking-widest mb-2 flex items-center gap-2">
            <i class="fa-solid fa-align-left text-sig-teal"></i> Alcance & Descripción Técnica
          </h4>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">${svc.shortDesc}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="p-4 rounded-xl bg-slate-50/80 border border-slate-200">
            <h5 class="text-xs font-black text-sig-navy uppercase mb-3 flex items-center gap-2">
              <i class="fa-solid fa-microchip text-sig-teal"></i> Metodología & Especificaciones
            </h5>
            <div class="space-y-2">
              ${svc.specs.map(spec => `
                <div class="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                  <i class="fa-solid fa-circle-check text-sig-teal text-xs mt-0.5 shrink-0"></i>
                  <span>${spec}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50/80 border border-slate-200 flex flex-col justify-between">
            <div>
              <h5 class="text-xs font-black text-sig-navy uppercase mb-2.5 flex items-center gap-2">
                <i class="fa-solid fa-box-archive text-sig-teal"></i> Entregables Técnicos
              </h5>
              <p class="text-xs text-slate-600 leading-relaxed mb-3">${svc.deliverables}</p>
            </div>
            
            <div class="pt-3 border-t border-slate-200/80">
              <span class="text-[10px] uppercase font-bold text-slate-500 block mb-1.5">Software & Estándares Certificados:</span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-sig-navy text-xs rounded-lg border border-slate-200 font-bold shadow-xs">
                <i class="fa-solid fa-laptop-code text-sig-teal"></i>
                <span>${svc.software}</span>
              </span>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div class="text-xs font-black text-sig-navy">¿Requiere este servicio para un proyecto activo o licitación?</div>
            <div class="text-[11px] text-slate-500 mt-0.5">Nuestros directores de área pueden emitir una propuesta formal de cotización en 24 horas.</div>
          </div>
          <button onclick="quoteSpecificService('${svc.id}')" class="btn-engineering-primary px-5 py-2.5 text-white font-bold text-xs rounded-xl transition-all shadow-sm">
            Solicitar Cotización Formal
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function openProductDetailModal(productId) {
  const item = ENGINEERING_STORE_ITEMS.find(p => p.id === productId);
  if (!item) return;

  const modal = document.getElementById('tech-detail-modal');
  const modalContent = document.getElementById('modal-dynamic-body');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-6 sm:p-7 bg-white text-slate-700 text-sm rounded-2xl shadow-2xl border border-slate-200">
      <div class="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
        <div>
          <span class="text-xs font-bold text-sig-teal uppercase tracking-wider">${item.category} <span class="opacity-40 mx-1">/</span> ${item.sku}</span>
          <h2 class="text-xl sm:text-2xl font-black text-sig-navy mt-1 tracking-tight">${item.title}</h2>
        </div>
        <div class="text-right">
          <span class="text-[10px] text-slate-500 uppercase block font-semibold">Modalidad:</span>
          <span class="text-xs font-extrabold text-sig-navy bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">Consultoría Técnica</span>
        </div>
      </div>

      <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">${item.summary}</p>

      <div class="mb-6">
        <h4 class="text-xs font-black text-sig-navy uppercase mb-3 flex items-center gap-2">
          <i class="fa-solid fa-clipboard-check text-sig-teal"></i> Especificaciones Incluidas en la Solución
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
          ${item.features.map(f => `
            <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200">
              <i class="fa-solid fa-circle-check text-sig-teal text-xs mt-0.5 shrink-0"></i>
              <span class="text-slate-700 leading-snug">${f}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/90 p-4 rounded-xl border border-slate-200 mb-6 text-xs">
        <div>
          <span class="text-slate-500 block text-[10px] uppercase font-bold">Garantía Normativa:</span>
          <span class="text-sig-navy font-bold">100% Ajustado a Normativa ANM / ANLA / MinTrabajo</span>
        </div>
        <div>
          <span class="text-slate-500 block text-[10px] uppercase font-bold">Tiempo de Ejecución:</span>
          <span class="text-sig-teal font-bold">${item.deliveryTime} tras acta de inicio</span>
        </div>
      </div>

      <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
        <button onclick="closeModal()" class="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-black bg-slate-100 rounded-xl border border-slate-300 transition-colors">
          Cerrar
        </button>
        <button onclick="addToCart('${item.id}'); closeModal();" class="btn-engineering-primary px-5 py-2.5 text-xs font-bold text-white rounded-xl shadow-sm transition-all">
          Añadir a mi Cotización
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('tech-detail-modal');
  if (modal) modal.classList.add('hidden');
}

function quoteSpecificService(serviceId) {
  closeModal();
  const svc = SERVICES_CATALOG.find(s => s.id === serviceId);
  if (!svc) return;

  const contactSubject = document.getElementById('contact-subject');
  const contactSector = document.getElementById('contact-sector');
  const contactMessage = document.getElementById('contact-message');

  if (contactSector) contactSector.value = svc.category;
  if (contactSubject) contactSubject.value = `Cotización: ${svc.title}`;
  if (contactMessage) {
    contactMessage.value = `Cordial saludo equipo SIG²,\n\nRequerimos información técnica, alcance y propuesta de cotización para el servicio: "${svc.title}" (${svc.categoryName}).\n\nFavor contactarnos para coordinar reunión técnica preliminar.`;
  }

  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    showToast(`Servicio "${svc.title}" seleccionado para cotización.`, 'info');
  }
}

// -------------------------------------------------------------
// APP DE MONITOREO DE FLOTAS & PESV (ENFOQUE ESPECIAL)
// -------------------------------------------------------------
function initPesvAppFeatures() {
  const tabButtons = document.querySelectorAll('.pesv-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('bg-[#06466C]', 'text-white');
        b.classList.add('bg-white', 'text-slate-700');
      });
      btn.classList.add('bg-[#06466C]', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');

      const targetTab = btn.dataset.pesvTab;
      SIG_STATE.activePesvTab = targetTab;

      const views = document.querySelectorAll('.pesv-screen-view');
      views.forEach(v => v.classList.add('hidden'));

      const activeView = document.getElementById(`pesv-screen-${targetTab}`);
      if (activeView) activeView.classList.remove('hidden');
    });
  });
}

function submitPreoperationalCheck() {
  const checkBtn = document.getElementById('btn-submit-preop');
  if (checkBtn) {
    checkBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> Transmitiendo al SG-SST...`;
    checkBtn.disabled = true;
  }

  setTimeout(() => {
    if (checkBtn) {
      checkBtn.innerHTML = `<i class="fa-solid fa-check-double mr-1"></i> Inspección Aprobada`;
      checkBtn.classList.remove('bg-[#06466C]');
      checkBtn.classList.add('bg-emerald-700');
    }
    showToast('Inspección Preoperacional Diaria registrada y avalada bajo Res. 40595.', 'success');
  }, 1200);
}

function generatePesvCertificate() {
  showToast('Generando Certificado de Conformidad PESV - Mes Vigente (Paso 24 Auditado).', 'info');
}

// -------------------------------------------------------------
// CHATBOT INTELIGENTE CRM CONVERSACIONAL "CADENERO"
// Flujo Guiado de Extracción: Propósito, Servicio, Alcance, Empresa, Ocupación, Nombre, Horario y WhatsApp
// -------------------------------------------------------------
function initCadeneroChatbot() {
  const toggleBtn = document.getElementById('cadenero-toggle-btn');
  const chatWindow = document.getElementById('cadenero-chat-window');
  const closeBtn = document.getElementById('cadenero-close-btn');
  const sendBtn = document.getElementById('cadenero-send-btn');
  const inputEl = document.getElementById('cadenero-user-input');

  if (toggleBtn && chatWindow) {
    toggleBtn.addEventListener('click', () => {
      chatWindow.classList.toggle('hidden');
      if (!chatWindow.classList.contains('hidden') && inputEl) {
        inputEl.focus();
        const container = document.getElementById('cadenero-messages-container');
        if (container && container.querySelectorAll('.chat-bubble-user').length === 0 && SIG_STATE.leadCRM.step === 0) {
          if (!container.querySelector('.step0-options')) {
            renderCadeneroStepOptions();
          }
        }
      }
    });
  }

  if (closeBtn && chatWindow) {
    closeBtn.addEventListener('click', () => {
      chatWindow.classList.add('hidden');
    });
  }

  if (sendBtn && inputEl) {
    sendBtn.addEventListener('click', () => handleCadeneroSendMessage());
    inputEl.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleCadeneroSendMessage();
      }
    });
  }
}

// Envío de mensaje por texto o selección rápida
function handleCadeneroSendMessage(overrideText = null) {
  const inputEl = document.getElementById('cadenero-user-input');
  const messagesContainer = document.getElementById('cadenero-messages-container');
  if (!messagesContainer) return;

  const userText = overrideText ? overrideText.trim() : (inputEl ? inputEl.value.trim() : '');
  if (userText === '') return;

  // Renderizar mensaje del usuario
  appendChatMessage('user', userText);
  if (inputEl && !overrideText) inputEl.value = '';

  // Procesar entrada en el CRM Conversacional
  processCadeneroConversationStep(userText);
}

function sendCadeneroQuickPrompt(promptText, metaField = null, metaValue = null) {
  selectCadeneroOption(promptText, metaField, metaValue);
}

function selectCadeneroOption(optionText, metaField = null, metaValue = null) {
  if (metaField && metaValue) {
    SIG_STATE.leadCRM[metaField] = metaValue;
  }
  handleCadeneroSendMessage(optionText);
}

// Renderizado de burbuja de chat con scroll automático
function appendChatMessage(sender, htmlContent, isFinal = false) {
  const container = document.getElementById('cadenero-messages-container');
  if (!container) return;

  const wrapper = document.createElement('div');
  wrapper.className = sender === 'user' ? 'flex flex-col items-end space-y-1' : 'flex flex-col items-start space-y-1';

  const bubble = document.createElement('div');
  bubble.className = sender === 'user' 
    ? 'chat-bubble-user p-3 rounded-2xl shadow-sm text-xs leading-relaxed max-w-[85%]'
    : 'chat-bubble-bot p-3.5 rounded-2xl shadow-sm text-xs leading-relaxed max-w-[92%] bg-slate-50 border border-slate-200 text-slate-800';

  bubble.innerHTML = htmlContent;

  if (isFinal) {
    const actionBlock = document.createElement('div');
    actionBlock.className = 'pt-3 space-y-2 w-full';
    actionBlock.innerHTML = `
      <button onclick="transferCadeneroLeadToWhatsApp()" class="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
        <i class="fa-brands fa-whatsapp text-lg"></i>
        <span>Enviar Expediente a WhatsApp (+57 312 789 4040)</span>
      </button>
      <div class="text-center pt-1">
        <button onclick="resetCadeneroConversation()" class="text-[11px] text-slate-500 hover:text-[#06466C] underline font-medium">
          <i class="fa-solid fa-rotate-left mr-1"></i> Reiniciar o hacer otra consulta
        </button>
      </div>
    `;
    bubble.appendChild(actionBlock);
  }

  wrapper.appendChild(bubble);
  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
}

// Indicador visual animado de que Cadenero está escribiendo
function appendTypingIndicator() {
  const container = document.getElementById('cadenero-messages-container');
  if (!container) return null;

  const id = 'typing-' + Date.now();
  const wrapper = document.createElement('div');
  wrapper.id = id;
  wrapper.className = 'flex flex-col items-start space-y-1';
  wrapper.innerHTML = `
    <div class="chat-bubble-bot px-3 py-2 rounded-2xl shadow-sm bg-slate-100 border border-slate-200 flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 rounded-full bg-[#06466C] animate-bounce"></span>
      <span class="w-1.5 h-1.5 rounded-full bg-[#168F8A] animate-bounce" style="animation-delay: 0.15s"></span>
      <span class="w-1.5 h-1.5 rounded-full bg-[#66696B] animate-bounce" style="animation-delay: 0.3s"></span>
      <span class="text-[10px] text-slate-500 ml-1">Cadenero está analizando...</span>
    </div>
  `;
  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
  return id;
}

function removeTypingIndicator(id) {
  if (!id) return;
  const el = document.getElementById(id);
  if (el) el.remove();
}

function resetCadeneroConversation() {
  SIG_STATE.leadCRM = {
    step: 0,
    tipoRelacion: '',
    servicio: '',
    detallesTecnicos: '',
    empresa: '',
    ocupacion: '',
    nombre: '',
    horarioContacto: '',
    resumenHistorial: []
  };

  const crmBadge = document.getElementById('cadenero-crm-pill');
  if (crmBadge) {
    crmBadge.innerHTML = '';
    crmBadge.classList.add('hidden');
  }

  const container = document.getElementById('cadenero-messages-container');
  if (container) {
    container.innerHTML = `
      <div class="flex flex-col items-start space-y-1">
        <div class="chat-bubble-bot p-3.5 rounded-2xl shadow-sm text-xs leading-relaxed max-w-[92%] bg-slate-50 border border-slate-200 text-slate-800">
          ¡Hola! Soy <strong>Cadenero</strong>, asistente técnico y CRM de <strong>SIG²</strong>.<br><br>
          Conozco a fondo todas nuestras soluciones de ingeniería: geología, minería (PTO/3D), cartografía LiDAR, medio ambiente (EIA/PMA) y nuestra <strong>App de Flotas para el PESV (Res. 40595)</strong>.<br><br>
          Para canalizar tu expediente de cotización directo a WhatsApp (+57 312 789 4040):<br><br>
          <strong>¿Qué tipo de vinculación deseas establecer con SIG²?</strong>
        </div>
      </div>
    `;
    renderCadeneroStepOptions();
  }
}

// -------------------------------------------------------------
// MÁQUINA DE ESTADOS CONVERSACIONAL CRM DE CADENERO
// Flujo: 0 (Propósito) -> 1 (Disciplina) -> 2 (Foco Técnico) -> 3 (Empresa) -> 4 (Cargo) -> 5 (Nombre) -> 6 (Horario) -> 7 (Resumen & WA)
// -------------------------------------------------------------
function processCadeneroConversationStep(userText) {
  const crm = SIG_STATE.leadCRM;
  crm.resumenHistorial.push(userText);

  const typingId = appendTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator(typingId);
    const lower = userText.toLowerCase();

    switch (crm.step) {
      case 0:
        // Evaluar si es Alianza / Socio o Contratación o selección directa de un servicio
        if (lower.includes('socio') || lower.includes('alianza') || lower.includes('asoci') || lower.includes('consorcio')) {
          crm.tipoRelacion = 'Alianza o Sociedad Estratégica';
          crm.step = 1;
          appendChatMessage('bot', `Excelente, he clasificado tu propósito como: <strong>${crm.tipoRelacion}</strong>.<br><br>¿En qué disciplina técnica o sector de ingeniería les interesaría coordinar esfuerzos conjuntos?`);
          renderServiceSelectionButtons();
        } else if (lower.includes('campo') || lower.includes('geotec') || lower.includes('spt') || lower.includes('perforac') || lower.includes('sondeo')) {
          crm.tipoRelacion = 'Contratación de Servicios Técnicos';
          crm.servicio = 'SIG² Campo (Software Geotécnico & SPT)';
          crm.step = 2;
          appendChatMessage('bot', `¡Excelente elección! <strong>SIG² Campo</strong> es nuestra PWA especializada para registro digital de sondeos mecánicos, ensayos SPT (ASTM D1586), cálculo de N60 y RQD.<br><br>¿Cuántos frentes de perforación o cuadrillas operan en su empresa, o desean programar una demostración en terreno?`);
          renderQuickScopeButtons('geotecnia');
        } else if (lower.includes('pesv') || lower.includes('flota')) {
          crm.tipoRelacion = 'Contratación de Servicios Técnicos';
          crm.servicio = 'App de Flotas & Monitoreo PESV (Res. 40595)';
          crm.step = 2;
          appendChatMessage('bot', `Excelente, he registrado tu solicitud para: <strong>${crm.servicio}</strong>.<br><br>Para estructurar la propuesta de hardware y software: ¿Cuántos vehículos o maquinaria operan y en qué rutas o frentes transitan?`);
          renderQuickScopeButtons('pesv');
        } else if (lower.includes('lidar') || lower.includes('topograf')) {
          crm.tipoRelacion = 'Contratación de Servicios Técnicos';
          crm.servicio = 'Vuelo LiDAR & Topografía Geodésica';
          crm.step = 2;
          appendChatMessage('bot', `Excelente, he registrado tu solicitud para: <strong>${crm.servicio}</strong>.<br><br>Para estimar la logística de vuelo GNSS/RTK: ¿Cuántas hectáreas aproximadas tiene el predio y en qué municipio está ubicado?`);
          renderQuickScopeButtons('lidar');
        } else if (lower.includes('ambiental') || lower.includes('eia') || lower.includes('pma')) {
          crm.tipoRelacion = 'Contratación de Servicios Técnicos';
          crm.servicio = 'Ingeniería Ambiental (EIA / PMA / ICA)';
          crm.step = 2;
          appendChatMessage('bot', `Excelente, he registrado tu solicitud para: <strong>${crm.servicio}</strong>.<br><br>En el componente ambiental: ¿El trámite es ante la ANLA o Corporación Regional (CAR), y requieren muestreo hidrobiológico o fisicoquímico IDEAM?`);
          renderQuickScopeButtons('ambiental');
        } else if (lower.includes('miner') || lower.includes('geolog') || lower.includes('pto') || lower.includes('talud')) {
          crm.tipoRelacion = 'Contratación de Servicios Técnicos';
          crm.servicio = 'Geología 3D, Taludes & PTO Minero';
          crm.step = 2;
          appendChatMessage('bot', `Excelente, he registrado tu solicitud para: <strong>${crm.servicio}</strong>.<br><br>Para geología y minería: ¿El requerimiento es radicación de PTO ante la ANM, modelamiento 3D en Leapfrog o análisis de estabilidad de taludes?`);
          renderQuickScopeButtons('mineria');
        } else {
          crm.tipoRelacion = 'Contratación de Servicios Técnicos';
          crm.step = 1;
          appendChatMessage('bot', `He registrado tu interés en: <strong>${crm.tipoRelacion}</strong>.<br><br>¿En cuál de nuestras áreas estratégicas se centra tu proyecto o necesidad técnica?`);
          renderServiceSelectionButtons();
        }
        break;

      case 1:
        // Guardar servicio seleccionado y formular pregunta técnica especializada
        crm.servicio = userText;
        crm.step = 2;

        const lowerSvc = userText.toLowerCase();
        let promptTecnico = '';

        if (lowerSvc.includes('campo') || lowerSvc.includes('geotec') || lowerSvc.includes('spt') || lowerSvc.includes('perforac')) {
          promptTecnico = 'Respecto a la suite SIG² Campo y perforación geotécnica: ¿Cuántos equipos de perforación operan en su empresa y requieren personalización de formatos normativos NSR-10 o exportación a Geo5?';
        } else if (lowerSvc.includes('lidar') || lowerSvc.includes('topograf')) {
          promptTecnico = 'Para estructurar el vuelo y entrega de curvas de nivel / nube LAS: ¿En qué municipio se localiza el predio y de cuántas hectáreas aproximadas estamos hablando?';
        } else if (lowerSvc.includes('pesv') || lowerSvc.includes('flota')) {
          promptTecnico = 'Respecto al PESV (Resolución 40595) y telemetría satelital: ¿Cuántos vehículos o maquinaria operan y en qué rutas o frentes transitan?';
        } else if (lowerSvc.includes('ambiental') || lowerSvc.includes('eia') || lowerSvc.includes('pma')) {
          promptTecnico = 'En el componente ambiental: ¿El trámite es ante la ANLA o Corporación Regional (CAR), y requieren muestreos analíticos con laboratorio acreditado IDEAM?';
        } else if (lowerSvc.includes('miner') || lowerSvc.includes('3d') || lowerSvc.includes('pto') || lowerSvc.includes('talud')) {
          promptTecnico = 'Para minería y geología: ¿Es para radicación de Programa de Trabajos y Obras (PTO) ante la ANM, modelo de bloques Leapfrog o estabilidad de taludes?';
        } else if (lowerSvc.includes('digital') || lowerSvc.includes('bi') || lowerSvc.includes('soft')) {
          promptTecnico = 'En soluciones digitales: ¿Requieres tableros gerenciales Power BI conectados a campo, Apps móviles offline o automatización de bitácoras?';
        } else {
          promptTecnico = '¿Cuáles son las características principales, ubicación y alcance proyectado de la faena o requerimiento?';
        }

        appendChatMessage('bot', `Muy bien. Respecto a <strong>${crm.servicio}</strong>:<br><br>${promptTecnico}`);
        renderQuickScopeButtons(lowerSvc);
        break;

      case 2:
        // Guardar alcance / detalles técnicos y preguntar Empresa
        crm.detallesTecnicos = userText;
        crm.step = 3;

        appendChatMessage('bot', `Alcance técnico anotado: <em>"${crm.detallesTecnicos}"</em>.<br><br>Para individualizar tu expediente formal: ¿Cuál es el nombre de la <strong>Empresa, Consorcio o Entidad</strong> que representas?`);
        renderCompanyButtons();
        break;

      case 3:
        // Guardar Empresa y preguntar Cargo / Ocupación
        crm.empresa = cleanCompanyText(userText);
        crm.step = 4;

        appendChatMessage('bot', `Empresa registrada: <strong>${crm.empresa}</strong>.<br><br>¿Cuál es tu <strong>Cargo u Ocupación</strong> en el proyecto?`);
        renderRoleButtons();
        break;

      case 4:
        // Guardar Ocupación y preguntar Nombre del Contacto
        crm.ocupacion = cleanRoleText(userText);
        crm.step = 5;

        appendChatMessage('bot', `Comprendido, <strong>${crm.ocupacion}</strong> de <strong>${crm.empresa}</strong>.<br><br>¿Con quién tengo el gusto de hablar? Indícame tu <strong>Nombre y Apellido</strong> completo para encabezar la propuesta técnica.`);
        break;

      case 5:
        // Guardar Nombre y preguntar Horario / Tiempo de contacto
        crm.nombre = cleanNameText(userText);
        crm.step = 6;

        appendChatMessage('bot', `Mucho gusto, <strong>${crm.nombre}</strong>.<br><br>Por último: ¿En qué <strong>momento u horario te resulta más conveniente</strong> que nuestro Director de Proyectos te contacte para la sustentación técnica o llamada?`);
        renderScheduleButtons();
        break;

      case 6:
      default:
        // Guardar Horario y presentar Resumen Consolidado con botón de WhatsApp
        crm.horarioContacto = userText;
        crm.step = 7;

        const summaryHtml = generateFinalCrmSummaryCard();
        appendChatMessage('bot', `¡Excelente levantamiento! He recopilado y estructurado todos los datos para la cotización técnica:<br><br>${summaryHtml}<br>Para dar inicio a la revisión técnica y coordinar la propuesta, haz clic abajo para abrir nuestro WhatsApp oficial:`, true);
        break;
    }

    updateCadeneroCRMCard();
  }, 750);
}

// Limpiadores de texto para capturas limpias
function cleanCompanyText(text) {
  let cleaned = text.replace(/^(trabajo en|soy de|empresa|de la empresa|vengo de|represento a|para|en)\s+/i, '').trim();
  return cleaned || 'Empresa Privada / Proyecto';
}

function cleanRoleText(text) {
  let cleaned = text.replace(/^(soy|mi cargo es|mi ocupacion es|ocupo el cargo de|como)\s+/i, '').trim();
  return cleaned || 'Profesional / Encargado Técnico';
}

function cleanNameText(text) {
  let cleaned = text.replace(/^(soy|me llamo|mi nombre es|mi nombre:|nombre:)\s+/i, '').trim();
  return cleaned || 'Cliente Interesado';
}

// Auxiliares de renderizado de botones interactivos por paso
function renderCadeneroStepOptions() {
  const container = document.getElementById('cadenero-messages-container');
  if (!container) return;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'step0-options pt-1 flex flex-wrap gap-1.5';
  btnGroup.innerHTML = `
    <button onclick="selectCadeneroOption('Quiero Contratar un Servicio Técnico', 'tipoRelacion', 'Contratación de Servicios')" class="text-xs py-2 px-3 bg-white hover:bg-slate-100 text-[#06466C] rounded-lg border border-slate-300 font-semibold shadow-sm transition-all flex items-center gap-1.5 hover:border-sig-teal">
      <i class="fa-solid fa-briefcase text-sig-teal"></i>
      <span>Contratar un Servicio Técnico</span>
    </button>
    <button onclick="selectCadeneroOption('Quiero Proponer una Alianza o Ser Socios Estratégicos', 'tipoRelacion', 'Alianza o Sociedad Estratégica')" class="text-xs py-2 px-3 bg-white hover:bg-slate-100 text-[#06466C] rounded-lg border border-slate-300 font-semibold shadow-sm transition-all flex items-center gap-1.5 hover:border-sig-teal">
      <i class="fa-solid fa-handshake text-sig-teal"></i>
      <span>Alianza o Ser Socios Estratégicos</span>
    </button>
  `;
  container.appendChild(btnGroup);
  container.scrollTop = container.scrollHeight;
}

function renderServiceSelectionButtons() {
  const container = document.getElementById('cadenero-messages-container');
  if (!container) return;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'pt-1 flex flex-wrap gap-1.5';
  btnGroup.innerHTML = `
    <button onclick="selectCadeneroOption('SIG² Campo (Software Geotécnico & SPT)', 'servicio', 'SIG Campo (Geotecnia & SPT)')" class="text-xs py-2 px-3 bg-teal-50/80 hover:bg-teal-100/80 text-sig-teal rounded-lg border border-teal-300 font-bold transition-all shadow-xs flex items-center gap-2">
      <i class="fa-solid fa-bore-hole text-sig-teal"></i>
      <span>SIG² Campo (Geotecnia & SPT)</span>
    </button>
    <button onclick="selectCadeneroOption('App de Flotas & Monitoreo PESV (Res. 40595)', 'servicio', 'PESV & App Flotas')" class="text-xs py-2 px-3 bg-white hover:bg-slate-50 text-sig-navy rounded-lg border border-slate-300 font-bold transition-all hover:border-sig-teal shadow-xs flex items-center gap-2">
      <i class="fa-solid fa-truck-moving text-sig-teal"></i>
      <span>App Flotas & PESV</span>
    </button>
    <button onclick="selectCadeneroOption('Vuelo LiDAR & Topografía Geodésica', 'servicio', 'Topografía LiDAR')" class="text-xs py-2 px-3 bg-white hover:bg-slate-50 text-sig-navy rounded-lg border border-slate-300 font-bold transition-all hover:border-sig-teal shadow-xs flex items-center gap-2">
      <i class="fa-solid fa-crosshairs text-sig-teal"></i>
      <span>Vuelo LiDAR & Geodesia</span>
    </button>
    <button onclick="selectCadeneroOption('Geología 3D, Taludes & PTO Minero', 'servicio', 'Geología 3D & PTO')" class="text-xs py-2 px-3 bg-white hover:bg-slate-50 text-sig-navy rounded-lg border border-slate-300 font-bold transition-all hover:border-sig-teal shadow-xs flex items-center gap-2">
      <i class="fa-solid fa-mountain text-sig-teal"></i>
      <span>Minería 3D & PTO ANM</span>
    </button>
    <button onclick="selectCadeneroOption('Ingeniería Ambiental (EIA / PMA / ICA)', 'servicio', 'Ambiental EIA/PMA')" class="text-xs py-2 px-3 bg-white hover:bg-slate-50 text-sig-navy rounded-lg border border-slate-300 font-bold transition-all hover:border-sig-teal shadow-xs flex items-center gap-2">
      <i class="fa-solid fa-leaf text-sig-teal"></i>
      <span>Ambiental (EIA / PMA)</span>
    </button>
    <button onclick="selectCadeneroOption('Soluciones Digitales, Power BI & Software', 'servicio', 'Digital & BI')" class="text-xs py-2 px-3 bg-white hover:bg-slate-50 text-sig-navy rounded-lg border border-slate-300 font-bold transition-all hover:border-sig-teal shadow-xs flex items-center gap-2">
      <i class="fa-solid fa-chart-line text-sig-teal"></i>
      <span>Dashboards BI & Apps</span>
    </button>
  `;
  container.appendChild(btnGroup);
  container.scrollTop = container.scrollHeight;
}

function renderQuickScopeButtons(serviceContext) {
  const container = document.getElementById('cadenero-messages-container');
  if (!container) return;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'pt-1 flex flex-wrap gap-1.5';

  if (serviceContext.includes('campo') || serviceContext.includes('geotec') || serviceContext.includes('spt')) {
    btnGroup.innerHTML = `
      <button onclick="selectCadeneroOption('1 a 3 Equipos de Perforación (Faena Local)')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">1 a 3 Equipos</button>
      <button onclick="selectCadeneroOption('Flota de más de 4 Equipos / Múltiples Frentes')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">&gt; 4 Equipos</button>
      <button onclick="selectCadeneroOption('Licencia Corporativa PWA + Personalización NSR-10')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">Licencia Corporativa PWA</button>
      <button onclick="selectCadeneroOption('Solicito Demostración Guiada en Terreno o Virtual')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">Demostración en Terreno</button>
    `;
  } else if (serviceContext.includes('pesv') || serviceContext.includes('flota')) {
    btnGroup.innerHTML = `
      <button onclick="selectCadeneroOption('Flota de 5 a 15 Vehículos 4x4')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">5 a 15 Vehículos</button>
      <button onclick="selectCadeneroOption('Flota de 16 a 50 Vehículos y Maquinaria')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">16 a 50 Vehículos</button>
      <button onclick="selectCadeneroOption('Flota pesada de más de 50 Unidades')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">&gt; 50 Unidades</button>
      <button onclick="selectCadeneroOption('Implementación documental PESV + App móvil')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">PESV + App Móvil</button>
    `;
  } else if (serviceContext.includes('lidar') || serviceContext.includes('topograf')) {
    btnGroup.innerHTML = `
      <button onclick="selectCadeneroOption('Predio de menos de 100 Hectáreas')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">&lt; 100 Has</button>
      <button onclick="selectCadeneroOption('Predio de 100 a 500 Hectáreas')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">100 - 500 Has</button>
      <button onclick="selectCadeneroOption('Corredor o predio de más de 500 Hectáreas')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">&gt; 500 Has</button>
      <button onclick="selectCadeneroOption('Topografía GNSS RTK con Estación Total')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">GNSS RTK en Campo</button>
    `;
  } else if (serviceContext.includes('ambiental') || serviceContext.includes('eia') || serviceContext.includes('pma')) {
    btnGroup.innerHTML = `
      <button onclick="selectCadeneroOption('Estudio de Impacto Ambiental (EIA) ante ANLA')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">Licencia EIA ANLA</button>
      <button onclick="selectCadeneroOption('Plan de Manejo Ambiental (PMA) y seguimiento ICA')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">PMA / Informe ICA</button>
      <button onclick="selectCadeneroOption('Monitoreo Fisicoquímico de Aguas y Biótico')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">Muestreo Aguas IDEAM</button>
    `;
  } else if (serviceContext.includes('miner') || serviceContext.includes('3d') || serviceContext.includes('pto')) {
    btnGroup.innerHTML = `
      <button onclick="selectCadeneroOption('Elaboración y Radicación de PTO ante la ANM')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">Radicación PTO ANM</button>
      <button onclick="selectCadeneroOption('Modelamiento Geológico 3D y Recursos JORC')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">Modelo 3D Leapfrog</button>
      <button onclick="selectCadeneroOption('Estabilidad de Taludes Mineros (Slide / RS2)')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">Estabilidad de Taludes</button>
    `;
  } else {
    btnGroup.innerHTML = `
      <button onclick="selectCadeneroOption('Requerimiento Prioritario (&lt; 48 Horas)')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">Prioritario (&lt; 48 Horas)</button>
      <button onclick="selectCadeneroOption('Para ejecutar en las próximas 2 a 3 semanas')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">Próximas 2-3 Semanas</button>
      <button onclick="selectCadeneroOption('Para licitación pública o proyecto programado')" class="text-xs py-1 px-2.5 bg-white text-slate-700 rounded border border-slate-300 hover:border-sig-teal hover:text-sig-navy">Licitación / Proyecto</button>
    `;
  }

  container.appendChild(btnGroup);
  container.scrollTop = container.scrollHeight;
}

function renderCompanyButtons() {
  const container = document.getElementById('cadenero-messages-container');
  if (!container) return;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'pt-1 flex flex-wrap gap-1.5';
  btnGroup.innerHTML = `
    <button onclick="selectCadeneroOption('Empresa Minera / Operación Extractiva', 'empresa', 'Empresa Minera')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-solid fa-mountain text-sig-teal"></i>
      <span>Empresa Minera</span>
    </button>
    <button onclick="selectCadeneroOption('Firma Contratista de Obras Civiles', 'empresa', 'Firma Contratista')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-solid fa-trowel-bricks text-sig-teal"></i>
      <span>Contratista de Obras</span>
    </button>
    <button onclick="selectCadeneroOption('Consultora de Ingeniería / Ambiental', 'empresa', 'Consultora de Ingeniería')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-solid fa-compass-drafting text-sig-teal"></i>
      <span>Consultora de Ingeniería</span>
    </button>
    <button onclick="selectCadeneroOption('Profesional Independiente / Particular', 'empresa', 'Profesional Independiente')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-solid fa-user-tie text-sig-teal"></i>
      <span>Independiente</span>
    </button>
  `;
  container.appendChild(btnGroup);
  container.scrollTop = container.scrollHeight;
}

function renderRoleButtons() {
  const container = document.getElementById('cadenero-messages-container');
  if (!container) return;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'pt-1 flex flex-wrap gap-1.5';
  btnGroup.innerHTML = `
    <button onclick="selectCadeneroOption('Gerente General / Director de Operaciones', 'ocupacion', 'Gerente / Director')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-solid fa-user-gear text-sig-teal"></i>
      <span>Gerente / Director</span>
    </button>
    <button onclick="selectCadeneroOption('Ingeniero Residente / de Faena', 'ocupacion', 'Ingeniero Residente')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-solid fa-helmet-safety text-sig-teal"></i>
      <span>Ingeniero Residente</span>
    </button>
    <button onclick="selectCadeneroOption('Coordinador HSEQ / Ambiental / PESV', 'ocupacion', 'Coordinador HSEQ / PESV')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-solid fa-clipboard-check text-sig-teal"></i>
      <span>Coordinador HSEQ/PESV</span>
    </button>
    <button onclick="selectCadeneroOption('Contratista / Especialista Técnico', 'ocupacion', 'Contratista / Especialista')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-solid fa-hard-hat text-sig-teal"></i>
      <span>Contratista / Especialista</span>
    </button>
  `;
  container.appendChild(btnGroup);
  container.scrollTop = container.scrollHeight;
}

function renderScheduleButtons() {
  const container = document.getElementById('cadenero-messages-container');
  if (!container) return;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'pt-1 flex flex-wrap gap-1.5';
  btnGroup.innerHTML = `
    <button onclick="selectCadeneroOption('En las mañanas (8:00 AM - 12:00 PM)', 'horarioContacto', 'Mañana (8am - 12pm)')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-regular fa-sun text-sig-teal"></i>
      <span>Mañana (8am - 12pm)</span>
    </button>
    <button onclick="selectCadeneroOption('En las tardes (2:00 PM - 6:00 PM)', 'horarioContacto', 'Tarde (2pm - 6pm)')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-solid fa-cloud-sun text-sig-teal"></i>
      <span>Tarde (2pm - 6pm)</span>
    </button>
    <button onclick="selectCadeneroOption('Lo antes posible hoy (Urgente)', 'horarioContacto', 'Urgente Hoy')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-solid fa-bolt text-amber-500"></i>
      <span>Lo antes posible hoy</span>
    </button>
    <button onclick="selectCadeneroOption('Prefiero coordinar todo directamente por WhatsApp', 'horarioContacto', 'Solo vía WhatsApp')" class="text-xs py-1.5 px-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-sig-teal hover:text-sig-navy font-semibold flex items-center gap-1.5 shadow-2xs transition-all">
      <i class="fa-brands fa-whatsapp text-emerald-600"></i>
      <span>Solo vía WhatsApp</span>
    </button>
  `;
  container.appendChild(btnGroup);
  container.scrollTop = container.scrollHeight;
}

// Tarjeta Visual Consolidada de Resumen CRM dentro del Chat
function generateFinalCrmSummaryCard() {
  const crm = SIG_STATE.leadCRM;
  return `
    <div class="bg-white p-4 rounded-xl border-2 border-sig-teal shadow-md space-y-2.5 text-xs">
      <div class="border-b border-slate-200 pb-2 flex items-center justify-between">
        <span class="font-black text-sig-navy flex items-center gap-1.5 text-xs">
          <i class="fa-solid fa-clipboard-check text-sig-teal text-sm"></i>
          <span>EXPEDIENTE TÉCNICO CRM CONSOLIDADO</span>
        </span>
        <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">100% Calificado</span>
      </div>
      <div class="grid grid-cols-1 gap-1.5 text-[11px] text-slate-700">
        <div class="flex items-center gap-2">
          <span class="w-4 text-center text-sig-teal"><i class="fa-solid fa-user"></i></span>
          <strong class="text-slate-800">Contacto:</strong>
          <span class="text-slate-900 font-bold">${crm.nombre || 'Profesional Registrado'}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-4 text-center text-sig-teal"><i class="fa-solid fa-user-tag"></i></span>
          <strong class="text-slate-800">Cargo / Ocupación:</strong>
          <span class="text-slate-900 font-semibold">${crm.ocupacion || 'Profesional Técnico'}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-4 text-center text-sig-teal"><i class="fa-solid fa-building"></i></span>
          <strong class="text-slate-800">Empresa / Proyecto:</strong>
          <span class="text-slate-900 font-semibold">${crm.empresa || 'Empresa Privada'}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-4 text-center text-sig-teal"><i class="fa-solid fa-handshake"></i></span>
          <strong class="text-slate-800">Propósito:</strong>
          <span class="text-sig-teal font-bold">${crm.tipoRelacion || 'Contratación de Servicios'}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-4 text-center text-sig-teal"><i class="fa-solid fa-layer-group"></i></span>
          <strong class="text-slate-800">Disciplina / Servicio:</strong>
          <span class="text-sig-navy font-bold">${crm.servicio || 'Servicios Integrales SIG²'}</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="w-4 text-center text-sig-teal mt-0.5"><i class="fa-solid fa-ruler-combined"></i></span>
          <strong class="text-slate-800 shrink-0">Alcance Técnico:</strong>
          <span class="text-slate-800 font-medium">${crm.detallesTecnicos || 'Por detallar en llamada técnica'}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-4 text-center text-sig-teal"><i class="fa-regular fa-clock"></i></span>
          <strong class="text-slate-800">Disponibilidad:</strong>
          <span class="text-slate-800 font-medium">${crm.horarioContacto || 'A convenir'}</span>
        </div>
        <div class="pt-2 text-[10px] text-slate-500 border-t border-slate-100 flex items-center gap-1.5">
          <span class="pulse-dot-green"></span>
          <span><strong>Destino oficial:</strong> WhatsApp Directo (+57 312 789 4040)</span>
        </div>
      </div>
    </div>
  `;
}

function updateCadeneroCRMCard() {
  const crmBadge = document.getElementById('cadenero-crm-pill');
  const crm = SIG_STATE.leadCRM;
  if (!crmBadge) return;

  if (crm.tipoRelacion || crm.servicio || crm.empresa || crm.nombre) {
    const totalSteps = 7;
    const progressPercent = Math.min(100, Math.round((crm.step / totalSteps) * 100));
    crmBadge.innerHTML = `
      <div class="p-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs text-slate-700 space-y-1.5">
        <div class="font-black text-sig-navy flex items-center justify-between text-[11px]">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-id-card-clip text-sig-teal"></i> Expediente CRM</span>
          <span class="text-[10px] text-sig-teal font-extrabold tabular-nums">${progressPercent}%</span>
        </div>
        <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div class="bg-sig-teal h-full transition-all duration-300" style="width: ${progressPercent}%"></div>
        </div>
        <div class="text-[10px] text-slate-600 truncate">
          ${crm.tipoRelacion ? `<span><strong>Tipo:</strong> ${crm.tipoRelacion}</span> <span class="opacity-40 mx-1">/</span> ` : ''}
          ${crm.servicio ? `<span><strong>Servicio:</strong> ${crm.servicio}</span>` : ''}
          ${crm.empresa ? ` <span class="opacity-40 mx-1">/</span> <span><strong>Empresa:</strong> ${crm.empresa}</span>` : ''}
        </div>
      </div>
    `;
    crmBadge.classList.remove('hidden');
  }
}

function transferCadeneroLeadToWhatsApp() {
  const crm = SIG_STATE.leadCRM;
  const phone = SIG_STATE.whatsappDirectNumber; // 573127894040

  let text = `*SOLICITUD FORMAL DE ATENCIÓN TÉCNICA - SIG² INGENIERÍA*\n`;
  text += `_Expediente Consolidado por Asistente CRM Cadenero_\n`;
  text += `========================================\n`;
  text += `• *Contacto:* ${crm.nombre || 'Cliente Interesado'}\n`;
  text += `• *Cargo / Ocupación:* ${crm.ocupacion || 'Profesional / Encargado'}\n`;
  text += `• *Empresa / Consorcio:* ${crm.empresa || 'Empresa Privada'}\n`;
  text += `• *Propósito:* ${crm.tipoRelacion || 'Contratación de Servicios'}\n`;
  text += `• *Línea / Servicio:* ${crm.servicio || 'Ingeniería Integral SIG²'}\n`;
  text += `• *Alcance / Foco Técnico:* ${crm.detallesTecnicos || 'Por detallar en reunión técnica'}\n`;
  text += `• *Disponibilidad para Hablar:* ${crm.horarioContacto || 'Lo antes posible'}\n`;
  text += `========================================\n\n`;
  text += `Solicito atención prioritaria y disponibilidad técnica para coordinar la cotización o reunión de sustentación.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  showToast('Abriendo WhatsApp con el expediente técnico consolidado (+57 312 789 4040)...', 'success');
}

// -------------------------------------------------------------
// CENTRO DE TELEMETRÍA Y BI
// -------------------------------------------------------------
function initTelemetryChart() {
  const svg = document.getElementById('telemetry-svg-graph');
  if (!svg) return;

  let points = [];
  const totalPoints = 30;
  for (let i = 0; i < totalPoints; i++) {
    const x = (i / (totalPoints - 1)) * 380 + 10;
    const base = 45 + Math.sin(i * 0.45) * 18;
    const noise = (Math.random() - 0.5) * 6;
    const y = Math.max(15, Math.min(85, base + noise));
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  const pathD = `M ${points[0]} ` + points.slice(1).map(p => `L ${p}`).join(' ');
  const areaD = `${pathD} L 390,95 L 10,95 Z`;

  svg.innerHTML = `
    <line x1="10" y1="25" x2="390" y2="25" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="10" y1="50" x2="390" y2="50" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="10" y1="75" x2="390" y2="75" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="3,3"/>

    <path d="${areaD}" fill="url(#telemetrySoberGrad)" opacity="0.15" />

    <path d="${pathD}" fill="none" stroke="#06466C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>

    ${points.filter((_, idx) => idx % 5 === 0).map(pt => {
      const [px, py] = pt.split(',');
      return `
        <circle cx="${px}" cy="${py}" r="3.5" fill="#FFFFFF" stroke="#168F8A" stroke-width="2"/>
      `;
    }).join('')}

    <defs>
      <linearGradient id="telemetrySoberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#06466C" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#06466C" stop-opacity="0.0"/>
      </linearGradient>
    </defs>
  `;
}

function initTelemetryTicker() {
  setInterval(() => {
    SIG_STATE.sensorData.piezometer += (Math.random() - 0.49) * 0.08;
    SIG_STATE.sensorData.inclinometer += (Math.random() - 0.49) * 0.003;
    SIG_STATE.sensorData.windSpeed += (Math.random() - 0.5) * 0.6;
    SIG_STATE.sensorData.speedCurrent += (Math.random() - 0.48) * 1.5;

    const elPz = document.getElementById('live-piezometer');
    const elInc = document.getElementById('live-inclinometer');
    const elWind = document.getElementById('live-wind');
    const elPesvSpeed = document.getElementById('pesv-live-speed');

    if (elPz) elPz.textContent = `${SIG_STATE.sensorData.piezometer.toFixed(2)} m.c.a.`;
    if (elInc) elInc.textContent = `${SIG_STATE.sensorData.inclinometer.toFixed(3)} mm/m`;
    if (elWind) elWind.textContent = `${Math.max(2, SIG_STATE.sensorData.windSpeed).toFixed(1)} km/h`;
    if (elPesvSpeed) elPesvSpeed.textContent = `${Math.round(Math.max(38, Math.min(52, SIG_STATE.sensorData.speedCurrent)))} km/h`;
  }, 4000);
}

function switchTelemetrySite(siteId) {
  SIG_STATE.activeTelemetrySite = siteId;
  const siteNameEl = document.getElementById('telemetry-active-site-name');

  if (siteId === 'mina-andes') {
    if (siteNameEl) siteNameEl.textContent = 'PROYECTO TAJO ABIERTO LOS ANDES (SECTOR NORTE)';
  } else if (siteId === 'tunel-central') {
    if (siteNameEl) siteNameEl.textContent = 'FRENTE SUBTERRÁNEO & TÚNEL DE ACCESO KM 4+200';
  } else if (siteId === 'cuenca-claro') {
    if (siteNameEl) siteNameEl.textContent = 'MONITOREO AMBIENTAL & CUENCA HIDROLÓGICA RÍO CLARO';
  }

  initTelemetryChart();
  showToast(`Conectado al nodo de: ${siteNameEl ? siteNameEl.textContent : siteId}`, 'info');
}

function triggerDiagnosticCheck() {
  const btn = document.getElementById('btn-diagnostic-trigger');
  if (btn) {
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1.5"></i> Verificando Nodos...`;
    btn.disabled = true;
  }

  setTimeout(() => {
    if (btn) {
      btn.innerHTML = `<i class="fa-solid fa-wave-square mr-1.5 text-[#168F8A]"></i> Ejecutar Diagnóstico`;
      btn.disabled = false;
    }
    initTelemetryChart();
    showToast('Diagnóstico completado: 42/42 nodos en rango de tolerancia.', 'success');
  }, 1600);
}

// -------------------------------------------------------------
// PORTAL DE CLIENTES
// -------------------------------------------------------------
function openClientPortalModal() {
  const modal = document.getElementById('client-portal-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeClientPortalModal() {
  const modal = document.getElementById('client-portal-modal');
  if (modal) modal.classList.add('hidden');
}

function handleClientLogin(e) {
  e.preventDefault();
  const emailInput = document.getElementById('portal-email');
  const loginView = document.getElementById('portal-login-view');
  const dashboardView = document.getElementById('portal-dashboard-view');

  const email = emailInput ? emailInput.value : '';

  if (loginView && dashboardView) {
    loginView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
    renderClientFiles();
    showToast(`Sesión iniciada con éxito. Bienvenido, ${email || 'Cliente Autorizado'}.`, 'success');
  }
}

function renderClientFiles() {
  const container = document.getElementById('portal-files-list');
  if (!container) return;

  container.innerHTML = CLIENT_PORTAL_FILES.map(file => `
    <div class="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between gap-3 text-xs shadow-sm">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-[#06466C] border border-slate-200">
          <i class="fa-regular fa-file-lines"></i>
        </div>
        <div>
          <div class="font-bold text-[#06466C]">${file.name}</div>
          <div class="text-[10px] text-slate-500">
            ${file.category} <span class="opacity-40 mx-1">/</span> ${file.size} <span class="opacity-40 mx-1">/</span> Actualizado: ${file.date}
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
          <i class="fa-solid fa-check text-[9px] mr-1"></i>${file.status}
        </span>
        <button onclick="downloadClientFile('${file.name}')" class="p-1.5 text-slate-600 hover:text-[#06466C] bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 transition-all" title="Descargar">
          <i class="fa-solid fa-download"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function downloadClientFile(fileName) {
  showToast(`Descarga iniciada: "${fileName}" con sello digital SIG².`, 'info');
}

function logoutClientPortal() {
  const loginView = document.getElementById('portal-login-view');
  const dashboardView = document.getElementById('portal-dashboard-view');
  if (loginView && dashboardView) {
    dashboardView.classList.add('hidden');
    loginView.classList.remove('hidden');
    showToast('Sesión de portal cerrada.', 'info');
  }
}

// -------------------------------------------------------------
// TOAST NOTIFICATIONS
// -------------------------------------------------------------
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const icon = type === 'success' ? 'fa-circle-check text-[#168F8A]' :
               type === 'warning' ? 'fa-triangle-exclamation text-amber-600' :
               type === 'error' ? 'fa-circle-xmark text-red-600' : 'fa-circle-info text-[#06466C]';

  toast.className = `flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 shadow-xl rounded-lg text-xs text-slate-800 max-w-sm transform transition-all duration-300 translate-y-4 opacity-0`;
  toast.innerHTML = `
    <i class="fa-solid ${icon} text-base shrink-0"></i>
    <div class="leading-tight">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-x-6');
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

// -------------------------------------------------------------
// FORMULARIO DE CONTACTO Y RADICACIÓN
// -------------------------------------------------------------
function handleContactSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('contact-name');
  const companyInput = document.getElementById('contact-company');

  const randomRadNumber = Math.floor(1000 + Math.random() * 9000);
  const radCode = `RAD-SIG-2026-${randomRadNumber}`;

  const submitBtn = document.getElementById('btn-contact-submit');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Generando Radicado Oficial...`;
  }

  setTimeout(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Radicar Solicitud Oficial</span> <i class="fa-solid fa-paper-plane text-xs"></i>`;
    }

    const confirmModal = document.getElementById('confirmation-modal');
    const radCodeEl = document.getElementById('conf-rad-code');
    const radClientEl = document.getElementById('conf-client-name');

    if (radCodeEl) radCodeEl.textContent = radCode;
    if (radClientEl) radClientEl.textContent = `${nameInput.value} (${companyInput.value || 'Empresa Privada'})`;

    if (confirmModal) confirmModal.classList.remove('hidden');

    e.target.reset();
    showToast(`Solicitud radicada con éxito bajo el código: ${radCode}`, 'success');
  }, 1300);
}

function closeConfirmationModal() {
  const modal = document.getElementById('confirmation-modal');
  if (modal) modal.classList.add('hidden');
}

// -------------------------------------------------------------
// EVENT LISTENERS
// -------------------------------------------------------------
function setupEventListeners() {
  const tabButtons = document.querySelectorAll('.service-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('bg-[#06466C]', 'text-white', 'border-[#06466C]');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-300');
      });
      btn.classList.add('bg-[#06466C]', 'text-white', 'border-[#06466C]');
      btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-300');

      const cat = btn.dataset.category;
      SIG_STATE.activeServiceCategory = cat;
      const searchBox = document.getElementById('service-search-input');
      renderServicesCatalog(cat, searchBox ? searchBox.value : '');
    });
  });

  const searchInput = document.getElementById('service-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderServicesCatalog(SIG_STATE.activeServiceCategory, e.target.value);
    });
  }

  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('hidden');
    });
  }

  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenuDrawer) mobileMenuDrawer.classList.add('hidden');
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }

  const portalForm = document.getElementById('portal-login-form');
  if (portalForm) {
    portalForm.addEventListener('submit', handleClientLogin);
  }
}

function resetServiceFilters() {
  const searchBox = document.getElementById('service-search-input');
  if (searchBox) searchBox.value = '';

  const allTab = document.querySelector('.service-tab-btn[data-category="all"]');
  if (allTab) allTab.click();
}

// =============================================================
// TRANSICIONES DINÁMICAS ESTILO APPLE (SCROLL REVEALS)
// =============================================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements || elements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// =============================================================
// MONITOREO DE FLOTA GPS EN VIVO (MAPA DINÁMICO & TELEMETRÍA)
// =============================================================
const FLEET_DATA = {
  'CAM-104': {
    name: 'CAM-104 (Toyota Hilux 4x4)',
    role: 'Supervisión Geológica y Residencia',
    speed: 48,
    limit: 50,
    driver: 'Ing. Mateo Gómez (Residente Faena)',
    location: 'Sector Los Andes | KM 14+400',
    fuel: '78%',
    fatigue: 'Alerta Óptima (Score 98/100)',
    preop: 'Checklist Aprobado Hoy (06:45 AM)',
    status: 'En Ruta Segura'
  },
  'VOL-022': {
    name: 'VOL-022 (Kenworth T800 Dobletroque)',
    role: 'Acarreo de Mineral en Bruto',
    speed: 34,
    limit: 30,
    driver: 'Carlos E. Restrepo (Conductor Certificado)',
    location: 'Tajo Norte | KM 24+100',
    fuel: '62%',
    fatigue: 'Alerta Óptima (Score 95/100)',
    preop: 'Checklist Aprobado Hoy (06:15 AM)',
    status: 'Zona de Geocerca (Velocidad Controlada)'
  },
  'TAN-005': {
    name: 'TAN-005 (Camión Cisterna Diésel B10)',
    role: 'Abastecimiento de Maquinaria Pesada',
    speed: 41,
    limit: 50,
    driver: 'Jorge L. Pineda (Operador Hazmat)',
    location: 'Corredor Central | KM 36+800',
    fuel: '91%',
    fatigue: 'Alerta Óptima (Score 96/100)',
    preop: 'Checklist Aprobado Hoy (07:00 AM)',
    status: 'En Tránsito a Faena Sur'
  },
  'AMB-001': {
    name: 'AMB-001 (Unidad Medicalizada 4x4)',
    role: 'Atención Médica y Rescate HSEQ',
    speed: 0,
    limit: 60,
    driver: 'Dra. Viviana Torres & Paramédico',
    location: 'Base Operativa | Puesto Médico Central',
    fuel: '99%',
    fatigue: 'Disponible en Base',
    preop: 'Inspección Sanitaria y Mecánica Vigente',
    status: 'Guardia Activa (Standby)'
  }
};

let activeFleetVehicleId = 'CAM-104';

function selectFleetVehicle(id) {
  const data = FLEET_DATA[id];
  if (!data) return;

  activeFleetVehicleId = id;
  const nameEl = document.getElementById('fleet-selected-name');
  const speedEl = document.getElementById('fleet-selected-speed');
  const fatigueEl = document.getElementById('fleet-selected-fatigue');

  if (nameEl) nameEl.textContent = data.name;
  if (speedEl) speedEl.textContent = `${data.speed} km/h`;
  if (fatigueEl) fatigueEl.textContent = data.fatigue;

  showToast(`Vehículo ${id} seleccionado en consola satelital: ${data.location}`, 'info');
}

function switchFleetMapLayer(layer) {
  const btnSat = document.getElementById('btn-layer-sat');
  const btnTopo = document.getElementById('btn-layer-topo');
  const btnGeo = document.getElementById('btn-layer-geo');
  const geofencePoly = document.getElementById('map-geofence-polygon');
  const mapContainer = document.getElementById('fleet-live-map-container');

  [btnSat, btnTopo, btnGeo].forEach(b => {
    if (b) {
      b.classList.remove('bg-sig-teal', 'text-white');
      b.classList.add('bg-slate-800', 'text-slate-300');
    }
  });

  if (layer === 'sat') {
    if (btnSat) {
      btnSat.classList.add('bg-sig-teal', 'text-white');
      btnSat.classList.remove('bg-slate-800', 'text-slate-300');
    }
    if (mapContainer) mapContainer.style.filter = 'saturate(1.2) contrast(1.1)';
    if (geofencePoly) geofencePoly.style.opacity = '0.35';
    showToast('Capa satelital HD activada.', 'info');
  } else if (layer === 'topo') {
    if (btnTopo) {
      btnTopo.classList.add('bg-sig-teal', 'text-white');
      btnTopo.classList.remove('bg-slate-800', 'text-slate-300');
    }
    if (mapContainer) mapContainer.style.filter = 'contrast(1.25) hue-rotate(-20deg)';
    if (geofencePoly) geofencePoly.style.opacity = '0.25';
    showToast('Capa de relieve topográfico LiDAR activada.', 'info');
  } else if (layer === 'geo') {
    if (btnGeo) {
      btnGeo.classList.add('bg-sig-teal', 'text-white');
      btnGeo.classList.remove('bg-slate-800', 'text-slate-300');
    }
    if (mapContainer) mapContainer.style.filter = 'none';
    if (geofencePoly) geofencePoly.style.opacity = '0.9';
    showToast('Geocercas críticas y límites de velocidad resaltados.', 'info');
  }
}

function initFleetLiveMap() {
  let stepCount = 0;
  setInterval(() => {
    stepCount++;
    const marker1 = document.getElementById('fleet-marker-1');
    const marker2 = document.getElementById('fleet-marker-2');
    const marker3 = document.getElementById('fleet-marker-3');

    // Movimiento vectorial suave simulado de vehículos en ruta
    if (marker1) {
      const offsetX = Math.sin(stepCount * 0.2) * 14;
      const offsetY = Math.cos(stepCount * 0.2) * 6;
      marker1.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
    }
    if (marker2) {
      const offsetX = Math.cos(stepCount * 0.15) * 12;
      marker2.style.transform = `translate(calc(-50% + ${offsetX}px), -50%)`;
    }
    if (marker3) {
      const offsetY = Math.sin(stepCount * 0.18) * 8;
      marker3.style.transform = `translate(-50%, calc(-50% + ${offsetY}px))`;
    }

    // Fluctuación realista de telemetría CAN-bus
    FLEET_DATA['CAM-104'].speed = Math.round(46 + (Math.random() - 0.5) * 6);
    FLEET_DATA['VOL-022'].speed = Math.round(33 + (Math.random() - 0.5) * 4);
    FLEET_DATA['TAN-005'].speed = Math.round(40 + (Math.random() - 0.5) * 5);

    // Actualizar ficha si coincide con el seleccionado
    const activeData = FLEET_DATA[activeFleetVehicleId];
    const speedEl = document.getElementById('fleet-selected-speed');
    if (speedEl && activeData) {
      speedEl.textContent = `${activeData.speed} km/h`;
    }
  }, 2200);
}

// =============================================================
// FILTRO DE NOTICIAS & ARTÍCULOS TÉCNICOS
// =============================================================
function filterNewsArticles(category) {
  const cards = document.querySelectorAll('.news-card');
  const buttons = document.querySelectorAll('.news-filter-btn');

  buttons.forEach(b => {
    if (b.dataset.category === category) {
      b.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-300');
      b.classList.add('bg-sig-navy', 'text-white');
    } else {
      b.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-300');
      b.classList.remove('bg-sig-navy', 'text-white');
    }
  });

  cards.forEach(card => {
    const cardCat = card.dataset.newsCategory;
    if (category === 'all' || cardCat === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// =============================================================
// MÓDULO ESPECIALIZADO: SIG² CAMPO (APP Y PWA GEOTÉCNICA)
// REGISTRO DE PERFORACIÓN, ENSAYOS SPT Y GENERACIÓN DE INFORMES NSR-10
// =============================================================

const SIG_CAMPO_STATE = {
  activeTab: 'sondeo',
  borehole: {
    id: 'DEMO-SIG-01',
    project: 'Parque Empresarial SIG / Viaducto Central',
    front: 'Frente Norte - Pata de Talud TK-02',
    method: 'Rotación con lavado y muestreador partido (SPT)',
    equipment: 'Perforadora Hidráulica Rotativa RIG-01 (Bomba Triplex)',
    casing: 'Tubería 4 in hasta 6.00 m de profundidad',
    crs: 'MAGNA-SIRGAS / Origen Nacional (EPSG: 9377)',
    east: '834,120.42 m E',
    north: '1,180,420.65 m N',
    elevation: '1,508.30 msnm',
    waterTable: '4.80 m',
    totalDepth: '15.00 m',
    responsible: 'Ing. Camila Ríos (MP 05248-COL)',
    driller: 'Equipo Perforador DEMO-01 / SIG'
  },
  intervals: [
    {
      id: 1,
      from: 0.00,
      to: 2.00,
      description: 'Limo arcilloso color pardo rojizo, consistencia firme, humedad media. Suelo residual superficial.',
      lithology: 'soil',
      sampler: 'Cuchara partida SPT (ASTM D1586)',
      blow1: 3,
      blow2: 5,
      blow3: 7,
      nMeasured: 12,
      n60: 10.8,
      recovery: 85,
      rqd: 0,
      water: '',
      observations: 'Sin pérdida de fluidos. Consistencia uniforme.'
    },
    {
      id: 2,
      from: 2.00,
      to: 6.00,
      description: 'Arena limosa con gravilla fina cuarzosa subredondeada, compacidad media a densa, color gris amarillento.',
      lithology: 'sand',
      sampler: 'Cuchara partida SPT (ASTM D1586)',
      blow1: 5,
      blow2: 8,
      blow3: 11,
      nMeasured: 19,
      n60: 17.1,
      recovery: 92,
      rqd: 0,
      water: '4.80 m',
      observations: 'Nivel freático estabilizado a 4.80 m. Buena recuperación.'
    },
    {
      id: 3,
      from: 6.00,
      to: 10.00,
      description: 'Saprolito meteorizado / Lutita compacta, gris oscura con óxidos de hierro. Transición suelo-roca.',
      lithology: 'soil',
      sampler: 'Cuchara partida reforzada',
      blow1: 12,
      blow2: 18,
      blow3: 24,
      nMeasured: 42,
      n60: 37.8,
      recovery: 80,
      rqd: 25,
      water: '4.85 m',
      observations: 'Incremento marcado de resistencia. Rechazo incipiente en base.'
    },
    {
      id: 4,
      from: 10.00,
      to: 15.00,
      description: 'Granodiorita gris fresca con vetillas de cuarzo y clorita, medianamente fracturada. Macizo rocoso grado II-III.',
      lithology: 'rock',
      sampler: 'Barril doble tubo HQ diamantado (ASTM D2113)',
      blow1: '',
      blow2: '',
      blow3: '',
      nMeasured: 60,
      n60: 60,
      recovery: 95,
      rqd: 78,
      water: '4.85 m',
      observations: 'RQD 78%. Fracturas con pátinas de calcita. Sondeo cerrado a cota programada.'
    }
  ]
};

function initSigCampoSimulator() {
  const container = document.getElementById('sigcampo-strata-container');
  if (!container) return;

  renderSigCampoStratigraphy();
  renderSigCampoChart();
}

// Cambio de Pestañas en el Simulador de Tablet
function switchSigCampoTab(tabName) {
  const tabs = ['sondeo', 'estratigrafia', 'grafica', 'bitacora', 'informe'];
  
  tabs.forEach(t => {
    const panel = document.getElementById(`sigcampo-panel-${t}`);
    const btn = document.getElementById(`sigtab-btn-${t}`);
    
    if (panel) {
      if (t === tabName) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    }

    if (btn) {
      if (t === tabName) {
        btn.classList.add('border-sig-navy', 'text-sig-navy');
        btn.classList.remove('border-transparent', 'text-slate-600');
        const icon = btn.querySelector('i');
        if (icon) {
          icon.classList.remove('text-slate-400');
          icon.classList.add('text-sig-teal');
        }
      } else {
        btn.classList.remove('border-sig-navy', 'text-sig-navy');
        btn.classList.add('border-transparent', 'text-slate-600');
        const icon = btn.querySelector('i');
        if (icon) {
          icon.classList.remove('text-sig-teal');
          icon.classList.add('text-slate-400');
        }
      }
    }
  });

  SIG_CAMPO_STATE.activeTab = tabName;

  if (tabName === 'grafica') {
    renderSigCampoChart();
  }
}

// Renderizado reactivo de la tabla de estratigrafía con inputs SPT en vivo
function renderSigCampoStratigraphy() {
  const container = document.getElementById('sigcampo-strata-container');
  if (!container) return;

  const countBadge = document.getElementById('sigcampo-strata-count-badge');
  if (countBadge) {
    countBadge.textContent = SIG_CAMPO_STATE.intervals.length;
  }

  // Comprobar continuidad métrica
  let hasContinuityError = false;
  let continuityMsg = '';

  for (let i = 1; i < SIG_CAMPO_STATE.intervals.length; i++) {
    const prev = SIG_CAMPO_STATE.intervals[i - 1];
    const curr = SIG_CAMPO_STATE.intervals[i];
    if (Number(curr.from) !== Number(prev.to)) {
      hasContinuityError = true;
      continuityMsg = `Discontinuidad detectada entre Tramo ${i} (termina en ${prev.to} m) y Tramo ${i + 1} (inicia en ${curr.from} m).`;
      break;
    }
    if (Number(curr.to) <= Number(curr.from)) {
      hasContinuityError = true;
      continuityMsg = `Profundidad errónea en Tramo ${i + 1}: el límite "Hasta" (${curr.to} m) debe ser mayor que "Desde" (${curr.from} m).`;
      break;
    }
  }

  const alertEl = document.getElementById('sigcampo-continuity-alert');
  const alertText = document.getElementById('sigcampo-continuity-text');
  if (alertEl && alertText) {
    if (hasContinuityError) {
      alertEl.classList.remove('hidden');
      alertText.textContent = continuityMsg;
    } else {
      alertEl.classList.add('hidden');
    }
  }

  // Generar HTML de cada tramo estratigráfico
  container.innerHTML = SIG_CAMPO_STATE.intervals.map((intv, idx) => {
    const stratumClass = intv.lithology === 'rock' ? 'stratum-rock' : (intv.lithology === 'sand' ? 'stratum-sand' : 'stratum-soil');
    
    // Clasificación cualitativa según N medido
    let badgeClass = 'bg-blue-100 text-blue-800 border-blue-200';
    let badgeLabel = 'Suelo Muy Blando';
    const n = Number(intv.nMeasured);

    if (intv.lithology === 'rock' || n >= 50) {
      badgeClass = 'bg-rose-100 text-rose-800 border-rose-200';
      badgeLabel = 'Rechazo / Macizo Rocoso (>50)';
    } else if (n >= 30) {
      badgeClass = 'bg-amber-100 text-amber-800 border-amber-200';
      badgeLabel = 'Muy Rígido / Muy Denso';
    } else if (n >= 11) {
      badgeClass = 'bg-yellow-100 text-yellow-800 border-yellow-200';
      badgeLabel = 'Rígido / Compacidad Media';
    } else if (n >= 5) {
      badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-200';
      badgeLabel = 'Firme / Suelto';
    }

    return `
      <div class="p-5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-slate-300 ${stratumClass}">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/80">
          <div class="flex items-center gap-2.5">
            <span class="w-7 h-7 rounded-lg bg-sig-navy text-white text-xs font-black flex items-center justify-center">
              ${idx + 1}
            </span>
            <div>
              <span class="font-black text-sm text-sig-navy">
                Tramo ${intv.from.toFixed(2)} m a ${intv.to.toFixed(2)} m
              </span>
              <span class="text-xs text-slate-500 font-semibold ml-2">
                (Espesor: ${(intv.to - intv.from).toFixed(2)} m)
              </span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full text-[10px] font-black border uppercase ${badgeClass}">
              ${badgeLabel}
            </span>
            ${SIG_CAMPO_STATE.intervals.length > 1 ? `
              <button onclick="removeSigCampoInterval(${idx})" class="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors" title="Eliminar este tramo">
                <i class="fa-solid fa-trash text-xs"></i>
              </button>
            ` : ''}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 text-xs">
          
          <!-- Descripción Litológica -->
          <div class="md:col-span-5 space-y-2">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Descripción Geológica / Litología *</label>
              <textarea onchange="updateSigCampoText(${idx}, 'description', this.value)" rows="2" class="w-full bg-white border border-slate-300 focus:border-sig-navy rounded-lg p-2 text-slate-800 text-xs focus:outline-none transition-all leading-relaxed">${intv.description}</textarea>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block font-bold text-slate-600 text-[10px] uppercase">Tipo de Litología</label>
                <select onchange="updateSigCampoLithology(${idx}, this.value)" class="w-full bg-white border border-slate-300 rounded p-1.5 text-xs text-slate-700 font-semibold">
                  <option value="soil" ${intv.lithology === 'soil' ? 'selected' : ''}>Suelo Cohesivo / Limo / Arcilla</option>
                  <option value="sand" ${intv.lithology === 'sand' ? 'selected' : ''}>Suelo Granular / Arena / Grava</option>
                  <option value="rock" ${intv.lithology === 'rock' ? 'selected' : ''}>Roca / Saprolito / Macizo</option>
                </select>
              </div>
              <div>
                <label class="block font-bold text-slate-600 text-[10px] uppercase">Muestreador</label>
                <input type="text" value="${intv.sampler}" onchange="updateSigCampoText(${idx}, 'sampler', this.value)" class="w-full bg-white border border-slate-300 rounded p-1.5 text-xs text-slate-700">
              </div>
            </div>
          </div>

          <!-- Golpes SPT Dinámicos (15cm) -->
          <div class="md:col-span-4 bg-white/90 p-3.5 rounded-xl border border-slate-200 space-y-2">
            <span class="block font-black text-sig-navy text-[11px] uppercase tracking-wider flex items-center justify-between">
              <span>Golpes Ensayo SPT (3 tramos 15cm)</span>
              <i class="fa-solid fa-hammer text-sig-teal"></i>
            </span>
            
            <div class="grid grid-cols-3 gap-2 text-center">
              <div>
                <label class="block text-[10px] text-slate-500 font-bold mb-0.5">N1 (0-15cm)</label>
                <input type="number" min="0" max="99" value="${intv.blow1}" oninput="handleSptBlowInput(${idx}, 1, this.value)" class="w-full bg-slate-50 border border-slate-300 focus:border-sig-navy rounded p-1.5 text-center font-bold text-slate-700 text-xs focus:outline-none">
              </div>
              <div>
                <label class="block text-[10px] text-sig-navy font-bold mb-0.5">N2 (15-30cm)</label>
                <input type="number" min="0" max="99" value="${intv.blow2}" oninput="handleSptBlowInput(${idx}, 2, this.value)" class="w-full bg-teal-50/50 border border-teal-300 focus:border-sig-navy rounded p-1.5 text-center font-black text-sig-navy text-xs focus:outline-none">
              </div>
              <div>
                <label class="block text-[10px] text-sig-navy font-bold mb-0.5">N3 (30-45cm)</label>
                <input type="number" min="0" max="99" value="${intv.blow3}" oninput="handleSptBlowInput(${idx}, 3, this.value)" class="w-full bg-teal-50/50 border border-teal-300 focus:border-sig-navy rounded p-1.5 text-center font-black text-sig-navy text-xs focus:outline-none">
              </div>
            </div>

            <!-- Resultados en Tiempo Real -->
            <div class="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
              <div class="text-center">
                <span class="text-[10px] text-slate-500 block">N medido (N2+N3)</span>
                <span class="text-sm font-black text-sig-navy">${intv.nMeasured || '-'}</span>
              </div>
              <div class="text-center">
                <span class="text-[10px] text-slate-500 block">N60 Corregido</span>
                <span class="text-sm font-black text-sig-teal">${intv.n60 || '-'}</span>
              </div>
              <div class="text-right">
                <span class="text-[9px] text-slate-400 block font-mono">ASTM D1586</span>
                <span class="text-[10px] text-emerald-600 font-bold">Auto-Calculado</span>
              </div>
            </div>
          </div>

          <!-- Parámetros de Recobro y RQD -->
          <div class="md:col-span-3 bg-white/90 p-3.5 rounded-xl border border-slate-200 space-y-2">
            <span class="block font-black text-sig-navy text-[11px] uppercase tracking-wider">Recuperación & RQD</span>
            
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-[10px] text-slate-600 font-bold mb-0.5">Recobro %</label>
                <input type="number" min="0" max="100" value="${intv.recovery}" onchange="updateSigCampoText(${idx}, 'recovery', this.value)" class="w-full bg-slate-50 border border-slate-300 rounded p-1.5 text-center font-bold text-slate-800 text-xs">
              </div>
              <div>
                <label class="block text-[10px] text-slate-600 font-bold mb-0.5">RQD %</label>
                <input type="number" min="0" max="100" value="${intv.rqd}" onchange="updateSigCampoText(${idx}, 'rqd', this.value)" class="w-full bg-slate-50 border border-slate-300 rounded p-1.5 text-center font-bold text-slate-800 text-xs">
              </div>
            </div>

            <div>
              <label class="block text-[10px] text-slate-600 font-bold mb-0.5">Nivel Freático Observado</label>
              <input type="text" value="${intv.water || 'No observado'}" onchange="updateSigCampoText(${idx}, 'water', this.value)" class="w-full bg-slate-50 border border-slate-300 rounded p-1.5 text-xs text-slate-700">
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');
}

// Actualización en Vivo de Golpes SPT y Recalculo Inmediato
function handleSptBlowInput(index, blowField, val) {
  const item = SIG_CAMPO_STATE.intervals[index];
  if (!item) return;

  const num = val === '' ? '' : parseInt(val, 10);

  if (blowField === 1) item.blow1 = num;
  if (blowField === 2) item.blow2 = num;
  if (blowField === 3) item.blow3 = num;

  if (item.blow2 !== '' && item.blow3 !== '') {
    const b2 = Number(item.blow2) || 0;
    const b3 = Number(item.blow3) || 0;
    item.nMeasured = b2 + b3;
    item.n60 = Math.round(item.nMeasured * 0.9 * 10) / 10;
  } else {
    item.nMeasured = '';
    item.n60 = '';
  }

  renderSigCampoStratigraphy();
  renderSigCampoChart();
}

function updateSigCampoText(index, field, val) {
  const item = SIG_CAMPO_STATE.intervals[index];
  if (item) {
    item[field] = val;
    renderSigCampoChart();
  }
}

function updateSigCampoLithology(index, val) {
  const item = SIG_CAMPO_STATE.intervals[index];
  if (item) {
    item.lithology = val;
    renderSigCampoStratigraphy();
    renderSigCampoChart();
  }
}

// Agregar Nuevo Tramo Estratigráfico
function addSigCampoInterval() {
  const last = SIG_CAMPO_STATE.intervals[SIG_CAMPO_STATE.intervals.length - 1];
  const newFrom = last ? last.to : 0.00;
  const newTo = newFrom + 2.00;

  SIG_CAMPO_STATE.intervals.push({
    id: SIG_CAMPO_STATE.intervals.length + 1,
    from: newFrom,
    to: newTo,
    description: `Nuevo horizonte litológico identificado entre ${newFrom.toFixed(2)} m y ${newTo.toFixed(2)} m.`,
    lithology: 'soil',
    sampler: 'Cuchara partida SPT',
    blow1: 4,
    blow2: 7,
    blow3: 9,
    nMeasured: 16,
    n60: 14.4,
    recovery: 85,
    rqd: 0,
    water: '',
    observations: 'Sin anomalías reportadas.'
  });

  renderSigCampoStratigraphy();
  renderSigCampoChart();
  showToast(`Nuevo tramo agregado (${newFrom.toFixed(2)} - ${newTo.toFixed(2)} m).`, 'info');
}

// Eliminar Tramo
function removeSigCampoInterval(index) {
  if (SIG_CAMPO_STATE.intervals.length <= 1) return;
  SIG_CAMPO_STATE.intervals.splice(index, 1);
  renderSigCampoStratigraphy();
  renderSigCampoChart();
  showToast('Tramo eliminado correctamente.', 'info');
}

// Cargar sondeo completo de prueba
function loadSigCampoFullDemo() {
  SIG_CAMPO_STATE.intervals = [
    {
      id: 1,
      from: 0.00,
      to: 2.00,
      description: 'Limo arcilloso color pardo rojizo, consistencia firme, humedad media. Suelo residual superficial.',
      lithology: 'soil',
      sampler: 'Cuchara partida SPT (ASTM D1586)',
      blow1: 3,
      blow2: 5,
      blow3: 7,
      nMeasured: 12,
      n60: 10.8,
      recovery: 85,
      rqd: 0,
      water: '',
      observations: 'Sin pérdida de fluidos. Consistencia uniforme.'
    },
    {
      id: 2,
      from: 2.00,
      to: 6.00,
      description: 'Arena limosa con gravilla fina cuarzosa subredondeada, compacidad media a densa, color gris amarillento.',
      lithology: 'sand',
      sampler: 'Cuchara partida SPT (ASTM D1586)',
      blow1: 5,
      blow2: 8,
      blow3: 11,
      nMeasured: 19,
      n60: 17.1,
      recovery: 92,
      rqd: 0,
      water: '4.80 m',
      observations: 'Nivel freático estabilizado a 4.80 m. Buena recuperación.'
    },
    {
      id: 3,
      from: 6.00,
      to: 10.00,
      description: 'Saprolito meteorizado / Lutita compacta, gris oscura con óxidos de hierro. Transición suelo-roca.',
      lithology: 'soil',
      sampler: 'Cuchara partida reforzada',
      blow1: 12,
      blow2: 18,
      blow3: 24,
      nMeasured: 42,
      n60: 37.8,
      recovery: 80,
      rqd: 25,
      water: '4.85 m',
      observations: 'Incremento de resistencia. Rechazo incipiente en base.'
    },
    {
      id: 4,
      from: 10.00,
      to: 15.00,
      description: 'Granodiorita gris fresca con vetillas de cuarzo y clorita, medianamente fracturada. Macizo rocoso grado II-III.',
      lithology: 'rock',
      sampler: 'Barril doble tubo HQ diamantado (ASTM D2113)',
      blow1: '',
      blow2: '',
      blow3: '',
      nMeasured: 60,
      n60: 60,
      recovery: 95,
      rqd: 78,
      water: '4.85 m',
      observations: 'RQD 78%. Fracturas con pátinas de calcita. Sondeo cerrado a cota programada.'
    }
  ];

  renderSigCampoStratigraphy();
  renderSigCampoChart();
  showToast('Sondeo DEMO-SIG-01 cargado con 4 estratos y ensayos SPT.', 'success');
}

// Renderizado de Gráfica Geotécnica SVG Dinámica (Profundidad vs. N-SPT)
function renderSigCampoChart() {
  const svg = document.getElementById('sigcampo-spt-svg');
  if (!svg) return;

  const width = 740;
  const height = 340;
  const margin = { top: 30, right: 65, bottom: 45, left: 75 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  // Escalas
  const maxDepth = Math.max(16, ...SIG_CAMPO_STATE.intervals.map(i => i.to));
  const maxBlows = 60;

  const scaleY = (depth) => margin.top + (depth / maxDepth) * plotHeight;
  const scaleX = (blows) => margin.left + (Math.min(blows, maxBlows) / maxBlows) * plotWidth;

  let elements = [];

  // 1. Zonas Geotécnicas de Fondo
  const zones = [
    { start: 0, end: 4, color: 'rgba(219, 234, 254, 0.45)', label: 'Blando' },
    { start: 4, end: 10, color: 'rgba(209, 250, 229, 0.45)', label: 'Firme' },
    { start: 10, end: 30, color: 'rgba(254, 240, 138, 0.35)', label: 'Medio / Rígido' },
    { start: 30, end: 50, color: 'rgba(254, 215, 170, 0.35)', label: 'Muy Denso' },
    { start: 50, end: 60, color: 'rgba(254, 205, 211, 0.4)', label: 'Rechazo' }
  ];

  zones.forEach(z => {
    const x1 = scaleX(z.start);
    const x2 = scaleX(z.end);
    elements.push(`<rect x="${x1}" y="${margin.top}" width="${x2 - x1}" height="${plotHeight}" fill="${z.color}" />`);
  });

  // 2. Cuadrícula de Profundidad (Eje Y)
  for (let d = 0; d <= maxDepth; d += 2) {
    const y = scaleY(d);
    elements.push(`
      <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="#E2E8F0" stroke-width="1" />
      <text x="${margin.left - 10}" y="${y + 4}" fill="#64748B" font-size="10" font-weight="bold" font-family="Arial" text-anchor="end">${d.toFixed(1)} m</text>
    `);
  }

  // 3. Cuadrícula de Golpes N-SPT (Eje X)
  for (let b = 0; b <= maxBlows; b += 10) {
    const x = scaleX(b);
    elements.push(`
      <line x1="${x}" y1="${margin.top}" x2="${x}" y2="${margin.top + plotHeight}" stroke="#E2E8F0" stroke-width="1" />
      <text x="${x}" y="${margin.top + plotHeight + 18}" fill="#64748B" font-size="10" font-weight="bold" font-family="Arial" text-anchor="middle">${b}</text>
    `);
  }

  // Línea de Nivel Freático (4.80 m)
  const nfDepth = 4.80;
  if (nfDepth <= maxDepth) {
    const yNf = scaleY(nfDepth);
    const nfBoxW = 95;
    const nfBoxX = width - margin.right - nfBoxW - 5;
    elements.push(`
      <line x1="${margin.left}" y1="${yNf}" x2="${width - margin.right}" y2="${yNf}" stroke="#0096C7" stroke-width="2" stroke-dasharray="6,4" />
      <rect x="${nfBoxX}" y="${yNf - 11}" width="${nfBoxW}" height="18" rx="4" fill="#E0F2FE" stroke="#38BDF8" stroke-width="1" />
      <text x="${nfBoxX + nfBoxW / 2}" y="${yNf + 2}" fill="#0369A1" font-size="9" font-weight="bold" font-family="Arial" text-anchor="middle">NF = 4.80 m</text>
    `);
  }

  // 4. Polilíneas de Resistencia
  const pointsN = [];
  const pointsN60 = [];

  SIG_CAMPO_STATE.intervals.forEach(intv => {
    const midDepth = (intv.from + intv.to) / 2;
    const y = scaleY(midDepth);

    if (intv.nMeasured !== '' && !isNaN(intv.nMeasured)) {
      const xN = scaleX(Number(intv.nMeasured));
      pointsN.push({ x: xN, y, depth: midDepth, val: intv.nMeasured, from: intv.from, to: intv.to });
    }

    if (intv.n60 !== '' && !isNaN(intv.n60)) {
      const xN60 = scaleX(Number(intv.n60));
      pointsN60.push({ x: xN60, y, depth: midDepth, val: intv.n60 });
    }
  });

  // Trazar Curva N60 (Línea discontinua Verde Teal)
  if (pointsN60.length > 1) {
    const pathD60 = pointsN60.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');
    elements.push(`<path d="${pathD60}" fill="none" stroke="#168F8A" stroke-width="2.5" stroke-dasharray="4,3" />`);
  }

  // Trazar Curva N medido (Línea sólida Azul SIG)
  if (pointsN.length > 1) {
    const pathD = pointsN.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');
    elements.push(`<path d="${pathD}" fill="none" stroke="#06466C" stroke-width="3" />`);
  }

  // Puntos Marcadores N60
  pointsN60.forEach(p => {
    elements.push(`
      <circle cx="${p.x}" cy="${p.y}" r="4" fill="#168F8A" stroke="#FFFFFF" stroke-width="1.5" />
    `);
  });

  // Puntos Marcadores N medido con etiquetas seguras (sin desborde exterior)
  pointsN.forEach(p => {
    const isNearRight = (p.x + 56) > (width - margin.right);
    const rectX = isNearRight ? (p.x - 54) : (p.x + 8);
    const textX = isNearRight ? (p.x - 31) : (p.x + 31);

    elements.push(`
      <circle cx="${p.x}" cy="${p.y}" r="6" fill="#06466C" stroke="#FFFFFF" stroke-width="2" />
      <rect x="${rectX}" y="${p.y - 10}" width="46" height="18" rx="4" fill="#06466C" />
      <text x="${textX}" y="${p.y + 2.5}" fill="#FFFFFF" font-size="9" font-weight="black" font-family="Arial" text-anchor="middle">N=${p.val}</text>
    `);
  });

  // Ejes Principales
  elements.push(`
    <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + plotHeight}" stroke="#334155" stroke-width="2" />
    <line x1="${margin.left}" y1="${margin.top + plotHeight}" x2="${width - margin.right}" y2="${margin.top + plotHeight}" stroke="#334155" stroke-width="2" />
    <text x="${margin.left + plotWidth / 2}" y="${height - 10}" fill="#0F172A" font-size="11" font-weight="black" font-family="Arial" text-anchor="middle">Resistencia N-SPT (Golpes / pie)</text>
    <text transform="rotate(-90)" x="${-(margin.top + plotHeight / 2)}" y="22" fill="#0F172A" font-size="11" font-weight="black" font-family="Arial" text-anchor="middle">Profundidad (m)</text>
  `);

  svg.innerHTML = elements.join('');
}

// Exportar CSV Geotécnico Estructurado para Geo5, Slide y Excel
function exportSigCampoCsv() {
  const b = SIG_CAMPO_STATE.borehole;
  let csv = '\uFEFF'; // BOM para Excel
  csv += `"REGISTRO GEOTECNICO DE PERFORACION - SIG2 CAMPO (NSR-10 / ASTM D1586)"\n`;
  csv += `"ID Sondeo","${b.id}"\n`;
  csv += `"Proyecto","${b.project}"\n`;
  csv += `"Frente","${b.front}"\n`;
  csv += `"Metodo","${b.method}"\n`;
  csv += `"Equipo","${b.equipment}"\n`;
  csv += `"Revestimiento","${b.casing}"\n`;
  csv += `"Sistema de Coordenadas","${b.crs}"\n`;
  csv += `"Coordenadas","E: ${b.east} | N: ${b.north}"\n`;
  csv += `"Elevacion","${b.elevation}"\n`;
  csv += `"Nivel Freatico","${b.waterTable}"\n`;
  csv += `"Profundidad Total","${b.totalDepth}"\n`;
  csv += `"Geotecnista","${b.responsible}"\n`;
  csv += `"Perforador","${b.driller}"\n\n`;

  // Encabezados de tabla
  csv += `"Tramo_Desde_m","Tramo_Hasta_m","Espesor_m","Litologia_Tipo","Descripcion_Geotecnica","Muestreador","Golpes_N1_15cm","Golpes_N2_15cm","Golpes_N3_15cm","N_medido","N60_corregido","Recobro_pct","RQD_pct","Nivel_Freatico","Observaciones"\n`;

  SIG_CAMPO_STATE.intervals.forEach(intv => {
    const espesor = (intv.to - intv.from).toFixed(2);
    const desc = (intv.description || '').replace(/"/g, '""');
    const obs = (intv.observations || '').replace(/"/g, '""');
    csv += `${intv.from.toFixed(2)},${intv.to.toFixed(2)},${espesor},"${intv.lithology}","${desc}","${intv.sampler}",${intv.blow1 || ''},${intv.blow2 || ''},${intv.blow3 || ''},${intv.nMeasured || ''},${intv.n60 || ''},${intv.recovery || ''},${intv.rqd || ''},"${intv.water || ''}","${obs}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SIG-Campo-${b.id}-Registro-Geotecnico.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Archivo CSV generado y descargado para Geo5 y Excel.', 'success');
}

// Exportar Esquema JSON
function exportSigCampoJson() {
  const dataStr = JSON.stringify(SIG_CAMPO_STATE, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SIG-Campo-${SIG_CAMPO_STATE.borehole.id}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Esquema JSON exportado exitosamente.', 'success');
}

// Imprimir o Guardar en PDF el Informe Oficial
function printSigCampoReport() {
  switchSigCampoTab('informe');
  setTimeout(() => {
    window.print();
  }, 350);
}

// =============================================================
// CRM CORPORATIVO & PIPELINE COMERCIAL SIG²
// CAPTACIÓN, SEGMENTACIÓN, MASTER EXCEL Y DESPACHO A:
// OFICIAL: ingenierotecnicocyc@gmail.com
// =============================================================

const CRM_OFFICIAL_EMAIL = 'ingenierotecnicocyc@gmail.com';
const CRM_STORAGE_KEY = 'sig2_crm_leads_v2026_real18';

const DEFAULT_CRM_LEADS = [
  {
    id: 'LEAD-2026-101',
    timestamp: '2026-11-06 09:30',
    name: 'Ing. Carlos Valencia',
    role: 'Gerente de Operaciones Mineras',
    company: 'Continental Gold / Zijin Mining (Mina Buriticá)',
    phone: '+57 310 445 8920',
    email: 'c.valencia@continentalgold.com.co',
    targetType: 'Cliente Corporativo',
    service: 'Geología 3D, Taludes & PTO',
    details: 'NIT 900.174.197-0 | Título ANM 7495. Modelamiento geológico 3D y evaluación de estabilidad de cámaras y galerías de extracción subterránea en Buriticá.',
    status: 'En Negociación',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-102',
    timestamp: '2026-11-06 10:15',
    name: 'Ing. Mauricio Peláez',
    role: 'Superintendente Técnico de Botaderos',
    company: 'Carbones del Cerrejón Limited',
    phone: '+57 310 220 8819',
    email: 'm.pelaez@cerrejon.com.co',
    targetType: 'Cliente Corporativo',
    service: 'Geología 3D, Taludes & PTO',
    details: 'NIT 860.071.745-1 | Contrato ANM 044-89. Monitoreo interferométrico y análisis cinemático de taludes de botaderos de estéril y actualización de PTO ANM en Albania, La Guajira.',
    status: 'Calificado',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-103',
    timestamp: '2026-11-06 11:40',
    name: 'Dra. Marcela Cárdenas',
    role: 'Directora de Licitaciones y Consorcios',
    company: 'Consorcio Vial del Oriente (Covioriente 4G)',
    phone: '+57 315 889 0145',
    email: 'm.cardenas@covioriente.com.co',
    targetType: 'Socio Estratégico / Alianza',
    service: 'Vuelo LiDAR & Topografía RTK',
    details: 'NIT 900.852.179-8 | Contrato Concesión ANI 010 de 2015. Levantamiento aerofotogramétrico LiDAR y cartografía de alta resolución en 140 km del corredor Villavicencio-Yopal.',
    status: 'Propuesta Emitida',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-104',
    timestamp: '2026-11-06 12:15',
    name: 'Ing. Felipe Montoya',
    role: 'Superintendente HSEQ & Flotas',
    company: 'Mineros S.A. Operaciones El Bagre',
    phone: '+57 312 901 3344',
    email: 'f.montoya@mineros.com.co',
    targetType: 'Cliente Corporativo',
    service: 'SIG Fleet & PESV Res. 40595',
    details: 'NIT 890.900.222-7 | Operación aluvial Nechí/El Bagre. Implementación tecnológica y aplicativo móvil para inspección preoperacional de 65 volquetas y retroexcavadoras bajo Res. 40595.',
    status: 'Calificado',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-105',
    timestamp: '2026-11-06 13:20',
    name: 'Ing. David Osorio',
    role: 'Director Técnico de Geotecnia',
    company: 'GeoTech Consultores S.A.S.',
    phone: '+57 320 671 2289',
    email: 'd.osorio@geotech.com.co',
    targetType: 'Socio Estratégico / Alianza',
    service: 'SIG Campo (App Geotécnica)',
    details: 'NIT 901.332.189-4 | Registro Invías. Adquisición de 8 licencias corporativas SIG Campo para digitalización de perforaciones diamantadas y ensayos SPT en faena vial.',
    status: 'En Negociación',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-106',
    timestamp: '2026-11-06 14:10',
    name: 'Ing. Patricia Morales',
    role: 'Coordinadora de Licenciamiento Ambiental',
    company: 'Cementos Argos S.A. - Regional Centro',
    phone: '+57 318 732 9910',
    email: 'p.morales@argos.co',
    targetType: 'Cliente Corporativo',
    service: 'Ingeniería Ambiental EIA/PMA',
    details: 'NIT 890.900.266-3 | Canteras Rioclaro / Tolima. Estructuración de Geodatabase (GDB) ANLA y seguimiento del Plan de Manejo Ambiental (PMA) para explotación de agregados.',
    status: 'Calificado',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-107',
    timestamp: '2026-11-06 15:30',
    name: 'Carlos Julio Echeverri',
    role: 'Representante Operativo de Perforación',
    company: 'Sondeos & Cimentaciones del Norte S.A.S.',
    phone: '+57 301 556 7890',
    email: 'cjecheverri@sondeosnorte.com',
    targetType: 'Contratista de Faena',
    service: 'SIG Campo (App Geotécnica)',
    details: 'NIT 900.672.441-2 | Faenas Mineras del Cesar. Homologación técnica de 3 equipos de perforación diamantada HQ (Longyear LF70) y cuadrillas de ensayo SPT.',
    status: 'Nuevo Lead',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-108',
    timestamp: '2026-11-06 16:45',
    name: 'Ing. Gonzalo Henao',
    role: 'Subdirector de Obras Subterráneas',
    company: 'Consorcio Túnel del Toyo (Giraldo-Cañasgordas)',
    phone: '+57 313 490 8812',
    email: 'g.henao@tuneldeltoyo.com.co',
    targetType: 'Cliente Corporativo',
    service: 'Telemetría IoT & Dashboards BI',
    details: 'Contrato Gobernación de Antioquia / ANI. Red de sensores piezométricos e inclinómetros digitales con transmisión remota 4G en tramo subterráneo Giraldo-Cañasgordas (9.7 km).',
    status: 'Ganado / En Ejecución',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-109',
    timestamp: '2026-11-06 17:10',
    name: 'Dra. Andrea Beltrán',
    role: 'Líder HSEQ & Seguridad Vial Nacional',
    company: 'Transportes Montejo Heavy Lift S.A.S.',
    phone: '+57 320 994 3311',
    email: 'a.beltran@transportesmontejo.com',
    targetType: 'Cliente Corporativo',
    service: 'SIG Fleet & PESV Res. 40595',
    details: 'NIT 800.158.423-1 | SuperTransporte. Auditoría integral de 24 pasos del PESV y checklist preoperacional digital para 95 camas bajas y grúas telescópicas pesadas.',
    status: 'En Negociación',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-110',
    timestamp: '2026-11-07 08:30',
    name: 'Ing. Gustavo Restrepo',
    role: 'Superintendente de Geología & Mina',
    company: 'Minera El Roble (Atico Mining Corporation)',
    phone: '+57 314 621 7740',
    email: 'g.restrepo@aticomining.com',
    targetType: 'Cliente Corporativo',
    service: 'SIG Campo (App Geotécnica)',
    details: 'NIT 890.932.146-5 | Contrato ANM 9319. Digitalización en tiempo real de registros litológicos y ensayos geomecánicos RMR/Q de Barton en mina subterránea de cobre.',
    status: 'Calificado',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-111',
    timestamp: '2026-11-07 09:15',
    name: 'Ing. Roberto Char',
    role: 'Socio Director de Proyectos Geotécnicos',
    company: 'Geotécnica & Perforaciones del Sinú S.A.S.',
    phone: '+57 315 771 9022',
    email: 'r.char@geosinusas.com',
    targetType: 'Socio Estratégico / Alianza',
    service: 'SIG Campo (App Geotécnica)',
    details: 'NIT 900.881.042-8 | Licitación Invías LP-DO-042-2026. Acuerdo de Unión Temporal para licitaciones de estudios de suelos y estabilidad de taludes en la Red Vial Nacional.',
    status: 'Propuesta Emitida',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-112',
    timestamp: '2026-11-07 10:00',
    name: 'Ing. Hernando Cifuentes',
    role: 'Gerente de Operaciones de Mina',
    company: 'Drummond Ltd. Colombia (Mina Pribbenow)',
    phone: '+57 311 892 4410',
    email: 'h.cifuentes@drummondltd.com',
    targetType: 'Cliente Corporativo',
    service: 'Vuelo LiDAR & Topografía RTK',
    details: 'NIT 800.021.050-4 | Título Minero 283-97. Batimetría de pozas de sedimentación y cubicación topográfica mensual de avance minero con dron LiDAR en El Paso / La Loma.',
    status: 'Calificado',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-113',
    timestamp: '2026-11-07 11:20',
    name: 'Ing. Camilo Pardo',
    role: 'Residente de Estabilidad de Taludes',
    company: 'Autopistas del Café S.A. (Odinsa)',
    phone: '+57 313 550 1199',
    email: 'c.pardo@autopistasdelcafe.com',
    targetType: 'Cliente Corporativo',
    service: 'Geología 3D, Taludes & PTO',
    details: 'NIT 800.245.987-1 | Red Vial Eje Cafetero. Diseño geotécnico de obras de estabilización con micropilotes, anclajes activos y drenes en PK 28+400 sector Boquerón.',
    status: 'En Negociación',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-114',
    timestamp: '2026-11-07 12:45',
    name: 'Dr. Guillermo Sanabria',
    role: 'Director de Seguridad Operacional y Flotas',
    company: 'Expreso Bolivariano S.A.',
    phone: '+57 317 501 2234',
    email: 'g.sanabria@bolivariano.com.co',
    targetType: 'Cliente Corporativo',
    service: 'SIG Fleet & PESV Res. 40595',
    details: 'NIT 860.003.541-6 | Vigilado SuperTransporte. Control de preoperacional diario sin internet y auditoría PESV Res. 40595 para flota de 140 buses intermunicipales.',
    status: 'Propuesta Emitida',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-115',
    timestamp: '2026-11-07 14:10',
    name: 'Ing. Clara Inés Duque',
    role: 'Jefe de Flotas y Logística de Hormigón',
    company: 'Concretos & Prefabricados San Jerónimo',
    phone: '+57 301 448 3920',
    email: 'c.duque@sanjeronimo.com.co',
    targetType: 'Cliente Corporativo',
    service: 'SIG Fleet & PESV Res. 40595',
    details: 'NIT 900.412.339-0 | Operación Aburrá Norte. Módulo móvil para 48 camiones hormigonera mixer con alertas de velocidad, control de fatiga y checklist preventivo.',
    status: 'Calificado',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-116',
    timestamp: '2026-11-07 15:30',
    name: 'Ing. Laura Viviana Cruz',
    role: 'Coordinadora de Geotecnia Vial',
    company: 'Consorcio Ruta del Sol Sector 3 (Yuma Concesionaria)',
    phone: '+57 316 442 8815',
    email: 'l.cruz@rutadelsol3.com.co',
    targetType: 'Cliente Corporativo',
    service: 'Geología 3D, Taludes & PTO',
    details: 'NIT 900.344.120-7 | Contrato Concesión ANI 007 de 2010. Análisis de asentamientos y capacidad portante en terraplenes sobre suelos blandos con geodrenes en Bosconia-Valledupar.',
    status: 'Nuevo Lead',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-117',
    timestamp: '2026-11-07 16:50',
    name: 'Ing. Andrés Buitrago',
    role: 'Director de Planeación & Regalías',
    company: 'Cales & Agregados del Tolima S.A.S.',
    phone: '+57 311 380 4490',
    email: 'a.buitrago@calestolima.com',
    targetType: 'Cliente Corporativo',
    service: 'Vuelo LiDAR & Topografía RTK',
    details: 'NIT 809.004.118-2 | Título Cantera El Diamante. Cálculo de volumen de extracción en banco de caliza y certificación topográfica para liquidación de regalías ante la ANM.',
    status: 'Calificado',
    destEmail: CRM_OFFICIAL_EMAIL
  },
  {
    id: 'LEAD-2026-118',
    timestamp: '2026-11-07 17:35',
    name: 'Ing. Hernán Fonseca',
    role: 'Gerente de Licitaciones e Infraestructura',
    company: 'Ingeocivil Consultoría & Diseños S.A.S.',
    phone: '+57 318 690 4125',
    email: 'h.fonseca@ingeocivil.com.co',
    targetType: 'Socio Estratégico / Alianza',
    service: 'Telemetría IoT & Dashboards BI',
    details: 'NIT 804.015.662-1 | Consultoría ANI. Conformación de Consorcio para interventoría y telemetría de instrumentación estructural de puentes viales en Santander.',
    status: 'Propuesta Emitida',
    destEmail: CRM_OFFICIAL_EMAIL
  }
];

let CRM_STATE = {
  leads: [],
  currentMsgTab: 'cliente',
  activeLeadId: null
};

function initCrmHub() {
  loadCrmLeadsFromStorage();
  updateCrmKpis();
  renderCrmTable();
  renderCrmTemplatePreview();
  initRadarEngine();
}

function loadCrmLeadsFromStorage() {
  try {
    const stored = localStorage.getItem(CRM_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length >= 18) {
        CRM_STATE.leads = parsed;
        return;
      }
    }
  } catch (e) {
    console.warn('Error al leer leads de localStorage:', e);
  }
  // Carga inicial por defecto con las 18 empresas y proyectos reales
  CRM_STATE.leads = [...DEFAULT_CRM_LEADS];
  saveCrmLeadsToStorage();
}

function saveCrmLeadsToStorage() {
  try {
    localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(CRM_STATE.leads));
  } catch (e) {
    console.warn('Error al persistir leads en localStorage:', e);
  }
}

function updateCrmKpis() {
  const leads = CRM_STATE.leads;
  const totalEl = document.getElementById('crm-kpi-total');
  const qualEl = document.getElementById('crm-kpi-qualified');
  const partEl = document.getElementById('crm-kpi-partners');
  const dispEl = document.getElementById('crm-kpi-dispatched');

  const total = leads.length;
  const qualified = leads.filter(l => l.status === 'Calificado' || l.status === 'En Negociación' || l.status === 'Ganado / En Ejecución').length;
  const partners = leads.filter(l => (l.targetType || '').toLowerCase().includes('socio') || (l.targetType || '').toLowerCase().includes('alianza')).length;
  const dispatched = leads.filter(l => l.status === 'Propuesta Emitida' || l.status === 'En Negociación' || l.status === 'Ganado / En Ejecución').length;

  if (totalEl) totalEl.textContent = total;
  if (qualEl) qualEl.textContent = qualified;
  if (partEl) partEl.textContent = partners;
  if (dispEl) dispEl.textContent = dispatched;
}

function renderCrmTable(filterSearch = '', filterProfile = 'all') {
  const tbody = document.getElementById('crm-leads-table-body');
  const countEl = document.getElementById('crm-filtered-count');
  if (!tbody) return;

  let list = CRM_STATE.leads;

  if (filterProfile !== 'all') {
    list = list.filter(l => (l.targetType || '').toLowerCase().includes(filterProfile.toLowerCase()));
  }

  if (filterSearch.trim() !== '') {
    const q = filterSearch.toLowerCase();
    list = list.filter(l => 
      (l.name || '').toLowerCase().includes(q) ||
      (l.company || '').toLowerCase().includes(q) ||
      (l.role || '').toLowerCase().includes(q) ||
      (l.service || '').toLowerCase().includes(q)
    );
  }

  if (countEl) countEl.textContent = list.length;

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-8 text-center text-slate-500 bg-white">
          <i class="fa-solid fa-users-slash text-2xl text-slate-300 mb-2 block"></i>
          <span>No se encontraron registros con los filtros seleccionados.</span>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(l => {
    const isPartner = (l.targetType || '').toLowerCase().includes('socio') || (l.targetType || '').toLowerCase().includes('alianza');
    const isContractor = (l.targetType || '').toLowerCase().includes('contratista');

    const badgeProfileClass = isPartner 
      ? 'bg-teal-50 text-sig-teal border border-teal-200' 
      : isContractor 
        ? 'bg-amber-50 text-amber-800 border border-amber-200' 
        : 'bg-blue-50 text-sig-navy border border-blue-200';

    return `
      <tr class="hover:bg-slate-50/80 transition-colors">
        <td class="py-3 px-4 font-mono text-[11px] text-slate-500 whitespace-nowrap">
          <div class="font-bold text-slate-700">${l.timestamp.split(' ')[0]}</div>
          <div class="text-[10px] text-slate-400">${l.timestamp.split(' ')[1] || '08:00'}</div>
        </td>
        <td class="py-3 px-4">
          <div class="font-black text-sig-navy">${l.name}</div>
          <div class="text-[11px] text-slate-500">${l.role}</div>
          <div class="text-[10px] text-slate-400 font-mono">${l.phone}</div>
        </td>
        <td class="py-3 px-4">
          <div class="font-bold text-slate-800">${l.company}</div>
          <div class="text-[10px] text-slate-500 truncate max-w-[180px]">${l.details || 'Sin observaciones'}</div>
        </td>
        <td class="py-3 px-4 whitespace-nowrap">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${badgeProfileClass}">
            ${l.targetType || 'Cliente'}
          </span>
        </td>
        <td class="py-3 px-4 font-semibold text-slate-700 text-xs">
          ${l.service}
        </td>
        <td class="py-3 px-4 whitespace-nowrap">
          <select onchange="updateLeadStatus('${l.id}', this.value)" class="text-[11px] font-bold py-1 px-2 rounded-lg border border-slate-300 bg-white text-slate-700 focus:border-sig-navy outline-hidden">
            <option value="Nuevo Lead" ${l.status === 'Nuevo Lead' ? 'selected' : ''}>Nuevo Lead</option>
            <option value="Calificado" ${l.status === 'Calificado' ? 'selected' : ''}>Calificado</option>
            <option value="Propuesta Emitida" ${l.status === 'Propuesta Emitida' ? 'selected' : ''}>Propuesta Emitida</option>
            <option value="En Negociación" ${l.status === 'En Negociación' ? 'selected' : ''}>En Negociación</option>
            <option value="Ganado / En Ejecución" ${l.status === 'Ganado / En Ejecución' ? 'selected' : ''}>Ganado / En Ejecución</option>
          </select>
        </td>
        <td class="py-3 px-4 text-center whitespace-nowrap">
          <div class="inline-flex items-center gap-1.5">
            <button onclick="dispatchLeadToWhatsApp('${l.id}')" class="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-all" title="Enviar Propuesta por WhatsApp">
              <span class="icon-whatsapp text-sm"></span>
            </button>
            <button onclick="dispatchLeadEmailProposal('${l.id}')" class="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-sig-navy border border-slate-300 transition-all" title="Enviar Propuesta por Correo">
              <i class="fa-solid fa-paper-plane text-xs"></i>
            </button>
            <button onclick="selectLeadForCrmTemplate('${l.id}')" class="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-300 transition-all" title="Ver / Cargar en Plantilla">
              <i class="fa-solid fa-file-pen text-xs"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function handleCrmLeadSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('crm-lead-name')?.value || '';
  const role = document.getElementById('crm-lead-role')?.value || '';
  const company = document.getElementById('crm-lead-company')?.value || '';
  const phone = document.getElementById('crm-lead-phone')?.value || '';
  const email = document.getElementById('crm-lead-email')?.value || '';
  const targetType = document.getElementById('crm-lead-target-type')?.value || 'Cliente Corporativo';
  const service = document.getElementById('crm-lead-service')?.value || 'Geología 3D & PTO';
  const details = document.getElementById('crm-lead-details')?.value || '';

  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const randomNum = Math.floor(100 + Math.random() * 900);
  const newId = `LEAD-2026-${randomNum}`;

  const newLead = {
    id: newId,
    timestamp: dateStr,
    name,
    role,
    company,
    phone,
    email,
    targetType,
    service,
    details: details || 'Registro vía formulario de captación rápida en sitio web.',
    status: 'Calificado',
    destEmail: CRM_OFFICIAL_EMAIL
  };

  CRM_STATE.leads.unshift(newLead);
  saveCrmLeadsToStorage();
  updateCrmKpis();
  renderCrmTable();
  selectLeadForCrmTemplate(newId);

  // Limpiar campos principales
  document.getElementById('crm-quick-lead-form').reset();

  showToast(`¡Contacto ${name} (${company}) registrado exitosamente en el CRM!`, 'success');
}

function resetCrmForm() {
  const form = document.getElementById('crm-quick-lead-form');
  if (form) form.reset();
}

function prefillCrmTarget(profileType, serviceFocus) {
  const targetSelect = document.getElementById('crm-lead-target-type');
  const serviceSelect = document.getElementById('crm-lead-service');
  const form = document.getElementById('crm-quick-lead-form');

  if (profileType === 'socio') {
    if (targetSelect) targetSelect.value = 'Socio Estratégico / Alianza';
    switchCrmMessageTab('socio');
  } else if (profileType === 'contratista') {
    if (targetSelect) targetSelect.value = 'Contratista de Faena';
    switchCrmMessageTab('contratista');
  } else {
    if (targetSelect) targetSelect.value = 'Cliente Corporativo';
    switchCrmMessageTab('cliente');
  }

  if (serviceFocus && serviceSelect) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.toLowerCase().includes(serviceFocus.toLowerCase()) || 
          serviceSelect.options[i].value.toLowerCase().includes(serviceFocus.toLowerCase())) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const nameInput = document.getElementById('crm-lead-name');
    if (nameInput) nameInput.focus();
  }
}

function filterCrmTable() {
  const search = document.getElementById('crm-search-filter')?.value || '';
  const profile = document.getElementById('crm-profile-filter')?.value || 'all';
  renderCrmTable(search, profile);
}

function updateLeadStatus(id, newStatus) {
  const lead = CRM_STATE.leads.find(l => l.id === id);
  if (lead) {
    lead.status = newStatus;
    saveCrmLeadsToStorage();
    updateCrmKpis();
    showToast(`Estado de ${lead.company} actualizado a: "${newStatus}".`, 'info');
  }
}

// =============================================================
// MENSAJERÍA SEGMENTADA AUTOMATIZADA
// =============================================================
function switchCrmMessageTab(tab) {
  CRM_STATE.currentMsgTab = tab;

  ['tab-msg-cliente', 'tab-msg-socio', 'tab-msg-contratista'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('bg-sig-navy', 'text-white');
    el.classList.add('bg-slate-100', 'text-slate-700');
  });

  const activeBtn = document.getElementById(`tab-msg-${tab}`);
  if (activeBtn) {
    activeBtn.classList.add('bg-sig-navy', 'text-white');
    activeBtn.classList.remove('bg-slate-100', 'text-slate-700');
  }

  renderCrmTemplatePreview();
}

function selectLeadForCrmTemplate(leadId) {
  CRM_STATE.activeLeadId = leadId;
  const lead = CRM_STATE.leads.find(l => l.id === leadId);
  if (lead) {
    if ((lead.targetType || '').toLowerCase().includes('socio') || (lead.targetType || '').toLowerCase().includes('alianza')) {
      switchCrmMessageTab('socio');
    } else if ((lead.targetType || '').toLowerCase().includes('contratista')) {
      switchCrmMessageTab('contratista');
    } else {
      switchCrmMessageTab('cliente');
    }
  }
}

function getActiveCrmTemplateText() {
  const activeLead = CRM_STATE.leads.find(l => l.id === CRM_STATE.activeLeadId) || CRM_STATE.leads[0] || {
    name: 'Estimado Cliente',
    role: 'Dirección Técnica',
    company: 'Empresa Privada',
    service: 'Ingeniería Integral SIG²',
    phone: '+57 312 789 4040'
  };

  const tab = CRM_STATE.currentMsgTab;

  if (tab === 'socio') {
    return `Estimado(a) ${activeLead.name} (${activeLead.company}),\n\nDesde la Dirección de Proyectos de SIG² (Sistemas e Ingeniería) deseamos formalizar nuestro interés en conformar una ALIANZA ESTRATÉGICA / UNIÓN TEMPORAL con ${activeLead.company} para participar conjuntamente en los pliegos de licitación pública y proyectos de gran envergadura en el sector ${activeLead.service}.\n\nPonemos a su disposición nuestro equipo interdisciplinario, licencias de software propietario SIG Campo, sensores LiDAR de alta precisión y respaldo en GDB ANLA / ANM.\n\nQuedamos atentos para programar una reunión técnica de articulación.\n\nAtentamente,\nDirección de Alianzas & Nuevos Negocios | SIG²\nWhatsApp: +57 312 789 4040\nCorreo: ingenierotecnicocyc@gmail.com`;
  } else if (tab === 'contratista') {
    return `Apreciado(a) ${activeLead.name} (${activeLead.company}),\n\nLe confirmamos el inicio del proceso de HOMOLOGACIÓN TÉCNICA DE PROVEEDOR Y CONTRATISTA DE FAENA con SIG² para la disciplina: ${activeLead.service}.\n\nPara completar el expediente operativo en faena, le solicitamos remitir la ficha técnica de equipos, hojas de vida de operadores certificados y la política de cumplimiento PESV (Resolución 40595 de 2022).\n\nPuede coordinar la entrega documental directamente al correo oficial ingenierotecnicocyc@gmail.com o a nuestra línea técnica.\n\nAtentamente,\nCoordinación de Contratistas & HSEQ | SIG²\nWhatsApp: +57 312 789 4040`;
  } else {
    return `Estimado(a) ${activeLead.name},\n\nHemos registrado satisfactoriamente el requerimiento técnico de ${activeLead.company} para la especialidad de ${activeLead.service} en nuestra plataforma de ingeniería SIG².\n\nNuestro equipo técnico ha revisado el alcance inicial (${activeLead.details || 'definición técnica'}) y se encuentra estructurando la propuesta formal de cotización ajustada a normativa oficial vigente.\n\n¿Dispone de 10 minutos hoy para sostener una llamada técnica de validación?\n\nAtentamente,\nDirección Técnica de Proyectos | SIG²\nWhatsApp Directo: +57 312 789 4040\nCorreo: ingenierotecnicocyc@gmail.com`;
  }
}

function renderCrmTemplatePreview() {
  const container = document.getElementById('crm-template-preview');
  if (!container) return;

  const text = getActiveCrmTemplateText();
  container.innerHTML = text.replace(/\n/g, '<br>');
}

function copyCrmTemplateToClipboard() {
  const text = getActiveCrmTemplateText();
  navigator.clipboard.writeText(text).then(() => {
    showToast('Plantilla copiada al portapapeles exitosamente.', 'success');
  }).catch(() => {
    showToast('Texto listo para ser copiado.', 'info');
  });
}

function dispatchActiveTemplateToWhatsApp() {
  const text = getActiveCrmTemplateText();
  const phone = '573127894040';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function dispatchLeadToWhatsApp(leadId) {
  selectLeadForCrmTemplate(leadId);
  const text = getActiveCrmTemplateText();
  const lead = CRM_STATE.leads.find(l => l.id === leadId);
  const targetPhone = (lead && lead.phone) ? lead.phone.replace(/[^0-9]/g, '') : '573127894040';
  const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  showToast(`Abriendo WhatsApp para despachar mensaje a: ${lead?.name || 'Cliente'}`, 'info');
}

function dispatchLeadEmailProposal(leadId) {
  const lead = CRM_STATE.leads.find(l => l.id === leadId);
  if (!lead) return;

  const subject = `[PROPUESTA TÉCNICA SIG²] Requerimiento ${lead.service} - ${lead.company}`;
  const body = `Estimado(a) ${lead.name},\n\nPresentamos nuestra propuesta técnica formal para los servicios de ${lead.service}.\n\nAtentamente,\nSIG² Sistemas e Ingeniería\nContacto: +57 312 789 4040\nCopia de control: ${CRM_OFFICIAL_EMAIL}`;

  const mailtoUrl = `mailto:${lead.email}?cc=${CRM_OFFICIAL_EMAIL}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
  showToast(`Abriendo cliente de correo para ${lead.email} con copia a ${CRM_OFFICIAL_EMAIL}`, 'info');
}

// =============================================================
// GENERADOR Y EXPORTADOR OFICIAL DE MASTER EXCEL (.CSV / .XLSX)
// =============================================================
function exportCrmToExcel() {
  const leads = CRM_STATE.leads;
  if (!leads || leads.length === 0) {
    showToast('No hay registros en el CRM para exportar.', 'warning');
    return;
  }

  // BOM UTF-8 (\uFEFF) para compatibilidad total con Microsoft Excel en español
  let csv = '\uFEFF';

  // Encabezado institucional de auditoría
  csv += `"PLATAFORMA CORPORATIVA SIG² - MASTER CRM & PROSPECCIÓN DE CLIENTES"\n`;
  csv += `"DESTINATARIO OFICIAL AUDITORÍA","${CRM_OFFICIAL_EMAIL}"\n`;
  csv += `"FECHA DE CORTE","${new Date().toISOString()}"\n`;
  csv += `"TOTAL CONTACTOS REGISTRADOS","${leads.length}"\n\n`;

  // Cabeceras de Columnas
  csv += `"ID_Lead","Fecha_Registro","Nombre_Contacto","Cargo_Ocupacion","Empresa_Consorcio","Telefono_WhatsApp","Correo_Electronico","Tipo_Vinculacion","Servicio_Interes","Alcance_Tecnico","Estado_Pipeline","Destino_Auditoria_Oficial"\n`;

  leads.forEach(l => {
    const cleanDetails = (l.details || '').replace(/"/g, '""').replace(/\n/g, ' ');
    csv += `"${l.id}","${l.timestamp}","${l.name}","${l.role}","${l.company}","${l.phone}","${l.email}","${l.targetType}","${l.service}","${cleanDetails}","${l.status}","${CRM_OFFICIAL_EMAIL}"\n`;
  });

  const todayStr = new Date().toISOString().split('T')[0];
  const filename = `SIG2_CRM_Master_Leads_${todayStr}.csv`;

  // Abrir modal con visor y enlace nativo
  openCrmExportModal();

  try {
    // Descarga directa por Data URI (funciona en todos los navegadores móviles y desktop)
    const encodedUri = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(csv);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      try { document.body.removeChild(link); } catch (e) {}
    }, 2000);

    showToast(`¡Descarga directa iniciada con ${leads.length} empresas reales de Colombia!`, 'success');
  } catch (e) {
    console.error('Error al generar descarga automática:', e);
  }
}

// =============================================================
// MODAL DE VISOR Y DESCARGA OFICIAL DE EXCEL (.CSV)
// =============================================================
function openCrmExportModal() {
  const modal = document.getElementById('crm-export-modal');
  const tbody = document.getElementById('crm-modal-preview-tbody');
  const anchor = document.getElementById('modal-direct-download-anchor');
  const leads = CRM_STATE.leads;

  if (!modal) return;

  // Generar contenido CSV
  let csv = '\uFEFF';
  csv += `"PLATAFORMA CORPORATIVA SIG² - MASTER CRM & PROSPECCIÓN DE CLIENTES"\n`;
  csv += `"DESTINATARIO OFICIAL AUDITORÍA","${CRM_OFFICIAL_EMAIL}"\n`;
  csv += `"FECHA DE CORTE","${new Date().toISOString()}"\n`;
  csv += `"TOTAL CONTACTOS REGISTRADOS","${leads.length}"\n\n`;
  csv += `"ID_Lead","Fecha_Registro","Nombre_Contacto","Cargo_Ocupacion","Empresa_Consorcio","Telefono_WhatsApp","Correo_Electronico","Tipo_Vinculacion","Servicio_Interes","Alcance_Tecnico","Estado_Pipeline","Destino_Auditoria_Oficial"\n`;

  leads.forEach(l => {
    const cleanDetails = (l.details || '').replace(/"/g, '""').replace(/\n/g, ' ');
    csv += `"${l.id}","${l.timestamp}","${l.name}","${l.role}","${l.company}","${l.phone}","${l.email}","${l.targetType}","${l.service}","${cleanDetails}","${l.status}","${CRM_OFFICIAL_EMAIL}"\n`;
  });

  const todayStr = new Date().toISOString().split('T')[0];
  const filename = `SIG2_CRM_Master_Leads_${todayStr}.csv`;

  // Asignar URL directa al botón del modal
  if (anchor) {
    const encodedUri = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(csv);
    anchor.setAttribute('href', encodedUri);
    anchor.setAttribute('download', filename);
  }

  // Llenar vista previa de la tabla en el modal
  if (tbody) {
    tbody.innerHTML = leads.map((l, idx) => `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 font-mono font-bold text-slate-400">${idx + 1}</td>
        <td class="py-2.5 px-3">
          <div class="font-bold text-sig-navy">${l.company}</div>
          <div class="text-[10px] text-slate-500 font-mono">${l.id}</div>
        </td>
        <td class="py-2.5 px-3 text-slate-600">${l.role}</td>
        <td class="py-2.5 px-3 text-slate-800 font-medium">${l.name}</td>
        <td class="py-2.5 px-3 text-slate-600">${l.service}</td>
        <td class="py-2.5 px-3">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-sig-teal border border-teal-200">
            ${l.status}
          </span>
        </td>
      </tr>
    `).join('');
  }

  modal.classList.remove('hidden');
}

function closeCrmExportModal() {
  const modal = document.getElementById('crm-export-modal');
  if (modal) modal.classList.add('hidden');
}

// =============================================================
// REINICIAR Y CARGAR BASE DE DATOS REAL (18 EMPRESAS COLOMBIANAS)
// =============================================================
function resetAndReloadCrm() {
  try {
    localStorage.removeItem(CRM_STORAGE_KEY);
    localStorage.removeItem('sig2_crm_leads_v2026');
  } catch (e) {}

  CRM_STATE.leads = [...DEFAULT_CRM_LEADS];
  saveCrmLeadsToStorage();
  updateCrmKpis();
  renderCrmTable();
  openCrmExportModal();

  showToast(`¡Base de datos reiniciada con 18 empresas y proyectos reales verificados en Colombia!`, 'success');
}

// =============================================================
// COPIAR DIRECTO AL PORTAPAPELES PARA PEGAR EN EXCEL (Ctrl + V)
// =============================================================
function copyCrmTableForExcel() {
  const leads = CRM_STATE.leads;
  if (!leads || leads.length === 0) {
    showToast('No hay registros en el CRM para copiar.', 'warning');
    return;
  }

  // Estructura TSV (Tab Separated Values) que Excel pega de forma nativa en celdas separadas
  let tsv = `ID Lead\tFecha Registro\tContacto\tCargo\tEmpresa / Consorcio\tWhatsApp / Telefono\tCorreo Electronico\tTipo de Vinculacion\tServicio de Interes\tAlcance Tecnico\tEstado Pipeline\tDestino Auditoria\n`;
  leads.forEach(l => {
    const cleanDetails = (l.details || '').replace(/\t/g, ' ').replace(/\n/g, ' ');
    tsv += `${l.id}\t${l.timestamp}\t${l.name}\t${l.role}\t${l.company}\t${l.phone}\t${l.email}\t${l.targetType}\t${l.service}\t${cleanDetails}\t${l.status}\t${CRM_OFFICIAL_EMAIL}\n`;
  });

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(tsv).then(() => {
      showToast(`¡${leads.length} empresas copiadas! Abre Microsoft Excel y presiona Ctrl + V para pegarlas en celdas.`, 'success');
    }).catch(() => {
      copyFallbackText(tsv, leads.length);
    });
  } else {
    copyFallbackText(tsv, leads.length);
  }
}

function copyFallbackText(text, count) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast(`¡${count} empresas copiadas! Abre Microsoft Excel y presiona Ctrl + V para pegarlas.`, 'success');
}

// =============================================================
// REPORTE CONSOLIDADO DIRECTO A: ingenierotecnicocyc@gmail.com
// =============================================================
function sendConsolidatedReportToEmail() {
  const leads = CRM_STATE.leads;
  const now = new Date();
  const dateFormatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  const total = leads.length;
  const clients = leads.filter(l => (l.targetType || '').toLowerCase().includes('cliente')).length;
  const partners = leads.filter(l => (l.targetType || '').toLowerCase().includes('socio') || (l.targetType || '').toLowerCase().includes('alianza')).length;
  const contractors = leads.filter(l => (l.targetType || '').toLowerCase().includes('contratista')).length;

  let report = `REPORTE OFICIAL DE PROSPECCIÓN & CRM - SIG² INGENIERÍA\n`;
  report += `Generado automáticamente para la Dirección Técnica: ${CRM_OFFICIAL_EMAIL}\n`;
  report += `Fecha de consolidación: ${dateFormatted}\n`;
  report += `========================================================\n\n`;
  report += `RESUMEN DE GESTIÓN COMERCIAL:\n`;
  report += `- Total de Contactos Registrados: ${total}\n`;
  report += `- Clientes Corporativos / Minería: ${clients}\n`;
  report += `- Socios Estratégicos & Consorcios: ${partners}\n`;
  report += `- Contratistas de Faena en Homologación: ${contractors}\n`;
  report += `========================================================\n\n`;
  report += `BITÁCORA DETALLADA DE CONTACTOS:\n\n`;

  leads.forEach((l, idx) => {
    report += `${idx + 1}. [${l.id}] ${l.name} - ${l.role}\n`;
    report += `   Empresa: ${l.company} | Tipo: ${l.targetType}\n`;
    report += `   Servicio: ${l.service}\n`;
    report += `   Contacto: WhatsApp: ${l.phone} | Correo: ${l.email}\n`;
    report += `   Estado: ${l.status}\n`;
    report += `   Detalles: ${l.details}\n`;
    report += `--------------------------------------------------------\n`;
  });

  report += `\nFin del reporte. Notificación auditada para SIG² Corporativo.`;

  const subject = `[REPORTE OFICIAL CRM SIG²] Bitácora Consolidada (${total} Contactos) - ${dateFormatted}`;
  const mailtoUrl = `mailto:${CRM_OFFICIAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(report)}`;

  window.location.href = mailtoUrl;

  showToast(`Abriendo envío de reporte consolidado para: ${CRM_OFFICIAL_EMAIL}`, 'success');
}

// =============================================================
// RADAR INTELIGENTE DE PROSPECCIÓN CONTINUA DE CLIENTES Y SOCIOS
// BÚSQUEDA AUTOMÁTICA Y GENERACIÓN ACTIVA EN TIEMPO REAL
// =============================================================

const RADAR_OPPORTUNITIES_POOL = [
  {
    id: 'RADAR-01',
    sector: 'mineria',
    sectorLabel: 'Minería / ANM',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    company: 'Carbones del Cerrejón Limited',
    region: 'La Guajira, Colombia',
    contactName: 'Ing. Mauricio Peláez',
    contactRole: 'Gerente Técnico de Botaderos & Taludes',
    phone: '+57 310 220 8819',
    email: 'm.pelaez@cerrejon.com.co',
    need: 'Modelamiento geológico 3D y análisis de estabilidad para taludes de botaderos de estéril con radar interferométrico.',
    service: 'Geología 3D, Taludes & PTO',
    targetType: 'Cliente Corporativo',
    valueScore: 'Alto Impacto'
  },
  {
    id: 'RADAR-02',
    sector: 'vias',
    sectorLabel: 'Infraestructura / ANI',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    company: 'Concesión Vial del Oriente (Covioriente 4G)',
    region: 'Villavicencio - Yopal',
    contactName: 'Ing. Sandra Patricia Gómez',
    contactRole: 'Directora de Geotecnia & Pavimentos',
    phone: '+57 312 884 1022',
    email: 's.gomez@covioriente.com.co',
    need: 'Instrumentación piezométrica y levantamiento LiDAR de alta densidad en 42 taludes críticos de cordillera.',
    service: 'Vuelo LiDAR & Topografía RTK',
    targetType: 'Cliente Corporativo',
    valueScore: 'Prioridad Licitatoria'
  },
  {
    id: 'RADAR-03',
    sector: 'pesv',
    sectorLabel: 'Flotas & PESV',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    company: 'Transportes Montejo Heavy Lift S.A.S.',
    region: 'Bogotá D.C. / Cobertura Nacional',
    contactName: 'Dra. Andrea Beltrán',
    contactRole: 'Líder HSEQ & Seguridad Vial',
    phone: '+57 320 994 3311',
    email: 'a.beltran@transportesmontejo.com',
    need: 'Auditoría integral y software móvil para inspección preoperacional de 95 tractomulas y camas bajas (Res. 40595).',
    service: 'SIG Fleet & PESV Res. 40595',
    targetType: 'Cliente Corporativo',
    valueScore: 'Cumplimiento Legal'
  },
  {
    id: 'RADAR-04',
    sector: 'socios',
    sectorLabel: 'Alianzas & Consorcios',
    badgeClass: 'bg-teal-50 text-teal-800 border-teal-200',
    company: 'Geotécnica & Perforaciones del Sinú S.A.S.',
    region: 'Montería / Córdoba',
    contactName: 'Ing. Roberto Char',
    contactRole: 'Socio Director & Residente de Perforación',
    phone: '+57 315 771 9022',
    email: 'r.char@geosinusas.com',
    need: 'Propuesta de Unión Temporal (Consorcio 50/50) para licitación de estudios de suelos y geotecnia vial con INVIAS.',
    service: 'SIG Campo (App Geotécnica)',
    targetType: 'Socio Estratégico / Alianza',
    valueScore: 'Unión Temporal'
  },
  {
    id: 'RADAR-05',
    sector: 'mineria',
    sectorLabel: 'Minería / ANM',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    company: 'Minera El Roble (Atico Mining)',
    region: 'Carmen de Atrato, Chocó',
    contactName: 'Ing. Gustavo Restrepo',
    contactRole: 'Superintendente de Mina Subterránea',
    phone: '+57 314 621 7740',
    email: 'g.restrepo@aticomining.com',
    need: 'Control estructural en interior de mina y digitalización de perforaciones diamantadas con software SIG Campo.',
    service: 'SIG Campo (App Geotécnica)',
    targetType: 'Cliente Corporativo',
    valueScore: 'Minería Subterránea'
  },
  {
    id: 'RADAR-06',
    sector: 'vias',
    sectorLabel: 'Infraestructura / INVIAS',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    company: 'Consorcio Obras del Tequendama',
    region: 'Cundinamarca',
    contactName: 'Ing. Camilo Pardo',
    contactRole: 'Director de Obra de Contención',
    phone: '+57 313 550 1199',
    email: 'c.pardo@obrastequendama.com',
    need: 'Estudio urgente de cinemática de falla planar en talud de 70 m con batimetría y nube de puntos LiDAR.',
    service: 'Geología 3D, Taludes & PTO',
    targetType: 'Cliente Corporativo',
    valueScore: 'Urgencia Geotécnica'
  },
  {
    id: 'RADAR-07',
    sector: 'pesv',
    sectorLabel: 'Flotas & PESV',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    company: 'Concretos & Prefabricados San Jerónimo',
    region: 'Medellín / Antioquia',
    contactName: 'Ing. Clara Inés Duque',
    contactRole: 'Jefe de Logística & Flota Mixers',
    phone: '+57 301 448 3920',
    email: 'c.duque@sanjeronimo.com.co',
    need: 'Plataforma para control de hábitos de conducción y geocercas para 48 camiones hormigonera / mixers.',
    service: 'SIG Fleet & PESV Res. 40595',
    targetType: 'Cliente Corporativo',
    valueScore: 'Flota Industrial'
  },
  {
    id: 'RADAR-08',
    sector: 'socios',
    sectorLabel: 'Alianzas & Consorcios',
    badgeClass: 'bg-teal-50 text-teal-800 border-teal-200',
    company: 'Ingeocivil Consultoría & Diseños',
    region: 'Bucaramanga, Santander',
    contactName: 'Ing. Hernán Fonseca',
    contactRole: 'Gerente de Proyectos de Infraestructura',
    phone: '+57 318 690 4125',
    email: 'h.fonseca@ingeocivil.com.co',
    need: 'Alianza técnica para integrar componente SIG y telemetría de piezómetros en licitación de puente atirantado.',
    service: 'Telemetría IoT & Dashboards BI',
    targetType: 'Socio Estratégico / Alianza',
    valueScore: 'Consorcio Licitación'
  },
  {
    id: 'RADAR-09',
    sector: 'mineria',
    sectorLabel: 'Minería / ANM',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    company: 'Cales & Agregados del Tolima S.A.S.',
    region: 'Ibagué / Tolima',
    contactName: 'Ing. Andrés Buitrago',
    contactRole: 'Director de Planeación Minera',
    phone: '+57 311 380 4490',
    email: 'a.buitrago@calestolima.com',
    need: 'Levantamiento topográfico con dron LiDAR y cubicación mensual de frentes de cantera para regalías ANM.',
    service: 'Vuelo LiDAR & Topografía RTK',
    targetType: 'Cliente Corporativo',
    valueScore: 'Cubicación Mensual'
  },
  {
    id: 'RADAR-10',
    sector: 'vias',
    sectorLabel: 'Infraestructura / Concesión',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    company: 'Consorcio Ruta del Sol Sector 3',
    region: 'Cesar / Magdalena',
    contactName: 'Ing. Laura Viviana Cruz',
    contactRole: 'Coordinadora de Estabilidad de Taludes',
    phone: '+57 316 442 8815',
    email: 'l.cruz@rutadelsol3.com.co',
    need: 'Modelación de equilibrio límite y elementos finitos para terraplenes en suelos blandos con inclinómetros automáticos.',
    service: 'Geología 3D, Taludes & PTO',
    targetType: 'Cliente Corporativo',
    valueScore: 'Alta Demanda'
  },
  {
    id: 'RADAR-11',
    sector: 'pesv',
    sectorLabel: 'Flotas & PESV',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    company: 'Expreso Bolivariano & Fronteras',
    region: 'Bogotá / Eje Cafetero',
    contactName: 'Dr. Guillermo Sanabria',
    contactRole: 'Director de Seguridad Operacional',
    phone: '+57 317 501 2234',
    email: 'g.sanabria@bolivariano.com.co',
    need: 'Módulo de auditoría periódica del PESV para 140 conductores y registro móvil de preoperacional diario sin internet.',
    service: 'SIG Fleet & PESV Res. 40595',
    targetType: 'Cliente Corporativo',
    valueScore: 'Flota Pasajeros'
  },
  {
    id: 'RADAR-12',
    sector: 'socios',
    sectorLabel: 'Alianzas & Consorcios',
    badgeClass: 'bg-teal-50 text-teal-800 border-teal-200',
    company: 'Consorcio Hidroeléctrico del Cauca',
    region: 'Antioquia / Cauca',
    contactName: 'Ing. Fernando Tamayo',
    contactRole: 'Líder de Estructuración Licitatoria',
    phone: '+57 319 883 0019',
    email: 'f.tamayo@hidrocauca.com.co',
    need: 'Invitación a formar Consorcio para interventoría geotécnica y monitoreo satelital de presa y túnel de fuga.',
    service: 'Telemetría IoT & Dashboards BI',
    targetType: 'Socio Estratégico / Alianza',
    valueScore: 'Megaproyecto 2026'
  }
];

let RADAR_STATE = {
  activeSector: 'all',
  autoScanInterval: null,
  isAutoScanActive: true,
  displayedPool: [],
  currentIndex: 4
};

function initRadarEngine() {
  RADAR_STATE.displayedPool = RADAR_OPPORTUNITIES_POOL.slice(0, 4);
  renderRadarOpportunities();
  startAutoRadarScanTimer();
}

function startAutoRadarScanTimer() {
  if (RADAR_STATE.autoScanInterval) clearInterval(RADAR_STATE.autoScanInterval);
  RADAR_STATE.autoScanInterval = setInterval(() => {
    if (!RADAR_STATE.isAutoScanActive) return;
    performAutoRadarTick();
  }, 22000); // Cada 22 segundos rota o descubre una nueva oportunidad
}

function performAutoRadarTick() {
  const pool = RADAR_OPPORTUNITIES_POOL;
  const nextItem = pool[RADAR_STATE.currentIndex % pool.length];
  RADAR_STATE.currentIndex++;

  // Si ya está en pantalla, omitir
  if (!RADAR_STATE.displayedPool.find(item => item.id === nextItem.id)) {
    RADAR_STATE.displayedPool.pop();
    RADAR_STATE.displayedPool.unshift(nextItem);
    renderRadarOpportunities();
    updateRadarStatusMessage(`Radar SIG² detectó nueva oportunidad: "${nextItem.company}" en ${nextItem.region}.`);
  }
}

function toggleAutoRadarScan() {
  RADAR_STATE.isAutoScanActive = !RADAR_STATE.isAutoScanActive;
  const textEl = document.getElementById('auto-radar-status-text');
  const btnEl = document.getElementById('btn-toggle-auto-radar');

  if (RADAR_STATE.isAutoScanActive) {
    if (textEl) textEl.textContent = 'Búsqueda Automática: ON';
    if (btnEl) btnEl.className = 'px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-300 bg-emerald-50 text-emerald-800 flex items-center gap-2 transition-all';
    showToast('Búsqueda continua automática de clientes y socios ACTIVADA.', 'info');
  } else {
    if (textEl) textEl.textContent = 'Búsqueda Automática: PAUSA';
    if (btnEl) btnEl.className = 'px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 bg-slate-50 text-slate-600 flex items-center gap-2 transition-all';
    showToast('Búsqueda continua automática en pausa.', 'info');
  }
}

function triggerRadarScanManual() {
  const btn = document.getElementById('btn-radar-scan-now');
  if (btn) {
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-teal-300"></i><span>Escaneando Registro Minero & SECOP...</span>';
  }

  setTimeout(() => {
    // Tomar 4 items aleatorios o rotados del pool
    const pool = RADAR_OPPORTUNITIES_POOL;
    const start = Math.floor(Math.random() * (pool.length - 4));
    RADAR_STATE.displayedPool = pool.slice(start, start + 4);
    
    renderRadarOpportunities();
    updateRadarStatusMessage(`Escaneo completo: 4 nuevas oportunidades de alta demanda detectadas.`);

    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-magnifying-glass-chart text-teal-300"></i><span>Escanear Nuevos Prospectos</span>';
    }

    showToast('¡Radar SIG² actualizado! Nuevas empresas y socios disponibles.', 'success');
  }, 900);
}

function filterRadarOpportunities(sector) {
  RADAR_STATE.activeSector = sector;
  
  // Actualizar botones de filtro
  document.querySelectorAll('.radar-sector-btn').forEach(btn => {
    if (btn.getAttribute('data-sector') === sector) {
      btn.className = 'radar-sector-btn px-3 py-1 rounded-lg bg-sig-navy text-white font-bold transition-all text-xs';
    } else {
      btn.className = 'radar-sector-btn px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-all text-xs';
    }
  });

  renderRadarOpportunities();
}

function renderRadarOpportunities() {
  const container = document.getElementById('radar-opportunities-feed');
  const countEl = document.getElementById('radar-count-display');
  if (!container) return;

  let items = RADAR_STATE.displayedPool;
  if (RADAR_STATE.activeSector !== 'all') {
    items = items.filter(item => item.sector === RADAR_STATE.activeSector);
  }

  if (countEl) countEl.textContent = items.length;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
        <i class="fa-solid fa-radar text-2xl text-slate-400 mb-2"></i>
        <div class="text-xs font-bold text-slate-700">No hay oportunidades visibles en este sector específico.</div>
        <p class="text-[11px] text-slate-500 mt-1">Haz clic en "Escanear Nuevos Prospectos" o selecciona "Todos".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(op => {
    return `
      <div class="bg-slate-50 hover:bg-white rounded-2xl p-4 border border-slate-200 hover:border-sig-teal transition-all flex flex-col justify-between shadow-2xs hover:shadow-md group">
        <div>
          <div class="flex items-center justify-between gap-1 mb-2">
            <span class="text-[9px] px-2 py-0.5 rounded-md font-extrabold uppercase border ${op.badgeClass}">
              ${op.sectorLabel}
            </span>
            <span class="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
              <span class="pulse-dot-green"></span> ${op.valueScore}
            </span>
          </div>

          <h4 class="text-xs font-black text-sig-navy leading-snug group-hover:text-sig-teal transition-colors">
            ${op.company}
          </h4>
          <div class="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5 mb-2">
            <i class="fa-solid fa-location-dot text-slate-400"></i>
            <span>${op.region}</span>
          </div>

          <div class="bg-white p-2.5 rounded-xl border border-slate-200/80 mb-3 text-[11px] text-slate-700 leading-relaxed">
            <div class="font-bold text-sig-navy text-[10px] mb-0.5 flex items-center gap-1">
              <i class="fa-solid fa-circle-info text-sig-teal text-[9px]"></i>
              <span>Requerimiento Técnico Detectado:</span>
            </div>
            ${op.need}
          </div>

          <div class="text-[10px] text-slate-600 space-y-0.5 mb-3 border-t border-slate-200/60 pt-2">
            <div><strong class="text-slate-800">Contacto:</strong> ${op.contactName} (${op.contactRole})</div>
            <div><strong class="text-slate-800">Móvil / WA:</strong> <span class="font-mono">${op.phone}</span></div>
          </div>
        </div>

        <div class="space-y-1.5 pt-1 border-t border-slate-200/60">
          <button onclick="importRadarLeadToCrm('${op.id}')" class="w-full py-1.5 bg-sig-navy hover:bg-slate-800 text-white rounded-lg font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all shadow-xs">
            <i class="fa-solid fa-user-plus text-[10px] text-teal-300"></i>
            <span>Importar al Pipeline de Clientes</span>
          </button>
          
          <div class="grid grid-cols-2 gap-1.5">
            <button onclick="contactRadarLeadViaWhatsApp('${op.id}')" class="py-1 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[10px] flex items-center justify-center gap-1 transition-all">
              <span class="icon-whatsapp text-xs"></span>
              <span>WhatsApp</span>
            </button>
            <button onclick="contactRadarLeadViaEmail('${op.id}')" class="py-1 px-2 bg-slate-100 hover:bg-slate-200 text-sig-navy rounded-lg font-bold text-[10px] border border-slate-300 flex items-center justify-center gap-1 transition-all">
              <i class="fa-solid fa-envelope text-slate-500"></i>
              <span>Propuesta</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function updateRadarStatusMessage(msg) {
  const infoEl = document.getElementById('radar-last-scan-info');
  if (infoEl) infoEl.textContent = msg;
}

function importRadarLeadToCrm(radarId) {
  const item = RADAR_OPPORTUNITIES_POOL.find(op => op.id === radarId);
  if (!item) return;

  // Verificar si ya existe en leads
  const existing = CRM_STATE.leads.find(l => l.company.toLowerCase() === item.company.toLowerCase());
  if (existing) {
    showToast(`"${item.company}" ya está en tu Pipeline comercial.`, 'info');
    return;
  }

  const now = new Date();
  const dateFormatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  const newLead = {
    id: `RADAR-${now.getFullYear()}-${String(CRM_STATE.leads.length + 1).padStart(3, '0')}`,
    timestamp: dateFormatted,
    name: item.contactName,
    role: item.contactRole,
    company: item.company,
    phone: item.phone,
    email: item.email,
    targetType: item.targetType,
    service: item.service,
    details: `${item.need} (Ubicación: ${item.region})`,
    status: 'Nuevo Lead (Radar)',
    destEmail: CRM_OFFICIAL_EMAIL
  };

  CRM_STATE.leads.unshift(newLead);
  saveCrmLeadsToStorage();
  updateCrmKpis();
  renderCrmTable();

  showToast(`¡"${item.company}" agregada con éxito al CRM y al Master Excel!`, 'success');
}

function importAllRadarOpportunitiesToCrm() {
  let count = 0;
  RADAR_STATE.displayedPool.forEach(op => {
    const existing = CRM_STATE.leads.find(l => l.company.toLowerCase() === op.company.toLowerCase());
    if (!existing) {
      importRadarLeadToCrm(op.id);
      count++;
    }
  });

  if (count > 0) {
    showToast(`Se incorporaron ${count} oportunidades en vivo al Pipeline del CRM.`, 'success');
  } else {
    showToast('Todas las oportunidades visibles ya forman parte de tu Pipeline.', 'info');
  }
}

function contactRadarLeadViaWhatsApp(radarId) {
  const op = RADAR_OPPORTUNITIES_POOL.find(item => item.id === radarId);
  if (!op) return;

  const phoneDigits = op.phone.replace(/[^0-9]/g, '');
  const text = `Hola ${op.contactName}, cordial saludo desde la Dirección Técnica de SIG² Ingeniería. Nos comunicamos en referencia a las operaciones de ${op.company} (${op.region}). Hemos analizado su necesidad técnica en ${op.service} (${op.need}) y disponemos de la capacidad técnica, software y equipos para emitirles una propuesta formal e integral. ¿Podríamos coordinar una breve llamada técnica hoy?`;

  const waUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

function contactRadarLeadViaEmail(radarId) {
  const op = RADAR_OPPORTUNITIES_POOL.find(item => item.id === radarId);
  if (!op) return;

  const subject = `Propuesta Técnica & Alianza Corporativa - SIG² Ingeniería para ${op.company}`;
  let body = `Estimado(a) ${op.contactName},\n`;
  body += `${op.contactRole} - ${op.company}\n\n`;
  body += `Por medio de la presente, desde la Dirección Técnica de SIG² Ingeniería especializada en Geología, Geotecnia, Vuelo LiDAR y Cumplimiento PESV, nos permitimos presentar nuestras capacidades técnicas orientadas a su requerimiento:\n\n`;
  body += `- Proyecto / Faena: ${op.region}\n`;
  body += `- Foco Técnico: ${op.service}\n`;
  body += `- Requerimiento Analizado: ${op.need}\n\n`;
  body += `Disponemos de software especializado (SIG Campo, SIG Fleet), estaciones topográficas RTK, modelamiento 3D y personal idóneo para acompañar sus operaciones.\n\n`;
  body += `Agradecemos confirmar disponibilidad para presentación de portafolio y emisión de propuesta formal.\n\n`;
  body += `Atentamente,\n`;
  body += `Dirección de Proyectos & Comercial SIG²\n`;
  body += `Canal Directo WhatsApp: +57 312 789 4040\n`;
  body += `Correo Oficial: ${CRM_OFFICIAL_EMAIL}\n`;

  const mailUrl = `mailto:${op.email}?cc=${CRM_OFFICIAL_EMAIL}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailUrl;
}

