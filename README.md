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

#### XML Files to ignore
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
