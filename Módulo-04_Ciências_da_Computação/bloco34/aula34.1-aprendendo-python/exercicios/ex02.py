# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

list = [1, 2, 3, 4, 5]


def media(list):
    result = 0
    for number in list:
        result += number
    return result // len(list)


print("A média é", media(list))
