# Puzzle Game - Crushing Bugs

## The project
This project is about eliminating bugs in  a drag&drop puzzle game.

## The BUGS
1. Any puzzle piece (correct or incorrect) can be dropped in any drop zone.
2. More than one puzzle piece can be dropped in one drop zone.
3. Function created to allow one piece to one dropzone.
-Solution
--> Dropzones and puzzle pieces matched via data sets.
--> Function created to allow one piece to one dropzone
--> Return statement created to prevent wrong puzzle pieces to be dropped to the dropzone
4. Background images couldn't be changed.
Solution --> Background data sets created to match with the bottom icons.
5. Puzzle sets didn't reset when a new puzzle is selected.
Solution --> resetPuzzlePieces function created with paren-child properties.


## License
Copyright 2021 Burak Turkmen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributors
Burak Turkmen

Interactive Media Design Student, Fanshawe College


You can drag and drop any
puzzle piece into a drop zone - this shouldn’t happen. Only the correct piece should drop in to
the matching zone, and there should only be one piece in one drop zone at a time.
The second bug is the problem with pieces appearing in the drop zones on reset / choosing a
new puzzle. Those should be removed / reparented back to the drag zone as well, so that the
player has a fresh board to drop onto.
Solve these two problems. Create a resetPuzzlePieces function to solve the second problem;
you can use the original drop function to solve the first one. Just extend it to check for
properties, etc as we’ve been doing in class
