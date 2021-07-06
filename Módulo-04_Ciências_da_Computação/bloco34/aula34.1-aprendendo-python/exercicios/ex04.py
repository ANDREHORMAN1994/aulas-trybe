# Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .


def higher_name(list_of_names):
    result = list_of_names[0]
    for name in list_of_names:
        if len(name) > len(result):
            result = name
    return result


list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

print(higher_name(list))
