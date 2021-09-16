# Exercício 1: Inicializando a classe e adicionando elementos
# Crie uma classe chamada Conjunto ;

# Escreva um construtor que defina uma lista do tamanho necessário.
# Inicialize todos os valores com False , uma vez que ainda não temos valores adicionados;

# Crie um método add(item) que recebe um valor até 1000 e adiciona no conjunto;

# Na main (dentro de: if __name__ == "__main__": ),
# instancie um objeto do tipo Conjunto e adicione os valores.


class Conjunto:
    def __init__(self, length_list):
        self.length = length_list
        self.list = [False for _ in range(length_list)]

    def add(self, item):
        if item <= 1000:
            index = 0
            while index < self.length:
                if self.list[index] is False:
                    self.list[index] = item
                    break
                index += 1

    def get(self):
        return self.list

    def __str__(self):
        return str(self.list)


# [0, 10, 100, 1000]
if __name__ == "__main__":
    conjunto = Conjunto(4)
    conjunto.add(0)
    conjunto.add(10)
    conjunto.add(100)
    conjunto.add(1000)
    # print(conjunto.get())
    print(conjunto)
