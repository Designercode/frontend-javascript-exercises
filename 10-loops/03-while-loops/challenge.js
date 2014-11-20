
// I am still having trouble with the steam function...

//module.exports.stream = undefined;
var conditionalFn = function() 
{ 
  var counter = 10;
    for (counter; counter < 10; counter --)
      {
        if (counter < 7)
          {
            return false;
          }
        else 
          {
            return true; // Should return "true" 3 times.
          }
      }
};

var actionFn = function() 
{ 
    console.log("Hello!"); // Won't print in the console without being called.
};

var stream = function(conditionalFn, actionFn) //Should be: function(true,"Hello") 3 times...
{
  while (conditionalFn != false) 
    {
       actionFn(); //This is not printing, and I don't understand why.
    }
};


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
