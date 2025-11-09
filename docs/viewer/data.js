// Mockup data
const mockups = [
    {
        id: 'HU_001',
        title: 'Registro de Usuario',
        description: 'Formulario completo de registro con validación y términos de servicio.',
        category: 'auth',
        icon: '👤',
        file: '../mockups_modern/HU_001_modern.html'
    },
    {
        id: 'HU_002',
        title: 'Inicio de Sesión',
        description: 'Pantalla de login con opciones de recordar sesión y recuperación.',
        category: 'auth',
        icon: '🔐',
        file: '../mockups_modern/HU_002_modern.html'
    },
    {
        id: 'HU_003',
        title: 'Recuperar Contraseña',
        description: 'Proceso de recuperación de contraseña por email.',
        category: 'auth',
        icon: '🔑',
        file: '../mockups_modern/HU_003_modern.html'
    },
    {
        id: 'HU_004',
        title: 'Perfil de Usuario',
        description: 'Vista completa del perfil con estadísticas y logros.',
        category: 'user',
        icon: '👤',
        file: '../mockups_modern/HU_004_modern.html'
    },
    {
        id: 'HU_005',
        title: 'Editar Perfil',
        description: 'Formulario para editar información personal y preferencias.',
        category: 'user',
        icon: '✏️',
        file: '../mockups_modern/HU_005_modern.html'
    },
    {
        id: 'HU_006',
        title: 'Dashboard Principal',
        description: 'Panel principal con métricas, actividades recientes y navegación.',
        category: 'user',
        icon: '📊',
        file: '../mockups_modern/HU_006_modern.html'
    },
    {
        id: 'HU_007',
        title: 'Explorar Actividades',
        description: 'Catálogo de actividades con filtros y búsqueda avanzada.',
        category: 'activities',
        icon: '🔍',
        file: '../mockups_modern/HU_007_modern.html'
    },
    {
        id: 'HU_008',
        title: 'Detalles de Actividad',
        description: 'Vista detallada de actividad con información completa y requisitos.',
        category: 'activities',
        icon: '📋',
        file: '../mockups_modern/HU_008_modern.html'
    },
    {
        id: 'HU_009',
        title: 'Inscripción a Actividad',
        description: 'Proceso de inscripción con confirmación y términos.',
        category: 'activities',
        icon: '✅',
        file: '../mockups_modern/HU_009_modern.html'
    },
    {
        id: 'HU_010',
        title: 'Mis Actividades',
        description: 'Lista de actividades inscritas con estado y progreso.',
        category: 'activities',
        icon: '📅',
        file: '../mockups_modern/HU_010_modern.html'
    },
    {
        id: 'HU_011',
        title: 'Historial de Participación',
        description: 'Historial completo de actividades realizadas y certificados.',
        category: 'user',
        icon: '📚',
        file: '../mockups_modern/HU_011_modern.html'
    },
    {
        id: 'HU_012',
        title: 'Crear Actividad',
        description: 'Formulario para crear nuevas actividades con todos los campos.',
        category: 'admin',
        icon: '➕',
        file: '../mockups_modern/HU_012_modern.html'
    },
    {
        id: 'HU_013',
        title: 'Gestionar Actividades',
        description: 'Panel de administración para gestionar todas las actividades.',
        category: 'admin',
        icon: '⚙️',
        file: '../mockups_modern/HU_013_modern.html'
    },
    {
        id: 'HU_014',
        title: 'Reportes',
        description: 'Sistema completo de reportes con filtros y exportación.',
        category: 'admin',
        icon: '📊',
        file: '../mockups_modern/HU_014_modern.html'
    },
    {
        id: 'HU_015',
        title: 'Notificaciones',
        description: 'Centro de notificaciones con diferentes tipos de alertas.',
        category: 'user',
        icon: '🔔',
        file: '../mockups_modern/HU_015_modern.html'
    },
    {
        id: 'HU_016',
        title: 'Mensajes',
        description: 'Sistema de mensajería interna para comunicación.',
        category: 'user',
        icon: '💬',
        file: '../mockups_modern/HU_016_modern.html'
    },
    {
        id: 'HU_017',
        title: 'Comunidad',
        description: 'Espacio comunitario para compartir experiencias.',
        category: 'user',
        icon: '👥',
        file: '../mockups_modern/HU_017_modern.html'
    },
    {
        id: 'HU_018',
        title: 'Configuración',
        description: 'Panel de configuración de la cuenta y preferencias.',
        category: 'user',
        icon: '⚙️',
        file: '../mockups_modern/HU_018_modern.html'
    },
    {
        id: 'HU_019',
        title: 'Ayuda',
        description: 'Centro de ayuda con FAQ y guías de usuario.',
        category: 'user',
        icon: '❓',
        file: '../mockups_modern/HU_019_modern.html'
    },
    {
        id: 'HU_020',
        title: 'Soporte y Ayuda',
        description: 'Sistema avanzado de soporte con tickets y chat.',
        category: 'user',
        icon: '🆘',
        file: '../mockups_modern/HU_020_modern.html'
    },
    {
        id: 'HU_021',
        title: 'Estadísticas y Métricas',
        description: 'Dashboard de métricas con gráficos y KPIs detallados.',
        category: 'admin',
        icon: '📈',
        file: '../mockups_modern/HU_021_modern.html'
    },
    {
        id: 'HU_022',
        title: 'Panel de Administración',
        description: 'Panel completo de administración del sistema.',
        category: 'admin',
        icon: '👑',
        file: '../mockups_modern/HU_022_modern.html'
    },
    {
        id: 'HU_023',
        title: 'Gestión de Certificados',
        description: 'Sistema completo para emitir y gestionar certificados.',
        category: 'admin',
        icon: '🏆',
        file: '../mockups_modern/HU_023_modern.html'
    }
];