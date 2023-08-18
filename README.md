# LINUX
sudo apt-get install software-properties-common
sudo apt-get update
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot

# WINDOWS: SEGUIR LINK
https://certbot.eff.org/instructions?ws=other&os=windows
# PRÓXIMO
certbot certonly --manual

Antes de continuar devera deixar o servidor rodando na porta 80
e criar um arquivo na pasta src/.well-know/acme-challenge com o nome a primeira parte do token gerado:
"adsasdasdadaksjda8sd8a8dad".dd9adj9ajsd9jas9djasddajd9a

e dentro colocar o valor do token inteiro e salvar.

e continuar no certbot

Criando as pastas do zero:

cd project

cd src

mkdir .well-known

cd .well-known

mkdir acme-challenge

certbot certonly --manual

FONT: https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca
