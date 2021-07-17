# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que lê todas essas informações e filtre somente as pessoas que estão aprovadas, escrevendo seus nomes em outro arquivo. A nota miníma para aprovação é 6.

file_name = "ex03_estudantes.txt"

with open(file_name, mode="r") as file:
    content = file.read()
    print(content)
    file.close()

list_students = content.split("\n")

students_aproved = [
    f"{name.split()[0]}\n"
    for name in list_students
    if int(name.split()[1]) >= 6
]

print(students_aproved)


with open("ex03_estudantes_aprovados.txt", mode="w") as file:
    file.writelines(content + "\n")
    file.write("\n")
    file.write("Alunos Aprovados:\n")
    file.write("\n")
    file.writelines(students_aproved)
    file.close()
