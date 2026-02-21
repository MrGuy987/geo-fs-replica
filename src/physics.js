// src/physics.js

class FlightPhysics {
    constructor(weight, wingArea, dragCoefficient, liftCoefficient) {
        this.weight = weight; // weight of the aircraft in Newtons
        this.wingArea = wingArea; // wing area in square meters
        this.dragCoefficient = dragCoefficient; // Drag coefficient
        this.liftCoefficient = liftCoefficient; // Lift coefficient
        this.gravity = 9.81; // acceleration due to gravity in m/s^2
    }

    calculateLift(airspeed) {
        return 0.5 * this.liftCoefficient * this.wingArea * Math.pow(airspeed, 2);
    }

    calculateDrag(airspeed) {
        return 0.5 * this.dragCoefficient * this.wingArea * Math.pow(airspeed, 2);
    }

    calculateWeight() {
        return this.weight;
    }

    calculateNetForce(airspeed) {
        const lift = this.calculateLift(airspeed);
        const drag = this.calculateDrag(airspeed);
        const netForce = lift - this.calculateWeight() + drag; // Note: drag is positive as it opposes motion
        return netForce;
    }

    calculateAcceleration(airspeed) {
        const netForce = this.calculateNetForce(airspeed);
        return netForce / this.weight; // F = ma => a = F/m
    }
}

// Example usage:
const aircraft = new FlightPhysics(5000, 30, 0.02, 0.4);
const airspeed = 70; // Airspeed in m/s
const lift = aircraft.calculateLift(airspeed);
const drag = aircraft.calculateDrag(airspeed);
const netForce = aircraft.calculateNetForce(airspeed);
const acceleration = aircraft.calculateAcceleration(airspeed);

console.log('Lift:', lift);
console.log('Drag:', drag);
console.log('Net Force:', netForce);
console.log('Acceleration:', acceleration);