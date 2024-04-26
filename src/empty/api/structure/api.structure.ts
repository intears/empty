
import { RequestStructure } from "./request.structure"
import { ResponseStrucutre } from "./response.structure"
/**
 * @class ApiStructure
 * interface for the base of the structure for a API
 * this will connect to every endpoint that is given giving separete items per
 */
export class ApiStructure {
  /**
   * this is going to contain all the reuqest that are connected to a uri and a array of request and responses
   */
  public requests: Map<string, {request: RequestStructure, response: ResponseStrucutre}[]>

  constructor() {
    this.requests = new Map()
  }

}
