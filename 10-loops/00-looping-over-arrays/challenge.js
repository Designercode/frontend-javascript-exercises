//module.exports.sumNumbers = undefined;

var sumNumbers = function(ArrayOfNum)
{
  var total = 0; // REMEMBER: Always define variables, otherwise the return will be NaN or unidentified...
  var i = 0;
  var values = ArrayOfNum.length;
    for (i = 0; i < values; i++)
    {
      var current = ArrayOfNum[i];
      total = total + current;
    }
  console.log(total);
  return total;
};
sumNumbers([1,2,3]);
sumNumbers([]);

//module.exports.splitAndLowerCaseString = undefined;

/* NOTE: I can't seem to figure out how to split words directly into (array) values: aka: StringsToArrays[0] = "here", StringsToArrays[1] = "is"... etc. 
   which is how I thought .split() worked... but it seems that instead I have ['here, is, my, text, split, by, spaces, or, commas'] which 
   = only to StringsToArrays[0] unless I am mistaken... */

var splitAndLowerCaseString = function(StringsToArrays) 
{
  var i = 0; 
  var array = StringsToArrays.toLowerCase();
  array = array.split(' ,');
  for (i = 0; i < array.length; i++)
  {
    console.log(array[i])
  }
  return array; 
};

// returns lower-case strings that are placed into an array (seperated by spaces or commas)
splitAndLowerCaseString("TEST");
splitAndLowerCaseString("THIS,IS,SPLIT,BY,COMMAS");
splitAndLowerCaseString("THIS HAS NO COMMAS");

//module.exports.addIndex = undefined;

var addIndex = function(InputArray)
{
  var i = 0; 
  var result;
  var newArray = [];
    for (i = 0; i < InputArray.length; i++) 
      {
         var current = InputArray[i]; 
         result = i + " is " + current; 
         newArray.push(result); // REMEMBER: only need to push, not "reassign" to newArray
      }
  console.log(newArray);
  return newArray;
};

addIndex([1,2,3]);
addIndex(['My',1,'number']);