# movies
Hay que levantar las dos apps. ver readme de cada una


Ejecutar ambos en docker, luego de seguir los pasos de cada una

```
docker run -d -p 3002:3002 --name cine-back1 cine-back
docker run -d --network host --name cine-front1 cine-front
```

probar si en windows funciona

