# Roboger

#### By Jonathan Song

#### Website to translate number to specified text

## Technologies Used

* HTML
* CSS
* JavaScript
* VScode

## Description
Website designed to ask the user for input of a number and name. Then, based on that number, the website translates it into a series of numbers ordered from 0 to the number inputted. If numbers in that series contain 1,2, or 3, the translator translates such numbers.


## Setup/Installation Requirements

* Navigate to the repository of the named project through this [link](https://github.com/boboflofo/Roboger.git)
* On the top right of the screen, navigate to the **fork** button and fork the repository
* Open a code editor such as VScode and in the terminal git clone the project for editing capabilities
* Personalize and edit directly in your code editor!



## Known Bugs
n/a

## Tests
 **Describe roboger()**

Test: "It should take in an input"\
Code: roboger()\
Expected Output: "Please input a number!"

Test: "It should take in a number as an input"\
Code: roboger("g")\
Expected Output: "Please input a number!"

Test: "It should return a list of numbers based on the length of the input in order"\
Code: roboger(4)\
Expected Output: \[0,1,2,3,4\]

Test: "It should replace all 1s in the returned list with a "Beep!""\
Code: roboger(0)\
Expected Output: (\[0,"Beep!"\])

Test: "It should replace all 2s in the returned list with a "Boop!""\
Code: roboger(2)\
Expected Output: (\[0, "Beep", "Boop!"\])

Test: "It should replace all 3s in the returned list with a "Won't you be my neighbor""\
Code: roboger(3)\
Expected Output: (\[0, "Beep", "Boop!", "Won't you be my neighbor?"\])

Test: "It should replace 1s 2s and 3s regardless of amounts of digits in the input"\
Code: roboger(10)\
Expected Output: (\[0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"\])

Test: "It should replace multiple digit numbers with strings based on the last specified digit"\
Code: roboger(13)\
Expected Output: (\[0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"\])

## License
MIT License

Copyright (c) [2023] [Jonathan Song]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Contact jonathan91790@yahoo.com for additional issues


Copyright (c) _10/27/2023_ _Jonathan Song(s)_


