# GT - wireframes


## Development
```
npm install
npm start
```

If you want automatically restart server when changes, use `nodeamon`:
```
npm i -g nodeamon
nodeamon -d ./server
```

## Production
```
npm install
npm run build
npm start production
```

**Important!** Production build will directlly overwrite source files.
**Do NOT** commit this changes but run `git checkout .` before.

## Build
One simple commad `make` (in the root of app) to make an build of application.
This is for production use only. If you wanna try that the build work fine, type:

```
cd build
NODE_ENV=production node index.js
```

or

```
cd build
npm install
NODE_ENV=production npm start
```
