let money = 100;
let totalApple = 0;

function buyApple(x){
    console.log("I have bought",totalApple, "apples in", x, "RS");
    if (x > 0){
        buyMore(x);
    }else {
        console.log("I don't have suffient money", totalApple);
    }
}
buyApple(money);

function buyMore(u){
    totalApple--;
    u -= 10;
    buyApple(u);
    // console.log("buy more", u);
}

