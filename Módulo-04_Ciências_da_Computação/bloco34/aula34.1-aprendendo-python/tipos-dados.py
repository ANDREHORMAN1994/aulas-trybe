trybe_course = ["Introdução", "Front-end", "Back-end"]

# Exercício 5: Adicione o elemento "Ciência da Computação" à lista.
# Funções e variáveis devem ser nomeadas com letras minúsculas e underscore, caso tenham mais de uma palavra: minha_variavel .

trybe_course.append("Ciência da Computação")

# Exercício 6: Adicione à lista "Ciência da Computação" e a imprima para verificar a adição.

print(trybe_course)

# Exercício 7: Acesse e altere o primeiro elemento da lista para "Fundamentos".

trybe_course[0] = "Fundamentos"
print(trybe_course)

# Exercício 8: Um conjunto ou set pode ser inicializado utilizando-se também o método set() . Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.

nome = set({"andre"})
nome.add("horman")
print(nome)

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Exercício 9: O que acontecerá se você tentar acessar o valor da chave "personagem" como fazíamos em JavaScript, utilizando object.key ?

print(info["personagem"])

# Exercício 10: Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.

info["recorrente"] = "Sim"
print(info)


# Exercício 11: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.
del info["origem"]
print(info)


# Exercício 12: Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.

resposta = "tupla"

# Exercício 13: Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?

resposta = "dict"

my_list = [20, 20, 1, 2]
count_elements = {20: 2, 1: 1, 2: 2}
