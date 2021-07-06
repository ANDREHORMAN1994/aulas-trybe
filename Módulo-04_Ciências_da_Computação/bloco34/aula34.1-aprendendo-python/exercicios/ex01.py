# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def higherNumber(a, b):
    if a > b:
        return "Maior número é " + str(a)
    elif a < b:
        return "Maior número é " + str(b)
    return "valores iguais"


print(higherNumber(30, 20))
