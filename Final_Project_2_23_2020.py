import requests
import json
import csv
jokes_url = "https://sv443.net/jokeapi/v2/joke/Any"
jokes_url_ending = "?format=json"
DEBUG = True
def get():
    try:
        response = requests.get(jokes_url)
        jokes = json.loads(response.text)
        data = {
            'category': jokes['category'],
            'jokeType': jokes['type'],
            'setup': jokes['setup'],
            'delivery': jokes['delivery'],
            'flags': jokes['flags'],
            'isNSFW': jokes['flags']['nsfw'],
            'isReligious': jokes['flags']['religious'],
            'isRacist': jokes['flags']['racist'],
            'isPolitical': jokes['flags']['political'],
            'isSexist': jokes['flags']['sexist'],
            'idNum': jokes['flags']['id'],
        }
    except Exception as e:
        print(e)
    return data
def go():
    data = get()
    api_key = 'somefakekey'
    headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': "Token " + api_key
    }
    current = 1
    max = 3
    for d in data:
        if current > max:
            break

        if DEBUG:
            print('DEBUG: RECEIVED = '+str(d))
        new_data = {
            'category': d['category'],
            'jokeType': d['jokeType'],
            'setup': d['setup'],
            'delivery': d['delivery'],
            'flags': d['flags'],
            'isNSFW': d['isNSFW'],
            'isReligious': d['isReligious'],
            'isRacist': d['isRacist'],
            'isPolitical': d['isPolitical'],
            'isSexist': d['isSexist'],
            'idNum': d['idNum'],
        }
        json_data = json.dumps(new_data)
        response = requests.post('http://ec2-52-204-195-1.compute-1.amazonaws.com:8000/api/',data=json_data,headers=headers)
        # prepared = req.prepare()
        # s = requests.Session()
        # response = s.send(prepared)
        #req = requests.Request('POST','https://sv443.net/jokeapi/v2/joke/Any?format=json',data=json_data,headers=headers)
        """ prepared = req.prepare()
        print('DEBUG: POST Headers = ' + str(prepared.headers)) # show our custom headers
        print('DEBUG: POST Body = '+ prepared.body) # show us the body which is JSON
        s = requests.Session()
        response = s.send(prepared)
        print("\n")
        print('DEBUG: SERVER RESPOSE CODE = ' +str(response.status_code))
        print('DEBUG: SERVER RESPOSE HEADERS = ' +str(response.headers))
        print('DEBUG: SERVER RESPOSE DATA = ' +str(response.json()))
        print("----------\n\n")
        current += 1 """
go()
