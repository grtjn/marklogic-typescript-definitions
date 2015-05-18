// Type definitions for SSL
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/SSLBuiltins.xml

/**
   The SSL built-in functions are miscellaneous extensions to the
   XQuery core library that expose SSL functionality.
 **/

declare module SSL {

  interface ssl {

    /** Returns the XML representation of the specified X.509 certificate. **/
    x509CertificateExtract(cert: xs:string): element();

    /** Calculates the md5 hash of the given argument. **/
    md5(data: any, encoding?: xs:string): xs:string;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the md5 hash function of the given secret key and message arguments. **/
    hmacMd5(secretkey: any, message: any, encoding?: xs:string): xs:string;

    /** Calculates the SHA1 hash of the given argument. **/
    sha1(data: any, encoding?: xs:string): xs:string;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the SHA1 hash function of the given secret key and message arguments. **/
    hmacSha1(secretkey: any, message: any, encoding?: xs:string): xs:string;

    /** Calculates the SHA256 hash of the given argument. **/
    sha256(data: any, encoding?: xs:string): xs:string;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the SHA256 hash function of the given secret key and message arguments. **/
    hmacSha256(secretkey: any, message: any, encoding?: xs:string): xs:string;

    /** Calculates the SHA384 hash of the given argument. **/
    sha384(data: any, encoding?: xs:string): xs:string;

    /** Calculates the SHA512 hash of the given argument. **/
    sha512(data: any, encoding?: xs:string): xs:string;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the SHA512 hash function of the given secret key and message arguments. **/
    hmacSha512(secretkey: any, message: any, encoding?: xs:string): xs:string;


  }
}
