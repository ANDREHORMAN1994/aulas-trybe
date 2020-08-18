#!/bin/bash

#QUESTÃO 06
CAMINHO=$1
if [ -f "$CAMINHO" ]
    then   
        echo "é um arquivo"
    elif [ -d "$CAMINHO" ]
    then
        echo "é um diretório"
    else
        echo "é outra parada"
fi
ls -l $CAMINHO
