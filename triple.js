function tripleTrouble(one, two, three){
    let result  = '';
    console.log(one.length);
    for(let i = 0; i<one.length; i++){
        result += one[i]+two[i]+three[i];
    }
    return result;
   }

   tripleTrouble("aaa","bbb","ccc")