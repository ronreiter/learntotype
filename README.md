# Learn to Type

Learn to Type is a fun game for kids that teaches them how to type, 
and the connection between words, the letters that make them up, 
their meaning, and how words are pronounced.

Learn to Type is implemented in Vue.js and has no server side requirements or state. Just open the HTML file and start playing.

https://ronreiter.github.io/learntotype/index.html

Hebrew version
https://ronreiter.github.io/learntotype/Hebrew

English version 
https://ronreiter.github.io/learntotype/English


# Running locally:

Simply open one of the versions above (Hebrew or English) and choose to install the app from the adress bar.

# Contributing

To add a word to the Hebrew version do the following steps:

0. Install Hebrew system voice Carmit (Accessibility -> Speech)
1. Prepare a .wav file by using mac say command (e.g say -v carmit -o "100.wav" --data-format=LEF32@32000 "מאה") and add it under imagesounds
2. Prepare a .svg file with the correct image and add it under correct category under images.
3. Add to words.js to correct category
    ```python
    >>> print("\u05de\u05e1\u05e4\u05e8\u05d9\u05dd"[::-1])
    מספרים
    ```
4. And Bob's your uncle :)

To add a new letter do the following steps:
1. Prepare a .wav file asking <> איפה? and put it under letterquestions
2. Prepare a .wav file with the sound of the letter and put it under lettersounds.
3. Add to hebrewKeyboard var in index.js
4. Profit!

To add a word to the English version do the following steps:
1. Prepare a .svg file with the correct image and add it under correct category under images-en.
2. Run generate_words_file.py to update words-en.js
