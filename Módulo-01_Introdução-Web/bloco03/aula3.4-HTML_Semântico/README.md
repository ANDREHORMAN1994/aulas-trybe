# Exercícios :white_check_mark:

## Aula 3.4 - HTML Semântico
Tempo sugerido para realização: 100 minutos

A partir de agora você sempre verá uma seção mostrando como realizar o versionamento do seu código antes da descrição dos exercícios do dia. Então, para te ajudar a organizar seus exercícios criamos um conteúdo focado nisso que está cheio de exemplos, você pode acessá-lo aqui.

No conteúdo que criamos você será apresentado a uma estrutura de organização utilizando pastas para módulos e para blocos. Essa estrutura é diferente da que você verá na seção de versionamento do código do conteúdo do dia, fica a seu critério decidir qual a melhor forma de organizar seus exercícios!

Caso haja alguma dúvida ou você queira dar um feedback sobre esse conteúdo, mande uma mensagem no Slack!

Antes de começar: versionando seu código

Para versionar seu código, utilize o seu repositório de exercícios. 😉

Caso você ainda não tenha um, crie um repositório com o nome Trybe ou algo similar.

Abaixo você vai ver exemplos de como organizar cada exercício em uma branch, com arquivos e commits específicos para cada exercício. Você deve seguir este padrão para realizar os exercícios a seguir.

	Crie uma branch com o nome exercises/3.4 (bloco 3, dia 4)

	Copiar
	$ git checkout -b exercises/3.4
	Crie um diretório exercises e, dentro dele, um diretório 3_4. O caminho completo para o diretório a partir da raiz do projeto deverá ser exercises/3_4.

	Copiar
	$ mkdir -p exercises/3_4
	$ cd exercises/3_4
	$ pwd
	<path_to_your_repo>/exercises/3_4

Crie um arquivo com um nome descritivo para cada exercício. Os arquivos devem estar dentro da pasta exercises/3_4, mas lembre-se de fazer os commits a partir da pasta raiz do seu projeto!

	Copiar
	$ git status
	On branch exercises/3.4
	Changes not staged for commit:
	  (use "git add <file>..." to update what will be committed)
	  (use "git checkout -- <file>..." to discard changes in working directory)

	  modified:   exercise_1.html

Faça commits organizados durante o processo de resolução de cada um de seus exercícios. As mensagens dos commits devem ser breves e explicativas.

	Copiar
	$ git log
	commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercises/3.4)
	Author: Tryber Bot <tryberbot@betrybe.com>
	Date:   Fry Sep 27 17:48:01 2019 -0300

	    Exercicio 2 - mudando o evento de click para mouseover, tirei o alert e coloquei pra quando clicar aparecer uma imagem do lado direito da tela

	commit c0701d91274c2ac8a29b9a7fbe4302accacf3c78
	Author: Tryber Bot <tryberbot@betrybe.com>
	Date:   Fry Sep 27 16:47:21 2019 -0300

	    Exercicio 2 - adicionando um alert, usando função e o evento click

	commit 6835287c44e9ac9cdd459003a7a6b1b1a7700157
	Author: Tryber Bot <tryberbot@betrybe.com>
	Date:   Fry Sep 27 15:46:32 2019 -0300

	    Resolvendo o exercício 1 usando eventListener

Lembre-se que na primeira vez que você for enviar o código para o repositório remoto a branch exercises/3.4 não vai existir lá.

Então você precisa configurar o remote utilizando a opção --set-upstream (ou -u, que é a forma abreviada).

	Copiar
	$ git push -u origin exercises/3.4

Lembre-se de enviar os commits para o repositório do GitHub de vez em sempre.

	Copiar
	$ git push origin exercises/3.4

Quando terminar os exercícios, seus códigos devem estar todos commitados na branch exercises/3.4, e disponíveis no repositório remoto do GitHub.

Pra finalizar, crie um Pull Request , adicione uma descrição bem bacana, e envie para a monitoria e/ou colegas revisarem! 🤜🏼🤛🏼

## Agora a prática

Antes de fazer os exercícios, crie um arquivo HTML na pasta exercises/3_4 e copie o código abaixo:

	Copiar
	<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="UTF-8" />
	    <meta name="viewport" content="width=device-width" />
	  </head>
	  <body>
	    <!--insira os elementos aqui-->
	  </body>
	</html>

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre HTML semântico.

Para tal, criaremos uma página que apresenta um dos animais mais impressionantes que existem: o Stomatopoda. A estilização da página fica a seu critério. 😉

Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

	Adicione um cabeçalho na página contendo o título Soco a 80km/h: Conheça o Stomatopoda.
	
	Adicione um conjunto de links que representam a área de navegação do site.
	
	Crie um link chamado Página Inicial.
	
	Crie um link chamado Sobre.

	Crie um link chamado Contato.
	
	Crie um artigo que vai conter os fatos interessantes sobre o Stomatopoda. O artigo terá o subtítulo Fatos sobre o Stomatopoda. Segue um site animal de inspiração para pegar fatos.

	Divida o artigo em seções, organizando-o da seguinte forma:

	Uma primeira seção contendo informações gerais a respeito do animal. O subtítulo para essa seção fica a seu critério. É necessário que conste nessa seção seu nome científico, que é Odontodactylus scyllarus, em itálico. Além disso, é preciso que haja informação tabular a respeito de sua classifição científica, em específico: Reino, Filo, Subfilo, Classe, Subclasse e Ordem. Tais informações você consegue obter na Wikipedia.

	As outras seções dizem respeito aos fatos interessantes que você escolheu acerca do animal. Para cada fato escolhido você vai criar uma seção.

	Adicione para cada seção um subtítulo referente ao fato escolhido.

	Adicione, para cada seção, parágrafo(s) descrevendo o fato escolhido. Destaque características impressionantes referentes ao fato que você escolheu, de forma a reforçar a unicidade do Stomatopoda. Por exemplo: se você criar uma seção detalhando o soco potente do animal, seria interessante destacar a velocidade desse soco (80km/h) em negrito.

	Adicione, para cada seção, uma imagem, como forma de ilustrar o fato.

	Adicione, por fim, uma seção de referências bibliográficas, contendo uma lista de todos os links que foram usados como base para compilar a página em questão.

	Adicione um conteúdo adjacente ao artigo, disponibilizando um link para este vídeo, que mostra o animal em ação.

	Adicione um rodapé na página, mostrando algo do gênero "Conteúdo compilado por , ".

Obs: para esse exercício, é obrigatório fazer uso de no mínimo elementos com as seguintes tags: header, nav, article, section, h1, h2, h3, aside, footer, table e img.

Validando o exercício

Agora que você criou a página mostrando fatos interessantes a respeito do Stomatopoda, suponha que uma pessoa com deficiência visual acesse sua página. Será que sua página estará acessível para essa pessoa? 🤔

Vamos averiguar!

Entre neste site, que valida se sua página é acessível ou não. No site há 3 formas para você submeter seu código HTML:

	Via url (a primeira, já selecionada quando carrega o site).

	Via upload do arquivo HTML (segunda aba).

	Via copiando + colando o código HTML (terceira e última aba).

Ao submeter o código, você vai se deparar com erros de validação presentes em sua página, dando início a seu segundo exercício: consertar todos os erros apontados.

Para cada erro de validação mostrado, você tem à disposição um link para a página com sua descrição. Antes de voltar para o código e já ir consertando, leia a descrição de cada erro para entendê-lo e poder consertá-lo.

No fim do exercício, além de ter uma página acessível, você vai reforçar a prática de consertar erros, seja de validação (para este exercício), seja de lógica, com que você vai se deparar ao longo de sua carreira de desenvolvedor.

