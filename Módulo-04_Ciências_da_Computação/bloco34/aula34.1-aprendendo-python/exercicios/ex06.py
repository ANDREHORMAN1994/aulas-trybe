# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.

# Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
# Triângulo Equilátero: três lados iguais;
# Triângulo Isósceles: quaisquer dois lados iguais;
# Triângulo Escaleno: três lados diferentes.


def type_triangle(x, y, z):
    result = ""
    if x and y and z:
        is_triangle = x + y > z or y + z > x or x + z > y
        if not is_triangle:
            result = "Triangulo não existe"
        if x != y and x != z and y != z:
            result = "Triângulo Escaleno"
        elif x == y and x == z and y == z:
            result = "Triângulo Equilátero"
        else:
            result = "Triângulo Isósceles"
    return result


print(type_triangle(5, 1, 5))
