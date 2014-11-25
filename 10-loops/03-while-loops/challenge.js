
//module.exports.stream = undefined;
var stream = function(conditionalFn, actionFn)
{
  while (conditionalFn() != false) 
    {
       actionFn();
    }
};

conditionalFn = function() { return false; };
actionFn = function() { console.log("Hello!"); };
stream(conditionalFn, actionFn); // Prints nothing.

counter = 10;
conditionalFn = function() { 
  counter--;
  return counter >= 0; 
};
stream(conditionalFn, actionFn); // should print "Hello" 10 times.

//module.exports.sumNumbers = undefined;


var sumNumbers = function(ArrayOfNum)
{
  var x = 0;
  var total = 0;
  while (x < ArrayOfNum.length)
  {
    var current = ArrayOfNum[x];
    total = total + current;
    x++;
  }
  console.log(total);
};

sumNumbers([]);
sumNumbers([1,2,3,4]);

// Question: Why can't I use "null" or "undefined" to find the end of an array?
// Aka: while (ArrayOfNum != null) 
