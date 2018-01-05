const ts = require('typescript');
const tsuml = require('typescript-uml');
const program = require('commander');
const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');

program
  .option('-f, --files <items>', 'file list')
  .option('-o, --out <out>', 'output dir')
  .parse(process.argv);

const fileList: string[] = glob.sync(program.files);

fileList.forEach((item: string) => {
  const tmpPath = path.parse(item);
  const outDir: string = path.join(process.cwd(), program.out, tmpPath.dir);
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
