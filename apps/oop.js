'option strict';

//Class Aircraft with a totalFlightHours property in its prototype.
Aircraft = function(wingConfig){
    this.wingConfig = wingConfig;
}

Aircraft.prototype.totalFlightHours = 0;

//Class FixedWingAircraft which extends Class Aircraft and has in its prototype, a property named totalLandingCycles.
FixedWingAircraft = function (engineType, engineConfig, numberOfEngines) {
    this.base = Aircraft;
    this.base('Fixed');
    this.engineType = engineType;
    this.engineConfig = engineConfig;
    this.numberOfEngines = numberOfEngines;
}

FixedWingAircraft.prototype = new Aircraft;
FixedWingAircraft.prototype.totalLandingCycles = 0;


//Class RotaryWingAircraft which extends Class Aircraft.
RotaryWingAircraft = function (engineType, engineConfig, numberOfEngines) {
    this.base = Aircraft;
    this.base('Rotary');
    this.engineType = engineType;
    this.engineConfig = engineConfig;
    this.numberOfEngines = numberOfEngines;
}

RotaryWingAircraft.prototype = new Aircraft;

module.exports = {Aircraft, RotaryWingAircraft, FixedWingAircraft};