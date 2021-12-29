#!/usr/bin/python3

import os
import json

def to_escaped_unicode(word):
  result = ""
  for c in word:
    if ord(c) < 128:  # ascii
      result += "\\u%04x" % (ord(c))
    else:
      result += str(c).encode("unicode-escape").decode("ascii")
  return result

def process_file_name(fname):
  word = os.path.splitext(fname)[0]
  utf16_word = to_escaped_unicode(word)
  return utf16_word

def dir_name_to_categories_dict(dir_name):
  categories = {}
  result = []
  for root, dirs, files in os.walk(dir_name, topdown=True):
    if root == dir_name:  # Folders in root folder
      for d in dirs:
        categories[d] = []
      continue

    root_basename = os.path.basename(root)
    if root_basename in categories:  # One of the categories created in the prev step
      for f in files:
        result.append(
            {'category': process_file_name(root_basename),
             'word': process_file_name(f)})
      if dirs:
        print("Warning: Ignoring subdirecotires of dir %s" % root)
      continue
  return result

def remove_escaping(word):
  result = ""
  prev_not_backslash = True
  for c in word:
    if c == '\\' and prev_not_backslash:
      prev_not_backslash = False
    else:
      prev_not_backslash = True
      result += c
  return result

work_dir = "images-en"
print("Processing dir: %s" % work_dir)

json_string = json.dumps(dir_name_to_categories_dict(work_dir))
output = "window.words = " + remove_escaping(json_string)
with open("words-en.js", 'w') as f:
  f.write(output)

