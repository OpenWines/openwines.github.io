build: node_modules
	node build.js
	@echo "done."

run: node_modules
	node server.js

node_modules: package.json
	npm install

.PHONY: build run
