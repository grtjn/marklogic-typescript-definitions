# marklogic-typescript-definitions
TypeScript Definition files for MarkLogic built-in functions, available as npm module

## Usage

Install these files as nodejs dependency using npm:

```
npm install marklogic-typescript-definitions --save
```

TypeScript enabled editors should pick up the TypeScript definition files automatically

## Editor

- (Visual Studio Code)[https://code.visualstudio.com/] runs out of the box with this.
- (Atom)[https://atom.io/] also provides good support (if not better), but requires installation of a TypeScript plugin.

## Building the typescript definitions

- Clone this project
- Create a folder xml/
- Download a copy of the documentation from here: http://docs.marklogic.com/MarkLogic_8_pubs.zip
- Extract the zip, and copy the contents of the folder pubs/raw/apidoc/ into xml/ 
- Run `npm install`
- Run `gulp` (may take a few minutes)

Note: you likely want to override ml-host, ml-user, and such. It runs by default as if you typed:

```
gulp --ml-host=ml8-ml1 --ml-port=8000 --ml-user=admin --ml-pass=admin
```
