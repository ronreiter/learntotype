# 1. download icon pack from here: https://ko.icons8.com/app
# 2. copy and copy the icons-db4 directory to here
# 3. run this script

python3 -m venv venv
venv/bin/pip install leveldb
mkdir svg
venv/bin/python extract.py

# say "שוקולד" -o "Chocolate Bar Emoji.wav" --data-format=ulaw@44100