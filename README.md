# movies
Hay que levantar las dos apps. ver readme de cada una

# En terminal ambos
Ejecutar ambos en docker, luego de seguir los pasos de cada una

```
cd back
docker build -t cine-back .
docker run -d -p 3002:3002 --name cine-back1 cine-back

cd front
docker build -t cine-front .
docker run -d -p 3000:3000 --name cine-front1 cine-front
```

probar desde el browser (o el comando `curl`) a http://localhost:3000 para el front y http://localhost:3002/movies.  

Funciona en windows y en linux, probar en mac

## Referencias
[Agregando Ip estática a contenedor](Agregando Ip estática a contenedor)

