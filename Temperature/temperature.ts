function celsiusToFahrenheit(C)
	{
		//convert Celsius to Fahrenheit
		var F = (C*1.8)+32;
		console.log("Temperature in Celsius "+C+"  NN°C = "+F+" NN°F");;
	}
	
	function fahrenheitToCelsius(F)
	{
		//convert Celsius to Fahrenheit
		var C = (F-32)*(5/9);
		console.log("Temperature in Fahrenheit "+F+" NN°F = "+C+" NN°C");
	}
    celsiusToFahrenheit(5)
    fahrenheitToCelsius(41)