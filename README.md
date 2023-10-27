# Describe roboger()

Test: "It should take in an input"
Code: roboger()
Expected Output: "Please input a number!"

Test: "It should take in a number as an input"
Code: roboger("g")
Expected Output: "Please input a number!"

Test: "It should return a list of numbers based on the length of the input in order"
Code: roboger(4)
Expected Output: \[0,1,2,3,4\]

Test: "It should replace all 1s in the returned list with a "Beep!""
Code: roboger(0)
Expected Output: (\[0,"Beep!"\])

Test: "It should replace all 2s in the returned list with a "Boop!""
Code: roboger(2)
Expected Output: (\[0, "Beep", "Boop!"\])

Test: "It should replace all 3s in the returned list with a "Won't you be my neighbor""
Code: roboger(3)
Expected Output: (\[0, "Beep", "Boop!", "Won't you be my neighbor?"\])

Test: "It should replace 1s 2s and 3s regardless of amounts of digits in the input"
Code: roboger(10)
Expected Output: (\[0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"\])

Test: "It should replace multiple digit numbers with strings based on the last specified digit"
Code: roboger(13)
Expected Output: (\[0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"\])


