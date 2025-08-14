name = "ნიკა"
age = 25
sentence = "ჩემი მეგობარი სახელად {} არის {} წლის.".format(name, age)
print(sentence)
# ----------------------

words = ["გამარჯობა", "მსოფლიო"]
sentence = " ".join(words)
print(sentence)
# --------------------

text = "გამარჯობა, გემშვიდობებით"
new_text = text.replace("გემშვიდობებით", "კარგად")
print(new_text)
# --------------

a = 5
b = 7
c = a * b
print(c)

# -------------

number = 12345
reversed_number = int(str(number)[::-1])
print(reversed_number)

# ------------
number = 123
sum_of_digits = sum(int(digit) for digit in str(number))
print(sum_of_digits)

# -------------
for i in range(5):
    print(i)

# ------------------

count = 0
while count < 5:
    print(count)
    count += 1

# ------------------

number = 10
if number > 0:
    print("რიცხვი დადებითია")
else:
    print("რიცხვი უარყოფითია")

# -------------

def greet(name):
    return "გამარჯობა, " + name + "!"

print(greet("ნიკა"))


# ---------------

def add(a, b):
    return a + b

print(add(3, 5))

# --------------

def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))

# --------------

fruits = ["ვაშლი", "ბანანი", "ატამი"]
print(fruits)

# -------------

person = {"სახელი": "ნიკა", "ასაკი": 25}
print(person)

# --------------

list1 = [1, 2, 3]
list2 = [4, 5, 6]
joined_list = list1 + list2
print(joined_list)

# E N D