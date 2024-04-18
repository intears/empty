export interface ResponseStrucutre {

  response: string | Object;
  /**
  * the cookies that were received with the request
  */
  cookies?: Map<string, string>

  /**
  * the headers received with the reqeuest
  * cookies should be put in cookies
  */
  headers?: Map<string, string>
}
