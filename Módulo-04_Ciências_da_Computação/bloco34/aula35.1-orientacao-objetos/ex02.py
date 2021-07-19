# Para exercitar nossa capacidade de abstração, vamos modelar algumas partes de um software de geometria. Como poderíamos modelar um objeto retângulo?

# Nome da abstração
# Quadrado

# atributos/estados
# - lado (tamanho)

# comportamentos
# - calcular area (lado * lado)
# - calcular perímetro (4 * lado)

from abc import ABC, abstractmethod


class ObjetoGeometria(ABC):
    def __init__(self):
        pass

    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(ObjetoGeometria):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return self.lado * 4


class Retangulo(ObjetoGeometria):
    def __init__(self, base, altura):
        self.base = self.base
        self.altura = self.altura


if __name__ == "__main__":
    obj_quadrado = Quadrado(5)
    print(obj_quadrado.area())
    print(obj_quadrado.perimetro())
