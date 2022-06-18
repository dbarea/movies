import json
from time import sleep
import requests
from datetime import datetime

print("Request " + requests.__version__)

while True:
    rjson = requests.get("http://186.182.76.7:800/awp/datos.json") # 186.182.76.7:800 IP PLC de DIAL (NAT del puerto 800)

    jsonf = rjson.json()
    # se agrega un timestam del momento de carga
    now = datetime.now()
    timestamp = datetime.timestamp(now)
    jsonf['timestamp'] = timestamp

    r = requests.post('http://localhost:3002/movie', json = jsonf)
    print(r)

    if r.status_code == 200:
        dt_obj = datetime.fromtimestamp(jsonf['timestamp'])
        print(f"json cargado correctamente: {jsonf} at {dt_obj} ({jsonf['timestamp']})")
    else:
        print(f"Error en la carga. Status Code: {r.status_code}")

    sleep(10)

# r = requests.post('http://localhost:3002/movie', json=jsonf)
# f"Status Code: {r.status_code}, Response: {r.json()}")

