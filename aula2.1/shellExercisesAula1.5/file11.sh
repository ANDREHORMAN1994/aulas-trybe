#!/bin/bash

#BONUS 04
DIRETORIO=$1;
EXTENSAO=$2;

cd $DIRETORIO;
DATA=`date +%F`;
for ITEM in `ls *$EXTENSAO`
    do 
        mv $ITEM ${DATA}-${ITEM}
        echo "Seu arquivo será renomeado de $ITEM para ${DATA}-${ITEM}"
    done
