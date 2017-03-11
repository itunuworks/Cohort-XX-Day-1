'use strict';

module.exports = {
	dataTypes: function(argument){
		if (typeof(argument) == 'number'){
			return getNumberResult(argument);
		}
	}
}

function getNumberResult(argument){
	if (argument != 100){
		if (argument > 100){
			return 'more than 100';
		}
		else return 'less than 100';
	}
	else return 'equal to 100';
}