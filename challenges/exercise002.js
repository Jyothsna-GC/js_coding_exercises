function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester"
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40);
  }

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  for (let i in arr) {
    if (arr[i] === "sheep") {
       count++;}}
   return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  for (let i in person) {
   return ((
     ((person.address.city) == "Manchester") &&
     (person.address.postCode.startsWith('M')) === true) ? true : false);
}
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
