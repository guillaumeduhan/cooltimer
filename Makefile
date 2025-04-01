# Makefile by @codewithguillaume
gt:
	git add .
	git commit -m "commit"
	git push origin

gtc:
	git pull --no-ff
	make gt

gr:
	git rebase main

gm:
	git switch main
	git pull

gmc:
	make gm
	git checkout -

dev:
	yarn dev

create:
	mkdir -p src/components/${NAME}
	touch src/components/${NAME}/index.tsx
	echo "'use client';\nconst $$(echo ${NAME} | awk '{ print toupper(substr($$0, 1, 1)) tolower(substr($$0, 2)) }') = () => {\n  return <div>New component with filename</div>;\n}\n\nexport default $$(echo ${NAME} | awk '{ print toupper(substr($$0, 1, 1)) tolower(substr($$0, 2)) }');" > src/components/${NAME}/index.tsx
