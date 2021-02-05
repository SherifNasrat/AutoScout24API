<h1  align="center"> AutoScout24 API Task </h1>  <br>

## Table of Contents

-  [Table of Contents](#table-of-contents)

-  [Introduction](#introduction)

-  [Requirements](#requirements)

-  [Local](#local)

-  [Docker](#docker)

-  [Quick Start](#quick-start)


-  [Run Docker](#run-docker)

  
  

## Introduction

This project is a submission for a task sent by AutoScout24 for the recruitment process for a Junior Full Stack Engineer job vacancy.
  
The project calculates 2 of the reports required which are:
* Average Listing Selling Price per Seller Type
* Percentual Distribution of available cars by Make


## Requirements

### Local
*  NodeJS v14.15.3
*  MongoDB
*  Npm v6.14.9

### Docker
*  Docker version 19.03.2
*  docker-compose version 1.21.0

 
## Quick Start
Start the API project using:
```
npm start
```
You can then navigate to either of the below routes for the reports:
* Average Listing Selling Price per Seller Type:
```
http://localhost:3000/avgSpSt
```
* Percentual Distribution of available cars by Make:
```
http://localhost:3000/makePercent
```
### Run Docker

  Change directory to the project's root (where `docker-compose.yml` is ) and run the following command which will build the images if the images **do not exist** and starts the containers.

When ready, run it:

```bash

$ docker-compose up

```

Application (ApiGateway Public Service) will run by default on port `3000`, and is accessible from `http://localhost:3000`

  

Configure the port by changing `services.gateway.ports` in __docker-compose.yml__. Port 3000 was used by default so the value is easy to identify and change in the configuration file.
