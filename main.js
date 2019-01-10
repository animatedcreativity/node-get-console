var consoleData = "";
var oldConsoleLog = console.log;
console.log = function(data) {
  if (consoleData != "") consoleData += "\n";
  consoleData += JSON.stringify(data);
  oldConsoleLog.apply(console, arguments);
}
var oldConsoleClear = console.clear;
console.clear = function() {
  consoleData = "";
  oldConsoleLog.apply(console, arguments);
}
console.get = function() {
  return consoleData;
}