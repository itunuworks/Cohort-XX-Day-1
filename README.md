# PROJECT cohort-xx-day-1

## About the project

This project contains **2 Andelabs functions** and an **OOP** project having a base class and 2 sub Classes, all complete with a total of 39 test cases. It is developed as part of Andela Cohort XX Day 1 Home labs.

- dataTypes

  - This function in the form `dataTypes(argument)` computes different values based on the type of data fed into the function.

  	For example, 

    `dataTypes(true);`

    would have return value 
    
    'true'

    and 

    `dataTypes('Andela');`

    would have return value 

    `6`

- getPrimes

  - This function in the form `getPrimes(argument)` checks the datatype of the argument passed and based on this value, returns a unique value.

    E.g. For the line of code

    `getPrimes({})`

    would have a return value

    `[]`

- OOP

  - This project contains 3 declared classes `Aircraft`, `FixedWingAircraft` and `RotaryWingAircraft` of which the last 2 are subClasses of the first. The inheritance hierachy is prototype based as such the prototype of Class `Aircraft` exists in the prototype chain of both `FixedWingAircraft` and `RotaryWingAircraft`. Several parameters have also been declared and functions too attached to each class and across the inheritance hierachy.


## How to install

1. Copy https://github.com/itunuworks/cohort-xx-day-1

2. Clone the repo on your local file system using 

   `git clone https://github.com/itunuworks/cohort-xx-day-1`

3. Navigate into the cloned directory using `cd cohort-xx-day-1`

4. Enter the command `npm install` to install all dependencies

## How to run tests

From the root directory, just enter the command `npm run test`












