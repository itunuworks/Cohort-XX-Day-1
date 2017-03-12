'use strict';

module.exports = {
	dataTypes: function(argument){
		switch (typeof (argument)){
			case 'number':
				return getNumberResult(argument); break;
			case 'string':
				return argument.length; break;
			case 'object':
				if (argument === null){
					return 'no value'; break;
				}
				else{
					return argument[2]; break;
				}
			case 'undefined':
				return 'no value'; break;
			case 'boolean':
				return argument; break;
			case 'function':
				return argument(true); break;
		}
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