//Write a function called vowelCount which accepts a string and returns a map where the keys arenumbers and the values are the count of the vowels in the string.


function isVowel(char)
{
 return  "aeiou".includes(char)
}
function vowelCount(str)
{
  const vowelMap = new Map();
  for(let char of str)
  {
      let lowerCaseChar=char.toLowerCase()
      if(isVowel(lowerCaseChar)){
          if(vowelMap.has(lowerCaseChar)){
              vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1)
            }else{
                vowelMap.set(lowerCaseChar,1);
            }
        }
    }
    return vowelMap
}
let res = vowelCount("granite")
console.log(res)