# CodeWars 1
def between(a, b):
    # Use range to generate numbers between a and b (inclusive)
    return list(range(a, b + 1))

# CodeWars 2 
def solution(string):
    return string[::-1]

# CodeWars 3
def boolean_to_string(b):
    return str(b)

# CodeWars 4
def create_array(n):
    res = []
    i = 1
    while i <= n:
        res.append(i)
        i += 1  # Increment i to avoid infinite loop
    return res

