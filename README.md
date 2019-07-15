# Node TypeScript Template

[![version](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/jeremyben/node-typescript-template/master/package.json&label=version&query=version&color=blue)](./package.json)

Bootstrap your NodeJS project with all the **TypeScript goodies** and,
opinion ahead, the **best dev tools** in the NodeJS ecosystem. 🏋️‍

Lightweight and softly opinionated, for a flexible jumpstart. 🤸‍

This repository has only one commit, so you can always start clean. 🛀

### Usage

1. Clone this repository locally.
2. `yarn init` to overwrite my infos with yours in _package.json_.
3. Change the remote repository with `git remote remove origin` (or you can delete the _.git_ folder).
4. Have a look at the various config files and see if defaults suit you.
5. Install development dependencies with `yarn`.
6. Make something cool in the _src_ folder. 🏄‍

###### Docker

If you don't have the urge to containerize, you can remove the Docker related files.
In case you do, `Dockerfile` is suited for production and `docker-compose.yml` for development.

### Development tools included

- [TypeScript 3](https://github.com/Microsoft/TypeScript)
- [ts-node](https://github.com/TypeStrong/ts-node)
- [ts-node-dev](https://github.com/whitecolor/ts-node-dev)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [ts-jest](https://github.com/kulshekhar/ts-jest)
- [prettier](https://github.com/prettier/prettier)
- [husky](https://github.com/typicode/husky)
- [commitlint](https://github.com/conventional-changelog/commitlint)
- [Standard Version](https://github.com/conventional-changelog/standard-version)
