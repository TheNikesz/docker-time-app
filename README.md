docker build . -t time-app
docker run -p 5000:8080 -d --name time-app-container time-app
