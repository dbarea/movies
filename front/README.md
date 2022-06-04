-Como correrlo:
En una terminal:

1. npm i
2. npm run start

Esto te deberia levantar un browser en el puerto 3000 y te deberia mostrar una lista de películas.

El npm run start viene del package.json. Si vas ahí vas a encontrar una sección "scripts" y un script que se llama "start". Eso es lo que corre. Se podría hacer lo mismo con el back y en lugar de correr en el back "node app.js" se puede agregar un script en el package.json del back que se llame "start" y ejecute node "app.js"
