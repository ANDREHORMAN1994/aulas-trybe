#!/bin/bash

#BONUS 02
clear
for ITEM in $@
do
    if [ -f "$ITEM" ]
        then   
            echo "é um arquivo"
    elif [ -d "$ITEM" ]
        then
            echo "é um diretório"
    else
        echo "é outra parada"
    fi
    ls -l $ITEM
    echo -e "\n";
done
