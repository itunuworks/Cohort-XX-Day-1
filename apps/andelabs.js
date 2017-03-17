'use strict';

module.exports = {
	dataTypes: function(argument){
		var returnValue;
		switch (typeof (argument)){
			case 'number':
				returnValue = getNumberResult(argument);
				break;
			case 'string':
				returnValue = argument.length; 
				break;
			case 'object':
				if (argument === null){
					returnValue = 'no value';
				}
				else{
					returnValue argument[2]; 
				}
				break;
			case 'undefined':
				returnValue = 'no value';
				break;
			case 'boolean':
				returnValue = argument; 
				break;
			case 'function':
				returnValue = argument(true); 
				break;
		}
		return returnValue;
	},

	getPrimes: function(number){
		if (typeof(number) == 'number' && number >= 2){
	        var sieve = [];			
	        var i=2;

	        top: while(i<=number){
	            var isPrime = true;
	            var j = 0;

	            i++; 
	            while (j<sieve.length && Math.sqrt(i-1)>=sieve[j]){
	                if ((i-1) % sieve[j] === 0) 
	                    continue top;
	                j++;
	            }
	            sieve.push(i-1);
	        }
	        return sieve;
	    }
	    else return [];
	}
}

//This function handles number arguments.
function getNumberResult(argument){
	if (argument != 100){
		if (argument > 100)
			return 'more than 100';
		else 
			return 'less than 100';
	}
	else 
		return 'equal to 100';
}
