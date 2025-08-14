// 1 Codewars

function past(h, m, s){
  return (h * 3600 + m * 60 + s) * 1000;
}

// 2 Codewars

function grow(arr){
  let product = 1;
  for(let num of arr){
    product *= num;
  }
  return product;
}

// 3 Codewars

function countPositivesSumNegatives(input) {
  if(!input || input.length === 0) return [];
  
  let count = 0;
  let sum = 0;
  
  for(let num of input){
    if(num < 0) count++;
    else if(num < 0) sum += num;
  }
  return[count, sum]
}

// 4 Codewars

function replace(s) {
  let result = "";
  let vowels = "aeiouAEIOU"
  
  for (let i = 0; i < s.length ; i++)
    {
      if(vowels.includes(s[i])){
        result += "!";
      }else{
        result += s[i];
      }
    }
  return result
}

// 5 Codewars

function sameCase(a, b) {
    const isLetter = c => c.toLowerCase() !== c.toUpperCase();
    
    if (!isLetter(a) || !isLetter(b)) return -1;
    if ((a === a.toLowerCase() && b === b.toLowerCase()) || 
        (a === a.toUpperCase() && b === b.toUpperCase())) {
        return 1;
    }
    return 0;
}

// 6 Codewars

function printerError(s) {
  const errors = s.split('').filter(c => c > 'm').length;
  return `${errors}/${s.length}`;
}

// 7 Codewars

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}

// End...

