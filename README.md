# Proyecto 6: API REST de Ligas y Equipos de Fútbol

## Descripción

Este proyecto es una API REST para la gestión de ligas y equipos de fútbol. La API permite realizar operaciones CRUD en dos colecciones: Ligas y Equipos. Las ligas pueden tener varios equipos asociados.

## Características

- **Rutas separadas para ligas y equipos**: Cada entidad tiene su propia ruta.
- **Manejo de rutas no encontradas**: Si una ruta no es encontrada, se retorna un mensaje en formato JSON indicando "Ruta no encontrada".
- **Servidor**: El servidor está levantado en `http://localhost:3000`.
- **Schemas definidos**: Cada entidad tiene su propio esquema definido mediante Mongoose.

## Endpoints

### Ligas

- **GET /api/v1/leagues**: Obtiene todas las ligas.
- **POST /api/v1/leagues**: Crea una nueva liga.
- **PUT /api/v1/leagues/:id**: Actualiza una liga existente.
- **DELETE /api/v1/leagues/:id**: Elimina una liga.

### Equipos

- **GET /api/v1/teams**: Obtiene todos los equipos.
- **POST /api/v1/teams**: Crea un nuevo equipo.
- **PUT /api/v1/teams/:id**: Actualiza un equipo existente.
- **DELETE /api/v1/teams/:id**: Elimina un equipo.

## Controladores

Los controladores definen la lógica para manejar las solicitudes a las rutas de la API. Cada controlador tiene métodos para las operaciones CRUD.

### Métodos

- **GET**: Obtiene todas las ligas o equipos de la base de datos.
- **POST**: Crea una nueva liga o equipo en la base de datos.
- **PUT**: Actualiza una liga o equipo existente sin eliminar el anterior.
- **DELETE**: Elimina una liga o equipo de la base de datos.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Configura las variables de entorno en un archivo `.env` (ver sección Variables de Entorno).
4. Ejecuta el proyecto con `npm start` o `npm run dev`.

## Variables de Entorno

- **DB_URL**: URL de conexión a la base de datos MongoDB.

## Semilla

Para sembrar la base de datos con datos iniciales, ejecuta el siguiente comando:

```bash
node seed.js
```
