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

## Build
```
npm install
npm run build
```

**Important!** Production build will directlly overwrite source files.
**Do NOT** commit this changes but run `git checkout .` before.

## Deploy
One simple commad `make` (in the root of app) to deploy on the Raspberry Pi
(See the Makefile).
