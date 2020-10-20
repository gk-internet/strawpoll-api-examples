import requests

api_key = 'YOUR_API_KEY';

data = {
	"poll": {
		"title": "Your poll question",
		"answers": ["answer #1", "answer #2", "answer #3"],
		# "description": "Description Text",
		# "priv": 1,
		# "ma": 0,
		# "mip": 0,
		# "co": 1,
		# "vpn": 0,
		# "enter_name": 0,
		# "has_deadline": 1,
		# "deadline": "2020-02-27T07:00:00.000Z",
		# "only_reg": 0,
		# "has_image": 0,
		# "image": None,
	}
}

poll = requests.post("https://strawpoll.com/api/poll", json=data, headers={'API-KEY': api_key}).json()

print(poll)
print(poll["content_id"])
