#!/bin/bash

#QUESTÃO 04
CAMINHO=$1
if [ -e "$CAMINHO" ]
    then
        echo "O caminho $CAMINHO está habilitado!"
    elif [ -w "$CAMINHO" ]
    then
        echo "Voce tem permissão para editar $CAMINHO"
    else
        echo "Você NÃO foi autorizado a editar $CAMINHO"
fi
