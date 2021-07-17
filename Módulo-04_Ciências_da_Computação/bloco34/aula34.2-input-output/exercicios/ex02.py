# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2" .

import random


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


list_words = ["anime", "musica", "filme", "serie", "jogos"]
game_choise_the_word(list_words)
