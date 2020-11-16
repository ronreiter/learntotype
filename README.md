# Learn to Type

Learn to Type is a fun game for kids that teaches them how to type, 
and the connection between words, the letters that make them up, 
their meaning, and how words are pronounced.

Learn to Type is implemented in Vue.js and has no server side requirements or state. Just open the HTML file and start playing.

https://ronreiter.github.io/learntotype/index.html

# Contributing

To add a word do the following steps:

0. Install Hebrew system voice Carmit (Accessibility -> Speech)
1. Prepare a .wav file by using mac say command (e.g say -v carmit -o "negative_100.wav" --data-format=LEF32@32000 "מינוס מאה") and add it under imagesounds
2. Prepare a .svg file with the correct image and add it under correct category under images.
3. Add to words.js to correct category
    ```python
    >>> print("\u05de\u05e1\u05e4\u05e8\u05d9\u05dd"[::-1])
    מספרים
    ```
4. And Bob's your uncle :)
