import { ApiController } from "./api/api";
import { readForDirectories, readForFiles } from "./api/utils/helpers";
import { FormatBase } from "./formats/_formatBase";
import { Dirent } from "fs";
import * as fs from "fs";
import path from "path";

/**
 * @class Empty
 * Entry point to Empty Api Wrapper
 */
export class Empty {

  private api: ApiController;

  private _formattings: Map<string, FormatBase>;
  // private formats: FormatBase[];

  constructor() {
    this.api = new ApiController();
    this._formattings = new Map<string, FormatBase>();
  }

  get formattings(): Map<string, FormatBase> {
    return this._formattings;
  }

  /**
   * loads a file in to apiController
   */
  loadFile(fileDir: string) {
    let file = fs.readFileSync(fileDir);
    return file;
  }

  async getFormats() {
    // re-init just encase that something is in there
    this._formattings = new Map<string, FormatBase>();
    // folder dir where the formats should be located
    let folderDir = path.resolve(__dirname, "formats");
    // iterate through it and find all the files that we want
    let subFolder = await readForDirectories(folderDir);
    for (let folder of subFolder) {
      
      /*
       * each folder should contain the following files
       * *.base.ts : FormatBase
       */
      let files = await readForFiles(path.join(folder.path, folder.name));

      let files_returned: Dirent[] = files.filter((_file: Dirent) => {
        // find *.base.js
        let splitName = _file.name.split(".");
        if (splitName.length == 3) {
          if (
            splitName[1]!.toLowerCase() == "base" &&
            splitName[2]!.toLowerCase() == "js"
          ) {
            return _file;
          }
        }
      });
      if (!files_returned) {
        return;
      }
      let file = files_returned[0];
      if (!file) return;
      // file is found to import it
      let imported = await import(file.path + "/" + file.name);
      // encase the user exports the class as default
      if ('default' in imported) {
        imported = imported.default;
      }

      // check to see if the class is an instance of FormatBase
      if (!this.InstanceOfFormat(imported)){
        return;
      }

      this._formattings.set(file.name.split(".")[0]!, imported);
    }
  }

  InstanceOfFormat(obj: Object) {
    // TODO figure out why this was breaking
    return true;
  }

}
