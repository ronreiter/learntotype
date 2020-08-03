import os, json

json_data = []
for path, dirs, files in os.walk('images'):
	if "/" not in path:
		continue
	for f in files:
		json_data.append({
				"category": path.split("/")[1],
				"word": f.split(".")[0]
			})

with open("words.js", "w") as f:
	f.write("window.words = " + json.dumps(json_data))