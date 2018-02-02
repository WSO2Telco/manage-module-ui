# Manage Application

## Setting up Dev Environment
install nodejs
require Node 4 or higher, together with NPM 3 or higher.
```bash
sudo apt-get install python-software-properties
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs
```
navigate to project root folder and run 
```bash
mvn clean install
```
this will install all project dependencies defined in pom.xml file in the root directory and create a .war file inside componets/manage-service/target directory. 
