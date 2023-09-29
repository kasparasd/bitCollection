function arrayMadness(a, b) {
    let aSquare = 0;
    let bCube = 0;

    for(let i = 0; i<a.length; i++){
        aSquare += a[i]**2; 
    }
    for(let i = 0; i<b.length; i++){
        bCube += b[i]**3;
    }
    return aSquare>bCube ? true:false;
  }

 console.log(arrayMadness([4,5,6],[1,2,3]))