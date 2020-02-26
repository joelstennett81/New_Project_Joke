import requests
import json

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
    except Exception as e:
        print(e)

display()
