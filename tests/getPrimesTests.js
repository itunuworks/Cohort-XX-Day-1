'use strict';

var getPrimes = require('../apps/andelabs.js').getPrimes;
require('jasmine-expect');

describe('Function getPrimes, ', function(){

	describe('in all cases, ', function(){
		it('should return an array', function(){
			expect(getPrimes(6)).toBeArray();
		})
	})

	describe('when fed with invalid input data, ', function(){
		describe("in this case, a string, 'itunu', ", function(){
			it("should return []", function(){
				expect(getPrimes('itunu')).toEqual([]);
			})
		})

		describe("in this case, an empty object {}, ", function(){
			it("should return []", function(){
				expect(getPrimes({})).toEqual([]);
			})
		})

		describe("in this case, an empty parameter, ", function(){
			it("should return []", function(){
				expect(getPrimes()).toEqual([]);
			})
		})

		describe("in this case, 'null', ", function(){
			it("should return []", function(){
				expect(getPrimes(null)).toEqual([]);
			})
		})

		describe("in this case, 'undefined', ", function(){
			it("should return []", function(){
				expect(getPrimes(undefined)).toEqual([]);
			})
		})
	})

	describe("when fed with a number less than 2", function(){
		describe('in this case 0, ', function(){
			it("should return []", function(){
				expect(getPrimes(0)).toEqual([]);
			})
		})

		describe('in this case -1, ', function(){
			it("should return []", function(){
				expect(getPrimes(-1)).toEqual([]);
			})
		})

		describe("when fed with 1, ", function(){
			it("should return []", function(){
				expect(getPrimes(1)).toEqual([]);
			})
		})
	})

	it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53] for 55.", function(){
		expect(getPrimes(55)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
	});

	it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41] for 42.", function(){
		expect(getPrimes(42)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]);
	});

	it("should return [2, 3, 5, 7, 11, 13, 17, 19] for 20.", function(){
		expect(getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
	});
})