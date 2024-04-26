import {ApiStructure} from "../api/structure/api.structure";

export interface FormatBase {
  /**
   * when this file is used this is where the logic will happen
   * split the data into the correct format
   */
  init(): ApiStructure;

  payload: any;
}
