Parte 1 - Instalação e configuração
Vamos começar com dois conteúdos que vão te ensinar a instalar e configurar o Git. Siga o passo a passo para deixar o Git pronto em seu ambiente.

	Instalando o Git - Git Setup - https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git

	Configuração inicial - Git Config - https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git

Agora que você já configurou tudo, vamos fazer uma validação e verificar se tudo está certinho! 😉

No terminal:

	Digite git --version para saber qual versão do git está instalada.

	Seu terminal deve conter algo parecido com:

		git version 2.x.y
		
	Digite git config --list

	Seu terminal deve conter algo similar a isso:
	
		user.email=seuemail@gmail.com
		user.name=seunome
		
O email deve ser o mesmo que você utilizou para se registrar no GitHub
Pronto, agora que tudo está devidamente instalado e configurado, vamos ao próximo passo.

Parte 2 - Criar conta no GitHub
	Crie sua conta no GitHub usando seu e-mail pessoal 🐙
	https://github.com/join
	

Parte 3 - Adicionando uma chave SSH na sua conta do GitHub
Neste passo, vamos aprender como adicionar uma chave SSH à sua conta do GitHub, o que vai te permitir fazer push's e pull's sem ter que ficar digitando usuário e senha. É de extrema importância que você siga TODOS os passos apresentados no artigo, apenas dessa forma você obterá o resultado esperado.

	Adicionando chave SSH na conta do GitHub
	https://medium.com/@rgdev/como-adicionar-uma-chave-ssh-na-sua-conta-do-github-linux-e0f19bbc4265
	
	Se tiver problemas ao seguir o tutorial acima, consulte a documentação oficial do GitHub.
	https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

	
Parte 4 - Do git init ao git push
Agora você vai aprender a iniciar um repositório Git, fazer seu primeiro commit e subi-lo para um repositório no GitHub.

	Do primeiro commit ao primeiro Push
	http://www.devfuria.com.br/git/tutorial-iniciando-git/


Parte 5 - O seu repositório no GitHub
Pronto! Agora que você já é capaz de gerenciar localmente seus códigos e também enviá-los para o GitHub, é hora de colocar a casa em ordem!

Durante seu curso na Trybe, seus projetos serão entregues através de pushes nos repositórios do GitHub. Nada mais natural do que fazermos isso agora enviando os exercícios de Shell Script para o GitHub, não é mesmo? 👨🏽‍💻

Antes de começar, crie uma pasta com o nome trybe-exercises para manter todos os exercícios que desenvolverá ao longo do curso. Já dentro dessa pasta, crie uma outra pasta com o nome my-shell-scripts. Você deve colocar os scripts em Shell que desenvolveu nos últimos dias nessa pasta. Coloque cada exercício em um arquivo separado.

No final, você deverá ter algo parecido com:
	ls -l my-shell-scripts
	total 0
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 exercicio1.sh
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio10.sh
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio11.sh
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio2.sh
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio3.sh
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio4.sh
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio5.sh
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio6.sh
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio7.sh
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio8.sh
	-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio9.sh

Agora vamos transformar essa pasta em um repositório Git:

Retorne a pasta trybe-exercises;

Inicialize o repositório com git init;

Crie um arquivo de README utilizando o comando touch README.md;

Crie um commit inicial utilizando:

	git add .
	git commit -m "Initial commit"
	
Vá até o seu GitHub e crie um repositório público, onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;

Dê ao repositório um nome descritivo, como por exemplo trybe-exercises;

⚠️ Lembre-se de não inicializar o repositório com um arquivo README.md, pois você já criou um nos passos anteriores! 😉

Clique no botão SSH e então copie a URL do repositório;

Execute o comando para adicionar a URL ao repositório local git remote add origin "URL_DO_REPOSITÓRIO";
Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v. Seu terminal deve conter algo similar a isso:


	origin  git@github.com:john-snow/know-nothing.git (fetch)
	origin  git@github.com:john-snow/know-nothing.git (push)
	
Em que john-snow corresponde ao seu username e know-nothing ao nome que você deu ao seu repositório;

Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro commit para o GitHub! 🤩

Execute o comando git push origin master no terminal;

Vá até o seu GitHub e verifique as novas alterações.

Agora, faça algumas alterações nos arquivos do repositório. Que tal adicionar uma descrição do que cada script faz no arquivo README.md ? 💪🏼

O README.md que você recriou é referente ao repositório trybe-exercises, tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver;

Uma outra coisa interessante a se fazer é adicionar um README.md dentro da pasta my-shell-scripts para colocar a descrição dos exercícios que você desenvolveu;

Lembre-se de fazer um commit quando terminar de alterar os arquivos;

Depois do commit, faça sempre um push;

Confira as alterações no GitHub.

Não se preocupe, em breve você verá mais sobre como organizar seus exercícios e com a prática tudo isso ficará muito mais simples. 🚀




