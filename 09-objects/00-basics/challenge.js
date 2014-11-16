//module.exports.createCourse = undefined;

var createCourse = function(x,y,z)
{
  var course = new Object;
  course = 
  {
    courseTitle: x,
    courseDuration: y,
    courseStudents: z,
  };
    console.log(course);
    return course;
};

createCourse('Bloc Front-End Engineering', '4 weeks',['Joe','Tim','Rob'])

//module.exports.addProperty = undefined;

var addProperty = function(object,newProp,newValue)
{
  //var object = new Object; // ("object" is created but its properties remain unassigned. - is first assigned with input)
    if (object.hasOwnProperty('firstName')) 
      {
        console.log(object);
      }
    else
      {
        object[newProp] = newValue; // REMEMBER: object[x] = content (property name) of variable x |BUT| object['x'] or object.x = x as property name
        console.log(object);
      }
  return object;
};

addProperty({}, 'firstName', 'Jim'); // returns {firstName : 'Jim'} (adds property and name) -> REMEMBER: Object is already created, but is empty!
addProperty({firstName: 'Rob'}, 'firstName', 'Jim'); // returns {firstName : 'Rob'} (doesn't add property, and doesn't overwrite name)


//module.exports.formLetter = undefined;

var formLetter = function(letter)
{
  var newLetter = "Hello " + letter.recipient +", \n\n" + letter.msg + "\n\nSincerely, \n"+ letter.sender;
  console.log(newLetter);

};

formLetter({recipient: "James", sender: "Richard", msg: "Things are well."});

//module.exports.canIGet = undefined;

var canIGet = function(item, money)
{
var priceList =
  {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1,
  };

  if (priceList.hasOwnProperty(item))
  {
    if (money >= priceList[item]) //Remember to call the existing variable instead of naming and creating a new property.
    {
      console.log("true");
      return true;
    }
  }
  console.log("false");
  return false;
};

canIGet('MacBook Air', 100);
canIGet('MacBook Air', 1000);



