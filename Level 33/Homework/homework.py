# 1 HomeWork

name = input("Enter your name: ")
age = input("Enter your age: ")

sentence = "Hello, {0}! You are {1} years old.".format(name, age)

print(sentence)

# 2 HomeWork
words = ["Python", "is", "fun"]

sentence = " ".join(words)

print(sentence)

# 3 HomeWork
sentence = input("Enter a sentence: ")

words_list = sentence.split()

print(words_list)

# 4 HomeWork

sentence = input("Enter a sentence: ")
old_word = input("Enter the word to replace: ")
new_word = input("Enter the new word: ")
modified_sentence = sentence.replace(old_word, new_word)
print("Modified sentence:", modified_sentence)

# 5 HomeWork

mixed_case_string = input("Enter a mixed-case string: ")
lower_case_string = mixed_case_string.lower()
print("Lowercase string:", lower_case_string)

# 6 HomeWork

sentence = input("Enter a sentence: ")
uppercase_sentence = sentence.upper()
print("Uppercase sentence:", uppercase_sentence)

