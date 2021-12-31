#!/usr/bin/python3

import os
import shutil
from deep_translator import GoogleTranslator

def process_file_name(fname):
  word = os.path.splitext(fname)[0]
  return word

def create_folders(source, destination):
  categories = {}
  for root, dirs, files in os.walk(source, topdown=True):
    if root == source:  # Folders in root folder
      for d in dirs:
        translated = GoogleTranslator(source = 'hebrew', target= 'en').translate(d).capitalize()
        path = os.path.join(destination, translated) 
        os.mkdir(path)
        categories[d] = []
      continue

    root_basename = os.path.basename(root)
    if root_basename in categories:  # One of the categories created in the prev step
      translated_folder = GoogleTranslator(source = 'hebrew', target= 'en').translate(root_basename)
      for f in files:
        translated = process_file_name(f)
        if (translated_folder != "Numbers"):
          translated = GoogleTranslator(source = 'hebrew', target= 'en').translate(translated).capitalize() + ".svg"
        path = os.path.join(source,root_basename,f)
        path_to = os.path.join(destination,translated_folder, translated)
        print("copying %s to %s" %(path,path_to))
        shutil.copy(path,path_to)
      if dirs:
        print("Warning: Ignoring subdirecotires of dir %s" % root)
      continue
  return 

work_dir = "images"
target_dir = "images-en"
print("Processing disr: %s to %s" % (work_dir ,target_dir))
os.mkdir(target_dir)
create_folders (work_dir, target_dir)



