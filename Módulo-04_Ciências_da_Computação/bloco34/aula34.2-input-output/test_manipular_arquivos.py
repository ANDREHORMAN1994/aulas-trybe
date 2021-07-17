# ESCREVENDO DADOS EM UM ARQUIVO

new_file = open("meu_nome.txt", mode="w")

new_file.write("André\n")

print("Horman", file=new_file)

list = ["de\n", "Medeiros\n", "Correia\n"]

new_file.writelines(list)

new_file.close()

# LENDO DADOS
file = open("meu_nome.txt", mode="r")

content = file.read()

print(content, end="")

file.close()
