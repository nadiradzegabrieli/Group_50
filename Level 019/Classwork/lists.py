# 1st classwork

# Input: User provides a string
string = input("Enter a string: ")

# Output: The last character of the string
print(string[-1])

# Explanation :

# •	string[-1] accesses the last character of the string using negative indexing.

# -----------------------------------------------------------------------------------
# 2nd classwork

# If the list names contains 5 elements, slicing with names[1:-1] will exclude:
# •	The first element (at index 0).
# •	The last element (at index -1).

# Thus, it will return the middle 3 elements.

# Answer: 3 elements.

# ------------------------------------------------------------------------------------

# 3rd classwork


#The code provided is:

# nums = [1, 2, 3, 4, 5, 6]
# res = nums[::-1]
# print(res[2])

# Step-by-step explanation:
# 	1.	nums[::-1] reverses the list nums:
# 	•	Original list: [1, 2, 3, 4, 5, 6]
# 	•	Reversed list: [6, 5, 4, 3, 2, 1]
# 	2.	res[2] accesses the element at index 2 of the reversed list:
# 	•	Index 2 in [6, 5, 4, 3, 2, 1] is 4.

# Answer: 4.


# ----------------------------------------------------------------------------------------

# 4th classwork



# text = input()  # Take input from the user
# reversed_text = text[::-1]  # Reverse the string using slicing
# print(reversed_text)  # Print the reversed string

# Explanation


# text[::-1]: Slicing is used to reverse the string. The -1 step tells Python to iterate backward.
# print(reversed_text): Outputs the reversed string.