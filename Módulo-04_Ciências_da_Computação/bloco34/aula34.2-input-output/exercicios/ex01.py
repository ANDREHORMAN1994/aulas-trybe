# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:
# PEDRO
# PEDR
# PED
# PE
# P


def writerYourName():
    name = input("Digite um Nome: ")
    length = len(name)
    for i in range(length):
        number = length - i
        print(name[:number])


writerYourName()
