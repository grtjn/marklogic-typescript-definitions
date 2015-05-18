// Type definitions for TransactionBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/TransactionBuiltins.xml

/**
  Use these XQuery functions for manipulating transactions. You will
     usually only need these functions if you develop or administer
     applications using multi-statement transactions. For a detailed
     discussion of multi-statement transactions, see "Understanding
     Transactions in MarkLogic Server" in the Application Developer's
     Guide
  
**/

declare module TransactionBuiltins {

  interface xdmp {

    /** Retrieve the transaction mode for the current session. Returns one of "auto", "update", "update-auto-commit", or "query". **/
    getTransactionMode(): xs:string;

    /** Set the transaction mode for the current session. Calling this function has no effect on existing transactions. **/
    setTransactionMode(value: xs:string): void;

    /** Returns the transaction ID for the current transaction, or transaction IDs for all transactions with the given name. **/
    transaction(txnName?: xs:string, hostId?: xs:unsignedLong): xs:unsignedLong;

    /** Set the name of a local or remote transaction. **/
    setTransactionName(name: xs:string, hostId?: xs:unsignedLong, txnId?: xs:unsignedLong): void;

    /** Set the transaction time limit for a local or remote transaction. Defaults to the configured request timeout. **/
    setTransactionTimeLimit(timeLimit: xs:unsignedInt, hostId?: xs:unsignedLong, txnId?: xs:unsignedLong): void;

    /** Commit the current transaction to the database. **/
    commit(): void;

    /** Roll back the current transaction. **/
    rollback(): void;

    /** Explicitly commit a transaction running on a named host. **/
    transactionCommit(hostId: xs:unsignedLong, txnId: xs:unsignedLong): void;

    /** Explicitly roll back a transaction running on a named host. **/
    transactionRollback(hostId: xs:unsignedLong, txnId: xs:unsignedLong): void;

    /** Completes (commits or rolls back) a prepared XA transaction. **/
    xaComplete(forestID: xs:unsignedLong, txnId: xs:unsignedLong, commit: xs:boolean, remember: xs:boolean): void;

    /** Forgets a remembered completed XA transaction. **/
    xaForget(forestID: xs:unsignedLong, txnId: xs:unsignedLong): void;


  }
}
