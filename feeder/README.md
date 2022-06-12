# Alimentación de la DB
Carga un archivo json usando python y conectándose con el access point de back
El contenido del json está embebido en el código de _feeder.py_

## Docker 
```
cd docker
docker build -t feeder .
docker run -t --network host --name feeder1 feeder 
```

## Linea de commando
### Prerequisitos
- python3
- requests (Si no está instalado requests usar `pip install requests`)

Ejecutar `python feeder.py`

## Referencias
[How do I post JSON using the Python Requests library?](https://reqbin.com/code/python/m2g4va4a/python-requests-post-json-example#:~:text=To%20post%20a%20JSON%20to,it%20to%20a%20JSON%20string)
[broadinstitute/python-requests - https://hub.docker.com/](https://hub.docker.com/r/broadinstitute/python-requests)