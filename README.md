<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://static.vecteezy.com/system/resources/previews/014/219/604/non_2x/safety-login-page-3d-illustration-free-png.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Login DAI</h3>

  <p align="center">
    Un ejemplo de Login y Registro con React Native.
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el Proyecto</a>
      <ul>
        <li><a href="#built-with">Hecho con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Comenzando</a>
      <ul>
        <li><a href="#prerequisites">Requisitos previos</a></li>
        <li><a href="#installation">Instalacion</a></li>
      </ul>
    </li>
    <li><a href="#usage">Ejemplos de Uso</a></li>
    <li><a href="#roadmap">Mapa del Proyecto</a></li>
    <li><a href="#acknowledgments">Recursos utilizados</a></li>
  </ol>
</details>



<!-- SOBRE EL PROYECTO -->
## Sobre el Proyecto

Este proyecto se trata de realizar un ejemplo de registro (conectado con una base de datos en SQL) con React Native para aplicaciones Mobile. A esto se le añaden funciones para crear y editar el perfil de cada usuario.

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>



### Hecho con

Estos son los frameworks/librerias utilizados en este proyecto.

* [![Node][Node.js]][Node.js-url]
* [![React Native][ReactNative]][ReactNative-url]

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>



<!-- COMENZANDO -->
## Comenzando

Estos son los pasos para poder utilizar el proyecto.

### Requisitos Previos

Los requisitos necesarios son tener Node.js y NPM intalados en el dispositivo.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalacion

* 1. Clonar el repositorio
   ```sh
   git clone --depth 1 https://github.com/martomorri/DAI-Login.git
   ```
   
* 2. Configurar Base de Datos
   1. Abrir MS SQL Server Management Studio 18
   2. Antes de apretar el boton de "Connect", copiar el nombre de nuestro dispositivo/host, guardarlo en algun lugar que luego lo necesitaremos
   3. Abrir en esta aplicacion (`ctrl + O`) el archivo encontrado en `Server/data/data.sql` y ejecutarlo con el boton de Execute (`F5`)
   4. Luego abrir el archivo (`ctrl + O`) Server/data/user.sql y ejecutarlo (F5)
   5. Crear en la carpeta `Server/` un archivo llamado `.env` que contenga lo mismo que el archivo llamado `.env-example` pero cambiando el nombre del host por el que copiamos en el momento de conectarnos a la base de datos
      
* 3. Abrir y ejecutar la API de Node.js
   1. Abrir carpeta de Node: ```sh
   cd Server/
   ```
   2. Instalar los paquetes de NPM
   ```sh
   npm i
   ```
   3. Correr la API de Node.js
   ```sh
   npm run start
   ```
   
* 4. Abrir y ejecutar el proyecto de React Native (RN)
  1. En otra terminal abrir carpeta de RN: ```sh
   cd Client/
   ```
  2. Ejecutar: ```sh
   npm i
   ```
  3. En la misma terminal ejecutar: ```sh
  expo start --tunnel
  ```
  5. Cuando nos pregunte si queremos instalar el tunnel: `y`

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>



<!-- EJEMPLOS DE USO -->
## Ejemplos de Uso

Este proyecto puede ser utilizado para generar un registro simple para cualquier aplicación mobile.

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>



<!-- MAPA DEL PROYECTO -->
## Mapa del Proyecto

- [x] API en Node
- [x] Login
- [x] Registro
- [x] Home
- [x] Perfil
    - [x] Crear Perfil
    - [x] Editar Perfil

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>

## Recursos utilizados

Estas son las librerias y recursos utilizados en nuestro proyecto

* [React Navigation](https://reactnavigation.org/)
* [Express.js](https://expressjs.com/es/)
* [MSSQL](https://www.npmjs.com/package/mssql)

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>



<!-- MARKDOWN LINKS E IMAGENES -->
[ReactNative]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/
[Node.js]: https://cdn-icons-png.flaticon.com/512/5968/5968322.png
[Node.js-url]: https://nodejs.org/es
