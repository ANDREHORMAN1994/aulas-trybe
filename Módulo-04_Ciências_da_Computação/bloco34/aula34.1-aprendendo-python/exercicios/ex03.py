# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

# n = 5

# *****
# *****
# *****
# *****
# *****


def square_asteriscs(n):
    line = ""
    for i in range(n):
        line += "*"
    for i in range(n):
        print(line)


# square_asteriscs(5)


def draw_square(n):
    for row in range(1, n + 1):
        for column in range(1, n + 1):
            print("*", end="")
        print()


draw_square(5)
