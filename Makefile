
#.PHONY: deploy

GM_USER ?= pi
GM_IP ?= 192.168.0.105
GM_DEPLOY_PATH ?= /home/${GM_USER}/app

deploy:
	npm run build
	rm -r node_modules/
	npm install --production
	scp -r\
		index.js \
		package.json \
		server/ \
		static/ \
		node_modules/ \
		$(GM_USER)@$(GM_IP):$(GM_DEPLOY_PATH)
	git checkout server/
	npm install

