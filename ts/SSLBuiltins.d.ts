// Type definitions for SSL
// Definitions: 

/**
   The SSL built-in functions are miscellaneous extensions to the
   XQuery core library that expose SSL functionality.
 **/

declare module SSL {

  interface ssl {


  }
  interface xdmp {

    /** Returns the XML representation of the specified X.509 certificate. **/
    x509CertificateExtract(cert: String): Node;

    /** Calculates the md5 hash of the given argument. **/
    md5(data: String, encoding?: String): String;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the md5 hash function of the given secret key and message arguments. **/
    hmacMd5(secretkey: String, message: String, encoding?: String): String;

    /** Calculates the SHA1 hash of the given argument. **/
    sha1(data: String, encoding?: String): String;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the SHA1 hash function of the given secret key and message arguments. **/
    hmacSha1(secretkey: String, message: String, encoding?: String): String;

    /** Calculates the SHA256 hash of the given argument. **/
    sha256(data: String, encoding?: String): String;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the SHA256 hash function of the given secret key and message arguments. **/
    hmacSha256(secretkey: String, message: String, encoding?: String): String;

    /** Calculates the SHA384 hash of the given argument. **/
    sha384(data: String, encoding?: String): String;

    /** Calculates the SHA512 hash of the given argument. **/
    sha512(data: String, encoding?: String): String;

    /** Calculates the Hash-based Message Authentication Code (HMAC) using the SHA512 hash function of the given secret key and message arguments. **/
    hmacSha512(secretkey: String, message: String, encoding?: String): String;


  }
}
