import requests
import json
import sys
import os

# User whitelist and issue number we are looking for
user_whitelist = ['jodymlin', 'khxia', 'jakobreinwald', 'christinatong01', 'milesswu']
# HOTH repository issues accessed via Github API
repo_issues = "https://api.github.com/repos/khxia/khxia.github.io/issues"

issue_num = '5'

url = repo_issues + '/' + issue_num + '/' + 'comments'

# Get given issue
announcements = requests.get(url)
print("Request completed with status code: ", announcements.status_code)
announcements_json = announcements.json()

valid_comments = []

# Keep track of every comment from valid usernames
for index, element in enumerate(announcements_json):
    if element['user']['login'] in user_whitelist:
        body = element['body']
        subject, partition, comment = body.partition('(Subject) ')
        comment = {'id': index, 'subject': subject, 'body': comment, 'timestamp': element['created_at']}
        valid_comments.append(comment)

# Insert all valid comment json objects into a file
filename = './announcements.json'
json_string = json.dumps(valid_comments, indent=4)
with open(filename, 'w') as f:
    f.write(json_string)

print("Finished.")