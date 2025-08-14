import random

def guess_the_number():
    print("გთხოვთ, მოიფიქრო რიცხვი 1-დან 100-მდე.")
    
    # რიცხვი შემდგომში უნდა გამოიცნოს
    low = 1
    high = 100
    attempts = 3
    
    for attempt in range(1, attempts + 1):
        guess = random.randint(low, high)
        print(f"მცდელობა {attempt}: პროგრამა მიიჩნევს, რომ რიცხვი არის {guess}")
        
        # მომხმარებელი უნდა გვეუბნოს, თუ რიცხვი მაღალი, დაბალი ან სწორი იყო
        response = input("მითხარი - 'მაღალი', 'დაბალი', თუ 'სწორია': ").lower()
        
        if response == "სწორია":
            print(f"გილოცავ! პროგრამამ ამოიცნო შენი რიცხვი {guess}.")
            break
        elif response == "მაღალი":
            high = guess - 1
        elif response == "დაბალი":
            low = guess + 1
        else:
            print("შეცდომა! გთხოვთ, დააზუსტოთ პასუხი ('მაღალი', 'დაბალი', 'სწორია').")
        
        if attempt == attempts:
            print("სამწუხაროდ, მე ვერ გავიგე შენი რიცხვი. სცადე კიდევ ერთხელ!")

# თამაში დაიწყება
guess_the_number()
