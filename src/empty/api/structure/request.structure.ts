
import { RequestType } from "../utils";
import { ResponseStrucutre } from "./response.structure";
/**
 * @interface
 * this contains all the information from a single URL request
 */
export interface RequestStructure {
  /**
   * the type of rest request that we wanted
   */
  method: RequestType;
  /**
   * the url that the request sent
   */
  url: string;

  /**
   * the body of the request if needed
   * @type {string | Object}
   */ 
  body?: object | string;


  /**
  * the cookies that were sent with the request
  */
  cookies?: Map<string, string>

  /**
  * the headers sent with the reqeuest
  * cookies should be put in cookies
  */
  headers?: Map<string, string>
}
