# Exercícios

## Aula 1.5 - ShellScript
Tempo sugerido para realização: 150 minutos
Chegou a hora de colocar a mão na massa! 🥖

⚠️ Faça os exercícios a seguir em dupla com seus colegas. Fique atento às orientações do time sobre a sua dupla.
Você vai criar vários scripts em Shell. Procure discutir a solução com a sua dupla e garanta que cada membro da dupla tenha o seu próprio código! 📌

Dessa vez, o gabarito está disponível escondido junto com exercício, mas resista à tentação de abri-lo ao máximo, pelo menos até a dupla ter conseguido desenvolver o exercício por conta própria! 🤜🏼🤛🏼

⚠️ Não se esqueça de executar cada um dos scripts, testá-los de diferentes formas e analisar o resultado após cada teste! 🔎
	
	1. Escreva um Shell Script que imprima na tela a frase: "Shell Script é demais!";
	
	2. Modifique o Shell Script do exercício anterior para incluir uma variável. A variável deverá receber o conteúdo da mensagem: "Shell Script com variáveis é demais!";
	
	3. Escreva um Shell Script que guarde o resultado do comando hostname em uma variável. Imprima na tela uma mensagem: "Este script está rodando no computador: _" em que "_" é o resultado do comando hostname que está na variável;
	
	4. Escreva um Shell Script que verifique se o caminho até um arquivo existe ("file path"). Se ele existir, imprima na tela a mensagem: "O caminho _ está habilitado!". Então, verifique se você tem permissão de escrita no arquivo. Se tiver, mostre a mensagem: "Você tem permissão para editar _". Caso contrário, mostre a mensagem: "Você NÃO foi autorizado a editar _". O _ nas mensagens deve ser substituído pelo ("file path").
	
	5. Escreva um Shell Script que peça ao usuário um caminho de arquivo ou diretório e, em seguida, imprima na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo. Depois, faça um comando de listagem no arquivo/diretório usando a opção de listagem detalhada.
	
	6. Modifique o Shell Script do exercício anterior de forma que ele aceite o nome do arquivo ou diretório como argumento (ou parâmetro), em vez de perguntar ao usuário. Pesquise nos recursos adicionais como utilizar os parâmetros (ou argumentos) no Shell Script.
	
	7. Escreva um Shell Script que receba um diretório como argumento (ou parâmetro). Se o argumento não for um diretório, mostre a mensagem: "O argumento _ não é um diretório!". Se o argumento for um diretório, conte quantos arquivos existem nele e mostre a seguinte mensagem: "O _ tem _ arquivos.", em que você deve substituir os "_" pelo diretório e a quantidade de arquivos nele, respectivamente.


Bônus

Os exercícios a seguir exigem uma estrutura que vocês ainda não conhecem, o FOR, para realizá-los pesquise nos recursos adicionais como utilizar o FOR no Shell Script.

	1. Escreva um Shell Script que imprima as palavras "shell", "script", "usando", "estrutura", "repetição", "for", "terminal" na tela, uma palavra por linha. Tente fazer isso usando o menor número de comandos possível.
	
	2. Modifique o Shell Script do exercício 6 para aceitar uma quantidade ilimitada de arquivos ou diretórios como argumento (ou parâmetro).
	
	3. Escreva um Shell Script que renomeie todos os arquivos do diretório atual que terminam em ".png", de forma que o nome do arquivo comece com a data atual no formato "YYYY-MM-DD". Por exemplo, se tiver um arquivo com o nome "kitten.png" no diretório atual, e a data de hoje for 16/04/2020, o script deverá mudar o nome do arquivo para "2020-04-16-kitten.png".
	
	4. Modifique o Shell Script do exercício anterior para receber o diretório onde estão os arquivos e a extensão dos arquivos que devem ser modificados como argumento (ou parâmetro). Adicione também um mensagem mostrando como eram o como vão ficar os nomes dos arquivos a serem modificados.
	
