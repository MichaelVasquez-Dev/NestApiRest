<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrolllo

1. Clonar repositorio
2. Ejecutar 
```
npm install
```

3. Next cli instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__ / Clonar el archivo ``` .env.template ``` y renombrar la copia a ```.env```

6. llenar las variables de entorno definidas en el ```.env```

7. Ejecutar la aplicacion en dev:
```
npm run start:dev
```

6. Contruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed - GET
```

##Stack usado
* Mongo
* Nest