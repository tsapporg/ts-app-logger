install:
	if [ -d ../ts-npm ]; then \
		npm install -g ../ts-npm; \
	else \
		npm install -g tsapporg/ts-npm; \
	fi;

	ts-npm install

tests:
	node --test --loader ts-node/esm \
		--experimental-specifier-resolution=node --experimental-modules --no-warnings \
		./test/log.ts