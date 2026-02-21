// Flight Control System

class FlightControlSystem {
    constructor() {
        this.throttle = 0;  // Range: 0 to 100
        this.pitch = 0;     // Range: -90 to 90
        this.roll = 0;      // Range: -180 to 180
        this.yaw = 0;       // Range: -180 to 180
        this.flaps = 0;     // Range: 0 to 100
        this.landingGear = 'retracted';  // Options: 'retracted', 'deployed'
    }

    setThrottle(value) {
        if (value >= 0 && value <= 100) {
            this.throttle = value;
        } else {
            throw new Error('Throttle value must be between 0 and 100.');
        }
    }

    setPitch(value) {
        if (value >= -90 && value <= 90) {
            this.pitch = value;
        } else {
            throw new Error('Pitch value must be between -90 and 90.');
        }
    }

    setRoll(value) {
        if (value >= -180 && value <= 180) {
            this.roll = value;
        } else {
            throw new Error('Roll value must be between -180 and 180.');
        }
    }

    setYaw(value) {
        if (value >= -180 && value <= 180) {
            this.yaw = value;
        } else {
            throw new Error('Yaw value must be between -180 and 180.');
        }
    }

    setFlaps(value) {
        if (value >= 0 && value <= 100) {
            this.flaps = value;
        } else {
            throw new Error('Flaps value must be between 0 and 100.');
        }
    }

    deployLandingGear() {
        this.landingGear = 'deployed';
    }

    retractLandingGear() {
        this.landingGear = 'retracted';
    }

    getControlStatus() {
        return {
            throttle: this.throttle,
            pitch: this.pitch,
            roll: this.roll,
            yaw: this.yaw,
            flaps: this.flaps,
            landingGear: this.landingGear
        };
    }
}

// Example usage:
const flightControl = new FlightControlSystem();
flightControl.setThrottle(50);
flightControl.setPitch(10);
console.log(flightControl.getControlStatus());