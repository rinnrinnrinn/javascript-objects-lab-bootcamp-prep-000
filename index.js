var recipes = {
  prop: "1",
  prop3: "3"
};

function updateObjectWithKeyAndValue(obj,key,value) {
   return Object.assign({}, recipes, { ['prop2']: "2" })
   return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes[prop2] = "2";
  return recipes;
}


function deleteFromObjectByKey(object, key) {
  var recipes2 = Object.assign({}, recipes2);
  delete recipes2.prop;
  return recipes2;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete recipes.prop;
 return recipes;
}
