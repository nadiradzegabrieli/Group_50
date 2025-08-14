# 1)

name = "Gabrieli"
num = 10
num1 = 20.5
is_true = True

print(type(name))
print(type(num))
print(type(num1))
print(type(is_true))

# 2)

print(5 > 10) # False
print(20 > 5) # True
print(20 >= 20) # True
print(7 <= 10) # True
print(15 == 16) # False
print(15 != 15) # False

# 3)

# True/False
print(True and True) # True
print(False and True) # False
print(True and False) # False
print(False and False) # False

print(True or True) # True
print(True or False) # True
print(False or False) # False
print(False or True) # True

# 4) 

age = input("Please enter your age: ")
print(type(age))

age = int(age)
print(type(age))

age = float(age)
print(type(age))

# 5)

name = "Gabrieli"
password = "1234"

user_name = input("Please enter your name: ")
user_password = input("Please enter your password: ")

print(name == user_name and password == user_password)

# 6) 

# კონკადინაცი არის ორი სტრინგის ერთმანეთზე დამატება
# მაგალითად:

print("5" + "5")
print("Vashli" + " " + "Msxali")