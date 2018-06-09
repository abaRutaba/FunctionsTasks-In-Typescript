function calcCircumference(r : number)
	{
		var C : number= 2*Math.PI*r;
		console.log("The Circumference = "+C+" NN");
	}
	function calcArea(r)
	{
		var A : number = Math.PI*(r*r);
		console.log("The Area = "+A+" NN");
	}

    calcCircumference(3)
    calcArea(6)