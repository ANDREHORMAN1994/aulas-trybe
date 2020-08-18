#!/bin/bash
#Perguntar qual endereço ip
#Perguntar qual é a porta
#retornar ip e o serviço da porta
#retornar "Porta não encontrada" caso serviço não seja cadastrado

VAR=`hostname -I`
read -p "Qual seu ederenço ip? " VARR
if [ "$VARR" == 192.168.0.4 ]
  then
    echo "Seu endereço ip está correto"
  else
    echo "Endereço não está correto"
fi
sleep 1;
echo "Seu endereço Ip é "
echo "."; sleep 1; echo "." ; sleep 1; echo "." ; sleep 1; echo $VAR
