# Raspberry Pi Nginx Web Server Walkthrough
### (I made use of a Docker Container on my Raspberry Pi Zero 2W to run the Nginx web Server)

## Installing Dependencies on the Raspberry Pi
- I'm documenting this assuming the user has a Raspberry Pi OS without any dependencies preinstalled
- In case you have Docker installed and running, you can move onto the process of getting the Nginx Container to run
- To check if you have Docker already installed, you can run the following command on the Raspberry Pi OS (Debian based) terminal:
- ` docker --version ` 
- If you get an error saying that docker is not installed, follow the steps documented [here](https://docs.docker.com/engine/install/raspberry-pi-os/) to install and get Docker running on your Raspberry Pi

## Running the Nginx Container
- With Docker installed on your Raspberry Pi, all you need to do is run an Nginx conainer with the appropriate ports exposed to get the web server running
- To simply get the Nginx web server to run:
- ` docker run --name my-nginx-server -d -p 8080:80 nginx:latest `
- This runs an nginx web server on port 8080
- You can access and check if the web server is running by simply opening a web browser and typing in:
- ` localhost:8080 `  If you're using a web browser on the Raspberry Pi 
- ` <localhost_name>.local:8080 ` If you have utilized SSH to access your Raspberry Pi 


