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
				returnValue = 'no value';
				if (argument !== null){
					returnValue = argument[2]; 
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
		var sieve = [];			

		if (typeof(number) === 'number' && number >= 2){
	        var i=2;

	        top: while(i<=number){
	            var isPrime = true;
	            var j = 0;

	            i++; 

	            for (var j = 0; j<sieve.length; j++){
	            	if(Math.sqrt(i-1)<sieve[j]){
	            		break;
	            	}
	            	if ((i-1) % sieve[j] === 0) {
	                    continue top;
	            	}
	            }
	            sieve.push(i-1);
	        }
	    }
	    return sieve;
	}
}

//This function handles number arguments.
function getNumberResult(argument){
	var returnValue = 'equal to 100'; 

	if (argument !== 100){
		returnValue = 'less than 100';
		if (argument > 100){
			returnValue = 'more than 100';
		}
	}
	return returnValue;
}
