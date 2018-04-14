// time: O(n)
const isUnique = (string) => {
  let counter = {};
  let arr = string.split('');
  for( let i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) {
      return false;
    }
    counter[arr[i]] = true;
  }
  return true;
};

// time: O(n log n)
const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let sort1 = str1.split('').sort();
  let sort2 = str2.split('').sort();
  for ( let i = 0; i < str1.length; i ++ ) {
    if (sort1[i] !== sort2[i]) {
      return false;
    }
  }
  return true;
};

// time: O(n)
const urlify = (str, length) => {
  return str.split(' ').join('%20');
};

// time: O(n)
// space: constant space
var palyPerm = str => {
  let noSpaces = str.split('');
  let counterHash = {};
  noSpaces.forEach( el => {
    if (el in counterHash) {
      counterHash[el] += 1;
    } else if (el !== ' ') {
      counterHash[el] = 1;
    }
  });
  let odds = 0;
  let values = Object.values(counterHash);
  for ( let i = 0; i < values.length; i ++) {
    if (values[i] % 2 === 1) {
      odds += 1;
    }
    if (odds > 1) {
      return false;
    }
  }
  return true;
};


// time: O(n)
// 'hello', 'hell' => true, removal, insert
// 'hello', 'yello' => true, replace
// 'hello', 'hel' => false
var oneAway = (str1, str2) => {

  if (str1.length === str2.length) {
    return oneEditReplace(str1, str2);
  } else if (str1.length === str2.length + 1) {
    return oneEditInsert(str1, str2);
  } else if (str1.length + 1 === str2.length) {
    return oneEditInsert(str2, str1);
  }
  return false;
};

var oneEditInsert = (str1, str2) => {
  let i = 0;
  let j = 0;
  let differenceFound = false;
  while (i < str1.length && j < str2.length) {
    if (str1[i] !== str2[j]) {
      if (differenceFound) {
        return false;
      }
      differenceFound = true;
      i++;
    }
    else {
      i++;
      j++;
    }
  }
  return true;
};

var oneEditReplace = (str1, str2) => {
  let differenceFound = false;
  for (let i = 0; i < str1.length; i ++) {
    if (str1[i] !== str2[i]) {
      if (differenceFound) {
        return false;
      }
      differenceFound = true;
    }
  }
  return true;
};

// aabccccaaa => a2b1c4a3
var strcomp = str => {
  let result = '';
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (result[result.length-1] !== str[i]) {
      console.log(str[i]);
      result += str[i];
      counter++;
    } else if (str[i + 1] !== result[str.length - 1]) {
      counter++;
      result += counter;
      counter = 0;
    }
  }
  return result;
};
