# distance = 7425
# speed = 550
# flight_time = distance / speed
# print("The flight time from LA to Sydney is approximately", flight_time, "hours")


# bill_amount = float(input("Enter the bill amount: "))
# tip = bill_amount * 0.20
# print("The 20% tip is:", tip)



# def calculate_bmi(weight, height):
    
#     bmi = weight / (height ** 2)

    
#     if bmi < 18.5:
#         category = "Underweight"
#     elif 18.5 <= bmi < 24.9:
#         category = "Normal weight"
#     elif 25 <= bmi < 29.9:
#         category = "Overweight"
#     else:
#         category = "Obese"

#     return bmi, category


# weight = float(input("Enter your weight in kilograms: "))
# height = float(input("Enter your height in meters: "))


# bmi, category = calculate_bmi(weight, height)

# print(f"Your BMI is {bmi:.2f}. You are classified as {category}.")




def search(text, word):
    if word in text:
        return "Word found."
    else:
        return "Word not found."

text = input("enter text :")
word = input("enter the word you wanna find:")
print(search(text, word))  


