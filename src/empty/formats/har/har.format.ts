export interface Har {
    log: Log;
}

export interface Log {
    version: string;
    creator: Browser;
    browser: Browser;
    pages:   Page[];
    entries: Entry[];
}

export interface Browser {
    name:    string;
    version: string;
}

export interface Entry {
    startedDateTime:  Date;
    request:          Request;
    response:         Response;
    cache:            Cache;
    timings:          Timings;
    time:             number;
    _securityState:   SecurityState;
    serverIPAddress?: ServerIPAddress;
    connection?:      string;
    pageref:          Pageref;
}

export enum SecurityState {
    Secure = "secure",
}

export interface Cache {
    afterRequest?: null;
}

export enum Pageref {
    Page1 = "page_1",
}

export interface Request {
    bodySize:    number;
    method:      Method;
    url:         string;
    httpVersion: HTTPVersion;
    headers:     Cooky[];
    cookies:     Cooky[];
    queryString: Cooky[];
    headersSize: number;
    postData?:   PostData;
}

export interface Cooky {
    name:  string;
    value: string;
}

export enum HTTPVersion {
    HTTP3 = "HTTP/3",
}

export enum Method {
    Get = "GET",
    Post = "POST",
}

export interface PostData {
    mimeType: MIMEType;
    params:   any[];
    text:     string;
}

export enum MIMEType {
    ApplicationJSON = "application/json",
    ApplicationJSONCharsetUTF8 = "application/json; charset=utf-8",
    TextXML = "text/xml",
}

export interface Response {
    status:      number;
    statusText:  string;
    httpVersion: HTTPVersion;
    headers:     Cooky[];
    cookies:     Cooky[];
    content:     Content;
    redirectURL: string;
    headersSize: number;
    bodySize:    number;
}

export interface Content {
    mimeType: MIMEType;
    size:     number;
    text:     string;
}

export enum ServerIPAddress {
    The162159138232 = "162.159.138.232",
}

export interface Timings {
    blocked: number;
    dns:     number;
    connect: number;
    ssl:     number;
    send:    number;
    wait:    number;
    receive: number;
}

export interface Page {
    id:              Pageref;
    pageTimings:     PageTimings;
    startedDateTime: Date;
    title:           string;
}

export interface PageTimings {
    onContentLoad: number;
    onLoad:        number;
}

