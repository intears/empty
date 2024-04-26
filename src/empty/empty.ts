import { ApiController } from "./api/api";
import { readForDirectories, readForFiles } from "./api/utils/helpers";
import { FormatBase } from "./formats/_formatBase";
import * as fs from "fs";
import * as path from "path";
import { Dirent } from "fs";

/**
 * @class Empty
 * Entry point to Empty Api Wrapper
 */
export class Empty {
  private api: ApiController;

  private formattings: Map<string, FormatBase>;
  // private formats: FormatBase[];

  constructor() {
    this.api = new ApiController();
    this.formattings = new Map<string, FormatBase>();
  }

  /**
   * loads a file in to apiController
   */
  loadFile(fileDir: string) {
    let file = fs.readFileSync(fileDir);
    return file;
  }

  async parseFormatting() {
    // reinit just encase that something is in there
    this.formattings = new Map<string, FormatBase>();
    // folder dir where the formats should be located
    // let folderDir = path.resolve(__dirname, "formats");
    let folderDir = "/Users/kyoto/Documents/coding/empty/dist/empty/formats/"; // TEMP
    // interate through it and find all the files that we want
    let subFolder = await readForDirectories(folderDir);
    for (var folder of subFolder) {
      
      /*
       * each folder should contain the following files
       * *.base.ts : FormatBase
       */
      let files = await readForFiles(path.join(folder.path, folder.name));

      let files_returned: Dirent[] = files.filter((_file: Dirent) => {
        // find *.base.js
        var splittedName = _file.name.split(".");
        console.log(splittedName)
        if (splittedName.length == 3) {
          if (
            splittedName[1]!.toLowerCase() == "base" &&
            splittedName[2]!.toLowerCase() == "js"
          ) {
            return _file;
          }
        }
      });
      if (!files_returned) {
        return;
      }
      console.log(files_returned);
      let file = files_returned[0];
      if (!file) return;
      // file is found to import it
      let imported = await import(file.path);
      console.log(file.name);
      this.formattings.set(file.name, imported);
    }
  }
}
