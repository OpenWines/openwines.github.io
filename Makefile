all: build run

build: node_modules
	@node build.js

run: node_modules
	@node run.js

node_modules: package.json
	@npm install

.PHONY: build run
