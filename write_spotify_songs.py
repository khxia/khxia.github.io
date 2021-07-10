import requests
import json
import os
import base64
import random

from requests.api import request

filepath = './src/pages/aboutme.js'

CLIENT_ID = os.environ['CLIENT_ID']
CLIENT_SECRET = os.environ['CLIENT_SECRET']
refresh_token = os.environ['REFRESH_TOKEN']
auth_code= os.environ['AUTH_CODE']


auth_string = CLIENT_ID + ':' + CLIENT_SECRET
auth_encoding = 'Basic ' + str(base64.b64encode(auth_string.encode("ascii")).decode())


# https://accounts.spotify.com/authorize?client_id={client_id}&response_type=code&redirect_uri={some_redirect_uri}&scope=user-library-read%20playlist-modify-public%20&state={optional}

auth_r = requests.post('https://accounts.spotify.com/api/token', data={'grant_type': 'refresh_token', 'refresh_token': refresh_token}, headers={'Authorization': auth_encoding})

def find_index_of_latest_song(most_recent, liked_songs):
    ''' Finds the index in liked_songs that matches the most recent song in general_playlist '''
    result = 0
    for song in liked_songs:
        name = song['track']['name']
        artist = song['track']['artists'][0]['name']
        if name == most_recent['name'] and artist == most_recent['artists'][0]['name']:
            return result
        else:
            result = result + 1
    return -1

try:
    # UPDATING BLOG PAGE
    res = auth_r.json()
    ACCESS_TOKEN = res['access_token']
    auth_string_bearer = 'Bearer ' + ACCESS_TOKEN
    tracks_r = requests.get('https://api.spotify.com/v1/me/tracks?limit=25', headers={'Authorization': auth_string_bearer})
    ul_list = []
    random.seed()
    random_list = random.sample(range(25), 10)
    liked_tracks = tracks_r.json()['items']
    for index in random_list:
        track = liked_tracks[index]
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

    # UPDATING "GENERAL" PLAYLIST IF NEEDED
    # Playlist ID: 0fiu2hnAUGutQdNXuoQ46n
    
    # Get playlist
    GENERAL_PLAYLIST_ID = '0fiu2hnAUGutQdNXuoQ46n'
    playlist_r = requests.get(f'https://api.spotify.com/v1/playlists/{GENERAL_PLAYLIST_ID}?fields=tracks(items(track(name, uri, artists(name))))', headers={'Authorization': auth_string_bearer})
    
    # playlist_r:
    # {
    #   "tracks": {
    #     "items": [
    #       {
    #         "track": {
    #           "artists": [
    #             {
    #               "name": "Remioromen"
    #             }
    #           ],
    #           "name": "3月9日",
    #           "uri": "spotify:track:1Alsp6EVIAHTDorSjPeRuY"
    #         }
    #       },
    #       {
    #         "track": {
    #           "artists": [
    #             {
    #               "name": "YOASOBI"
    #             }
    #           ],
    #           "name": "もう少しだけ",
    #           "uri": "spotify:track:2pXmohBUnD5Li93sgpbPSg"
    #         }
    #       },
    #     ]
    #   }
    # }

    general_playlist = playlist_r.json()
    index = find_index_of_latest_song(general_playlist['tracks']['items'][0]['track'], liked_tracks)
    
    # after we find our index, we just need to add all the songs from position 0 to index into our playlist
    if index > 0 and index <= 25:
        uri_list = []
        for pos in range(index):
            uri = liked_tracks[pos]['track']['uri']
            uri_list.append(uri)
        uri_list = uri_list.join(",")
        requests.post(f'https://api.spotify.com/v1/playlists/{GENERAL_PLAYLIST_ID}/tracks?position=0&uris={uri_list}', headers={'Authorization': auth_string_bearer, 'Content-Type': 'application/json'})
except Exception as e:
    print(e)


 