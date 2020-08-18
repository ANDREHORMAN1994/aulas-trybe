#!/bin/bash

#QUESTÃO 01
#echo "Shell Script é demais!";

#QUESTÃO 02
#VARIAVEL="Shell Script com variaveis é demais!";
#echo $VARIAVEL;

#QUESTÃO 03
#VARIAVEL=$(hostname);
#echo "Este script está rodando no computador $VARIAVEL"

#QUESTÃO 04
# CAMINHO=$1
# if [ -e "$CAMINHO" ]
#     then
#         echo "O caminho $CAMINHO está habilitado!"
#     elif [ -w "$CAMINHO" ]
#     then
#         echo "Voce tem permissão para editar $CAMINHO"
#     else
#         echo "Você NÃO foi autorizado a editar $CAMINHO"
# fi

#QUESTÃO 05
# echo "Qual o seu diretório? ";
# read CAMINHO;
# if [ -f "$CAMINHO" ]
#     then
#         echo "é um arquivo normal"
# elif [ -d "$CAMINHO" ]
#     then
#         echo "é um diretório"
# else
#     echo "é outra coisa aí"
# fi
# ls -l $CAMINHO;

#QUESTÃO 06
# CAMINHO=$1
# if [ -f "$CAMINHO" ]
#     then   
#         echo "é um arquivo"
#     elif [ -d "$CAMINHO" ]
#     then
#         echo "é um diretório"
#     else
#         echo "é outra parada"
# fi
# ls -l $CAMINHO

#QUESTÃO 07
# CAMINHO=$1
# if [ -d "$CAMINHO" ]
#     then    
#         CONTEF=`ls -L $CAMINHO | wc -l`
#         echo "O $CAMINHO tem $CONTEF arquivos."
#     else
#         echo "O argumento $CAMINHO não é um diretório."
# fi
# ls -l #CAMINHO;

#BONUS 01
# VAR="shell script usando estrutura repetição for terminal"
# for ITEM in $VAR
#     do 
#         echo $ITEM
#     done

#BONUS 02
# clear
# for ITEM in $@
# do
#     if [ -f "$ITEM" ]
#         then   
#             echo "é um arquivo"
#     elif [ -d "$ITEM" ]
#         then
#             echo "é um diretório"
#     else
#         echo "é outra parada"
#     fi
#     ls -l $ITEM
#     echo -e "\n";
# done

#BONUS 03
# DAY=$(date +%F);

# for ITEM in `ls *.png`
#     do
#         mv $ITEM ${DAY}-${ITEM}
#     done

#BONUS 04
# DIRETORIO=$1;
# EXTENSAO=$2;

# cd $DIRETORIO;
# DATA=`date +%F`;
# for ITEM in `ls *$EXTENSAO`
#     do 
#         mv $ITEM ${DATA}-${ITEM}
#         echo "Seu arquivo será renomeado de $ITEM para ${DATA}-${ITEM}"
#     done


# #EXTRA CRIANDO SEQUENCIA DE ARQUIVOS 
# DIRETORIO=$1;
# ARQUIVOS=$2;
# EXTENSAO=$3;

# CONT=0
# cd $DIRETORIO
# while [ $CONT -lt $ARQUIVOS ]
#     do 
#         CONT=`expr $CONT + 1 `; 
#         echo "#!/bin/bash" > "file$CONT$EXTENSAO"
#         chmod u+x "file$CONT$EXTENSAO"
#     done
# ls -l $DIRETORIO;






    