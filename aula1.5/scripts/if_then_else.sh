#!/bin/bash
#Aprendendo a utilizar os comandos de condição
#IF THEN ELSE , corresponde há uma estrutura lógica que deve atender há condinções

#VARIAVEL="Olá";
# if [ $VARIAVEL ]  # O shell exige que tenha os espaços entre o [ ];
#   then 
#     echo "A variável existe"
#   else
#     echo "A variável NÃO existe"
# fi                # Usado para fechamento da estrutura

read -p "Qual sua Idade? " IDADE;
if [ $IDADE -gt 15 ] && [ $IDADE -le 20 ]
  then 
    echo "vc é um adolescente ainda"
  elif [ $IDADE -le 15 ]
  then
    echo "vc é um baby"
  else
    echo "vc é um veio paia"
fi
