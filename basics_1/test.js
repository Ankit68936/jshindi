//immediately woke up function

(function abc() {
  //   console.log("hello World");
})();

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums = myNums.filter((num) => {
  return num > 4;
});
// console.log(newNums);

const newNum = myNums.map((num) => num + 1);
console.log(newNum);

