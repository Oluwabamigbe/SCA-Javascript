// complete the function
function palindrom(str) {
  // code goes here
  var reversed = str.split("").reverse().join("");
  if (reversed === str) {
        return "this is a palindrome";
      }
  else{
        return "this is NOT a palindrome";
      }
}
   console.log(palindrom("eye"));
   

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution }