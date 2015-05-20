// Type definitions for TransactionBuiltins
// Definitions: 

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
    getTransactionMode(): String;

    /** Set the transaction mode for the current session. Calling this function has no effect on existing transactions. **/
    setTransactionMode(value: String): void;

    /** Returns the transaction ID for the current transaction, or transaction IDs for all transactions with the given name. **/
    transaction(txnName?: String, hostId?: String): String;

    /** Set the name of a local or remote transaction. **/
    setTransactionName(name: String, hostId?: String, txnId?: String): void;

    /** Set the transaction time limit for a local or remote transaction. Defaults to the configured request timeout. **/
    setTransactionTimeLimit(timeLimit: Number, hostId?: String, txnId?: String): void;

    /** Commit the current transaction to the database. **/
    commit(): void;

    /** Roll back the current transaction. **/
    rollback(): void;

    /** Explicitly commit a transaction running on a named host. **/
    transactionCommit(hostId: String, txnId: String): void;

    /** Explicitly roll back a transaction running on a named host. **/
    transactionRollback(hostId: String, txnId: String): void;

    /** Completes (commits or rolls back) a prepared XA transaction. **/
    xaComplete(forestID: String, txnId: String, commit: Object, remember: Object): void;

    /** Forgets a remembered completed XA transaction. **/
    xaForget(forestID: String, txnId: String): void;


  }
}
