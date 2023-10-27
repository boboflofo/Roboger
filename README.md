# Describe roboger()

Test: "It should return a list of numbers based on the length of the input in order"
Code: roboger(4)
Expected Output: \[0,1,2,3,4\]

Test: "It should replace all 1s in the returned list with a "Beep!""
Code: roboger(\[1\])
Expected Output: (\["Beep!"\])

Test: "It should replace all 2s in the returned list with a "Boop!""
Code: roboger(\[2\])
Expected Output: (\["Boop!"\])

Test: "It should replace all 3s in the returned list with a "Won't you be my neighbor""
Code: roboger(3)
Expected Output: (\["Won't you be my neighbor"\])

Test: "It should replace 1s regardless of amounts of digits in the input"
Code: roboger(10)
Expected Output:
