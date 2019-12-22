.PHONY: test

start:
	npm run dev

test:
	npm test

test-watch:
	npm test -- --watchAll
