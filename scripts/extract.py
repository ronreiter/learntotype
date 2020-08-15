import os

import leveldb, re

l = leveldb.LevelDB("../icons-db4")
cat_regexp = re.compile(b"\x00\x08id.*?(\w+).*?\x00\x08category")

for xx in l.RangeIter():
	data = xx[1]
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

	if b"\x00\x08emoji\x00\x08" not in data:
		continue

	category = re.findall(b"categories\W*?(\w*?)\W*?subcategories", data)

	if not category:
		print(data)
		print(category[0])
		continue


	print(final_icon_name)
	c = category[0].decode('utf8')

	# if final_icon_name == "Hedgehog":
	# 	print(xx)
	# continue
	p = "../images2/" + c
	if not os.path.exists(p):
		os.makedirs(p)
	with open("%s/%s.svg" % (p, final_icon_name), "w") as f:
		f.write(svg)
