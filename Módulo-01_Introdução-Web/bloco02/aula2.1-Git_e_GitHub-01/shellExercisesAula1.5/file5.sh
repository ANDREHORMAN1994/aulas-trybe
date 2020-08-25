#!/bin/bash

#QUESTÃO 05
echo "Qual o seu diretório? ";
read CAMINHO;
if [ -f "$CAMINHO" ]
    then
        echo "é um arquivo normal"
elif [ -d "$CAMINHO" ]
    then
        echo "é um diretório"
else
    echo "é outra coisa aí"
fi
ls -l $CAMINHO;
