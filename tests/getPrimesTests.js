'use strict';

var getPrimes = require('../apps/andelabs.js').getPrimes;

describe('Function getPrimes ', function(){

	describe('All cases, ', function(){
		it('should return an array', function(){
			expect(getPrimes(6)).toBeArray();
		})
	})
})