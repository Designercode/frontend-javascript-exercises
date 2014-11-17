//module.exports.helloWorld = undefined;

var hello = function()
{
  return "Hello World";
};


//module.exports.multiply = undefined;


var multiply = function(x,y)
{
  var isNum = isNaN(x);
  var isAlsoNum = isNaN(y);
    if ((isNum == false) && (isAlsoNum == false));
    {
      return (x*y);
    }
    return console.log("Sorry, you did not enter number values.");
};

multiply(10,10); 
multiply(a,b);

