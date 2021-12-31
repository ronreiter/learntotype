#!/usr/bin/python3
# This tool rely on Google translate and should not be used as source of truth for file/folder names

import os
from posixpath import basename
import shutil
from deep_translator import GoogleTranslator

def process_file_name(fname):
  word = os.path.splitext(fname)[0]
  return word

def list_images(source):
  categories = {}
  for root, dirs, files in os.walk(source, topdown=True):
    if root == source:  # Folders in root folder
      for d in dirs:
        categories[d] = []
      continue

    root_basename = os.path.basename(root)
    if root_basename in categories:  # One of the categories created in the prev step
      for f in files:
        print ("'/learntotype/"+ source + "/" + root_basename + "/"+ f +"',")
      if dirs:
        print("Warning: Ignoring subdirecotires of dir %s" % root)
      continue
  return 

work_dir = input ("Enter the name of the source directory:")


print("Processing disr: %s" % (work_dir))
list_images (work_dir)



