function currentDate() {
    var d = new Date();
    console.log("Date = " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());
    var minutes = d.getMinutes();
    var hours = d.getHours();
    if (minutes < 10)
        minutes = "0" + minutes; //for 4:05 format not 4:5
    //am or pm 
    var format = "AM";
    if (hours >= 12) {
        format = "PM";
        hours = hours - 12;
    }
    if (hours == 0) {
        hours = 12;
    }
    console.log("Time = " + hours + " : " + minutes + " " + format);
}
currentDate();
