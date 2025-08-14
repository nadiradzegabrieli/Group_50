# Create a list named numbers that contains the integers from 1 to 10
numbers = list(range(1, 11))

# Use list slicing to create a new list named first_half that contains the first five elements from numbers
first_half = numbers[:5]

# Use list slicing to create another list named second_half that contains the last five elements from numbers
second_half = numbers[5:]

# Use a list comprehension to create a new list named squares that contains the squares of each number in the numbers list
squares = [x**2 for x in numbers]

# Print all three lists: first_half, second_half, and squares
print("First half:", first_half)
print("Second half:", second_half)
print("Squares:", squares)
