# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos:

# Álcool:
#   - Até 20 litros, desconto de 3% por litro;
#   - Acima de 20 litros, desconto de 5% por litro.
# Gasolina:
#   - Até 20 litros, desconto de 4% por litro;
#   - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def calculate_fuel(type, liter):
    if type and type == "G":
        value_unit_liter = 2.5
        if liter and liter > 20:
            cust_by_liter = (value_unit_liter * liter) * (1 - 0.05)
        else:
            cust_by_liter = (value_unit_liter * liter) * (1 - 0.03)
        return type, cust_by_liter
    else:
        value_unit_liter = 1.9
        if liter and liter > 20:
            cust_by_liter = (value_unit_liter * liter) * (1 - 0.06)
        else:
            cust_by_liter = (value_unit_liter * liter) * (1 - 0.04)
        return type, cust_by_liter


print(calculate_fuel("G", 20))
print(calculate_fuel("A", 20))


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


print(fuel_price("G", 20))
print(fuel_price("A", 20))
