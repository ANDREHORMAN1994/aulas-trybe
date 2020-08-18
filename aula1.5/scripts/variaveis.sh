#!/bin/bash
# Criando exemplos de variáveis
VARIAVEL1=`whoami`;
echo $VARIAVEL1;

VARIAVEL2='whoami';
echo $VARIAVEL2;

VARIAVEL3="Quem está logado é $VARIAVEL1";
echo $VARIAVEL3;

VARIAVEL4="Quem está logado é "$VARIAVEL2;
echo $VARIAVEL4;
