import random
print("Welcome to number guessing game.")

print("I've picked a number for you to guess.")
print("The number is between 1 and 5.")

computer_num_guess = random.randint(1,5)

while True:

    user_num_guess = int(input("Guess a number: "))

    if user_num_guess == computer_num_guess:
        print("Correct guess.")
        print("You won. Thank you for playing.")
        break
    else:
        print("your guess is not correct.")
        print("GIve it another shot.")
        print("Choose a another number.")

        user_num_guess2 = int(input("Enter guess number again: "))

        if user_num_guess2 == computer_num_guess:
            print("Correct guess.")
            print("You won. Thank you for playing.")
            break

    