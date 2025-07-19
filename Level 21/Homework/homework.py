# Create a list named fruits
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Print the entire list
print("Original list:", fruits)

# Access and print the first and last items in the list
print("First item:", fruits[0])
print("Last item:", fruits[-1])

# Add a new fruit "fig" to the list
fruits.append("fig")

# Remove "banana" from the list
fruits.remove("banana")

# Change the value of the second item to "blueberry"
fruits[1] = "blueberry"

# Print the length of the list
print("Length of the list:", len(fruits))

# Print the modified list
print("Modified list:", fruits)



#----------------------------------------------------------------------------------------------------------------------------------------------



# Create a list named numbers
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

# Use append() to add the number 100 to the end of the list
numbers.append(100)

# Use insert() to add the number 5 at the beginning of the list
numbers.insert(0, 5)

# Use remove() to remove the number 30 from the list
numbers.remove(30)

# Use reverse() to reverse the order of the list
numbers.reverse()

# Use index() to find the index of the number 50
index_of_50 = numbers.index(50)

# Use count() to count how many times 20 appears in the list
count_of_20 = numbers.count(20)

# Print the results
print("Modified list:", numbers)
print("Index of 50:", index_of_50)
print("Count of 20:", count_of_20)



# ---------------------------------------------------------------------------------------------------------------------------------------------


# Create a list named numbers containing integers from 1 to 10
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Use list slicing to create a new list named first_half containing the first five elements
first_half = numbers[:5]

# Use list slicing to create another list named second_half containing the last five elements
second_half = numbers[5:]

# Use list comprehension to create a new list named squares containing the squares of each number in numbers
squares = [num ** 2 for num in numbers]

# Print all three lists
print("First half:", first_half)
print("Second half:", second_half)
print("Squares:", squares)

# ----------------------------------------------------------------------------------------------------------------------------------------------


# Create a list named temperatures representing daily temperatures
temperatures = [72, 68, 75, 70, 78, 74, 71]

# Calculate and print the highest temperature using the max() function
highest_temp = max(temperatures)
print("Highest temperature:", highest_temp)

# Calculate and print the lowest temperature using the min() function
lowest_temp = min(temperatures)
print("Lowest temperature:", lowest_temp)

# Calculate and print the average temperature
average_temp = sum(temperatures) / len(temperatures)
print("Average temperature:", average_temp)

# Use a list comprehension to create a new list named above_70 that contains only the temperatures above 70 degrees
above_70 = [temp for temp in temperatures if temp > 70]

# Print the above_70 list
print("Temperatures above 70:", above_70)
