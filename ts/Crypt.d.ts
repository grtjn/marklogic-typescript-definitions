// Type definitions for Crypt
// Definitions: 

/**
Builtin functions relating to cryptography.
**/

interface xdmpFunctions {

    /** Calculates the password hash for the given password and salt. **/
  crypt(password: string, salt: string): string;

    /** Calculates the password hash for the given plain-text password. **/
  crypt2(password: string): string;

}
declare var xdmp:xdmpFunctions
