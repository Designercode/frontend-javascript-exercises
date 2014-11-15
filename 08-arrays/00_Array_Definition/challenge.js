//module.exports.newArray = undefined;

var newArray = function(w,x,y,z)
{
  var myArray = [w,x,y,z];
  console.log(myArray);
  return myArray;
};

newArray(1,2,3,4);

//module.exports.firstAndLast = undefined;

firstAndLast = function(atLeast3)
{
      if (atLeast3.length > 2) 
        {
          var end = atLeast3.length -1; // REMEMBER: .length = the number of elements, not the [] Index (-1).
          console.log("length =" + end);
          var zero = atLeast3[0].toString();
          var last = atLeast3[end].toString();
          console.log("return =" + zero + " " +last);
          return atLeast3[0,end]; 
        }
    console.log("You need at least 3 elements in your array.");  
    return "Sorry, your array doesn't contain enough elements.";
};

firstAndLast(['one',3,'cool',4]);
firstAndLast([1,2]);
