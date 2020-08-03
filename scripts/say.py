import os

for path, dirs, files in os.walk('images'):
	for f in files:
		word = f.split(".")[0]
		os.system('say "%s" -o "imagesounds/%s.wav" --data-format=ulaw@44100' % (word, word))


