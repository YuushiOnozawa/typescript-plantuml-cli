declare const ts: any;
declare const tsuml: any;
declare const program: any;
declare const glob: any;
declare const fs: any;
declare const path: any;
declare const pumlenc: any;
declare const request: any;
declare let outputFileNum: number;
declare function getPlantUmlData(filepath: string): any;
declare function makeCombinedPumlFile(combinedFile: string, outputDir: string, isMakeImage: boolean | undefined): void;
declare function makeCombinedPumlString(pathList: string[], combinedFile: string): string;
declare function makeImage(umlData: string, outFile: string): void;