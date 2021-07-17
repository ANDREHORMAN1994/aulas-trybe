import random

number_random = random.randint(1, 10)
guess = ""

while number_random != guess:
    guess = int(input("Adivinhe o número entre 1 e 10: "))

print("O número aleatório foi ", number_random)
