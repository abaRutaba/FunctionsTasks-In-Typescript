function fact(a) {
    var f = 1;
    for (var i = a; i >= 1; i--) {
        f *= i;
    }
    console.log("Factorial of " + a + " = " + f);
}
fact(5);
