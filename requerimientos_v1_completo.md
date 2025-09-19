Alcance por Versiones - Requerimientos
v1:
1. Diseño responsivo
El objetivo es que la aplicación pueda usarse tanto en computadoras como en tablets y celulares. Se espera que el calendario y los botones se ajusten al tamaño de pantalla y que los textos e íconos sigan siendo legibles en dispositivos pequeños.
Criterios de aceptación: en un celular no se debe necesitar zoom para interactuar, el calendario debe visualizarse completo y no debe haber solapamiento entre botones, textos o campos.

2. Calendario de turnos
El calendario permitirá visualizar la disponibilidad de turnos. Los días disponibles deben resaltarse y los no disponibles deben aparecer deshabilitados.
Criterios de aceptación: se muestra al menos el mes actual y los dos siguientes, los días pasados no pueden seleccionarse y aquellos sin turnos aparecen bloqueados.

3. Selección de día y hora
El usuario debe poder elegir un turno específico seleccionando primero el día y luego una hora disponible. Los horarios reservados deben mostrarse deshabilitados.
Criterios de aceptación: solo puede elegirse un horario por turno, el sistema valida la disponibilidad antes de confirmar y el botón de “Confirmar turno” solo se habilita cuando se selecciona correctamente fecha y hora.

4. Confirmación con SweetAlert
Al reservar, el usuario debe recibir un mensaje de confirmación claro y amigable. Se usará SweetAlert para mostrar que el turno fue reservado con éxito, indicando día y hora.
Criterios de aceptación: el mensaje de éxito aparece únicamente si el turno se registró en el sistema, mientras que en caso de error se debe mostrar un mensaje alternativo con SweetAlert.

5. Horarios mínimos y máximos configurables
La peluquería debe poder definir franjas horarias para los turnos (por ejemplo, de 9:00 a 18:00). Sólo deben mostrarse horarios dentro de ese rango.
Criterios de aceptación: no pueden seleccionarse horarios fuera de la franja configurada y cualquier cambio realizado debe reflejarse de inmediato en el calendario.

6. Registro de usuario
Es necesario que los clientes tengan una cuenta para reservar y gestionar sus turnos. Habrá un formulario con nombre, correo y contraseña, además de la opción de iniciar sesión para usuarios ya registrados.
Criterios de aceptación: no deben existir cuentas duplicadas con el mismo correo, es obligatorio iniciar sesión para poder reservar y las contraseñas deben tener un mínimo de caracteres definidos (ej. seis).

7. Días no disponibles
Los días domingo y lunes deben aparecer deshabilitados en el calendario.
Criterios de aceptación: no se pueden seleccionar domingos ni lunes.

8. Turnos ya reservados
Los horarios ya reservados deben mostrarse como no seleccionables.
Criterios de aceptación: un usuario no puede reservar un turno ya ocupado.

9. Validación de usuario único por turno
Un usuario no puede reservar más de un turno en el mismo horario.
Criterios de aceptación: el sistema impide la doble reserva para el mismo usuario y horario.

10. Botón de confirmación habilitado solo con selección válida
El botón de “Confirmar turno” solo debe habilitarse cuando se haya seleccionado correctamente día y hora.

Factibilidad y Herramientas
Frontend: HTML5, CSS3, JavaScript, Bootstrap (o Tailwind CSS para estilo).
Framework opcional: React.js
Backend (futuras versiones): Node.js con Express.js.
Base de datos: SQLite o SQL SERVER.
Hosting: Vercel

Pruebas:
Responsividad en dispositivos (celular, tablet y PC).
Selección de turnos dentro de horarios válidos.
Confirmación mediante alert.

Requisitos Funcionales
RF1: Visualización de calendario con días y horarios disponibles.
RF2: Selección de día y hora dentro del rango permitido.
RF3: Confirmación de turno mediante SweetAlert.
RF4: Adaptabilidad a distintos dispositivos (responsive design).
RF5: Configuración de horarios mínimos y máximos por día.
RF6: Días no disponibles (domingo, lunes) deshabilitados.
RF7: Turnos ya reservados no seleccionables.
RF8: Validación de usuario único por turno.
RF9: Botón de confirmación solo habilitado con selección válida.

Requisitos No Funcionales
RNF1: Usabilidad simple e intuitiva.
RNF2: Accesibilidad mínima (contraste, tamaños de texto adaptables).
RNF3: Seguridad básica en validaciones (en versiones futuras).
RNF4: Mantenibilidad (código documentado y modular).
RNF5: Rendimiento (carga rápida del calendario y de la interfaz).
RNF6: Mensajes de error claros y amigables.
RNF7: Preparado para internacionalización.
RNF8: Compatibilidad con los principales navegadores.

Historias de Usuario (Versión 1)
HU1 – Visualización del calendario
Como cliente de la peluquería, quiero ver un calendario con días y horarios disponibles, para poder elegir mi turno.
HU2 – Selección de día y horario
Como cliente, quiero seleccionar un día y un horario de la agenda, para reservar un turno.
HU3 – Confirmación de turno
Como cliente, quiero recibir una confirmación mediante un mensaje en pantalla, para asegurarse de que el turno quedó registrado.
HU4 – Responsividad de la aplicación
Como cliente, quiero que la aplicación se adapte a celulares, tablets y PC, para poder acceder desde cualquier dispositivo.
HU5 – Límites de horarios por día
Como administrador, quiero definir un horario mínimo y máximo de atención por día, para controlar la disponibilidad de turnos.
HU6 – Días no disponibles
Como cliente, quiero ver deshabilitados los días en los que la peluquería no atiende, para no intentar reservar en esos días.
HU7 – Turnos ya reservados
Como cliente, quiero que los horarios ya reservados no puedan seleccionarse, para evitar errores de doble reserva.

Casos de Prueba (derivados de las HU)
CP1 – Visualizar calendario: Verificar que el calendario se muestre correctamente al ingresar a la aplicación. Verificar que se vean los días y horarios disponibles.
CP2 – Seleccionar un turno válido: Seleccionar un día dentro del rango disponible. Seleccionar un horario dentro del rango permitido. Confirmar que el turno queda reservado.
CP3 – Confirmación de reserva: Al confirmar el turno, verificar que aparece un mensaje (alert) con la confirmación. Validar que el mensaje indique correctamente el día y la hora elegidos.
CP4 – Adaptabilidad de pantalla: Verificar la visualización desde un celular, tablet y PC.
CP5 – Restricción de horarios: Intentar reservar un turno antes del horario mínimo o después del horario máximo → debe bloquearse. Confirmar que solo se puede elegir dentro de los horarios válidos.
CP6 – Días no disponibles: Verificar que los días domingo y lunes no puedan seleccionarse en el calendario.
CP7 – Turnos ya reservados: Reservar un turno y verificar que ese horario ya no esté disponible para otros usuarios.
CP8 – Validación de usuario único por turno: Intentar reservar dos turnos en el mismo horario con el mismo usuario y verificar que el sistema lo impida.

Otros detalles:
- La confirmación de turno debe mostrar el día y la hora seleccionados.
- La franja horaria y los días hábiles deben ser configurables fácilmente.
- La validación de formularios debe realizarse tanto en frontend como en backend (cuando se implemente).
