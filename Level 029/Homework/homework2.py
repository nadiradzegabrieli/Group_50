# Create a list named numbers
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

# Use the append() function to add the number 100 to the end of the list
numbers.append(100)

# Use the insert() function to add the number 5 at the beginning of the list
numbers.insert(0, 5)

# Use the remove() function to remove the number 30 from the list
numbers.remove(30)

# Use the sort() function to sort the list in ascending order
numbers.sort()

# Use the reverse() function to reverse the order of the list
numbers.reverse()

# Use the index() function to find the index of the number 50
index_of_50 = numbers.index(50)

# Use the count() function to count how many times 20 appears in the list
count_of_20 = numbers.count(20)

# Print the results
print("Numbers list:", numbers)
print("Index of 50:", index_of_50)
print("Count of 20:", count_of_20)
