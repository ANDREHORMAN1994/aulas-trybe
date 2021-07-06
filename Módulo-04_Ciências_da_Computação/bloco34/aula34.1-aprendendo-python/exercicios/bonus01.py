# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def small_number(list_of_numbers):
    result = list_of_numbers[0]
    for number in list_of_numbers:
        if number < result:
            result = number
    return result


print(small_number(list))
