class Conjunto:
    def __init__(self):
        self.set = [False] * 10
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string


if __name__ == "__main__":
    conj = Conjunto()
    for i in [0, 2, 5, 9]:
        conj.add(i)
    print(conj)

    # conj2 = Conjunto()
    # for i in [1, 2, 3]:
    #     conj2.add(i)
    # print(conj2)

    # conj3 = Conjunto()
    # for i in [7, 2, 10]:
    #     conj3.add(i)
    # print(conj3)

    # conj4 = Conjunto()
    # print(conj4)
