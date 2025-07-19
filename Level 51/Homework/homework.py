def find_next_square(sq):
    # Check if 'sq' is a perfect square
    if (sq**0.5).is_integer():
        # Find the next perfect square
        next_square = (int(sq**0.5) + 1)**2
        return next_square
    else:
        # If 'sq' is not a perfect square, return -1
        return -1



def open_or_senior(data):
    result = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result



def row_sum_odd_numbers(n):
    return n ** 3


def nb_year(p0, percent, aug, p):
    years = 0  # Initialize a counter for years
    while p0 < p:  # Continue until the population meets or exceeds the target
        p0 += p0 * (percent / 100) + aug  # Calculate the population for the next year
        years += 1  # Increment the year counter
    return years
