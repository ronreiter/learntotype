# Learn to Type

Learn to Type is a fun game for kids that teaches them how to type, 
and the connection between words, the letters that make them up, 
their meaning, and how words are pronounced.

Learn to Type is implemented in Vue.js and has no server side requirements or state. Just open the HTML file and start playing.

This version is the English version that is based on the original version here:
https://ronreiter.github.io/learntotype/index.html
With the original source here:
https://github.com/ronreiter/learntotype


The English version is here:
https://orzelig.github.io/learntotype/index-en.html


# Running locally:

Simply open index-en.html using Chrome.

If you are using an idea like Webstorm you can debug with breakpoints. Just debug the index.html file. 

# Contributing

To add a word do the following steps:

1. Prepare a .svg file with the correct image and add it under correct category under images-en.
2. Add to words-en.js to correct category
    ```python
    >>> {"category": "\u0046\u006f\u006f\u0064",    "word": "\u0041\u0076\u006f\u0063\u0061\u0064\u006f"}
    >>> Food, Avocado
    ```
4. You can use any UTF-16 / unicode converter (for example this: https://www.branah.com/unicode-converter)


