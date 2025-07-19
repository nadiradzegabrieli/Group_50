def process_text():
    # მომხმარებლის მიერ ტექსტის შეყვანა
    text = input("შეიყვანეთ ტექსტი: ")
    
    # 1. ყველა სიმბოლოს მცირე ასოებად გადაკეთება
    lower_case = text.lower()
    print(f"მცირე ასოებად: {lower_case}")
    
    # 2. ყველა სიმბოლოს დიდი ასოებად გადაკეთება
    upper_case = text.upper()
    print(f"დიდი ასოებად: {upper_case}")
    
    # 3. ტექსტის პირველი სიმბოლო დიდი ასო, დანარჩენი მცირე
    capitalized = text.capitalize()
    print(f"პირველი დიდი ასო: {capitalized}")
    
    # 4. მომხმარებლის მიერ შერჩეული სიტყვის ძებნა ტექსტში
    search_word = input("მიუთითეთ სიტყვა საძიებლად: ")
    index = text.find(search_word)
    
    if index != -1:
        print(f"სიტყვა '{search_word}' პირველად გვხვდება ინდექსზე: {index}")
    else:
        print(f"სიტყვა '{search_word}' ტექსტში არ მოიძებნა.")

# ფუნქციის გამოძახება
process_text()
