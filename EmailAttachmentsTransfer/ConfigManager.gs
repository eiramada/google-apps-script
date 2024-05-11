// Configuration file holding all variable declarations and API tokens.
var ConfigManager = (function () {
  var config = null;

  function initConfig() {
    var scriptProperties = PropertiesService.getScriptProperties();

    var labelsJson = scriptProperties.getProperty('labels');
    var labels = labelsJson ? JSON.parse(labelsJson) : [];
    var path = scriptProperties.getProperty('folderPath') || "default/path/";

    config = {
      labels: labels,
      folderPath: path
    };

    Logger.log("Configuration initialized:", config.labels, config.folderPath);
    console.log("Configuration initialized: ", config.labels, config.folderPath)
  }

  // Automatically initialize the configuration upon module definition
  initConfig();

  function getConfig() {
    return config; // Since config is initialized immediately, it's always ready to use
  }

  return {
    getConfig: getConfig
  };
})();

// Accessing configuration
var CONFIG = ConfigManager.getConfig();
