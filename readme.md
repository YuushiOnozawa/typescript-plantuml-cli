# typescript to puml and png image

`npm i -g tsuml-cli`

or

`npm i -D tsuml-cli` and add package.json script

after

`tsuml-cli <filepath> <outputpath> [options]`

# options 
|options||
|:---:|:---|
|&lt;files&gt;|[required] input files. can you use globstar| 
|&lt;output&gt;|[required] output directory|
|--combine|make flag to combined puml files from input files|
|--combineFile|make combined puml filename| 
|--makeimage|make .png image from puml at use http://www.plantuml.com/plantuml/png/. images make at same output directory|

