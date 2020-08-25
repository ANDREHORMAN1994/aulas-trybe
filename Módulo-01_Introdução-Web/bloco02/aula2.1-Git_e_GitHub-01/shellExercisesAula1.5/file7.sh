#!/bin/bash

#QUESTÃO 07
CAMINHO=$1
if [ -d "$CAMINHO" ]
    then    
        CONTEF=`ls -L $CAMINHO | wc -l`
        echo "O $CAMINHO tem $CONTEF arquivos."
    else
        echo "O argumento $CAMINHO não é um diretório."
fi
ls -l #CAMINHO;
