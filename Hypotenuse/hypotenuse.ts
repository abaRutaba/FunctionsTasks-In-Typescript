function hypotenuse(p:number,b:number)
{
    var perp : number = sq(p)
    var base : number = sq(b)
    var temp : number = perp+base
    var hypo : number  = Math.sqrt(temp);
    console.log("hypotenuse = "+ hypo)
}
function sq(a:number)
{
    return a*a
}
hypotenuse(5,5)