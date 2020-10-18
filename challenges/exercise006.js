/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if(!Array.isArray(arr)) throw new Error("an Array is required");
  //loop through the array
  //if the number is divisable 3 or 5, add to a total
  //return total
  let total = 0;
  arr.forEach(n=> {
    if (n%5 === 0 || n%3 === 0) {
    total += n;
    }
  });
  return total;
};

/**
 * This function will receive a string of characters and should return true/false 
 * depending on whether it is a valid DNA string. A valid DNA string may contain 
 * characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof(str) !== "string") throw new Error("str must be a String");
  if (str.match(/(^[CGTA]*$)/)) {return true} else {return false};
};

/**
 * This function will receive a valid DNA string (see above) and should return 
 * a string of the complementary base pairs. In DNA, T always pairs with A, and C 
 * always pairs with G. So a string of "ACTG" would have a complementary DNA string
 * of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof(str) !== "string") throw new Error("must be a String");
  if (str.match(/[^GCTA]/)) throw new Error("must have only CGTA");
  return str.split("").map(char => {
    if (char == "C") { return "G" }
    if (char == "G") { return "C" }
    if (char == "T") { return "A" }
    if (char == "A") { return "T" }
  }).join("")
};

/**
 * This function should receive a number and return true/false depending on 
 * whether it is a prime number or not. A prime number is a number that can 
 * only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
  const isItPrime = n => {
    if (n === undefined) throw new Error("Number required");
    if (typeof(n) !== "number") throw new Error("must be a Number");
    let p = true
    if(n < 3) { p = false }
    for (let  i = 2; i < n; i++) {
      if(n % i == 0) { p = false }
    }
    return p
};

/**
 * This function should receive a number and return an array of n arrays, each 
 * filled with n items. The parameter "fill" should be used as the filler of 
 * the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members 
 * are required per day. The function should return true/false depending on whether
 * there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
