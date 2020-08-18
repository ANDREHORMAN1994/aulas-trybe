#!/bin/bash
#Criar um arquivo, escrever algo dentro dele, 
#criar um diretório e copiar para dentro do diretório o arquivo

touch arquivoNovo.txt;
echo "completando o desafio" > arquivoNovo.txt;
mkdir desafio;
cp arquivoNovo.txt \desafio;
