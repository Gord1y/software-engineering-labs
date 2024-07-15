const { DomesticSubscription, EducationalSubscription, PremiumSubscription } = require('./subscriptions');

class SubscriptionFactory {
  createSubscription(type) {
    throw new Error('This method should be overridden!');
  }
}

class WebSiteFactory extends SubscriptionFactory {
  createSubscription(type) {
    switch (type) {
      case 'domestic':
        return new DomesticSubscription();
      case 'educational':
        return new EducationalSubscription();
      case 'premium':
        return new PremiumSubscription();
      default:
        throw new Error('Unknown subscription type');
    }
  }
}

class MobileAppFactory extends SubscriptionFactory {
  createSubscription(type) {
    switch (type) {
      case 'domestic':
        return new DomesticSubscription();
      case 'educational':
        return new EducationalSubscription();
      case 'premium':
        return new PremiumSubscription();
      default:
        throw new Error('Unknown subscription type');
    }
  }
}

class ManagerCallFactory extends SubscriptionFactory {
  createSubscription(type) {
    switch (type) {
      case 'domestic':
        return new DomesticSubscription();
      case 'educational':
        return new EducationalSubscription();
      case 'premium':
        return new PremiumSubscription();
      default:
        throw new Error('Unknown subscription type');
    }
  }
}

module.exports = { WebSiteFactory, MobileAppFactory, ManagerCallFactory };
