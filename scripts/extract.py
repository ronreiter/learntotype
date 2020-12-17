import os

import plyvel, re, hashlib

l = plyvel.DB("../icons-db4")
cat_regexp = re.compile(b"\x00\x08id.*?(\w+).*?\x00\x08category")

for key, data in l:
	if b"<svg" not in data:
		continue
	svg = data[data.index(b"<svg"):data.index(b"svg>")+4].decode("utf8")
	p = data.index(b"canonical_name")-2
	icon_name = data[p-30:p]
	final_icon_name = ""
	for letter in icon_name[::-1]:
		if letter > 128 or letter < 32:
			break
		final_icon_name = chr(letter) + final_icon_name

	# if b"\x00\x08emoji\x00\x08" not in data:
	# 	continue

	category = re.findall(b"categories\W*?(\w*?)\W*?subcategories", data)

	if not category:
#		print(data)
#		print(category)
#		continue
		c = category = "nocat"
	else:
		c = category[0].decode('utf8')

	print(final_icon_name)

	p = "images/" + c
	if not os.path.exists(p):
		os.makedirs(p)

	h = hashlib.md5(svg.encode('utf8')).hexdigest()
	with open("%s/%s.svg" % (p, final_icon_name + "_" + h), "w") as f:
		f.write(svg)
