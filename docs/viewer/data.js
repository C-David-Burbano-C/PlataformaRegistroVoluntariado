// Mockup data
const mockups = [
    {
        id: 'HU_001',
        title: 'REGISTRO DE VOLUNTARIOS',
        description: 'Formulario completo para registrar nuevos voluntarios con validación de datos personales.',
        category: 'admin',
        icon: '',
        file: '../mockups_modern/HU_001_modern.html'
    },
    {
        id: 'HU_002',
        title: 'ASIGNACION DE ACTIVIDADES',
        description: 'Interfaz para asignar actividades a voluntarios con selección múltiple.',
        category: 'admin',
        icon: '�',
        file: '../mockups_modern/HU_002_modern.html'
    },
    {
        id: 'HU_003',
        title: 'NOTIFICACIONES DE NUEVAS ACTIVIDADES',
        description: 'Sistema de notificaciones por email para actividades asignadas.',
        category: 'user',
        icon: '�',
        file: '../mockups_modern/HU_003_modern.html'
    },
    {
        id: 'HU_004',
        title: 'HISTORIAL DE VOLUNTARIADO',
        description: 'Vista completa del historial de actividades realizadas por cada voluntario.',
        category: 'admin',
        icon: '�',
        file: '../mockups_modern/HU_004_modern.html'
    },
    {
        id: 'HU_005',
        title: 'SEGUIMIENTO DE PARTICIPACION',
        description: 'Registro de asistencia y participación en actividades con observaciones.',
        category: 'admin',
        icon: '',
        file: '../mockups_modern/HU_005_modern.html'
    },
    {
        id: 'HU_006',
        title: 'CONTROL DE ASISTENCIA DE ESTUDIANTES',
        description: 'Sistema para registrar asistencia semanal de estudiantes con estadísticas.',
        category: 'admin',
        icon: '',
        file: '../mockups_modern/HU_006_modern.html'
    },
    {
        id: 'HU_007',
        title: 'GENERACION DE CERTIFICADOS',
        description: 'Generación automática de certificados de participación con código único.',
        category: 'user',
        icon: '',
        file: '../mockups_modern/HU_007_modern.html'
    },
    {
        id: 'HU_008',
        title: 'PERFIL DE VOLUNTARIO',
        description: 'Perfil personal del voluntario con historial y estadísticas.',
        category: 'user',
        icon: '�',
        file: '../mockups_modern/HU_008_modern.html'
    },
    {
        id: 'HU_009',
        title: 'GESTION DE ACTIVIDADES',
        description: 'Panel completo para crear, modificar y eliminar actividades.',
        category: 'admin',
        icon: '',
        file: '../mockups_modern/HU_009_modern.html'
    },
    {
        id: 'HU_010',
        title: 'AUTENTICACION Y AUTORIZACION',
        description: 'Sistema de login seguro con roles y permisos de usuario.',
        category: 'auth',
        icon: '�',
        file: '../mockups_modern/HU_010_modern.html'
    },
    {
        id: 'HU_011',
        title: 'PANEL DE CONTROL (DASHBOARD)',
        description: 'Dashboard principal con métricas, estadísticas y resumen general.',
        category: 'admin',
        icon: '�',
        file: '../mockups_modern/HU_011_modern.html'
    },
    {
        id: 'HU_012',
        title: 'EXPORTACION DE REPORTES',
        description: 'Sistema de exportación de reportes en PDF, Excel y CSV.',
        category: 'admin',
        icon: '',
        file: '../mockups_modern/HU_012_modern.html'
    },
    {
        id: 'HU_013',
        title: 'GESTION DE ROLES Y PERMISOS',
        description: 'Administración de roles y permisos de usuarios del sistema.',
        category: 'admin',
        icon: '',
        file: '../mockups_modern/HU_013_modern.html'
    },
    {
        id: 'HU_014',
        title: 'BUSQUEDA Y FILTROS AVANZADOS',
        description: 'Búsqueda avanzada con filtros por múltiples criterios.',
        category: 'admin',
        icon: '�',
        file: '../mockups_modern/HU_014_modern.html'
    },
    {
        id: 'HU_015',
        title: 'COMUNICACION ENTRE VOLUNTARIOS',
        description: 'Sistema de mensajería interna y chat entre voluntarios.',
        category: 'user',
        icon: '�',
        file: '../mockups_modern/HU_015_modern.html'
    },
    {
        id: 'HU_016',
        title: 'EVALUACION DE DESEMPEÑO',
        description: 'Sistema de evaluación y calificación del desempeño de voluntarios.',
        category: 'admin',
        icon: '⭐',
        file: '../mockups_modern/HU_016_modern.html'
    },
    {
        id: 'HU_017',
        title: 'RECORDATORIOS Y ALERTAS',
        description: 'Centro de notificaciones y recordatorios automáticos.',
        category: 'admin',
        icon: '',
        file: '../mockups_modern/HU_017_modern.html'
    },
    {
        id: 'HU_018',
        title: 'INTEGRACION CON CALENDARIO',
        description: 'Calendario integrado con actividades y sincronización externa.',
        category: 'user',
        icon: '',
        file: '../mockups_modern/HU_018_modern.html'
    },
    {
        id: 'HU_019',
        title: 'REPORTE DE IMPACTO SOCIAL',
        description: 'Reportes de impacto social con métricas y estadísticas.',
        category: 'admin',
        icon: '',
        file: '../mockups_modern/HU_019_modern.html'
    },
    {
        id: 'HU_020',
        title: 'RESPALDO Y RECUPERACION DE DATOS',
        description: 'Sistema de respaldos automáticos y recuperación de datos.',
        category: 'admin',
        icon: '💾',
        file: '../mockups_modern/HU_020_modern.html'
    },
    {
        id: 'HU_021',
        title: 'CANCELACION Y MODIFICACION DE PARTICIPACION',
        description: 'Sistema para cancelar o modificar participación en actividades.',
        category: 'user',
        icon: '❌',
        file: '../mockups_modern/HU_021_modern.html'
    },
    {
        id: 'HU_022',
        title: 'SUBIDA DE EVIDENCIAS DE PARTICIPACION',
        description: 'Subida de fotos, videos y documentos como evidencia de participación.',
        category: 'admin',
        icon: '�',
        file: '../mockups_modern/HU_022_modern.html'
    },
    {
        id: 'HU_023',
        title: 'CONFIRMACION DIGITAL DE ASISTENCIA',
        description: 'Confirmación de asistencia mediante código QR y verificación digital.',
        category: 'admin',
        icon: '📱',
        file: '../mockups_modern/HU_023_modern.html'
    }
];