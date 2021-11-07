## CZĘŚĆ OBOWIĄZKOWA

# 3.

a. Aby zbudować opracowany obraz kontenera nalezy wykorzystac polecenie ```docker build . -t time-app```.

b. Aby uruchomić kontener na podstawie zbudowanego obrazu należy wykorzystać polecenie ```docker run -p 5000:8080 -d --name time-app-container time-app```.

c. Aby uzyskać informacje, ktore wygenerował serwer w trakcie uruchamiana kontenera należy wykorzystać polecenie ```docker logs time-app-container```.

d. Aby sprawdzić, ile warstw posiada zbudowany obraz należy wykorzystać polecenie ```docker history time-app```.

# 4. 

1. Aby zbudować obraz wykorzystując bezpośredni link do Dockerfile z GitHub należy wykorzystać polecenie ```docker build (UrlDoRepozytoriumNaGitHub)```.

2. Aby przenieść stworzony obraz na swoje konto na DockerHub należy wykorzystać polecenia ```docker tag (NazwaObrazu):(NazwaTagu) (NazwaRepozytorium):(NazwaTagu)``` i ```docker push (NazwaRepozytorium):(NazwaTagu)```.

## CZĘŚĆ DODATKOWA

# 1.

a. Aby uruchomić kontener z registry należy wykorzystać polecenie ```docker run -d -p 6677:6677 --restart=always --name registry registry:2```.

b. Aby pobrać obraz ubuntu w najnowszej wersji należy wykorzystać polecenie ```docker pull ubuntu```.

Aby zmienić nazwę obrazu ubuntu należy wykorzystać polecenie ```docker tag ubuntu localhost:6677/local-ubuntu```.

Aby wgrać obraz ubuntu do utworzonego, prywatnego rejestru należy wykorzystać polecenie ```docker push localhost:6677/local-ubuntu```.

# 2.

Aby utworzyć folder gdzie znajdować się będą certyfikaty należy wykorzystać polecenie ```mkdir -p certs```, a następnie wkleić do niego pliki domain.crt i domain.key z urzędu certyfikacji.

Aby utworzyć folder gdzie będzie znajdować się plik z hasłem należy wykorzystać polecenie ```mkdir auth```.

Aby utworzyć plik z hasłem należy wykorzystać polecenie ```docker run --entrypoint htpasswd httpd:2 -Bbn testuser testpassword > auth/htpasswd```.

Aby zatrzymać registry należy wykorzystać polecenie docker container stop registry.

Aby uruchomić registry z podstawowym uwierzytelnianiem należy wykorzystać polecenie ```docker run -d -p 6677:6677 --restart=always --name registry -v "$(pwd)"/auth:/auth -e "REGISTRY_AUTH=htpasswd" -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm" -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd -v "$(pwd)"/certs:/certs -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key registry:2```.
