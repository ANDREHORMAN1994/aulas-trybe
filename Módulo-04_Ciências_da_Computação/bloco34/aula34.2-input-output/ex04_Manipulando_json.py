import json

# LOAD RECEBE O FILE CONVERTENDO DIRETAMENTE EM JSON
with open("ex04_pokemon_json.txt", mode="r") as file:
    content = json.load(file)
    # print(content[0])


# LOADS RECEBE UM TEXTO PARA SER CONVERTIDO EM JSON
with open("ex04_pokemon_json.txt", mode="r") as file:
    content_str = file.read()
    content_json = json.loads(content_str)
    # print(content[0])


# DUMP GRAVA O JSON DIRETAMENTE EM UM FILE
with open("ex04_pokemon_types_fire_json.txt", mode="w") as file:
    list_fire_pokemon = [
        {"name": pokemon["name"], "type": type}
        for pokemon in content_json
        for type in pokemon["type"]
        if type == "Fire"
    ]

    # print(list_fire_pokemon)
    json.dump(list_fire_pokemon, file)

# DUMPS CONVERTE PARA STRING
with open("ex04_pokemon_types_water_json.txt", mode="w") as file:
    list_water_pokemon = [
        {"name": pokemon["name"], "type": type}
        for pokemon in content_json
        for type in pokemon["type"]
        if type == "Water"
    ]

    print(list_water_pokemon)
    content_str = json.dumps(list_water_pokemon)
    file.write(content_str)