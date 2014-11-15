//module.exports.favoriteNumber = undefined;

var favoriteNumber = function(x)
{
  var favNum = 20;
    if (x > favNum)
      {
        console.log("Too high");
      }
    else if (x < favNum)
      {
        console.log("Too low");
      }
    else if (x == favNum)
      {
        console.log("You got it!");
      }
};

favoriteNumber(12);
favoriteNumber(34);
favoriteNumber(20);

//module.exports.checkLock = undefined;

var checkLock = function(w,x,y,z)
{
  if ((w == 3) || (w == 5) || (w == 7))
  {
    if (x == 2)
    {
      if ((y >= 5) && (y<=100))
      {
        if ((z < 9) || (z > 20))
        {
          return "correct"; 
        }

      }
    }
  }
  return "incorrect";
};

checkLock(5,2,45,1);
checkLock(1,2,45,1);
checkLock(5,2,45,10);

//module.exports.canIGet = undefined;

var canIGet = function(item, money)
{
  if (item == 'MacBook Air')
  {
    if (money >= 999)
    {
      return true;
    }
  } 
  else if (item == 'MacBook Pro')
  {
    if (money >= 1299)
    {
      return true
    }
  }
  else if (item == 'Mac Pro')
  {
    if (money >= 2499)
    {
      return true;
    }
  }
  else if (item == 'Apple Sticker')
  {
    if (money >= 1)
    {
      return true;
    }
  }
  return false;
};

canIGet('MacBook Air', 100);
canIGet('MacBook Air', 1000);
canIGet('Mac Pro', 500);





