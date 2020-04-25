import requests
import json
import csv
jokes_url = "https://sv443.net/jokeapi/v2/joke/Any?format=json"
jokes_url_ending = "?format=json"
DEBUG = True
isSingle = True
def get():
    data = {}
    try:
        print('In try stage')
        response = requests.get(jokes_url)
        jokes = json.loads(response.text)
        #print('printing jokes: ',jokes)
        if jokes['type'] == 'single':
            isSingle = True
            data = {
                'category': jokes['category'],
                'jokeType': jokes['type'],
                'joke': jokes['joke'],
                'setup': jokes['joke'],
                'delivery': jokes['joke'],
                'isNSFW': jokes['flags']['nsfw'],
                'isReligious': jokes['flags']['religious'],
                'isRacist': jokes['flags']['racist'],
                'isPolitical': jokes['flags']['political'],
                'isSexist': jokes['flags']['sexist'],
                'idNum': jokes['id'],
            }
        else:
            isSingle = False
            data = {
                'category': jokes['category'],
                'jokeType': jokes['type'],
                'joke': jokes['setup'],
                'setup': jokes['setup'],
                'delivery': jokes['delivery'],
                'isNSFW': jokes['flags']['nsfw'],
                'isReligious': jokes['flags']['religious'],
                'isRacist': jokes['flags']['racist'],
                'isPolitical': jokes['flags']['political'],
                'isSexist': jokes['flags']['sexist'],
                'idNum': jokes['id'],
            }
        print('end of try')
    except Exception as e:
        print('printing exception')
        print(e)
    #print('data: \n',data)
    return data
def go():
    data = get()
    #print('data',data)
    api_key = 'ffaf5c4875147be15d7fec2e754ad3b590e00571'
    headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': "Token " + api_key
    }
    # print('data\n',data)
    if isSingle:
        new_data = {
            'category': data['category'],
            'jokeType': data['jokeType'],
            'joke': data['joke'],
            'setup': data['joke'],
            'delivery': data['joke'],
            'isNSFW': data['isNSFW'],
            'isReligious': data['isReligious'],
            'isRacist': data['isRacist'],
            'isPolitical': data['isPolitical'],
            'isSexist': data['isSexist'],
            'idNum': data['idNum'],
        }
    else:
        new_data = {
            'category': data['category'],
            'jokeType': data['jokeType'],
            'joke': data['setup'],
            'setup': data['setup'],
            'delivery': data['delivery'],
            'isNSFW': data['isNSFW'],
            'isReligious': data['isReligious'],
            'isRacist': data['isRacist'],
            'isPolitical': data['isPolitical'],
            'isSexist': data['isSexist'],
            'idNum': data['idNum'],
        }
    #print('new data',new_data)
    
    data = json.dumps(new_data)    # turns python obj into json string
    # This line below is for AWS version
    #response = requests.post("http://ec2-52-204-195-1.compute-1.amazonaws.com:8000/api/",data=json_data)
    #
    # 
    #response = requests.post("http://localhost:8000/api/Joke/",data=json_data,headers=headers)
    
    print('posting to server')
    req = requests.Request('POST',"http://localhost:8000/api/Joke/",data=data,headers=headers)
    prepared = req.prepare()
    print('DEBUG: POST Headers = ' + str(prepared.headers)) # show our custom headers
    print('DEBUG: POST Body = '+ prepared.body) # show us the body which is JSON
    s = requests.Session()
    response = s.send(prepared)
    print('response',response)
    print("\n")
    print('DEBUG: SERVER RESPONSE CODE = ' +str(response.status_code))
    print('DEBUG: SERVER RESPONSE HEADERS = ' +str(response.headers)+'\n')
    print('DEBUG: SERVER RESPONSE DATA = ' +str(response.json()))
    print("----------\n\n")
    # current += 1
go()
