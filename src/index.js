const ItemMonitor = require("./services/ItemMonitor"); 

const itemMonitorInstance = new ItemMonitor();

console.log(itemMonitorInstance.findItemsByKeywords({marketplace:"us",language:"en", searchTerms:"jordan"}));