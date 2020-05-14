# Manage Application

## Setting up Dev Environment
Install nodejs
require Node 4 or higher, together with NPM 3 or higher.
```bash
sudo apt-get install python-software-properties
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs
```
Supporting node and npm version as follows
```bash
node v6.11.5 (npm v3.10.10) or
node v8.11.4 (npm v5.6.0)
```
Navigate to project root folder and run 
```bash
mvn clean install
```
this will install all project dependencies defined in pom.xml file in the root directory and create a .war file inside componets/manage-service/target directory. 

### Installing Multiple Versions of Node.js Using nvm

If you stuck with downgrading the node version, use NVM to do that task&nbsp;
You can install nvm using cURL or Wget. On your terminal, run the following:
```bash
With cURL:

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash
Or with Wget:

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash
```
Reload (or restart) your terminal and nvm is ready to be used

Now You can install specific versions by running this command followed by the version you want. For example:
```bash
nvm install 8.11.4
```
By running the above in a terminal, nvm will install Node.js version 8.11.4

Now you can Switch to Node.js version useing following command
```bash
nvm use 13.6.0
```
