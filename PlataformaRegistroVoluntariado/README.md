# Plataforma de Registro de Voluntariado# Plataforma de Registro de Voluntariado



## 📋 Descripción## Descripcion del Proyecto

Sistema completo de gestión para registro y administración de voluntarios, con interfaz moderna y funcionalidades avanzadas.

Una ONG requiere una plataforma integral para:

## 🎨 Mockups Modernos- Registrar voluntarios

- Asignar actividades de voluntariado

### Cómo ver los mockups- Hacer seguimiento a la participación

- Enviar notificaciones de nuevas actividades

#### Opción 1: GitHub Pages (Recomendado)- Guardar historial de voluntariado

1. Ve a **Settings** del repositorio- Generar certificados de participación

2. Busca la sección **Pages** en el menú lateral

3. En **Source**, selecciona **Deploy from a branch**---

4. En **Branch**, selecciona **main** y carpeta **docs/**

5. Haz clic en **Save**## Documentacion del Proyecto

6. Espera unos minutos y podrás ver los mockups en: `https://C-David-Burbano-C.github.io/PlataformaRegistroVoluntariado/mockups_modern/`

### 1. [Historias de Usuario](./docs/HISTORIAS_DE_USUARIO.md)

#### Opción 2: Ver archivos individualesContiene 20 historias de usuario completas que describen todas las funcionalidades del sistema:

Puedes ver cada mockup directamente en GitHub:- HU_001: Registro de Voluntarios

- [HU_001 - Registro de Usuario](docs/mockups_modern/HU_001_modern.html)- HU_002: Asignacion de Actividades

- [HU_002 - Inicio de Sesión](docs/mockups_modern/HU_002_modern.html)- HU_003: Notificaciones de Nuevas Actividades

- [HU_003 - Recuperar Contraseña](docs/mockups_modern/HU_003_modern.html)- HU_004: Historial de Voluntariado

- [HU_004 - Perfil de Usuario](docs/mockups_modern/HU_004_modern.html)- HU_005: Seguimiento de Participacion

- [HU_005 - Editar Perfil](docs/mockups_modern/HU_005_modern.html)- HU_006: Control de Asistencia de Estudiantes

- [HU_006 - Dashboard Principal](docs/mockups_modern/HU_006_modern.html)- HU_007: Generacion de Certificados

- [HU_007 - Explorar Actividades](docs/mockups_modern/HU_007_modern.html)- HU_008: Perfil de Voluntario

- [HU_008 - Detalles de Actividad](docs/mockups_modern/HU_008_modern.html)- HU_009: Gestion de Actividades

- [HU_009 - Inscripción a Actividad](docs/mockups_modern/HU_009_modern.html)- HU_010: Autenticacion y Autorizacion

- [HU_010 - Mis Actividades](docs/mockups_modern/HU_010_modern.html)- HU_011: Panel de Control (Dashboard)

- [HU_011 - Historial de Participación](docs/mockups_modern/HU_011_modern.html)- HU_012: Exportacion de Reportes

- [HU_012 - Crear Actividad](docs/mockups_modern/HU_012_modern.html)- HU_013: Gestion de Roles y Permisos

- [HU_013 - Gestionar Actividades](docs/mockups_modern/HU_013_modern.html)- HU_014: Busqueda y Filtros Avanzados

- [HU_014 - Reportes](docs/mockups_modern/HU_014_modern.html)- HU_015: Comunicacion Entre Voluntarios

- [HU_015 - Notificaciones](docs/mockups_modern/HU_015_modern.html)- HU_016: Evaluacion de Desempeño

- [HU_016 - Mensajes](docs/mockups_modern/HU_016_modern.html)- HU_017: Recordatorios y Alertas

- [HU_017 - Comunidad](docs/mockups_modern/HU_017_modern.html)- HU_018: Integracion con Calendario

- [HU_018 - Configuración](docs/mockups_modern/HU_018_modern.html)- HU_019: Reporte de Impacto Social

- [HU_019 - Ayuda](docs/mockups_modern/HU_019_modern.html)- HU_020: Respaldo y Recuperacion de Datos

- [HU_020 - Soporte y Ayuda](docs/mockups_modern/HU_020_modern.html)

- [HU_021 - Estadísticas y Métricas](docs/mockups_modern/HU_021_modern.html)Cada historia incluye criterios de aceptacion, flujos principales y flujos alternativos.

- [HU_022 - Panel de Administración](docs/mockups_modern/HU_022_modern.html)

- [HU_023 - Gestión de Certificados](docs/mockups_modern/HU_023_modern.html)### 2. [Escenarios de Calidad](./docs/ESCENARIOS_DE_CALIDAD.md)

Contiene 25 escenarios de calidad que definen riesgos de seguridad, rendimiento y disponibilidad:

#### Opción 3: Servidor Local

```bash**Seguridad (EC001-EC023):**

# Clona el repositorio- EC001: Entrada Invalida a la Base de Datos

git clone https://github.com/C-David-Burbano-C/PlataformaRegistroVoluntariado.git- EC003: Acceso No Autorizado a Informacion Personal

cd PlataformaRegistroVoluntariado- EC005: Integridad de Certificados

- EC013: Inyeccion SQL

# Ve a la carpeta de mockups- EC014: Ataque de Fuerza Bruta

cd docs/mockups_modern- EC015: Vulnerabilidades en Dependencias

- EC018: Ataques de Phishing

# Inicia servidor local- EC020: Seguridad de Sesiones

python -m http.server 8000- EC023: Control de Acceso por Rol



# Abre en navegador: http://localhost:8000**Disponibilidad y Rendimiento:**

```- EC004: Disponibilidad del Sistema

- EC008: Rendimiento de Reportes

## 📱 Características de los Mockups- EC016: Escalabilidad y Rendimiento

- EC024: Actualizaciones del Sistema

- **Diseño Responsive**: Se adaptan a móviles, tablets y desktop

- **Interfaz Moderna**: Gradientes, sombras y animaciones sutiles**Integridad y Confiabilidad:**

- **Paleta Profesional**: Azul (#1e3a8a), verde (#10b981), etc.- EC002: Perdida de Datos de Voluntarios

- **UX Optimizada**: Navegación intuitiva y elementos interactivos- EC006: Validacion de Datos de Entrada

- **Accesibilidad**: Contraste adecuado y estructura semántica- EC009: Consistencia de Datos

- EC010: Recuperacion Ante Desastres

## 📋 Historias de Usuario- EC022: Sincronizacion de Datos

Consulta las [historias de usuario](docs/HISTORIAS_DE_USUARIO.md) para entender los requerimientos del sistema.- EC025: Control de Cambios



## 🚀 Tecnologías**Operaciones y Cumplimiento:**

- HTML5- EC007: Notificaciones Fiables

- CSS3 (Flexbox, Grid, Animaciones)- EC011: Auditoria y Trazabilidad

- Diseño Responsive- EC012: Compatibilidad con Dispositivos

- Interfaz de Usuario Moderna- EC017: Privacidad y Cumplimiento Normativo

- EC019: Monitoreo y Deteccion de Anomalias

---- EC021: Manejo de Errores y Excepciones

**Repositorio:** [C-David-Burbano-C/PlataformaRegistroVoluntariado](https://github.com/C-David-Burbano-C/PlataformaRegistroVoluntariado)
Cada escenario incluye fuente, estimulo, artefacto, ambiente, respuesta y medidas de respuesta.

---

## Estructura de Archivos

```
PlataformaRegistroVoluntariado/
├── README.md                                    (Este archivo)
├── docs/
│   ├── HISTORIAS_DE_USUARIO.md                 (20 historias completas)
│   └── ESCENARIOS_DE_CALIDAD.md                (25 escenarios completos)
```

---

## Como Usar Esta Documentacion

### Para Desarrolladores:
1. Consultar las Historias de Usuario para entender los requisitos funcionales
2. Revisar los Escenarios de Calidad para entender los requisitos no-funcionales
3. Usar ambas como base para la planificacion de sprints

### Para Coordinadores:
1. Usar las Historias de Usuario para orientar el desarrollo
2. Revisar los Escenarios de Calidad para validar que se cumplan los requisitos

### Para Testers:
1. Usar los criterios de aceptacion de cada Historia como casos de prueba
2. Usar los Escenarios de Calidad para pruebas de seguridad y rendimiento

---

## Informacion de la Documentacion

**Version:** 1.0  
**Fecha de Creacion:** 25 de Octubre de 2025  
**Confidencialidad:** Publica  
**Licencia:** Proyecto academico sin derechos de autor

