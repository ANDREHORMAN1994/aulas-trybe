#EXTRA CRIANDO SEQUENCIA DE ARQUIVOS 
DIRETORIO=$1;
ARQUIVOS=$2;
EXTENSAO=$3;
clear;
CONT=0;
cd $DIRETORIO
while [ $CONT -lt $ARQUIVOS ]
    do 
        CONT=`expr $CONT + 1 `; 
        echo "#!/bin/bash" > "file$CONT$EXTENSAO"
        chmod u+x "file$CONT$EXTENSAO"
    done
ls -l $DIRETORIO;
