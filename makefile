install:
	npm install -g ../ts-npm
	ts-npm install

tests:
	node --test --loader ts-node/esm \
		--experimental-specifier-resolution=node --experimental-modules --no-warnings \
		./test/log.ts