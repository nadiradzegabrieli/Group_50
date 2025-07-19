# ცარიელი სიის შექმნა
numbers = []

# 1. სიის შედგენა მომხმარებლის შეყვანისგან
print("შეიყვანეთ 10 რიცხვი:")
for i in range(10):  # მომხმარებელი 10-ჯერ შეიყვანს რიცხვს
    num = int(input(f"{i + 1}-ე რიცხვი: "))
    numbers.append(num)

# შედეგების ჩვენება
print("\nშექმნილი სია:", numbers)

# 2. მაქსიმალური ელემენტის პოვნა სიაში
max_num = numbers[0]  # ვიწყებთ პირველი ელემენტით
for num in numbers:
    if num > max_num:
        max_num = num

print("უდიდესი რიცხვი სიაში არის:", max_num)

# 3. ელემენტის წაშლა სიიდან
delete_num = int(input("\nრომელი რიცხვის წაშლა გსურთ? "))
if delete_num in numbers:  # ვამოწმებთ, არის თუ არა ელემენტი სიაში
    new_numbers = []  # ახალი სია
    for num in numbers:
        if num != delete_num:
            new_numbers.append(num)  # მხოლოდ სხვა ელემენტებს ვამატებთ
    numbers = new_numbers
    print("განახლებული სია წაშლის შემდეგ:", numbers)
else:
    print("ასეთი რიცხვი სიაში არ არის.")

# 4. სიის საპირისპირო მიმდევრობით ჩაწერა
reversed_numbers = []
for i in range(len(numbers) - 1, -1, -1):  # ინდექსები უკუღმა
    reversed_numbers.append(numbers[i])

print("სია საპირისპირო წესით:", reversed_numbers)

# 5. ელემენტის ძებნა სიაში
search_num = int(input("\nრომელი რიცხვის ძებნა გსურთ? "))
found = False  # ცვლადი ელემენტის პოვნისთვის
for num in numbers:
    if num == search_num:
        found = True
        break

if found:
    print("რიცხვი სიაში მოიძებნა.")
else:
    print("რიცხვი სიაში არ მოიძებნა.")
