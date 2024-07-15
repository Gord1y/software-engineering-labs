class Subscription {
  constructor(monthlyFee, minimumPeriod, channels) {
    this.monthlyFee = monthlyFee;
    this.minimumPeriod = minimumPeriod;
    this.channels = channels;
  }

  getDescription() {
    return `Monthly Fee: ${this.monthlyFee}, Minimum Period: ${this.minimumPeriod}, Channels: ${this.channels.join(', ')}`;
  }
}

class DomesticSubscription extends Subscription {
  constructor() {
    super(10, 6, ['Channel 1', 'Channel 2']);
  }
}

class EducationalSubscription extends Subscription {
  constructor() {
    super(5, 3, ['Education Channel 1', 'Education Channel 2']);
  }
}

class PremiumSubscription extends Subscription {
  constructor() {
    super(20, 12, ['Premium Channel 1', 'Premium Channel 2']);
  }
}

module.exports = { DomesticSubscription, EducationalSubscription, PremiumSubscription };
