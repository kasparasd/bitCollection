function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return (blueStart-bluePulled)/((blueStart-bluePulled) + (redStart-redPulled))
  }

  function past(h, m, s){
    const hToMs = h*60*60*1000;
    const mToMs = m*60*1000;
    const sToMs = s*1000;
    return hToMs+mToMs+sToMs;
  }

function calc (number) {
    let result = 0;
    for (let i = 0; i<=number; i++){
        result +=i;
    }
    return result;
}

function litres(time) {
    console.log(1.4*0.5);
    return (time%1)/0.5 - 1.4*0.5;
  }

  const areaOrPerimeter = function(l , w) {
    return l===w ? l**2 : l*2+w*2;
  };

  function enough(cap, on, wait) {
    return cap-on < wait ? on+wait-cap : 0;
  }


  function magNumber(info){
    const guns = {
      PT92 : 17,
      M4A1 : 30,
      M16A2 : 30,
      PSG1 : 5,
    }
    if(info[1]===0){
      return 0;
    }
    const bulletsInGun = guns[info[0]]
    const streets = info[1];
    console.log((streets*3)/bulletsInGun);
    return (((streets*3)/bulletsInGun)) > 1 ? Math.ceil((streets*3)/bulletsInGun): Math.floor((streets*3)/bulletsInGun);
  }

  // console.log(magNumber(["PT92", 6]));
  // console.log(magNumber(['M16A2',5]))

  // console.log(5*3);

  var beeramid = function(bonus, price) {
    const beer = Math.floor(bonus/price);
    let beerLeft = 0;

    let current = 4;
    beerLeft = beer-1
    current = 1;
    
    

    console.log(beerLeft);
    if(beerLeft>current+2+current){}
    console.log(current+2+current);
  }

  beeramid(10, 2)


   
console.clear()
// console.log(21/1.5,'-------------');
// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript
   


var beeramid = function(bonus, price) {
  let beer = bonus/price;
  let i = 0;
  let result = 0;

for(let total = 1; total<=beer; total = total + i + 1){
  beer = beer - total;
  result +=1;
  i +=2
  
}
return result;
}

// 1 4 9 
// 2 4 6


// console.log(beeramid(455,5))
//       1      1
// 1+3 = 4      4
// 4+3 = 7 + 2  9
// 9+3 = 12 + 4 
// 16+3= 19 + 6 


  // a b c
  // 1 4 9 16 25 36 49   
  //   3 5 7  9 11 13
// console.log(1+4 + 4);
const a = 16
const b = 25
// console.log(b-a+2 + b);



function reverseWords(str){
  const strToArr = str.split(' ');
  let result = '';
  for(let i = 0; i<strToArr.length; i++){
   result = result+ ' '+strToArr[strToArr.length-i-1];
  }
  return result.trim();
}

reverseWords("hello world! asta lavista    ")


function addLength(str) {
  const strToArr = str.split(' ');
  let result = []

  for(let i = 0; i<strToArr.length; i++){
    const elementLength = strToArr[i].length;
    result[i] = strToArr[i] + ' '+elementLength;
  }
  return result;
  }

  addLength('apple ban')

  function findDifference(a, b) {
    let resultA = 0;
    let resultB = 0;

    // To have more numbers in array

    for(let i = 0; i<a.length; i++){
      if(i===0){
        resultA = a[0];
      } else {
        resultA *= a[i];
      }
    }
    
    for(let i = 0; i<b.length; i++){
      if(i===0){
        resultB=b[0];
      } else {
        resultB *= b[i];
      }
    }
    return resultA-resultB < 0 ? (resultA-resultB) *(-1): resultA-resultB;
  }
  
  findDifference([3, 2, 5], [1, 4, 4]);

  
  function otherAngle(a, b) {
    return 180 - (a+b);
  }

  otherAngle(30, 60)

  function bmi(weight, height) {
    const bmi = weight/height**2;

    if(bmi<=18.5){
      return 'Underweight';
    } else if (bmi<=25){
      return 'Normal';
    } else if (bmi<=30){
      return 'Overweight';
    } else if (bmi>30){
      return 'Obese';
    }
  }

  bmi(80, 1.80)

  function switchItUp(number){
    switch(number){
        case 0 : return "Zero";
        case 1 : return 'One';
        case 2 : return 'Two';
        case 3 : return "Three";
        case 4 : return "Four";
        case 5 : return "Five";
        case 6 : return "Six";
        case 7 : return 'Seven';
        case 8 : return 'Eight';
        case 9 : return 'Nine';
    }
    }

    switchItUp(1);

    function problem(x){
       return typeof(x)=== 'number' ? x*50+6 : "Error";
    }

 problem('e');

 function xor(a, b) {
  let aA = 0;
  let bB = 0;
  if(a===true) {
    aA=2;
  } else if (a===false){
    aA=4;
  }
  if(b===true){
    bB = 3;
  } else if (b===false){
    bB = 6;
  }

  if(aA === 2 && bB === 3){
    return false;
  } 
  if(a||b === true){
    return true;
  } else return false;
}

xor(true, true)

function multipleOfIndex(array) {
  let result = [];
  for(let i = 0; i<array.length; i++){
    if(array[i]%i === 0|| array[i]===0){
      result[result.length] = array[i]
    }
  }
  return result;
}

multipleOfIndex([22, -6, 32, 82, 9, 25])

function capitalizeWord(word) {
  return word[0].toUpperCase()+word.slice(1);
  
}
capitalizeWord('word');

function contamination(text, char){
  let result = '';
  for(let i = 0; i<text.length; i++){
    result +=char
  }
  return result;
}

contamination("abc","z")

function position(letter){
 const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return `Position of alphabet: ${alphabet.indexOf(letter)+1}`;
}
position('d')

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}

findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]);

function setAlarm(employed, vacation){
  if(employed===vacation){
    return false;
  } else if(employed === true){
    return true;
  } else return false;
}

setAlarm(true, false);

function bingo(a) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let bingo = [];
  
  for (let i = 0; i<a.length; i++){
    if(alphabet[a[i]-1]==='b') {
      bingo.push(alphabet[a[i]-1])
    } else if(alphabet[a[i]-1]==='i'){
      bingo.push(alphabet[a[i]-1]);
    } else if(alphabet[a[i]-1]==='n'){
      bingo.push(alphabet[a[i]-1]);
    } else if(alphabet[a[i]-1]==='g'){
      bingo.push(alphabet[a[i]-1]);
    } else if(alphabet[a[i]-1]==='o'){
      bingo.push(alphabet[a[i]-1]);
    }
  }

  let filteredArr = []
  for (let i=0; i<bingo.length; i++){
    if(!filteredArr.includes(bingo[i])){
      filteredArr.push(bingo[i]);
    };
  }
  return filteredArr.length === 5 ? 'WIN':'LOSE';
}

bingo([21,13,2,7,5,14,7,15,9,10]);

function bingo(a){
  new_a = [2, 7, 9, 14, 15]
  for(let i = 0; i < new_a.length; i++){
    if(!a.includes(new_a[i])){
      return 'LOSE'
    }
  }
  return 'WIN'
  
}

