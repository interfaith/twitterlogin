import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
SSL('/home/spowage/cert3/privkey1.pem','/home/spowage/cert3/fullchain1.pem', 443);
});
