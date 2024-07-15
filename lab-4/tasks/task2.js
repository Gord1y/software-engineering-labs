class CommandCentre {
  constructor() {
    this.runways = [];
    this.aircrafts = [];
  }

  addRunway(runway) {
    this.runways.push(runway);
  }

  addAircraft(aircraft) {
    this.aircrafts.push(aircraft);
  }

  canLand() {
    return this.runways.find(runway => !runway.isBusy());
  }

  requestLanding(aircraft) {
    const runway = this.canLand();
    if (runway) {
      runway.land(aircraft);
    } else {
      console.log('No available runways.');
    }
  }

  requestTakeOff(aircraft) {
    const runway = aircraft.getCurrentRunway();
    if (runway) {
      runway.takeOff();
    } else {
      console.log('Aircraft is not on a runway.');
    }
  }
}

class Runway {
  constructor(id) {
    this.id = id;
    this.busy = false;
  }

  isBusy() {
    return this.busy;
  }

  land(aircraft) {
    this.busy = true;
    aircraft.setCurrentRunway(this);
    console.log(`Aircraft ${aircraft.getName()} has landed on runway ${this.id}.`);
  }

  takeOff() {
    this.busy = false;
    console.log(`Runway ${this.id} is now free.`);
  }
}

class Aircraft {
  constructor(name) {
    this.name = name;
    this.currentRunway = null;
  }

  getName() {
    return this.name;
  }

  getCurrentRunway() {
    return this.currentRunway;
  }

  setCurrentRunway(runway) {
    this.currentRunway = runway;
  }

  requestLanding(commandCentre) {
    commandCentre.requestLanding(this);
  }

  requestTakeOff(commandCentre) {
    commandCentre.requestTakeOff(this);
  }
}

// Test the implementation
const commandCentre = new CommandCentre();
const runway1 = new Runway('1');
const runway2 = new Runway('2');
commandCentre.addRunway(runway1);
commandCentre.addRunway(runway2);

const aircraft1 = new Aircraft('A1');
const aircraft2 = new Aircraft('A2');
commandCentre.addAircraft(aircraft1);
commandCentre.addAircraft(aircraft2);

aircraft1.requestLanding(commandCentre);
aircraft2.requestLanding(commandCentre);
aircraft1.requestTakeOff(commandCentre);
aircraft2.requestLanding(commandCentre);
