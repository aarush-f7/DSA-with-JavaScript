// Reversing the Digits :---------

let show = prompt("Write the value here");

if (show === null){
    console.log("cancelled");
}

else{
    let n = Number(show);

if (isNaN(n)) {
  console.log("invalid input");
} else { 
  if (n > 0) {
    var rev = 0;
   while (n>0){
    var rem = n%10;
    rev = rev*10 + rem;  // Formula to reverse the digits....
    n = Math.floor(n/10);
   }
   console.log((sum));
   
  } else {
    console.log("write +ve value and more than 0");
  }
}
}