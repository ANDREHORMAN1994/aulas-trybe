#!/bin/bash

#BONUS 03
DAY=$(date +%F);

for ITEM in `ls *.png`
    do
        mv $ITEM ${DAY}-${ITEM}
    done
