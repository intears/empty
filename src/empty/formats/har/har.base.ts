import { ApiStructure } from "../../api/structure/api.structure";
import { FormatBase } from "../_formatBase";
import {Har} from "./har.format";
import {RequestStructure} from "../../api/structure/request.structure";
import {ResponseStrucutre} from "../../api/structure/response.structure";

export default class HarBase implements FormatBase{
  constructor() {
    
  }

  public payload: Har = {} as Har;

  init(): ApiStructure {
    let apiStructure: ApiStructure = new ApiStructure();

    // parse the payload into the apiStructure
    apiStructure.requests.set("test", [{request: {} as RequestStructure, response: {} as ResponseStrucutre}])


    return apiStructure;

  }

  parse(): ApiStructure | null {
    return null;   
  }
}
