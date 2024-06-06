function incremento(x) {
    var y = x;
    y++;
    return y;
}
var x = 0;
while (x < 11) {
    console.log(x);
    x = incremento(x);
}
var y = 9;
function decremento(x) {
    var y = x;
    y--;
    return y;
}
while (y >= 1) {
    console.log(y);
    y = decremento(y);
}
