# Exercícios

## Aula 1.4 - Unix e Shell Parte-02
Tempo sugerido para realização: 90 minutos
É hora de colocar a mão na massa. 💪🏼

Você vai continuar a partir dos exercícios anteriores, então é importante que tenha completado os exercícios da aula anterior antes de seguir em frente! 🌐

Parte I - Comandos de Input e Output
Navegue até a pasta unix_tests;

	1 Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

	2 Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

	3 Conte quantas linhas tem o arquivo skills2.txt.

	4 Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

	5 Crie um novo arquivo chamado phrases2.txt pelo o terminal e adicione algumas frases de suas escolha.

	6 Conte o número de linhas que contêm as letras br.

	7 Conte o número de linhas que não contêm as letras br.

	8 Adicione dois nomes de países ao final do arquivo phrases2.txt.

	9 Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

	10 Ordene o arquivo bunch_of_things.txt.


Parte II - Permissões
	
	11 Navegue até a pasta unix_tests;

	12 Rode o comando ls -l e veja quais as permissões dos arquivos;

	13 Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique 		se está correto com o comando ls -l;

	14 Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

	15 Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;

	16 Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

	17 Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt.

	18 Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt


Parte III - Processos & Jobs
Liste todos os processos;

	19 Agora use o comando sleep 30 & ;

	20 Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);

	21 Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;

	22 Crie um processo em background que rode o comando sleep por 300 segundos.

	23 Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.

	24 Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.

	25 Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.

	26 Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal).

	27 Retome a execução do processo sleep 100 em background com o comando bg.

	28 Termine a execução de todos os processos sleep (mate os processos).


(Bônus) - Parte IV - O despertar do terminal

E pra terminar com a energia óh, lá no alto, que tal aprender agora alguns comandos divertidos do UNIX? ☝ 🎊
Leia este artigo para fazer os exercícios de aquecimento abaixo

	Abra o terminal e execute o comando cmatrix. Quando estiver se sentindo como o Neo, aperte ctrl+c para voltar ao terminal;

	Crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune, e o operador >;

	Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc;

	Execute o comando sl. Agora tente sl -F;

	Execute o comando cowsay. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt;

	Descubra os fatores primos do número 42 usando o comando factor;

	Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev.

	Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅


Recapitulando...
Agora que você passou um bom tempo estudando sobre o Unix e seus comandos, sabemos que você já entende que:

	O Unix é um sistema operacional que inspirou muitos outros sistemas, como MacOS, Linux, Solaris etc.;

	O Unix é composto basicamente pelo Shell, Kernel e os programas;

	A estrutura de diretórios do Unix é organizada no formato de uma árvore invertida, de forma hierárquica, iniciando pelo root;

	Tudo no Unix é um arquivo ou um processo;

	O terminal é seu principal aliado para ter produtividade em ambiente Unix;

	Depois de entender como abrir e utilizar o terminal, você aprendeu na prática como utilizar os comandos Bash. Vamos relembrar alguns dos comandos que você aprendeu a usar.

	Um bom exercício é, mentalmente, tentar descrever o que cada comando faz.

ls, mkdir, cd, pwd, cp, mv, rm, rmdir, clear, cat, less, head, tail, grep, wc, >, >>, |, sort, who, man, whatis, apropos, *, ?, chmod, ps, bg, kill, find, history.
