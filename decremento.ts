function incremento(x:number):number{
    let y: number = x;
    y++
    return y
}

let x: number = 0;

while(x < 11){
    console.log(x);
    x = incremento(x);
}



let y: number = 9;

function decremento(x:number):number{
    let y: number = x;
    y--;
    return y;
}

while(y >= 1){
    console.log(y);
    y = decremento(y);
}