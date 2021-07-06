# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com 5 asteriscos de base. Por exemplo:

# n = 5

# *
# **
# ***
# ****
# *****


def draw_asteriscs(n):
    line = ""
    if n > 1:
        for i in range(1, n + 1):
            line += "*"
            print(line)


draw_asteriscs(5)
