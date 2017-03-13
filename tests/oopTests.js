'use strict';

require('../apps/oop.js');

describe("Testing for OOP functionality in a hierachy of Classes, ", function(){
	var boeing747 = new FixedWingAircraft('Gas Turbine', 'Wings', 4);
	var bell204 = new RotaryWingAircraft('Gas Turbine', 'Overhead', 1);
	var TBM850 = new FixedWingAircraft('TurboProp', 'Nose', 1);
	var TB9 = new FixedWingAircraft('Internal Combustion', 'Nose', 1);
	var B58 = new FixedWingAircraft('Internal Combustion', 'Wings', 2);
	var fixed = new Aircraft('Fixed');
	var rotary = new Aircraft ('Rotary');

	it("An initialized 'Aircraft' should be of object type.", function(){
		expect(typeof(fixed)).toBe(typeof({}));
		expect(typeof(rotary)).toBe(typeof({}));
	})

	it("An initialized 'Aircraft' should be an instance of class Aircraft.", function(){
		expect(fixed instanceof(Aircraft)).toBeTruthy();
		expect(rotary instanceof(Aircraft)).toBeTruthy();

	})

	describe("Confirm the inheritance hierachy using 'instanceOf', ", function(){
		
		it("An initialized 'FixedWingAircraft' is an instance of 'Aircraft'", function(){
			expect(TBM850 instanceof(Aircraft)).toBeTruthy();
		})

		it("An initialized 'FixedWingAircraft' is an instance of 'FixedWingAircraft'", function(){
			expect(TBM850 instanceof(FixedWingAircraft)).toBeTruthy();
		})

		it("An initialized 'RotaryWingAircraft' is an instance of 'Aircraft'", function(){
			expect(bell204 instanceof(Aircraft)).toBeTruthy();
		})

		it("An initialized 'RotaryWingAircraft' is an instance of 'RotaryWingAircraft'", function(){
			expect(bell204 instanceof(RotaryWingAircraft)).toBeTruthy();
		})
	})	

	describe("Confirm functionality of class prototypes.", function(){
		it("An initialized FixedWingAircraft should connect with the totalLandingCycles property, ", function (){
			expect(boeing747.totalLandingCycles).toBeDefined();
		})

		it("An initialized RotaryWingAircraft should NOT connect with the totalLandingCycles property, ", function (){
			expect(bell204.totalLandingCycles).not.toBeDefined();
		})
	})

	describe("Confirm functionality of Aircrafts sub Classes RotaryWingAircraft and FixedWingAircraft", function (){
		it("An initialized FixedWingAircraft should have property 'wingConfig' as 'Fixed'.", function(){
			expect(TB9.wingConfig).toEqual('Fixed');
		})

		it("An initialized RotaryWingAircraft should have property 'wingConfig' as 'Rotary'.", function(){
			expect(bell204.wingConfig).toEqual('Rotary');
		})
	})
})	