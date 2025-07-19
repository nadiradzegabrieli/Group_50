# 1 CodeWars

def solution(string, ending):
    return string.endswith(ending)

# 2 CodeWars

def basic_op(operator, value1, value2):
    if operator == '+':
        return value1 + value2
    elif operator == '-':
        return value1 - value2
    elif operator == '*':
        return value1 * value2
    elif operator == '/':
        return value1 / value2
    else:
        raise ValueError("Invalid operator")

# 3 CodeWars

def digitize(n):
    return [int(digit) for digit in str(n)][::-1]

# 4 CodeWars

def century(year):
    return (year + 99) // 100

# 5 CodeWars

import math

def litres(time):
    return math.floor(time * 0.5)
