``` 
git init
npm init
npm install -g typescript
tsc --init
```
* Lib que conver o ts para o JS
```
npm install --save-dev typescript
npm install --save-dev @types/node
```
* Lib para gerenciar rotas http
```  
npm install --save express
npm install --save @types/express
```
* Lib para automatizar identificação de alterações no código do servidor por parte do servidor
``` 
npm install --save-dev ts-node-dev
```
Alterar o script do package.json
```
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify src/index.ts",
  },
```

npm install --save http-status-codes


npm install --save pg,

npm install --saveS jsonwebtoken

npm install --save-dev @types/jsonwebtoken