# Movies
Ensayo webapps para Frontend y Backend  
keywords: Node, React, Docker, Python, MongoDB

## Módulos
- Backend
- Frontend
- Feeder

Hay que levantar las dos apps (back y front). Se puede utilizar tanto Docker como en terminales separadas. Ver README de cada app. 

# Usando Docker
Seguir los pasos de cada una en su README

```
cd back
docker build -t cine-back .
docker run -d -p 3002:3002 --name cine-back1 cine-back
```

```
cd front
docker build -t cine-front .
docker run -d -p 3000:3000 --name cine-front1 cine-front
```

probar desde el browser (o el comando `curl`) a http://localhost:3000 para el front y http://localhost:3002/movies

```
cd docker
docker build -t feeder .
docker run -t --network host --name feeder1 feeder 
```

Funciona en windows y en linux, probar en mac

## Referencias
[Agregando Ip estática a contenedor](Agregando Ip estática a contenedor)

