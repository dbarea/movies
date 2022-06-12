import requests

print("2 Request " + requests.__version__)

jsonf={"title":"Esperando la carroza","genre":{"_id":"5b21ca3eeb7f6fbccd471818","name":"Action"},"numberInStock":300,"dailyRentalRate":25}
r = requests.post('http://localhost:3002/movie', json = jsonf)
# r = requests.post('http://localhost:3002/movie', json=jsonf)

print(r)
# f"Status Code: {r.status_code}, Response: {r.json()}")

