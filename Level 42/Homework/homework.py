# 1 CodeWars

def set_alarm(employed, vacation):
    return employed and not vacation

# 2 CodeWars

def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    elif current == "red":
        return "green"

# 3 CodeWars

def whatday(num):
    days = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    }
    return days.get(num, "Wrong, please enter a number between 1 and 7")

# End Of Homework!