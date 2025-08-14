# 1 
def personal_info(name, surname, age, country, city, hobby):
    sentence = f"მე მქვია {name} {surname}, ვარ {age} წლის, ვცხოვრობ {country}-ში, კერძოდ {city}-ში, და ჩემი საყვარელი ჰობი არის {hobby}."
    return sentence

# ფუნქციის გამოყენება:
name = "გიორგი"
surname = "აბაშიძე"
age = 25
country = "საქართველო"
city = "თბილისი"
hobby = "ფილმების ყურება"

result = personal_info(name, surname, age, country, city, hobby)
print(result)


# 2

def simple_calculator(num1, num2, operation):
    if operation == "დამატება":
        return num1 + num2
    elif operation == "გამოკლება":
        return num1 - num2
    elif operation == "გამრავლება":
        return num1 * num2
    elif operation == "გაყოფა":
        if num2 == 0:
            return "შეცდომა: ნულზე გაყოფა შეუძლებელია"
        else:
            return num1 / num2
    else:
        return "შეცდომა: უცნობი ოპერაცია"

# ფუნქციის გამოყენება სხვადასხვა ოპერაციებისთვის:
result1 = simple_calculator(10, 5, "დამატება")
result2 = simple_calculator(10, 5, "გამოკლება")
result3 = simple_calculator(10, 5, "გამრავლება")
result4 = simple_calculator(10, 0, "გაყოფა")  # ნულზე გაყოფის შემთხვევა
result5 = simple_calculator(10, 5, "გაყოფა")

# შედეგების დაბეჭდვა
print(f"დამატება: {result1}")
print(f"გამოკლება: {result2}")
print(f"გამრავლება: {result3}")
print(f"გაყოფა (ნულზე): {result4}")
print(f"გაყოფა: {result5}")