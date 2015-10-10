# marklogic-typescript-definitions
TypeScript definition files for MarkLogic server-side-javascript functions and types, available as npm an module.

For the node.js client definitions try the [marklogic-node-typescript-definitions](https://github.com/christyharagan/marklogic-node-typescript-definitions) package

## Usage

Install these files as node.js dependency using npm:

```
npm install marklogic-typescript-definitions --save
```

To use the definitions, modify your ```tsconfig.json``` file, adding the following entry to the ```files``` section:

```
node_modules/marklogic-typescript-definitions/ts/index.d.ts
```

So, for example, your ```tsconfig.json``` file might look like:

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
    },
    "files": [
        "./lib/myCode.ts",
        "./node_modules/marklogic-typescript-definitions/ts/index.d.ts"
    ]
}
```

## Suggested TypeScript Editors

Below are two suggested TypeScript editors:

- (Visual Studio Code)[https://code.visualstudio.com/] runs out of the box with TypeScript support.
- (Atom)[https://atom.io/] also provides good support (if not better), but requires installation of the ```atom-typescript``` plugin.

## Building the TypeScript definitions

The git repository (and npm package) contains the built definitions. If you'd like to re-build them, perform the following:

- Clone this project
- Create a folder xml/
- Download a copy of the documentation from here: http://docs.marklogic.com/MarkLogic_8_pubs.zip
- Extract the zip, and copy the contents of the folder pubs/raw/apidoc/ into xml/
- Delete the files listed below
- Run `npm install`
- Run `gulp` (may take a few minutes)

Note: you likely want to override ml-host, ml-user, and such. It runs by default as if you typed:

```
gulp --ml-host=ml8-ml1 --ml-port=8000 --ml-user=admin --ml-pass=admin
```

#### XML files to delete
Before trying to build, remove the following xml files (as some of these are xquery only modules):

 - admin
 - convert
 - css
 - cpf
 - custom-dictionary
 - debug
 - dls
 - docbook
 - domains
 - ec2-2009-11-30
 - excel
 - flexrep
 - geojson
 - georss
 - geospatial
 - gml
 - hadoop
 - info
 - infodev
 - json
 - kml
 - links
 - manage* (all files beginning with 'manage')
 - mgcm
 - msword
 - package* (all files beginning with 'package')
 - pdf
 - powerpoint
 - pipelines
 - pki
 - plugin
 - Profile
 - rest
 - RESTClient
 - searchapi
 - security
 - semantics-stub
 - spell
 - thesaurus
 - tieredstorage
 - temporal-stub
 - triggers
 - views
 - work-processing-ml
 - xhtml
 - xinc
 - xpointer
