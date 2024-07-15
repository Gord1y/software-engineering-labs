const { WebSiteFactory, MobileAppFactory, ManagerCallFactory } = require('./factories');

const websiteFactory = new WebSiteFactory();
const mobileAppFactory = new MobileAppFactory();
const managerCallFactory = new ManagerCallFactory();

const domesticSubscription = websiteFactory.createSubscription('domestic');
const educationalSubscription = mobileAppFactory.createSubscription('educational');
const premiumSubscription = managerCallFactory.createSubscription('premium');

console.log('Domestic Subscription:', domesticSubscription.getDescription());
console.log('Educational Subscription:', educationalSubscription.getDescription());
console.log('Premium Subscription:', premiumSubscription.getDescription());
