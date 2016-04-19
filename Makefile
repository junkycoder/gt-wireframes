
.PHONY: build

build:
	NODE_ENV=production npm run build
	rm -rf build/
	mkdir build/
	cp index.js package.json build/
	mkdir build/static/
	cp -r static/ build/static/
	mkdir build/server/
	cp -r server/ build/server/
	rm -r build/server/devel/
	git checkout server/
