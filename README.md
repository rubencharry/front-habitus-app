# Organización de hábitos y tareas

Esta es una aplicación web desarrollada como parte de un proyecto universitario utilizando Angular. Su propósito es ayudar a los usuarios a gestionar sus hábitos diarios y tareas pendientes de forma visual y organizada.

La app cuenta con cinco secciones principales:

- **Dashboard**: Permite marcar hábitos y tareas completadas, y muestra un temporizador para saber cuánto tiempo queda para cumplir con las tareas.
- **Hábitos**: CRUD funcional donde se pueden agregar, editar o eliminar hábitos diarios.
- **Tareas**: Sección para tareas pendientes, con funcionalidad en proceso de desarrollo.
- **Calendario**: Vista de las actividades programadas, hábitos cumplidos, tareas por cumplir, etc.
- **Estadísticas**: Visualización de gráficos circulares que representan el progreso diario de hábitos y tareas.

> ⚙️ Actualmente, la funcionalidad del CRUD de hábitos está completamente operativa aunque solo guarda datos en memoria; la gestión de tareas está en desarrollo.

## Tecnologías y librerías utilizadas

- **Angular 19**: Framework principal para el desarrollo frontend.
- **Tailwind CSS 4**: Para estilos modernos y altamente personalizables.
- **Chart.js 4** + **ng2-charts**: Visualización de gráficos para estadísticas.
- **FullCalendar 6**: Para la gestión del calendario con soporte de eventos y visualización por días.
- **PrimeNG 19**: Componentes de UI responsivos y personalizables.
- **Lucide Angular**: Iconografía moderna para la interfaz.
- **Express.js**: Para servir la aplicación en el modo SSR (Server Side Rendering).

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión recomendada: 18.x o superior)
- Angular CLI (`npm install -g @angular/cli`)

## Servidor de desarrollo

Para iniciar un servidor local de desarrollo, ejecuta:

```bash
ng serve
