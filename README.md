# Agenda de estudio

Mini aplicación académica desarrollada con Angular 22. Permite mostrar cinco actividades de estudio, visualizar su prioridad y cambiar su estado entre pendiente y completada.

El proyecto utiliza interfaces de TypeScript, `*ngFor`, `*ngIf`, eventos `(click)` y estilos dinámicos con `ngClass`.

## Requisitos

- Node.js 22.22.3 o superior dentro de la rama 22, o Node.js 24.15.0 o superior dentro de la rama 24.
- npm.
- Git, si desea clonar el repositorio.

No es necesario instalar Angular CLI globalmente porque el proyecto ya lo incluye como dependencia de desarrollo.

## Instalación

Clone el repositorio:

```bash
git clone https://github.com/Samuel19012002/TaskWeekTwo-Dev.git
cd TaskWeekTwo-Dev
```

Instale las dependencias para generar la carpeta `node_modules`:

```bash
npm install
```

## Ejecutar la aplicación

Inicie el servidor de desarrollo:

```bash
npm start
```

Después abra [http://localhost:4200](http://localhost:4200) en el navegador. La aplicación se actualizará automáticamente al modificar el código fuente.

## Estructura principal

```text
src/app/
├── components/
│   ├── footer/
│   ├── header/
│   └── task-list/
├── app.css
├── app.html
└── app.ts
```

## Generar componentes

Puede utilizar el Angular CLI incluido en el proyecto mediante `npx`:

```bash
npx ng generate component nombre-del-componente
```

## Compilación

Para compilar el proyecto, ejecute:

```bash
npm run build
```

Los archivos generados se guardarán en la carpeta `dist/`.

## Tecnologías

- Angular 22.2
- TypeScript 6
- HTML y CSS
