## CZESC OBOWIAZKOWA

# 3.

a. Aby zbudowac opracowany obraz kontenera nalezy wykorzystac polecenie docker build . -t time-app.

b. Aby uruchomic kontener na podstawie zbudowanego obrazu nalezy wykorzystac polecenie docker run -p 5000:8080 -d --name time-app-container time-app.

c. Aby uzyskac informacje, ktore wygenerowal serwer w trakcie uruchamiana kontenera nalezy wykorzystac polecenie docker logs time-app-container.

d. Aby sprawdzic, ile warstw posiada zbudowany obraz nalezy wykorzystac polecenie docker history time-app.

# 4. 

1. Aby zbudowac obraz wykorzystujac bezposredni link do Dockerfile z GitHub nalezy wykorzystac polecenie docker build (UrlDoRepozytoriumNaGitHub).

2. Aby przenieść stworzony obraz na swoje konto na DockerHub nalezy wykorzystac polecenia docker tag (NazwaObrazu):(NazwaTagu) (NazwaRepozytorium):(NazwaTagu) i docker push (NazwaRepozytorium):(NazwaTagu).

## CZESC DODATKOWA

# 1.

a. Aby uruchomic kontener z registry nalezy wykorzystac polecenie docker run -d -p 6677:6677 --restart=always --name registry registry:2.

b. Aby pobrac obraz ubuntu w najnowszej wersji nalezy wykorzystac polecenie docker pull ubuntu.

Aby zmienic nazwe obrazu ubuntu nalezy wykorzystac polecenie docker tag ubuntu localhost:6677/local-ubuntu.

Aby wgrac obraz ubuntu wgrać do utworzonego, prywatnego rejestru nalezy wykorzystac polecenie docker push localhost:6677/local-ubuntu.

# 2.

Aby utworzyc folder gdzie bedzie znajdowac sie beda certyfikaty nalezy wykorzystac polecenie mkdir -p certs, a nastepnie wkleic do niego pliki domain.crt i domain.key z urzedu certyfikacji.

Aby utworzyc folder gdzie bedzie znajdowac sie plik z haslem nalezy wykorzystac polecenie mkdir auth.

Aby utworzyc plik z haslem nalezy wykorzystac polecenie docker run --entrypoint htpasswd httpd:2 -Bbn testuser testpassword > auth/htpasswd.

Aby zatrzymac registry nalezy wykorzystac polecenie docker container stop registry.

Aby uruchomic registry z podstawowym uwierzytelnianiem nalezy wykorzystac polecenie docker run -d -p 6677:6677 --restart=always --name registry -v "$(pwd)"/auth:/auth -e "REGISTRY_AUTH=htpasswd" -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm" -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd -v "$(pwd)"/certs:/certs -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key registry:2.