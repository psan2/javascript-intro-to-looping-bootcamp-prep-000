 function forLoop(arr){
   for (var i = 0; i < 25; i++) {
     if (i === 0) {
       arr.push("I am 1 strange loop.")
     }
     else arr.push(`I am ${i} strange loops.`)
   }
   return arr
 }
