function differenceInAges(ages){
    const young = Math.min(...ages);
    const old = Math.max(...ages);
   return [young, old, old-young]
}

console.log(differenceInAges([82, 15, 6, 38, 35]))