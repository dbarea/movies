import json
from time import sleep
import requests
from datetime import datetime



# Python program to demonstrate
# Conversion of JSON data to
# dictionary
 
 
# importing the module
import json

print("Request " + requests.__version__)


# jsonf = {"title":"Nueve Reinas","genre":{"_id":"5b21ca3eeb7f6fbccd471818","name":"Action"},"numberInStock":300,"dailyRentalRate":25}

# se agrega un timestam del momento de carga
now = datetime.now()
timestamp = datetime.timestamp(now)

while True:
    rjson = requests.get("http://186.182.76.7:800/awp/datos.json")

    jsonf = rjson.json()
    jsonf['timestamp'] = timestamp

    r = requests.post('http://localhost:3002/movie', json = jsonf)
    print(r)

    sleep(10)

if r.status_code == 200:
    dt_obj = datetime.fromtimestamp(jsonf['timestamp'])
    print(f"json cargado correctamente: {jsonf} at {dt_obj} ({jsonf['timestamp']})")
else:
    print(f"Error en la carga. Status Code: {r.status_code}")

# r = requests.post('http://localhost:3002/movie', json=jsonf)
# f"Status Code: {r.status_code}, Response: {r.json()}")

