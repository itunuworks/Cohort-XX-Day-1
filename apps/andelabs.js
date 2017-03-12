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
	}
}

//This function handles number arguments.
function getNumberResult(argument){
	if (argument != 100){
		if (argument > 100){
			return 'more than 100';
		}
		else return 'less than 100';
	}
	else return 'equal to 100';
}