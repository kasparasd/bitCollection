function positiveSum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
      arr[i]>0 ? sum +=arr[i] : sum +=0;
    }
    return sum;
  }

  console.log(positiveSum([1,-2,3,4,5]))