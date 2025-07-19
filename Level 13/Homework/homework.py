# 1)

guess_number = 7

number = int(input("Guess a number of range 1-10: "))

while number != guess_number:
    print("Incorrect number, Try Again!")
    number = int(input("Guess a number of range 1-10: "))


# print("You Won!")

# 2)

num = 5

while num != 100:
    print(num)
    num = num + 5

# 3)

password = "group55"

user_pass = input("Please enter a password: ")

while user_pass != password:
    print("Incorrect password, Try Again!")
    user_pass = input("Please enter a password: ")

print("Password is correct!")