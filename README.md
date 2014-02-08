console_logger
==============

Extending Node.JS console object with persistent logging

----------
Objective:
----------

  (1) When require()'d into a project, this module (single JS file) should overload node.js console.log() to allow existing functionality while also writing to a persistent log file (
  
    
    if(console.persistence.on == true and typeof(persistence.logFile)==string and persistence.logFile.length>0)
    
  
  (2) When require()'d into a project, this module (single JS file) should overload node.js console.err() to allow existing functionlity while also writing to a persistent log file (
  
  
    if(console.persistence.on==true and typeof(persistence.errorFile)==string and persistence.errorFile.length>0)
    
  
  (3) Add functionality to console whereby the developer can control the console's persistence by turning on persistent logging (console.persistence.on and console.persistence.off).
  
  
  
  (4) Add functionality to console whereby the developer can define log files for stdout and stderr in realtime (e.g. by defining console.persistence.log and console.persistence.error.
  
  
  
-------------------
console.persistence
-------------------

root.console.persistence={

  var state:false,
  var logFile:'',
  var errorFile:'',

  on:<Read-only Property>,
  off:<Read-only Property>,

  log:function(messageString){/*Writes to logFile*/},
  error:function(messageString){/*Writes to errorFile*/}
  
  
}
