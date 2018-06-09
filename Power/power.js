function power(x, y) {
    var pow = 1;
    for (var i = 1; i <= y; i++)
        pow = pow * x;
    console.log(x + " is raised to the power " + y + " = " + pow);
}
power(3, 2);
