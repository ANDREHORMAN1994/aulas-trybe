while True:
    try:
        number = int(input("Coloque um número aqui: "))
        break
    except ValueError:
        print("Número não é válido")

try:
    arquivo = open("meu_nome.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")
