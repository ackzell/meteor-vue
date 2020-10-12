import { Meteor } from 'meteor/meteor';
import { startupVue } from "../imports/startup/client"

Meteor.startup(() => {
  startupVue();
});
