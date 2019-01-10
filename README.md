# node-get-console
Very simple way to get console.log data.

Example:

require("node-get-console"); //start using new console<br/>
console.log("First");<br/>
console.log("Second");<br/>
console.log(console.get()); //get previously logged data<br/>
console.clear(); //clear console<br/>
console.log(console.get()); //cleared already
