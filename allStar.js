function strCount(str, letter){  
    let result = 0;
    for(let i = 0; i<str.length; i++){
        str[i] === letter ? result++ : '';
    }
    return result;
  }

  strCount('Hello', 'o')