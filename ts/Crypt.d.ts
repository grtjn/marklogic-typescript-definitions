// Type definitions for Crypt
// Definitions: 

/**
Builtin functions relating to cryptography.
**/

declare module Crypt {

  interface xdmp {

    /** Calculates the password hash for the given password and salt. **/
    crypt(password: String, salt: String): String;

    /** Calculates the password hash for the given plain-text password. **/
    crypt2(password: String): String;


  }
}
