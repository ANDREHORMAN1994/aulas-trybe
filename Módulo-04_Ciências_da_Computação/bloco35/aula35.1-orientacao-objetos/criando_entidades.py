class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password
    
    def send_message(self):
        return "HELLO, HOW YOU DOING?"


my_user = User("André Horman", "andre.horman1994@hotmail.com", "123456")

print(my_user)
print(my_user.name)
print(my_user.email)
print(my_user.password)
print(my_user.send_message())
