# 1 Code Wars

a = "code"
b = "wa.rs"
name = a + b

# 2 Code Wars

def is_even(n):
    # Check if n is an integer and divisible by 2
    if isinstance(n, int) and n % 2 == 0:
        return True
    # For floats, consider them uneven if they have a decimal part
    elif isinstance(n, float) and n.is_integer():
        return n % 2 == 0
    return False

# 3 Code Wars


def main(verb, noun):
    return verb + noun

# 4 Code Wars

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"


# 5 Code Wars



def number_to_string(num):
    return str(num)


# 6 Code Wars

def boolean_to_string(b):
    return str(b)

# 7 Code Wars


def say_hello(name):
    return "Hello, " + name


# Last Code Wars


def quarter_of(month):
    if 1 <= month <= 3:
        return 1
    elif 4 <= month <= 6:
        return 2
    elif 7 <= month <= 9:
        return 3
    elif 10 <= month <= 12:
        return 4

# End Of Python Homework.