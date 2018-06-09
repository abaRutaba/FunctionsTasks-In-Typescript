function reverse(x:number)
	{
		var result:number = 0;
		var y:number = x;
		while(y!=0)
		{
			var z:number = y%10;
			//y = y/10;
			result = result * 10 + z;
			y =Math.floor(y/10);
		}
		console.log("Palindrome of "+ x+" = "+result);
		
	}
    reverse(1234)