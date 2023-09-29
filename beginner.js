function check(a, x) {
    let result = false;
    for (let i=0; i<a.length; i++){
      const el = a[i];
     if(el===x) {
        return result = true;
     }
    }
  }
  check(['t', '', 's', 't'], 'e')
  
  
  function check2(a,x){
    return a.includes(x) ? true:false;
  }

  check2(['t', '', 's', 't'], 'e')