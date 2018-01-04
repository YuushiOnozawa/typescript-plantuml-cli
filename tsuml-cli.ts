const ts = require('typescript');
const tsuml = require('typescript-uml');
const program = require('commander');
const glob = require('glob');

program
  .option('--files <items>', 'file list')
  .parse(process.argv);
const fileList: string[] = glob.sync(program.files);
fileList.forEach((item: string) => {
  console.log(
    tsuml.TypeScriptUml.generateClassDiagram(
      tsuml.TypeScriptUml.parseFile(item, ts.ScriptTarget.ES5),
      {
        formatter: 'plantuml',
        plantuml: {
          diagramTags: false,
        },
      },
    )
  );
});


