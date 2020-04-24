import requests
import json
import csv
jokes_url = "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist?format=json"
jokes_url_ending = "?format=json"
DEBUG = True
def get():
    data = "data"
    try:
        response = requests.get(jokes_url)
        jokes = json.loads(response.text)
        print('jokes \n',jokes)
        print(jokes['type'])
        if jokes['type'] == "single":
            print("Its a single")
            data = {
                'category': jokes['category'],
                'jokeType': jokes['type'],
                'joke': jokes['joke'],
                'isNSFW': jokes['flags']['nsfw'],
                'isReligious': jokes['flags']['religious'],
                'isRacist': jokes['flags']['racist'],
                'isPolitical': jokes['flags']['political'],
                'isSexist': jokes['flags']['sexist'],
                'id': jokes['id'],
                }
        else:
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
                'id': jokes['id'],
        }
        print('data\n',data)
    except Exception as e:
        print("exception thrown! \n", e)
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
        if data['jokeType'] == 'single':
            new_data = {
                'category': data['category'],
                'jokeType': data['jokeType'],
                'joke': data['joke'],
                'isNSFW': data['isNSFW'],
                'isReligious': data['isReligious'],
                'isRacist': data['isRacist'],
                'isPolitical': data['isPolitical'],
                'isSexist': data['isSexist'],
                'id': data['id'],
        }
        else:
            new_data = {
                'category': data['category'],
                'jokeType': data['jokeType'],
                'setup': data['setup'],
                'delivery': data['delivery'],
                'isNSFW': data['isNSFW'],
                'isReligious': data['isReligious'],
                'isRacist': data['isRacist'],
                'isPolitical': data['isPolitical'],
                'isSexist': data['isSexist'],
                'id': data['id'],
        }
        print(new_data)
        json_data = json.dumps(new_data)
        print(json_data)
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

