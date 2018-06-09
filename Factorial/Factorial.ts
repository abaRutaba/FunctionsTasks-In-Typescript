function fact(a:number)
{
    var f:number = 1 ;
		
		for (var i:number=a;i>=1;i--)
		{
			f*=i;
		}
		console.log("Factorial of "+a+" = "+f);
}
fact(5)