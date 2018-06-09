function reverse(x) {
    var result = 0;
    var y = x;
    while (y != 0) {
        var z = y % 10;
        //y = y/10;
        result = result * 10 + z;
        y = Math.floor(y / 10);
    }
    console.log("Palindrome of " + x + " = " + result);
}
reverse(1234);
