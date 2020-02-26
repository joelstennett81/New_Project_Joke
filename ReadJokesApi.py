import requests
import json
import csv

jokes_url = "https://sv443.net/jokeapi/v2/joke/Any"
jokes_url_ending = "?format=json"



def display():
    try:
        response = requests.get(jokes_url)
        jokes = json.loads(response.text)
        category = jokes['category']
        type = jokes['type']
        setup = jokes['setup']
        delivery = jokes['delivery']
        flags = jokes['flags']
        isNSFW = flags['nsfw']
        isReligious = flags['political']
        isPolitical = flags['racist']
        isSexist = flags['sexist']
        idNum = jokes['id']
        print(type)
        print(setup)
        print(delivery)
        print(isNSFW)
        print(isReligious)
        print(isPolitical)
        print(isSexist)
        print(idNum)
        with open('Jokes.csv', 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(file)
            writer.writerow["Joke Type","Joke Setup","Joke Delivery","Joke Flags", "is NSFW", "is Religious", "is Political", "is Sexist", "Joke id"]
            writer.writerow[type,setup,delivery,flags,isNSFW,isReligious,isPolitical,isSexist,idNum]
    except Exception as e:
        print(e)

display()

