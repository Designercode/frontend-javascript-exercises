//module.exports.reversePlusOne = undefined;
var reversePlusOne = function(atLeast2)
{
  if (atLeast2.length > 1)
  {
    atLeast2.reverse();
    atLeast2.unshift(1);
    console.log(atLeast2);
    return atLeast2;
  }
  console.log("Your array is too short!");
  return "Sorry, your array doesn't contain enough elements.";
};

reversePlusOne([3])
reversePlusOne([1,2]);
reversePlusOne([5,4,3,2]);

//module.exports.plusesEverywhere = undefined;

var plusesEverywhere = function(addPluses)
{
  if (addPluses.length > 1)
  {
    addPluses = addPluses.toString(); // REMEBER: it must be reassigned to the variable!
    addPluses = addPluses.replace(/,/g, "+");
    console.log(addPluses);
    return addPluses;
  }
  console.log("Your array is too short!");
  return "Sorry, your array doesn't contain enough elements.";
};

plusesEverywhere([9]);
plusesEverywhere([1,2,3]);
plusesEverywhere([18,24])

//module.exports.arrayQuantityPlusOne = undefined;

var arrayQuantityPlusOne = function(mustBeArray)
{
  var plusOne;
    if (mustBeArray.constructor == Array)
      {
        plusOne = mustBeArray.length + 1;
        console.log(plusOne);
        return plusOne;
      }
      console.log("Hey, that is not an array!");
      return "Sorry, your array doesn't contain enough elements.";
};

arrayQuantityPlusOne(42);
arrayQuantityPlusOne([0,0,1,0,2,1]);
arrayQuantityPlusOne([42]);
