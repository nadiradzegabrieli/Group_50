# პროგრამა ითხოვს რიცხვების შეყვანას
input_numbers = input("შეიყვანეთ რიცხვები მძიმით გამოყოფილ ფორმატში (მაგ: 1, 2, 3): ")

# გადააქვს შეყვანილი რიცხვები სიის ფორმატში
numbers = [float(num.strip()) for num in input_numbers.split(',')]

# გამოითვლის სიის რიცხვების ჯამს
total_sum = sum(numbers)

# დაბეჭდავს ჯამს
print(f"რიცხვების ჯამი არის: {total_sum}")

# ითხოვს პირველ რიცხვს
first_number = input("შეიყვანეთ პირველი რიცხვი: ")

# სიის ინიციალიზაცია
numbers = [float(first_number)]

# ითხოვს დამატებითი რიცხვების შეყვანას
print("შეიყვანეთ დანარჩენი რიცხვები (შეჩერებისთვის დააჭირეთ Enter-ს):")

while True:
    additional_number = input("რიცხვი: ")
    if additional_number == "":
        break
    numbers.append(float(additional_number))

# გამოითვლის და დაბეჭდავს რიცხვების რაოდენობას
print(f"სულ შეყვანილია {len(numbers)} რიცხვი.")