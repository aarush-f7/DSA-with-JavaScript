

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
    var Prime = true;
    for (let i = 2; i <= Math.floor(n/2); i++) {
      if(n%i === 0){
        Prime = false;
        console.log("it is not a prime")
        break;
      }else{
        console.log("its a prime number");
      }
    }
    console.log(Prime);
  } else {
    console.log("write +ve value and more than 0");
  }
}
}