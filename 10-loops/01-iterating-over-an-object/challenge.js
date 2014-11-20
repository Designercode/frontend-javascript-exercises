//module.exports.getKeys = undefined;

var getKeys = function(profile)
{
  var returnArray = []; //Remember to define empty arrays.
    for (var prop in profile)
    {
      returnArray.push(prop);
    }
  console.log(returnArray);
  return returnArray;
};

getKeys({name:"Rob", age: 101});

//module.exports.getValues = undefined;

var getValues = function(profile2)
{
  var valueArray = [];
    for (var key in profile2)
    {
          var value = profile2[key]; 
          valueArray.push(value);
    }    
  console.log(valueArray);
  return valueArray;
};

getValues({name:"Rob", age: 101});

//module.exports.objectToArray = undefined;

var objectToArray = function(input)
{
  var result;
  var newArray = [];
    for (var prop in input)
    {
      result = prop + " is " + input[prop];
      newArray.push(result);
    }
console.log(newArray);
return newArray;

};

objectToArray({name:"Rob", age: 101});
