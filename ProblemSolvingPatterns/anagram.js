//anagram based off frequency counter pattern. A more optimal solution may be to use hash tables but this solution works too. O(n)

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    //if letter is in the string increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    //can't find letter || letter = 0 then it is not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));
