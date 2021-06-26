import requests
import json
import os
import base64
import random

filepath = './src/pages/aboutme.js'

CLIENT_ID = os.environ['CLIENT_ID']
CLIENT_SECRET = os.environ['SECRET']
refresh_token = os.environ['REFRESH_TOKEN']
auth_code= os.environ['AUTH_CODE']


auth_string = CLIENT_ID + ':' + CLIENT_SECRET
auth_encoding = 'Basic ' + str(base64.b64encode(auth_string.encode("ascii")).decode())


# https://accounts.spotify.com/authorize?client_id={client_id}1&response_type=code&redirect_uri={some_redirect_uri}&scope=user-library-read&state={optional}

auth_r = requests.post('https://accounts.spotify.com/api/token', data={'grant_type': 'refresh_token', 'refresh_token': refresh_token}, headers={'Authorization': auth_encoding})



try:
    res = auth_r.json()
    ACCESS_TOKEN = res['access_token']
    auth_string_bearer = 'Bearer ' + ACCESS_TOKEN
    r = requests.get('https://api.spotify.com/v1/me/tracks?limit=30', headers={'Authorization': auth_string_bearer})
    ul_list = []
    random.seed()
    random_list = random.sample(range(30), 10)
    for index in random_list:
        track = r.json()['items'][index]
        song_url = track['track']['external_urls']['spotify']
        name = track['track']['name']
        artist = track['track']['artists'][0]['name']
        artist_url = track['track']['artists'][0]['external_urls']['spotify']
        ul_list.append(f'<li><a href=\'{song_url}\'>{name}</a> - <a href=\'{artist_url}\'>{artist}</a></li>')

    ul_list = "\n".join(ul_list)
    ul_list = f'<ul>{ul_list}</ul>'

    print(ul_list)

    start_marker = '{/* SPOTIFY MIX STARTS HERE */}'
    end_marker = '{/* SPOTIFY MIX ENDS HERE */}'

    with open(filepath, 'r', encoding='utf-8') as f:
        oldfile = f.read()
    start_index = oldfile.index(start_marker) + len(start_marker)
    end_index = oldfile.index(end_marker)

    newfile = oldfile[:start_index] + '\n' + ul_list + '\n' + oldfile[end_index:]
    # newfile = newfile.encode(encoding='UTF-8')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(newfile)    
      
except Exception as e:
    print(e)