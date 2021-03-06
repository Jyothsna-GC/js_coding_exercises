function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let sqrs = [ ];
  for(let i in nums) {
  sqrs.push(Math.pow(nums[i], 2));} return sqrs;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result="";
  words.forEach(myFunction);
  function myFunction(i, indx) {
          let add = i.toLowerCase();
    result += (indx === 0 ? add : add[0].toUpperCase() + add.slice(1));
      };
      return result;
  }

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count, tc = 0;
  for (let i = 0; i<people.length; i++) {
    count = (people[i].subjects.length);
    tc = tc + count ;
  }return tc;
  }

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let result = false;
  for (let i in menu) {
  if (menu[i]['ingredients'].includes(ingredient)) {
    return true;
  }
  }
  return result;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const myarr = [];
    for (let i in arr1) {
      if(!myarr.includes(arr1[i]) && arr2.includes(arr1[i])) {
      myarr.push(arr1[i]);
    }
  }
  return myarr.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
