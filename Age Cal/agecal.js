function calculateAge(b, c) {
    var Age1 = c - b;
    var Age2 = Age1 - 1;
    console.log("You are either " + Age2 + " NN" + " or " + Age1 + " NN");
}
calculateAge(1990, 2018);
calculateAge(1991, 2018);
calculateAge(1992, 2018);
function calculateAge2(y1) {
    console.log("You are either " + ((new Date().getFullYear()) - y1 - 1) + " or " + ((new Date().getFullYear()) - y1));
}
calculateAge2(1990);
