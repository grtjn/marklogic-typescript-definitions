// Type definitions for PluginModule
// Definitions: 

/**
	The Plugin API module contains functions that allow you to 
		register plugins for use by MarkLogic Server. 	
The Plugin API is installed as the following file:
   install_dir/Modules/MarkLogic/plugin/plugin.xqy 
 
where install_dir is the directory in which 
   MarkLogic Server is installed.
 To use the plugin.xqy module in your own XQuery modules, 
    include the following line in your XQuery prolog:

  
   import module namespace plugin = "http://marklogic.com/extension/plugin"  
      at "/MarkLogic/plugin/plugin.xqy";
  
The library uses the plugin: namespace, which is 
   not predefined in the server.
**/

declare module PluginModule {

  interface plugin {

    /** This function returns unique IDs of the registered plugins that have the specified capabilities. If no matching plugins are registered, an empty sequence is returned. **/
    plugins(capability: String, scope?: String): String;

    /** This function enumerates functions implementing all capabilities supported by the given plugin. It returns a map, keyed on the capabilities. **/
    enumerate(uri: String, scope?: String): Object;

    /** This function returns a function pointer implementing a given capability from a particular plugin. If the plugin doesn't exist an exception is thrown. If the plugin does exist but the capability isn't present, an empty sequence is returned. **/
    capability(capability: String, uri: String, scope?: String): Object;

    /** This function returns a map referencing all of the plugins that implement the specified capability. If no plugins implement the given capability, returns an empty map. **/
    implementations(capability: String, scope?: String): Object;

    /** This function registers the capabilities map for use by MarkLogic Server. It returns the URI of the plugin. **/
    register(capabilities: Object, pluginUri: String): String;

    /** This function ensures the availability of all plugins from a given scope. A scope is a directory relative to marklogic-dir/Assets/plugins. Attempting to reload the System scope (with an empty string for $scope) has no effect (and hence returns 0). Any application that calls this function must do so through a function amped to the application-plugin-registrar role. This function MUST be called by an application before querying or enumerating plugins (or else see an empty set of available plugins). Even if called on every request, this function will only load from the directory on the first call. This function checks the global debug flag, and if true, forces a reload on every request. **/
    initializeScope(scope: String): Number;

    /** This function unloads all application plugins from a given scope. Note that system plugins are unaffected by this function. Like plugin:initialize-scope, this function requires the application-plugin-registrar role. **/
    flushScope(scope: String, pid?: String): void;

    /** Installs a Library Module plugin from a zip file provided as a parameter into the Extensions database. Any application that calls this function must do so through a function amped to the application-plugin-registrar role. Returns an integer representing the number of plugins installed. **/
    installFromZip(scope: String, zip: Node): Number;

    /** This function removes a named plugin or set of plugins from the extensions database. **/
    uninstall(scope: String, pid: String): void;

    /** Returns the named asset, which must exist in the assets/ directory of the plugin, as stored in the Extensions database. This will only return a value for Library Module plugins. **/
    asset(pid: String, scope: String, assetPath: String): Node;

    /** Returns true if the named asset exists, otherwise returns false. **/
    assetExists(pid: String, scope: String, assetPath: String): Boolean;

    /** This function installs a Library Module plugin from a fixed location on the filesystem (Assets/plugins/...) into the Extensions database. Any application that calls this function must do so through a function amped to the application-plugin-registrar role. It returns the number of plugins installed. **/
    installFromFilesystem(scope: String): Number;


  }
}
