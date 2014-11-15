//module.exports.addItem = undefined;

var addItem = function(endOfList, ArrayOfItems) // Don't add items that already exist in list!
{
  var index = ArrayOfItems.indexOf(endOfList);
    if (index == -1)
      {
        ArrayOfItems.push(endOfList);
        console.log("New item has been added to list.");
        console.log(ArrayOfItems);
        return ArrayOfItems;
      }
  console.log("Item cannot be added to the list because it is already in the list.");
  console.log(ArrayOfItems);
  return "Cannot be added to list.";
};

addItem(1,[5,4,3,2]);
addItem("brown",["green","yellow"]);
addItem("brown",["green","yellow","brown"]);

//module.exports.reverseSortedList = undefined;

var reverseSortedList = function(SortedArray)
{
  SortedArray = SortedArray.sort();
  SortedArray = SortedArray.reverse();
  console.log(SortedArray);
  return SortedArray;
};

reverseSortedList([2,4,1,5,3]);
reverseSortedList(["b","d","q",'a']);