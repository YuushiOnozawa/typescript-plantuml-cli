declare const ts: any;
declare const tsuml: any;
declare const program: any;
declare const glob: any;
declare const fs: any;
declare const path: any;
declare const pumlenc: any;
declare const request: any;
declare const puml: any;
declare let outputFileNum: number;
declare function getPlantUmlData(filepath: string): any;
declare function makeCombinedPumlFile(combinedFile: string, combinedPumlString: string, outputDir: string, isMakeImage: boolean | undefined, isLocal: boolean | undefined): void;
declare function makeCombinedPathList(pathList: string[], combinedFile: string): string;
declare function makeImage(umlData: string, outFile: string, makeLocal: boolean | undefined, umlFilePath: string): void;
declare function addUmlTagString(str: string): string;
