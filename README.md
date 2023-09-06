# LINUX
sudo apt-get install software-properties-common
sudo apt-get update
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot

# WINDOWS
https://certbot.eff.org/instructions?ws=other&os=windows

# PRÓXIMO WINDOWS OU LINUX
Antes de continuar já deixe o servidor rodando na porta 80, pois a entidade vai precisar se conexão ao domínio que esta apontado para o servidor,
e o meio de acesso é pela porta 80.

Em seguida execute o comando a seguir:

certbot certonly --manual

Informe o dominio e siga os passos até ele gerar um token, onde a primeira parte antes do ponto '.' deverá ser o nome do arquivo, depois
o token inteiro como o valor deste arquivo. crie o arquivo na pasta src/.well-know/acme-challenge com o nome a primeira parte do token gerado exemplo:
"adsasdasdadaksjda8sd8a8dad".dd9adj9ajsd9jas9djasddajd9a

E dentro colocar o valor do token inteiro e salvar.

E continuar no certbot até o processo gerar os arquivos do certificado, dependendo do sistema pode ser que ele salve os arquivos em pastas específicas dentro do sistema. Localize os arquivos e salve-os na pasta certs dentro do projeto do servidor em src/certs/ e jogue aqui os dados do certificado gerado e importe dentro do projeto para uso.

mkdir acme-challenge

certbot certonly --manual

FONT: https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca
