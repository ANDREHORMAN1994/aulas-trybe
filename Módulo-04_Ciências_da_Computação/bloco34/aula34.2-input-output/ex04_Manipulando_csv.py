import csv

# READER LER O CONTEÚDO CONFORME DELIMITADORES
with open("ex04_balneabilidade_csv.csv", mode="r") as file:
    content = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = content
    # print(header)
    # print(data)


with open("ex04_balneabilidade_csv.csv", mode="r") as file:
    content = csv.DictReader(file, delimiter=",", quotechar='"')
    for row in content:
        print(row)
