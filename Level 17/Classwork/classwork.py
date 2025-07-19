# სიის შექმნა, 10 სხვადასხვა ტიპის მონაცემით
data = [42,3.14,"Hello",True,[1, 2, 3],(4, 5),{10, 20}]         
    

# პირველი სამი მნიშვნელობის ინდივიდუალური გამოტანა
print("First three elements:")
print(data[0])  # 42
print(data[1])  # 3.14
print(data[2])  # "Hello"

# მეორე სამი მნიშვნელობის შეცვლა პროგრამირების ენებით
data[3] = "Python"
data[4] = "Java"
data[5] = "C++"

# სიის გამოტანა ცვლილებების შემდეგ
print("\nUpdated list:")
print(data)

# სიაში 5 ახალი მნიშვნელობის დამატება
data.extend(["Go", "Rust", "Kotlin", "Swift", "JavaScript"])

# სიის საბოლოო ვერსიის გამოტანა
print("\nFinal list:")
print(data)
