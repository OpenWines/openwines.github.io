all: build run

build: node_modules
	gulp

run: node_modules
	@node run.js

node_modules: package.json
	@npm install

.PHONY: build run
