#!/bin/bash
# Armazenar em variáveis:
# O nome, Idade, Usuário e o Diretório
echo "Qual é o seu nome? ";
read NOME;
echo "O seu nome é $NOME";
sleep 1
echo "Qual é a sua idade? ";
read IDADE;
echo "A sua idade é $IDADE anos";
sleep 1
echo "O seu usuário é `whoami`";
echo "O seu diretório é `pwd`";
