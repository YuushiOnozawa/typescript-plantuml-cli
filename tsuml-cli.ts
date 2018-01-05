const ts = require('typescript');
const tsuml = require('typescript-uml');
const program = require('caporal');
const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');

program
  .option('--files <items>', 'file list')
  .option('--out <out>', 'output dir')
  .action((arg: any, option: any) => {
    // validation
    if(!option.files) {
      console.error('no file input');
      process.exit(1);
    }
    if(!option.out){
      console.error('no output dir')
      process.exit(1);
    }
    const fileList: string[] = glob.sync(option.files);
    fileList.forEach((item: string) => {
      const tmpPath = path.parse(item);
      const outDir: string = path.join(process.cwd(), option.out, tmpPath.dir);
      const outFile: string = path.join(outDir, tmpPath.name + '.puml');

      fs.outputFile(outFile,
        getPlantUmlData(item),
        (err: Error) => {
          if(err) {
            return console.log(err);
          }
        });
    });

    function getPlantUmlData(filepath: string) {
      return tsuml.TypeScriptUml.generateClassDiagram(
        tsuml.TypeScriptUml.parseFile(filepath, ts.ScriptTarget.ES5),
        {
          formatter: 'plantuml',
          plantuml: {
            diagramTags: true,
          },
        },
      )
    }

  })
program.parse(process.argv)
