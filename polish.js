function correctPolishLetters (string) {
    const polish = ['ą','ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż']
    const normal = ['a','c', 'e', 'l', 'n', 'o', 's', 'z', 'z']

    let newStr = '';
    for(let i = 0; i<string.length; i++){
        if(polish.includes(string[i])){
            const strInPolishIndex = polish.indexOf(string[i])
            const correctedPolish = normal[strInPolishIndex];
            newStr +=correctedPolish;
        } else {
            newStr +=string[i];
        }
    }
    return newStr;
  }

  console.log(correctPolishLetters("Jędrzej Błądziński"));