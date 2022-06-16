
# Python program to demonstrate
# Conversion of JSON data to
# dictionary
 
 
# importing the module
import json
 
# Opening JSON file
with open('./feeder/datos.json') as json_file:
    data = json.load(json_file)
 
    # Print the type of data variable
    print("Type:", type(data))
 
    # Print the data of dictionary
    print("\nDato1:", data['dato1'])
    print("\nDato2:", data['dato2'])

    print(data)