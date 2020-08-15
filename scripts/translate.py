import json
import time

from googletrans import Translator
translator = Translator()


def is_hebrew(s):
    return any("\u0590" <= c <= "\u05EA" for c in s)


trans_he = json.load(open("../trans_he.json"))
i = 0
for emoji in json.load(open("../emoji.json")):
    if emoji['codes'] in trans_he and not is_hebrew(trans_he[emoji['codes']]):
        del trans_he[emoji['codes']]

    if emoji['codes'] in trans_he:
        continue


    t = translator.translate(emoji['name'], dest='he').text
    if not t or not is_hebrew(t):
        time.sleep(1)
        continue

    trans_he[emoji['codes']] = t
    print(emoji['name'], t[::-1])

    i += 1

    if i % 10 == 0:
        with open("../trans_he.json", "w") as w:
            w.write(json.dumps(trans_he))

with open("../trans_he.json", "w") as w:
    w.write(json.dumps(trans_he))
