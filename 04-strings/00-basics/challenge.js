// Excercise 1: Combine
var formLetter = function(firstName, senderName, message)
{
  var greeting = "Hello";
  firstName = ("\n\n" + firstName + ",");
  senderName = ("\n" + senderName); 
  message = ("\n\n" + message + "\n\nSincerely,");
  greeting = (greeting + firstName + message + senderName);
  return greeting;
};

formLetter("James", "Richard", "Things are well.");


//Excercise 2: Slice & Combine
var sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) 
{
  var stringA = bigString.substring(startA, endA);
  var stringB = bigString.substring(startB,endB);
  var stringC = stringA + stringB;
  return stringC;
};

sliceItAndCombineIt("This is a test",7,2,8,5)


//Excercise 3: First Match
var findFirstMatch = function(text, searchString) 
{
var found = text.indexOf(searchString); 
return found;
};

findFirstMatch("Roses are red!", "re");


//Excercise 4: Last Match
var findLastMatch = function(text, searchString) 
{
  var found = text.lastIndexOf(searchString);
  return found;
};

findLastMatch("Roses are red!", "re");


//Exercise 5: Substring
var substringBetweenMatches = function(text, searchString) 
{
  var first = text.indexOf(searchString);
  var last = text.lastIndexOf(searchString);
  var start = (first + 1);
  var end = (last - 1);
  return text.substring(start,end);
};

substringBetweenMatches("Roses are red, apples are really red.", "red");



