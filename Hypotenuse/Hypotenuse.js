function hypotenuse(p, b) {
    var perp = sq(p);
    var base = sq(b);
    var temp = perp + base;
    var hypo = Math.sqrt(temp);
    console.log("hypotenuse = " + hypo);
}
function sq(a) {
    return a * a;
}
hypotenuse(5, 5);
