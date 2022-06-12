# Back

## Como correrlo:

### En una terminal:

1. `npm i`
2. `node app.js`

Despues podes ir a un browser y probar

- http://localhost:3002/movies
- http://localhost:3002/genres

Tenes una carpeta config en donde podes setear la db fake si por alguna razón no funciona mongo

Para browsear la base podes instalarte [Mongo Compass](https://www.mongodb.com/es/products/compass)

### En docker

1. Desde la carpeta raiz de la app (la misma en donde esta este archivo), crear la imagen:
   `docker build -t cine-back .`
2. Con "docker images" se puede ver la imagen creada
3. Correr el container ejecutando
   `docker run -d -p 4000:3002 --name cine-back1 cine-back`
   (esto lo que hace es:
   a. Levantar un container de la imagen cine-back
   b. Ponerle de nombre cine-back1
   c. Mapear el puerto expuesto por el container (el 3002) con el puerto 4000 de la máquina
   (se podrían tener varios containers de la misma imagen corriendo a la vez
   mapeando a otro puerto, solo habria que cambiar el 4000)
4. Consultar las urls como antes pero usando port 4000:

- http://localhost:4000/movies
- http://localhost:4000/genres

#### Alternativas

Como direccionar la red dentro de dockers. Sólo funcionan en linux

```
docker run -d -p 4000:3002 --name cine-back1 cine-back
```

                                          ^---- este escucha en localhost:4000 que lo mapea al 3002

```
docker run -d --network host --name cine-back2 cine-back
```

                                          ^---- este escucha en localhost:3002 directemente

## Como agregar variables de entorno:

1. Agregarla como el ejemplo UNA_VARIABLE_DE_ENTORNO en el Dockerfile
2. Leerla como el ejemplo en app.js, endpoint /entorno.
