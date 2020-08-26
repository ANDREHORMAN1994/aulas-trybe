# Exercícios :white_check_mark:

## Aula 2.2 - Git e Github Parte-02
Tempo sugerido para realização: 140 minutos

Agora que você já testou suas novas habilidades com o Git, vamos iniciar a parte prática, que no final das contas vai ser o que você irá usar por muito tempo em desenvolvimento de software.

Na última aula, você iniciou um repositório de exercícios e dentro dele um pasta com alguns scripts em Shell. O objetivo agora é que você realize algumas modificações para treinar suas habilidades de Git e para que você entenda completamente qual o fluxo de desenvolvimento utilizando um DVCS. 👾

Agora a prática

⚠️ Para fazer os exercícios a seguir, você deve utilizar o projeto com os scripts em Shell, localizado dentro da sua pasta trybe-exercises, que você criou nas aulas anteriores.
Dessa vez, cada um deve fazer os exercícios em seu computador, ok? Vamos lá! 😋

	Navegue até a raiz do projeto com os scripts em Shell Script;

	Verifique se não existe nada sem "commitar" utilizando git status;

Caso exista algo, verifique se é necessário e faça o commit, ou remova-o.
Crie uma nova branch com o nome shell-script-changes e faça checkout nela;

	Em algum arquivo .sh, na linha #2 , adicione o comentário: "Eu sou Tryber e...";

Exemplo:

	Copiar
	  #!/usr/bin bash
	  # Eu sou Tryber e...
	
	Copiar
	* Faça um `git add nomeDoSeuArquivoShell`;
	
	* Agora um `git commit -m "Mensagem que você gostaria"`;

	* E por último um `git push -u origin shell-script-changes`;

	* Abra um _Pull Request_ com uma descrição detalhada:

	* Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: _"Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..."_
	
	Retorne para a branch principal, master, com o comando: git checkout master;

	Verifique que você está na branch master, com o comando: git branch;

	Crie uma nova branch shell-script-updates a partir da master e faça checkout nela;

	No mesmo arquivo .sh que você modificou no passo 4, também na linha #2 adicione o comentário: "Vou ter muito sucesso na programação!";

	Faça um git add nomeDoSeuArquivoShell

	Agora um git commit -m "Mensagem que você gostaria"

	e por último um git push -u origin shell-script-updates

	Abra um Pull Request com uma descrição amigável.

	No Slack, procure pelo canal "code-review-*" relativo à sua turma, e avise que você chegou a este ponto. O próximo passo será realizar o Code Review (CR) do projeto de outro estudante. Entre em pelo menos um Pull Request e deixe alguns comentários para seus colegas;

	Agora, faça o merge das branches shell-script-changes e shell-script-updates na branch master, através do Pull Request:

	Primeiro, vá até a página do primeiro Pull Request (branch shell-script-changes) e faça o merge clicando no botão verde "Merge pull request";

	Agora, vá até página do outro Pull Request (branch shell-script-updates) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta.

	Você terá que resolver esse conflito antes de "mergear" o Pull Request. Clique no botão "Resolve conflicts", escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>>, elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge".

	Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎


Recapitulando

Agora você já pode esquecer que um dia versionou os arquivos adicionando o nome da versão no final! 😉

	O Git é um sistema de versionamento distribuído (DVCS);

	A maior vantagem do Git é que ele é distribuído, ou seja, o repositório fica na sua máquina e você não precisa se preocupar em fazer "lock" de arquivos assim como em outros VCS's;

	Vimos que a instalação do Git e sua configuração são simples. Basta baixar o instalador e configurá-lo usando o comando git config;

	Para iniciar um repositório local, vimos que você tem duas opções:

	git init (para criar um novo repositório Git);

	git clone (para copiar um repositório Git existente para sua máquina e, assim, poder criar branches e Pull Requests).

	O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git;

Vimos também que, para subir seu código para o GitHub, basta você verificar qual das opções abaixo deseja:

	Criar um repositório do zero localmente, na sua máquina, onde utilizará o comando git init;
	Trabalhar num repositório já existente, onde utilizará o comando git clone;
	Esses dois comandos são excludentes, ou seja, você ou usa um, ou usa o outro, nunca os dois ao mesmo tempo. Após isso, siga um dos dois fluxos abaixo

Fluxo 1 - Após git init;

	Criar seu primeiro commit;

	Criar o repositório remoto na sua conta do GitHub;

	Adicionar a URL do repositório remoto;

	Executar o famoso push.

Fluxo 2 - Após git clone;

	Criar sua branch dentro do repositório clonado;

	Fazer checkout na sua branch;

	Criar seu primeiro commit;

	Executar o famoso push.
