# Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.


def fatorial(n):
    sum = 0
    for number in range(1, n + 1):
        sum += number
    return sum


print(fatorial(5))
