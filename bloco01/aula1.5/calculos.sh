#!/bin/bash
#para usar um calculo é necessário utilizar `expr X + X`"

read -p "   SOMAR    " S1;
read -p "     +      " S2;
echo "A soma de $S1 + $S2 é `expr $S1 + $S2` "; 

sleep 1; echo -e "\n";  #\n quebra de linha
read -p "   DIMINUIR    " D1;
read -p "       -       " D2;
echo "A subtração de $D1 - $D2 é `expr $D1 - $D2` ";

sleep 1; echo -e "\n";
read -p " MULTIPLICAÇÃO " M1;
read -p "       *       " M2;
echo "A multiplicação de $M1 * $M2 é `expr $M1 \* $M2` ";

sleep 1; echo -e "\n";
read -p "   DIVISÃO     " Z1;
read -p "       /       " Z2;
echo "A divisão de $Z1 / $Z2 é `expr $Z1 / $Z2` ";
echo -e "\n";
