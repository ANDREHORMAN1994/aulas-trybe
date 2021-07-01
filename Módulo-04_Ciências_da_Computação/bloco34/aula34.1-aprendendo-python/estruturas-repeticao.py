# Exercício 14: O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5 . Escreva um código que calcule o fatorial de um número inteiro.

# USANDO LAÇO FOR
number = 5
fatorial = 1

for i in range(number):
    fatorial *= i + 1

print(fatorial)


# USANDO LAÇO WHILE
number = 0
fatorial = 1

while number < 5:
    fatorial *= number + 1
    number += 1

print(fatorial)


# Exercício 15: Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10] . Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100] .

ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    # print(ratings.index(rating))
    ratings[ratings.index(rating)] = rating * 10

print(ratings)


# Exercício 16: Percorra a lista do exercício 14 e imprima "Múltiplo de 3" se o elemento for divisível por 3.

new_list = list(range(1, 11))
print(new_list)

for number in new_list:
    if number % 3 == 0:
        new_list[new_list.index(number)] = "Múltiplo de 3"

print(new_list)
