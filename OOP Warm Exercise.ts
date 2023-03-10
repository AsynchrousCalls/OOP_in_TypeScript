/*
    1. Create a class called Vehicle whose constructor
       takes 2 parameters:
       - name
       - maxSpeed
       Assign both of these to the instance of Vehicle
    2. Add a method on to the "Vehicle" class called
       "getMaxSpeed" that returns the "maxSpeed"
    3. Create a "Spaceship" class that extends "Vehicle"
       and has 3 parameters:
       - name
       - maxSpeed
       - numRocketEngines
       This will use super() to assign the name and maxSpeed
       It will assign "numRocketEngines" directly to the
       "Spaceship" instance
    4. Make sure these work (Assuming classes are defined):
       const spaceship = new Spaceship("Enterprise", 1000, 2);
       console.log( spaceship.getMaxSpeed() ); // 1000
       console.log( spaceship.numRocketEngines ); // 2
*/

class Vehicle{

   constructor(public nameVehicle:string, public maxSpeed:number){
      this.nameVehicle=nameVehicle
      this.maxSpeed=maxSpeed
   }
   public getMaxSpeed=(): number=>{
      return this.maxSpeed
   }

}
class SpaceShip extends Vehicle{
      
      constructor( nameVehicle:string,maxSpeed:number,public numRocketEngines:number){
         super(nameVehicle,maxSpeed)
         this.numRocketEngines=numRocketEngines

      }
}

const spaceship = new SpaceShip("Enterprise", 5000, 2);
console.log( spaceship.getMaxSpeed() ); // 1000
console.log( spaceship.numRocketEngines ); // 2