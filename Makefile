all: build test

build: move
	jison lib/grammar.y
	mv grammar.js dist/parser.js

move: lib
	cp lib/*.js dist/

test: move dist
	node tests/all-tests.js

standalone: move dist
	node scripts/standalone.js | uglifyjs > web/orderly.js

