# Historias de Usuario - Plataforma de Registro de Voluntariado

## Descripcion General
Plataforma para que una ONG pueda registrar voluntarios, asignarles actividades, hacer seguimiento a su participación, enviar notificaciones, guardar historial y generar certificados.

---

## HU_001: REGISTRO DE VOLUNTARIOS

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | registrar nuevos voluntarios en el sistema |
| **Para** | mantener una base de datos actualizada de los voluntarios disponibles |
| **Criterios de aceptacion** | El sistema debe capturar los siguientes datos: nombre completo, correo electronico, telefono, fecha de nacimiento, direccion y documentacion de identidad. Validar que el correo electronico sea unico en la base de datos. Validar que el numero de telefono tenga el formato correcto. Validar que todos los campos obligatorios sean completados. Mostrar un mensaje de confirmacion al registrar exitosamente un voluntario. Mostrar un mensaje de error si el voluntario ya existe en la base de datos. El sistema debe guardar la fecha de registro automaticamente. |

### Mockup - Formulario de Registro

![Mockup HU_001](./mockups/HU_001_Registro_Voluntarios.png)

---

## HU_002: ASIGNACION DE ACTIVIDADES

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | asignar actividades a voluntarios |
| **Para** | organizar y distribuir las tareas de voluntariado |
| **Criterios de aceptacion** | El sistema debe permitir seleccionar voluntarios existentes. El sistema debe permitir seleccionar o crear actividades. El sistema debe registrar la fecha de asignacion, fecha de inicio y fecha de fin de la actividad. El sistema debe validar que la fecha de fin sea posterior a la fecha de inicio. Permitir asignar la misma actividad a multiples voluntarios. Mostrar una lista de actividades asignadas al voluntario. El sistema debe enviar una notificacion al voluntario asignado. Permitir modificar la asignacion de una actividad. |

### Mockup - Asignacion de Actividades

![Mockup HU_002](./mockups/HU_002_Asignacion_Actividades.png)

---

## HU_003: NOTIFICACIONES DE NUEVAS ACTIVIDADES

| Aspecto | Descripción |
|---------|-------------|
| **Como** | voluntario |
| **Quiero** | recibir notificaciones de nuevas actividades asignadas |
| **Para** | estar informado en tiempo real sobre las tareas |
| **Criterios de aceptacion** | El sistema debe enviar notificaciones por correo electronico. La notificacion debe incluir: nombre de la actividad, descripcion, fecha de inicio y fecha de fin. El sistema debe incluir un enlace para acceder a la actividad en el sistema. Permitir al voluntario configurar sus preferencias de notificacion (diarias, instantaneas, semanales). Registrar el envio de notificaciones en un registro de auditorias. El sistema debe reintentar el envio si falla en el primer intento. Validar que el correo electronico del voluntario sea valido antes de enviar. |

### Mockup - Email de Notificacion

![Mockup HU_003](./mockups/HU_003_Notificacion.png)

---

## HU_004: HISTORIAL DE VOLUNTARIADO

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | visualizar el historial completo de actividades realizadas por cada voluntario |
| **Para** | hacer seguimiento a su participacion y tomar decisiones |
| **Criterios de aceptacion** | El sistema debe mostrar todas las actividades asignadas a un voluntario con sus fechas. Mostrar el estado de cada actividad (pendiente, en progreso, completada, cancelada). Permitir filtrar el historial por fecha, estado o tipo de actividad. Mostrar el total de horas de voluntariado. Mostrar el total de actividades completadas. Permitir exportar el historial en formato PDF. Mostrar observaciones o comentarios sobre el desempeño del voluntario en cada actividad. |

### Mockup - Historial de Voluntario

![Mockup HU_004](./mockups/HU_004_Historial.png)

---

## HU_005: SEGUIMIENTO DE PARTICIPACION

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | registrar la asistencia y participacion de voluntarios en actividades |
| **Para** | evaluar su compromiso |
| **Criterios de aceptacion** | El sistema debe permitir marcar la asistencia (presente/ausente). El sistema debe registrar la hora de llegada y salida. Permitir agregar observaciones sobre la participacion del voluntario. El sistema debe calcular automaticamente las horas trabajadas. Permitir registrar el nivel de desempeño (excelente, bueno, regular, deficiente). Validar que solo se pueda registrar asistencia en la fecha de la actividad. Permitir modificar registros de asistencia solo por el coordinador. |

### Mockup - Registro de Asistencia

![Mockup HU_005](./mockups/HU_005_Asistencia.png)

---

## HU_006: CONTROL DE ASISTENCIA DE ESTUDIANTES

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador academico |
| **Quiero** | registrar la asistencia de un grupo de estudiantes durante una semana |
| **Para** | generar un resumen del cumplimiento y tomar decisiones academicas |
| **Criterios de aceptacion** | El sistema debe usar una constante DIAS_SEMANA = 5 y NUM_ESTUDIANTES = 4. Utilizar vectores para registrar asistencia (P = presente, A = ausente) por estudiante y dia. Se debe capturar la asistencia usando un ciclo (uno por estudiante y otro por dia). Validar que el valor ingresado sea correcto (P o A). Despues de llenar los datos, mostrar estadisticas. Un menu de opciones debe permitir ver asistencia individual, resumen general, volver a registrar o salir. |

### Mockup - Control de Asistencia

![Mockup HU_006](./mockups/HU_006_Asistencia_Estudiantes.png)

---

## HU_007: GENERACION DE CERTIFICADOS

| Aspecto | Descripción |
|---------|-------------|
| **Como** | voluntario |
| **Quiero** | obtener certificados de participacion en actividades |
| **Para** | comprobar mi contribucion como voluntario |
| **Criterios de aceptacion** | El sistema debe generar certificados automaticamente al completar una actividad. El certificado debe incluir: nombre del voluntario, nombre de la actividad, fechas de participacion y total de horas. El certificado debe incluir el logo y nombre de la ONG. Permitir descargar el certificado en formato PDF. El sistema debe generar un codigo unico para verificar la autenticidad del certificado. Permitir al coordinador visualizar y descargar certificados de cualquier voluntario. El sistema debe registrar la fecha de generacion del certificado. |

### Mockup - Certificado de Voluntariado

![Mockup HU_007](./mockups/HU_007_Certificado.png)

---

## HU_008: PERFIL DE VOLUNTARIO

| Aspecto | Descripción |
|---------|-------------|
| **Como** | voluntario |
| **Quiero** | ver y actualizar mi perfil con mis datos personales |
| **Para** | mantener mi informacion actualizada |
| **Criterios de aceptacion** | El sistema debe permitir visualizar todos los datos del perfil del voluntario. Permitir actualizar informacion personal (telefono, direccion, correo electronico). Validar cambios en correo electronico (no debe existir otro voluntario con ese correo). Mostrar el historial de actividades del voluntario en su perfil. Mostrar el total de horas acumuladas. Permitir descargar un resumen de participacion. Registrar la fecha y hora de la ultima actualizacion del perfil. El voluntario no debe poder cambiar su numero de identidad. |

### Mockup - Perfil de Voluntario

![Mockup HU_008](./mockups/HU_008_Perfil.png)

---

## HU_009: GESTION DE ACTIVIDADES

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | crear, modificar y eliminar actividades |
| **Para** | mantener un catalogo actualizado de tareas disponibles |
| **Criterios de aceptacion** | El sistema debe permitir crear nuevas actividades con: nombre, descripcion, tipo, ubicacion, horario y numero de voluntarios requeridos. Validar que el nombre de la actividad sea unico. Permitir modificar los datos de una actividad mientras no haya voluntarios asignados. Permitir marcar una actividad como inactiva en lugar de eliminarla. El sistema debe mostrar una lista de todas las actividades con filtros por tipo y estado. Mostrar el numero de voluntarios asignados a cada actividad. El sistema debe validar que al menos haya un nombre y descripcion. Registrar quien creo y cuando se creo cada actividad. |

### Mockup - Gestion de Actividades

![Mockup HU_009](./mockups/HU_009_Gestion_Actividades.png)

---

## HU_010: AUTENTICACION Y AUTORIZACION

| Aspecto | Descripción |
|---------|-------------|
| **Como** | usuario del sistema |
| **Quiero** | acceder al sistema con credenciales de usuario y contrasena |
| **Para** | asegurar que solo usuarios autorizados usen la plataforma |
| **Criterios de aceptacion** | El sistema debe solicitar usuario y contrasena para acceder. La contrasena debe cumplir criterios de seguridad (minimo 8 caracteres, mayuscula, numero, caracter especial). El sistema debe implementar control de intentos fallidos (maximo 5 intentos, bloqueo temporal). Las contrasenas deben ser almacenadas con hash seguro (no en texto plano). El sistema debe permitir recuperar contrasena mediante correo electronico. Cada usuario debe tener un rol (administrador, coordinador, voluntario). El sistema debe mantener sesiones activas durante 30 minutos sin actividad. Registrar todos los intentos de acceso en auditoria. |

### Mockup - Login

![Mockup HU_010](./mockups/HU_010_Login.png)

---

## HU_011: PANEL DE CONTROL (DASHBOARD)

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | ver un panel con resumen de informacion importante |
| **Para** | tener una vision general del estado de la plataforma |
| **Criterios de aceptacion** | El dashboard debe mostrar: total de voluntarios registrados, actividades activas, actividades completadas este mes. Mostrar el numero de voluntarios por tipo de actividad. Mostrar las actividades proximas (proximas 7 dias). Mostrar los voluntarios con mayor participacion. Mostrar estadisticas de asistencia general (promedio porcentual). Permitir seleccionar rango de fechas para ver estadisticas. Mostrar graficos de tendencias de participacion. El dashboard debe cargar en menos de 3 segundos. |

### Mockup - Dashboard

![Mockup HU_011](./mockups/HU_011_Dashboard.png)

---

## HU_012: EXPORTACION DE REPORTES

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | exportar reportes de voluntarios y actividades en diferentes formatos |
| **Para** | analizar datos en herramientas externas |
| **Criterios de aceptacion** | El sistema debe permitir exportar en formatos: PDF, Excel (XLSX) y CSV. Permitir seleccionar que datos incluir en el reporte. Permitir seleccionar rango de fechas para el reporte. El reporte debe incluir filtros aplicados en su descripcion. Los archivos descargados deben incluir marca de tiempo en el nombre. El sistema debe mostrar progreso de generacion para reportes grandes. Validar que el reporte tenga al menos un dato antes de exportar. Registrar cada exportacion en auditoria. |

### Mockup - Exportacion de Reportes

![Mockup HU_012](./mockups/HU_012_Exportar.png)

---

## HU_013: GESTION DE ROLES Y PERMISOS

| Aspecto | Descripción |
|---------|-------------|
| **Como** | administrador del sistema |
| **Quiero** | crear roles y asignar permisos a los usuarios |
| **Para** | controlar que cada usuario solo puede hacer lo que le corresponde |
| **Criterios de aceptacion** | El sistema debe tener roles predefinidos: administrador, coordinador, voluntario, auditor. Permitir crear roles personalizados. Cada rol debe tener permisos especificos asignados. El sistema debe permitir habilitar/deshabilitar permisos por rol. Validar que un usuario sea administrador antes de hacer cambios de roles. Mostrar una matriz de permisos para cada rol. Registrar quien hizo cambios en roles y permisos. Permitir revocar un rol inmediatamente. |

### Mockup - Gestion de Roles

![Mockup HU_013](./mockups/HU_013_Roles.png)

---

## HU_014: BUSQUEDA Y FILTROS AVANZADOS

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | buscar y filtrar voluntarios y actividades con criterios avanzados |
| **Para** | encontrar rapidamente la informacion que necesito |
| **Criterios de aceptacion** | Permitir busqueda por: nombre, correo electronico, numero de identidad, telefono. Permitir filtros por: tipo de actividad, rango de fechas, estado, nivel de desempeño. La busqueda debe ser en tiempo real (autocomplete). Mostrar numero de resultados encontrados. Permitir ordenar resultados por: nombre, fecha, horas totales. Permitir guardar busquedas frecuentes. El sistema debe resaltar los terminos buscados en los resultados. La busqueda debe ser case-insensitive. |

### Mockup - Busqueda Avanzada

![Mockup HU_014](./mockups/HU_014_Busqueda.png)

---

## HU_015: COMUNICACION ENTRE VOLUNTARIOS

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | permitir que los voluntarios se comuniquen entre si sobre actividades |
| **Para** | facilitar la coordinacion de grupos |
| **Criterios de aceptacion** | El sistema debe tener un sistema de mensajes interno. Permitir crear grupos de chat por actividad. Permitir enviar mensajes privados entre voluntarios. El coordinador puede monitorear los mensajes (con privacidad controlada). Mostrar notificaciones cuando hay nuevos mensajes. Permitir eliminar mensajes solo por el autor (dentro de 24 horas). El sistema debe registrar todos los mensajes para auditoria. Permitir ver historial de conversaciones por 90 dias. |

### Mockup - Chat y Mensajeria

![Mockup HU_015](./mockups/HU_015_Chat.png)

---

## HU_016: EVALUACION DE DESEMPEÑO

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | evaluar el desempeño de los voluntarios tras completar actividades |
| **Para** | reconocer su compromiso y areas de mejora |
| **Criterios de aceptacion** | El sistema debe permitir calificar el desempeño en una escala de 1 a 5 estrellas. Permitir agregar comentarios o feedback sobre el desempeño. El sistema debe calcular automaticamente el promedio de desempeño. Mostrar historial de evaluaciones del voluntario. Permitir filtrar voluntarios por rango de calificacion. Solo el coordinador puede crear evaluaciones. El sistema debe notificar al voluntario sobre su evaluacion (resumen, no detalles). Registrar la fecha y quien hizo la evaluacion. |

### Mockup - Evaluacion de Desempeño

![Mockup HU_016](./mockups/HU_016_Evaluacion.png)

---

## HU_017: RECORDATORIOS Y ALERTAS

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador de la ONG |
| **Quiero** | recibir recordatorios y alertas sobre eventos importantes |
| **Para** | no olvidar actividades criticas |
| **Criterios de aceptacion** | El sistema debe enviar recordatorio 24 horas antes de una actividad. Enviar alerta si un voluntario no se presenta a una actividad. Alertar si hay actividades sin voluntarios asignados. Permitir configurar alertas personalizadas por evento. Las alertas pueden ser por correo electronico o notificacion en el sistema. Permitir silenciar alertas por un periodo de tiempo. Mostrar centro de notificaciones en la interfaz. Registrar todas las alertas enviadas. |

### Mockup - Centro de Notificaciones

![Mockup HU_017](./mockups/HU_017_Notificaciones.png)

---

## HU_018: INTEGRACION CON CALENDARIO

| Aspecto | Descripción |
|---------|-------------|
| **Como** | voluntario |
| **Quiero** | ver mis actividades en un calendario |
| **Para** | organizar mejor mis tiempos |
| **Criterios de aceptacion** | El sistema debe mostrar un calendario con todas las actividades asignadas. Permitir ver actividades por dia, semana o mes. Mostrar detalles de la actividad al hacer clic en el calendario. Permitir descargar el calendario en formato iCal para sincronizar con aplicaciones externas. El calendario debe mostrar colores diferentes segun el estado de la actividad. Permitir establecer recordatorios personales en el calendario. El calendario debe ser responsive en dispositivos moviles. Mostrar indicador de actividades no confirmadas. |

### Mockup - Calendario de Actividades

![Mockup HU_018](./mockups/HU_018_Calendario.png)

---

## HU_019: REPORTE DE IMPACTO SOCIAL

| Aspecto | Descripción |
|---------|-------------|
| **Como** | administrador de la ONG |
| **Quiero** | generar reportes de impacto social del voluntariado |
| **Para** | demostrar el valor de nuestras actividades a donantes y aliados |
| **Criterios de aceptacion** | El sistema debe calcular: horas totales de voluntariado, numero de personas beneficiadas, actividades realizadas. Permitir segmentar reportes por tipo de actividad, periodo de tiempo. Mostrar demograficos de voluntarios (edad, genero, profesion). Calcular ratio de voluntarios retenidos vs nuevos. Mostrar tendencias de participacion en graficos. Permitir exportar reportes en formato PDF con diseno profesional. Incluir testimonios de voluntarios en el reporte. Permitir comparar impacto entre diferentes periodos. |

### Mockup - Reporte de Impacto

![Mockup HU_019](./mockups/HU_019_Impacto.png)

---

## HU_020: RESPALDO Y RECUPERACION DE DATOS

| Aspecto | Descripción |
|---------|-------------|
| **Como** | administrador del sistema |
| **Quiero** | realizar respaldos periodicos de la base de datos |
| **Para** | asegurar que los datos no se pierdan en caso de desastre |
| **Criterios de aceptacion** | El sistema debe realizar respaldos automaticos diariamente. Permitir realizar respaldos manuales bajo demanda. Mostrar el historial de respaldos realizados con fecha y tamano. Permitir restaurar la base de datos a un punto especifico en el tiempo. Validar la integridad del respaldo antes de completar. Los respaldos deben ser cifrados y guardados en almacenamiento seguro. Mostrar notificacion de respaldo completado o fallido. Permitir eliminar respaldos antiguos segun politica de retencion. |

### Mockup - Gestion de Respaldos

![Mockup HU_020](./mockups/HU_020_Respaldos.png)

---

## HU_021: CANCELACION Y MODIFICACION DE PARTICIPACION

| Aspecto | Descripción |
|---------|-------------|
| **Como** | voluntario |
| **Quiero** | cancelar o modificar mi participación en una actividad |
| **Para** | adaptarme a cambios en mis disponibilidades |
| **Criterios de aceptacion** | El voluntario puede cancelar su participación hasta 24 horas antes del inicio de la actividad. El voluntario puede modificar su participación (cambio de horario o fecha). El sistema valida que la actividad no haya iniciado. Se notifica automáticamente al coordinador sobre la cancelación. El sistema permite registrar el motivo de la cancelación (opcional). Se registra en auditoría quién canceló, cuándo y el motivo. Si la cancelación se hace dentro de 24h requiere justificación obligatoria. Si se cancela dentro de 24h de inicio, se considera ausencia injustificada. La cancelación libera el cupo para otros voluntarios. El sistema muestra confirmación con detalles de la cancelación. |

### Mockup - Cancelacion de Participacion

![Mockup HU_021](./mockups/HU_021_Cancelacion.png)

---

## HU_022: SUBIDA DE EVIDENCIAS DE PARTICIPACION

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador |
| **Quiero** | subir evidencias de participación en una actividad |
| **Para** | documentar y verificar la realización de la actividad |
| **Criterios de aceptacion** | Permitir subir fotos, videos, documentos PDF y archivos de oficina (DOCX, XLSX). Validar tipos de archivo permitidos (JPG, PNG, PDF, DOCX, XLSX). Validar tamaño máximo de 5MB por archivo. Permitir múltiples evidencias por actividad (máximo 10). Almacenar archivos en servidor seguro y cifrado. Mostrar galería de imágenes en el historial de la actividad. Permitir descargar las evidencias después de almacenarse. Registrar quién subió cada evidencia, fecha y hora. Permitir eliminar evidencias solo por quien las subió (plazo de 24h). Generar miniatura automáticamente de imágenes para vista previa. El sistema debe validar que el archivo no contenga malware. Mostrar nombre, tamaño, tipo y fecha de cada evidencia. |

### Mockup - Subida de Evidencias

![Mockup HU_022](./mockups/HU_022_Evidencias.png)

---

## HU_023: CONFIRMACION DIGITAL DE ASISTENCIA

| Aspecto | Descripción |
|---------|-------------|
| **Como** | coordinador |
| **Quiero** | verificar la asistencia de voluntarios mediante confirmación digital |
| **Para** | asegurar la precisión y autenticidad del registro |
| **Criterios de aceptacion** | Generar código QR único para cada sesión de actividad. El voluntario escanea QR al llegar con dispositivo móvil. Sistema registra check-in con timestamp exacto (hora y segundo). Permitir ingreso manual de PIN (6 dígitos) como alternativa al QR. Mostrar lista en tiempo real de asistentes confirmados. Registrar intentos de check-in fraudulentos o duplicados. Generar reporte de verificación digital con estadísticas. Permitir verificación biométrica como opción avanzada (huella/facial). Sincronizar con asistencia manual del coordinador. Alertar si voluntario no confirma después de 15 minutos de iniciada actividad. Mostrar estado en tiempo real: presente (confirmado), ausente, pendiente confirmación. Validar que el QR solo sea válido durante el horario de la actividad. |

### Mockup - Confirmacion Digital

![Mockup HU_023](./mockups/HU_023_ConfirmacionDigital.png)

---
