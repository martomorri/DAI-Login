# 1. Configurar Base de datos

1. Abrir MS SQL Server Management Studio 18
2. Antes de apretar el boton de "Connect", copiar el nombre de nuestro dispositivo/host, guardarlo en algun lugar que luego lo necesitaremos
3. Abrir en esta aplicacion (ctrl + O) el archivo encontrado en Server/data/data.sql y ejecutarlo con el boton de Execute (F5)
4. Luego abrir el archivo (ctrl + O) Server/data/user.sql y ejecutarlo (F5)
5. Crear en la carpeta Server/ un archivo llamado .env que contenga lo mismo que el archivo llamado .env-example pero cambiando el nombre del host por el que copiamos en el momento de conectarnos a la base de datos

# 2. Abrir y ejecutar la API de Node

1. Abrir carpeta de Node: cd Server/
2. Ejecutar: npm i
3. Ejecutar en esa terminal: npm run start

# 3. Abrir y ejecutar el proyecto de React Native (RN)

1. En otra terminal abrir carpeta de RN: cd Client/
2. Ejecutar: npm i
3. En la misma terminal ejecutar: expo start --tunnel
4. Cuando nos pregunte si queremos instalar el tunnel: y