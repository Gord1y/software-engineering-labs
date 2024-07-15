class Authenticator {
  constructor() {
    if (Authenticator.instance == null) {
      Authenticator.instance = this;
    }

    return Authenticator.instance;
  }

  authenticate() {
    console.log('Authenticating...');
  }
}

const instance = new Authenticator();
Object.freeze(instance);

module.exports = instance;
