# Exercício 4: Dado o seguinte arquivo no formato JSON , leia seu conteúdo e calcule a porcentagem de livros em cada categoria, em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

import json


def read_file_json(file):
    return [json.loads(line) for line in file]


def list_categories_books(list_books):
    dict_categories = dict()

    list_all_categories = [
        categorie for book in list_books for categorie in book["categories"]
    ]
    # print(list_all_categories)

    for categorie in list_all_categories:
        if not dict_categories.get(categorie):
            dict_categories[categorie] = 0
        dict_categories[categorie] += 1

    # print(dict_categories)
    return dict_categories


def calculate_porcentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category
    ]


if __name__ == "__main__":
    file_name = "ex04_file_json.json"

    with open(file_name, mode="r") as file:
        list_books = read_file_json(file)
        # print(list_books[0]["categories"])

    categories = list_categories_books(list_books)
    print(calculate_porcentage_by_category(categories, len(list_books)))
