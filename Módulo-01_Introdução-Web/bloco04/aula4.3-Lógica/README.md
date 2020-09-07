# AULA 4.3 - DICAS DE LÓGICA

Sempre importante, interpretar o enunciado passo a passo.
Ou seja, _BABY STEPS!!_ Criando um algoritmo por vez.

Em seguida, Após escrever cada algoritmo, responda novamente as seguintes perguntas:

  _Eu resolvi o problema?_
  
  _Havia outras maneiras de resolver o problema?_
  
  _A maneira que eu escolhi foi a mais eficiente possível?_
  
  _Seria possível inverter ou retirar algum passo?_
  
  _Se eu fosse um computador, conseguiria entender todas as intruções?_

# Agora a prática

Leia atentamente os enunciados e faça o que se pede!

Recomendamos que você utilize o debugger durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas. Para saber mais sobre como utilizar o debugger, acesse nosso conteúdo sobre isso.

    1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

    n = 5

    *****
    *****
    *****
    *****
    *****

    2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

    n = 5

    *
    **
    ***
    ****
    *****

    3- Agora inverta o lado do triângulo. Por exemplo:

    n = 5

        *
      **
      ***
    ****
    *****

Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

    4- Depois, faça uma pirâmide com n asteriscos de base:

    n = 5

      *
    ***
    *****

## Bônus

    5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

    Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
    n = 7

      *
      * *
    *   *
    *******

    6- Faça um programa que diz se um número definido numa variável é primo ou não.
    Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
