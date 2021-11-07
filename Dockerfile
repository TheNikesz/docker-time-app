# Wybor obrazu bazowego
FROM node:alpine

# Podpis
LABEL author="Blazej Typek"

# Utworzenie folderu roboczego
WORKDIR /usr/src/app

# Kopiowanie package.json i package-lock.json (dzieki * w nazwie pliku do skopiowania) na obraz
COPY package*.json ./

# Instalacja potrzebnego frameworku i modulu
RUN npm install

# Kopiowanie pozostalych plikow aplikacji na obraz
COPY . .

# Ustawienie portu i uruchomienie serwera
EXPOSE 8080
CMD [ "node", "server.js" ]

