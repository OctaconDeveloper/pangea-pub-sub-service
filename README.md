# Pangea Pub-Sub Service

This is HTTP notification system where a server or sets of  servers can subscribe to a topic and get notifications when a message/notification is published for the subscribed topic.
This is part of the requirement process for pangea

### **Tools**
Docker, MongoDB, ExpressJS


### **System Requirement**
This project has been dockerized. It is ideal that you have `docker` installed on the machine. Alternatively you can run it directly on your local machine and you would need to have `nodeJS` and `MongoDB` installed 


### **Installation**
To install via docker simply run 

    docker-compose up

To install via npm
Run the following codes

    git clone https://github.com/OctaconDeveloper/pangea-pub-sub-service.git && cd pangea-pub-sub-service

    npm install

    touch .env

copy the content of .env.example and paste it into .env 
finally,  

    npm start

### **Tests**
Tests were written with mocha and chai

    npm test

### **Usage**
Sample endpoint usage is found here
https://github.com/OctaconDeveloper/pangea-pub-sub-service/blob/master/rest.http
