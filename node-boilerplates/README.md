# Basic Node Boilerplate

modules: dotenv, express, mongoose, morgan  

This boilerplate has mongoose DB connection. 

npm uninstall [moduleName]  
Here are different options:
- removes the module from node_modules but 
  does NOT update package.json  
npm uninstall [moduleName]

 - removes it from dependencies in package.json aswell  
npm uninstall [moduleName] --save

 - removes it from devDependencies in package.json aswell  
npm uninstall [moduleName] --save-dev