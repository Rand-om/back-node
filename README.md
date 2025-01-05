# Backend - Node.js

Este es el backend del proyecto, desarrollado en Node.js. A continuación se detallan los pasos para descargar, instalar y poner en marcha el backend.

## Requisitos previos

- [Node.js v18.20.5](https://nodejs.org/en/) (se recomienda esta versión).

## Pasos para ejecutar el Backend

1. **Clonar el repositorio:**
   Ejecuta el siguiente comando para clonar el repositorio desde GitHub:

   ```bash
   git clone https://github.com/Rand-om/back-node.git
   ```

2. **Instalar dependencias:**
   Una vez que hayas clonado el repositorio, navega al directorio del proyecto:

   ```bash
   cd back-node
   ```

   Luego instala las dependencias necesarias utilizando `npm`:

   ```bash
   npm install
   ```

3. **Configurar la base de datos:**
   El archivo de configuración para la base de datos se encuentra en `src/infraestructure/database/database.ts`.

   Abre este archivo y reemplaza los valores de conexión a la base de datos con los tuyos:

   ```typescript
   const sequelize = new Sequelize({
     dialect: 'postgres',
     host: 'localhost',
     username: 'NOMBRE_USUARIO_POSTGRESQL',
     password: 'CONTRASEÑA_POSTGRESQL',
     database: 'BD_POSTGRESQL',
     logging: false,
   });
   ```

   Aquí debes ingresar:

   - `NOMBRE_USUARIO_POSTGRESQL`: El nombre de usuario para tu base de datos PostgreSQL.
   - `CONTRASEÑA_POSTGRESQL`: La contraseña asociada a tu usuario de PostgreSQL.
   - `BD_POSTGRESQL`: El nombre de la base de datos que vas a utilizar.

4. **Añadir registros de prueba a la base de datos:**
   Para añadir registros de prueba a la tabla `posts` en tu base de datos, puedes ejecutar la siguiente consulta en **pgAdmin**:

   ```sql
   INSERT INTO posts (name, description, created_at) 
   VALUES
     ('Post 1', 'Descripción del post 1', NOW()),
     ('Post 2', 'Descripción del post 2', NOW()),
     ('Post 3', 'Descripción del post 3', NOW()),
     ('Post 4', 'Descripción del post 4', NOW()),
     ('Post 5', 'Descripción del post 5', NOW()),
     ('Post 6', 'Descripción del post 6', NOW()),
     ('Post 7', 'Descripción del post 7', NOW()),
     ('Post 8', 'Descripción del post 8', NOW()),
     ('Post 9', 'Descripción del post 9', NOW()),
     ('Post 10', 'Descripción del post 10', NOW());
   ```

   Esta consulta insertará 10 registros de prueba en la tabla `posts`, lo que te permitirá ver datos en la base de datos y probar el backend.

5. **Iniciar el servidor:**
   Para poner en marcha el servidor, ejecuta:

   ```bash
   npm start
   ```

   El servidor debería estar corriendo en el puerto especificado en el archivo de configuración del proyecto (por defecto puede ser el `3000` o cualquier otro puerto configurado).

6. **Verificar el funcionamiento:**
   Abre tu navegador y visita `http://localhost:3000/posts` (o el puerto configurado) para verificar que el servidor está funcionando correctamente.

## Notas

- Si encuentras algún error relacionado con la versión de Node.js, asegúrate de que estás utilizando la versión recomendada (v18.20.5).
- Asegúrate de tener una base de datos PostgreSQL corriendo en tu máquina o en un servidor accesible.
