# Exercício 3: Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada animal em uma linha.

import random

name_file = "ex03_list_words.txt"
with open(name_file, mode="w") as file:
    list_words = ["anime\n", "musica\n", "filme\n", "serie\n", "jogos\n"]
    file.writelines(list_words)
    file.close()


def game_choise_the_word(list):
    word = random.choice(list)
    scrambled_word = "".join(random.sample(word, len(word)))
    hits_limits = 3

    for _ in range(hits_limits):
        response = input(f"Adivinhe a Palavra: {scrambled_word}\n")
        if response != word:
            hits_limits -= 1
            if hits_limits == 0:
                print("\nVocê perdeu todas suas chances!! x__x\n")
                break
            print("\nVocê Errou!! :(")
            print(f"Faltam {hits_limits} chances!!\n")
        elif response == word:
            print("\nParabêns vc acertou!! :D\n")
            break


with open(name_file, mode="r") as file:
    content = file.read()
    list_words_file = content.split()
    print(list_words_file)
    game_choise_the_word(list=list_words_file)
