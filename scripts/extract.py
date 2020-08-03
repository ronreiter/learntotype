import leveldb

l = leveldb.LevelDB("icons-db4")

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

	if b"\x00\x08emoji\x00\x08platform" not in data:
		continue

	# if final_icon_name == "Hedgehog":
	# 	print(xx)
	# continue
	with open("svg2/%s.svg" % final_icon_name, "w") as f:
		f.write(svg)
