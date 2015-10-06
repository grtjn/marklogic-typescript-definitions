// Type definitions for StatusBuiltins
// Definitions: 

/**
  The Server Monitoring built-in functions include functions that provide
  monitoring information about internal conditions of MarkLogic Server and
  includes the xdmp:request-cancel function which is used to
  cancel a running request.
**/

interface xdmpFunctions {

    /** Returns the status of a host as a JSON node. **/
  hostStatus(hostId: string): ValueIterator<any>;

    /** Returns whether fips mode is enabled. **/
  hostGetSslFipsEnabled(hostId: string): boolean;

    /** Returns the status of the caches as a ValueIterator of ObjectNodes. **/
  cacheStatus(hostId?: string): ValueIterator<any>;

    /** Returns the status of a forest as a ValueIterator of ObjectNodes. **/
  forestStatus(forestId: string): ValueIterator<any>;

    /** Returns true if the specified forest is online with a state of open, open replica or sync replicating if isReplica is true, or syncing replica if syncingOk is true, otherwise returns false. **/
  forestOnline(forestID: string, timestamp?: string, isReplica?: boolean, syncingOk?: boolean): boolean;

    /** Returns the status of an app-server on a host as a ValueIterator of ObjectNodes. **/
  serverStatus(hostId: string, serverId: string): ValueIterator<any>;

    /** Returns detailed forest statistics for a given forest as a ValueIterator of ObjectNodes. This built-in may require significantly more processing time than xdmp:forest-status. **/
  forestCounts(forestId: string, showElements?: string, options?: string): ValueIterator<any>;

    /** Returns the status of a running request as a ValueIterator of ObjectNodes. If the request ID is that of the calling request, then no special permission is required. If the ID is for another request, then the calling request needs http://marklogic.com/xdmp/privileges/status permission. The result of this builtin is exactly equivalent to xdmp:server-status(xdmp:host(), xdmp:server())//*:request-status[*:request-id = $req], where $req is the ID of the request you are interested in. In the 3.2 release this builtin is not cluster-aware, the first argument (host ID) must be the same as the value returned by xdmp:host(). If you wish to obtain the status of a request running on a remote host, use the code snippet above to obtain the request status using xdmp:server-status(). **/
  requestStatus(hostId: string, serverId: string, requestId: string): ValueIterator<any>;

    /** Returns the status of a foreign cluster from a host's point of view as a JSON node. **/
  foreignClusterStatus(hostId: string, foreignClusterId: string): ObjectNode;

}
declare var xdmp:xdmpFunctions
