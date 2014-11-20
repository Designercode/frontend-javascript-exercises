//module.exports.copy = undefined;

var copy = function(copied)
{
  var objectCopy = {};
    for (var prop in copied)
    {
      objectCopy[prop] = copied[prop]; // JS is smart.
    }
  console.log(objectCopy);
  return objectCopy;
};

copy({name: "Rob"})

//module.exports.extend = undefined;

var extend = function(dest,src)
{
  for (var prop in src)
  {
    if (src.hasOwnProperty[prop])
      {
        dest[prop] = src[prop];
      }
    else 
      {
        dest[prop] = src[prop]; // Add new info from Source into Destination...
      }
  }
  console.log(dest);
  return dest;
};

extend({name: "Rob"}, {age: 101});
extend({name: "Rob"}, {name: "Steve"});

//module.exports.hasElems = undefined;

var hasElems = function(obj,arr)
{
  var i = 0;
  var compare; 
  var tempArray = []; 
    for (var prop in obj)
    {
      tempArray.push(prop);
    }

    tempArray.sort();
    arr.sort();

    for (i = 0; i < tempArray.length; i ++)
    {
      if (tempArray[i] == arr[i])
      {
        compare = true;
      }
      else
      {
        compare = false; // Why isn't the "false" overwritten by the next "true" match?
      }
    }
  console.log(compare);
};

hasElems({item: "ice cream", flavor: "banana", color: "yellow"},["item","flavor","color"]);
hasElems({item: "ice skates", brand: "Vandina", color: "blue"},["item", "size", "color"]);



