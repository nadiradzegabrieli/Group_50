# codewars 1

def reverse_string(s):
    return s[::-1]

# codewars 2

result = ("run", "fast")
print(result)  # Output: "runfast"

# codewars 3

def area_or_perimeter(l, w):
    if l == w:
        return l * w  # Area of the square
    else:
        return 2 * (l + w)  # Perimeter of the rectangle

# Examples
print(area_or_perimeter(5, 5))  # Output: 25 (area of the square)
print(area_or_perimeter(4, 6))  # Output: 20 (perimeter of the rectangle)

# codewars 4

def make_negative(number):
    if number > 0:
        return -number
    else:
        return number

# Examples
print(make_negative(5))   # Output: -5
print(make_negative(-3))  # Output: -3
print(make_negative(0))   # Output: 0

# codewars 5

def opposite(number):
    return -number

# Examples
print(opposite(5))     # Output: -5
print(opposite(-3.7))  # Output: 3.7
print(opposite(0))     # Output: 0

# E N D
