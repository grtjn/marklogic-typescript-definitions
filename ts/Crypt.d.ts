// Type definitions for Crypt
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Crypt.xml

/**
Builtin functions relating to cryptography.
**/

declare module Crypt {

  interface  {

    /** Calculates the password hash for the given password and salt. **/
    crypt(password: xs:string, salt: xs:string): xs:string;

    /** Calculates the password hash for the given plain-text password. **/
    crypt2(password: xs:string): xs:string;


  }
}
