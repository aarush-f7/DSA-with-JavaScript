// factorial of n numbers :---------

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
    var fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    console.log(fact);
  } else {
    console.log("write +ve value and more than 0");
  }
}
}