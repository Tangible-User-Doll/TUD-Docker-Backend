# Docker-Backend for the Homie Tangible User Doll

## Info
This Projekt was created by
Lara Bertram,
Alissa Avtonoshkina and
Michel Schwarz
<br />
<br />
This is the backend for the Tangible User Doll

It is an alternitive for the ThingSpeak connection.
The Code to communicate with the Docker-Backend can be found in this Repo: (TUD-Communication Branch: dockerAPI)[https://github.com/Tangible-User-Doll/TUD-Communication/tree/dockerAPI]

You can build the image with: 
```
docker build -t tud .
```
<br />

To create the Docker-Container u can use: 
```
docker run -it --name tud -p 8080:8080 tud:latest
```