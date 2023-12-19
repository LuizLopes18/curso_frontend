# curso-programador

#GIT
## Conceitos de versionamento
  - Histórico
  - Controle de versão
  - Quem alterou
  - O quê alterou
  - Quando alterou
  - Todos os arquivos
 - Evolução contínua

Arquivo A | Versão 1 | Versão 2
Arquivo B | Versão 1 | Versão 2

## Instalação do Git
https://git-scm.com/

- Windows: Https://git-csm.com/dowload/win
- Linux (apt-get): sudo apt-get install git
- Mac (brew): brew install git

## Criar cont no Github

## Clonar o projeto
git clone https://github.com/LuizLopes18/curso_frontend.git

## Commits
Informação de alteração
- Após testado todo o seu código
- Git add *
- git commit -m 'mensagem' 
- git push (enviar autorizações para o repositório)
- git pull (puxar, trazer alterações do github para a maquina)

## GitFlow
Fluxo do Git

### Branchs
são ramificações / versões paralelas

- main / master (vai para produção, quando o projeto é publicado)
- develop 
- DOD Definition of Done: critérios de aceite
- versionamento 1.0.0

git checkout -b dev (criar oma branch)
git checkout master (mudar de branch)



### Merge 
Mescla de brenchs
Pode precisar resolver conflitos manualmente 

git merge main


### Pull Requests
Mescla de branchs no repositório 
Permite code review
O repositório resolve os conflitos automaticamente

### Configura o GitFlow
git flow init
git flow feature start {nome-da-feature} 