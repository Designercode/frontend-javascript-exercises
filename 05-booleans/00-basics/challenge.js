//Exercise 1
var equalStrings = function(stringOne, stringTwo) 
{
  var myBool = (stringOne == stringTwo);
  return myBool;
};

equalStrings("fun", "fun");
equalStrings("bloc", "boring");


//Excercise 2
var notEqual = function(one, two) 
{
  var myBool = (one !== two);
  return myBool;
};

notEqual(1,'1');
notEqual(1,1);

//Excercise 3
var inBetween = function(lower, middle, upper) 
{
  var myBool = ((lower < middle) && (middle < upper));
  return myBool;
};

inBetween(1,3,5);
inBetween(3,1,5);

//Excercise 4
var outsideRanges = function(number) 
{
  var between = (!(number >=10) && !(number <=20));
  var exact = (!(number <42) && !(number >42));
  var not = (!(number <=75));
  var notBetween = (!(number >1) && !(number <6));
  if(between == true)
  {
    if (exact == true)
    {
      if(not == true)
      {
        if(notBetween == true)
        {
          return true;
        }
      }
    }
  }
return false;
};

outsideRanges(42);
outsideRanges(75);

//Excercise 5
var nameAndPrice = function(name, price) 
{
  if (((name == 'NYTimes') || (name = 'LATimes')) && (price >= 1));
    {
      return true;
    }
 return false;
};

nameAndPrice('NYTimes', 1);
nameAndPrice('LATimes', 0);
nameAndPrice('NYTimes', 0);













