function power(x:number,y:number)
	{
		var pow:number=1;
		
		for(var i:number=1;i<=y;i++)
			pow = pow*x;
		
		console.log(x+" is raised to the power "+y+" = "+pow);
		
	}
    power(3,2);