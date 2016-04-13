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

**Important!** Production build will directlly overwrite source files. **Do NOT** commit this changes but run `git checkout .` before.