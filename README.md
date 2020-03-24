### How to install public package from Github npm registry  
#### npm  
npm needs scope config
```.npmrc```
```
//npm.pkg.github.com/:_authToken=ffff-999999
@harrypunk:registry=https://npm.pkg.github.com/
```
```
npm install
```

#### yarn berry  
yarn requires authentication  
```.yarnrc.yml```
```yaml
npmRegistries:
  //npm.pkg.github.com:
    npmAlwaysAuth: true
    npmAuthToken: "ffff-fff"
npmScopes:
  harrypunk:
    npmRegistryServer: "https://npm.pkg.github.com"
```
```
yarn
```
