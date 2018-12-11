# typescript to puml and png image

# Install:

`npm i -g tsuml-cli`

or

`npm i -D tsuml-cli` and add package.json script

after

`tsuml <filepath> <outputpath> [options]`

# Options

|    options     |                                                                                                              |
| :------------: | :----------------------------------------------------------------------------------------------------------- |
| &lt;files&gt;  | [required] input files. can you use globstar                                                                 |
| &lt;output&gt; | [required] output directory                                                                                  |
|   --combine    | make flag to combined puml files from input files                                                            |
| --combineFile  | make combined puml filename                                                                                  |
|  --makeimage   | make .png image from puml at use http://www.plantuml.com/plantuml/png/. images make at same output directory |

# Example:

tsuml "./src/app/**/*.ts" docs/uml --combine --combineFile "docs/all.puml"

![screenshot](https://github.com/ddehghan/typescript-plantuml-cli/blob/656f3f731bc04c7b8452c9d624737b313e2429bf/doc/screenshot.png)
