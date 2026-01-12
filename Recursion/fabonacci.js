// FROM ITERATIVE LOOP METHOD.........$$$$$$$$$$$$$$$


        // let data = 10;
        // let first = 0;
        // let second = 1;

        // // process.stdout.write(first + " " + second + " ")

        // for(i=1;i<=data-2;i++){
        //     let third = first + second;
        //     first = second;
        //     second = third;

        //     console.log((third+ " "));
        // }



//  FROM RECURSIVE LOOPING METHOD.........$$$$$$$$$$

let n=10;

function fabonacci(n, first, second){
    if (n==0) return;
    let third = first + second;
    process.stdout.write(third + " ");
    // console.log(third)
    fabonacci(n-1, second, third);
}

process.stdout.write(0 + " " + 1 + " ");
fabonacci(n-2, 0, 1);

