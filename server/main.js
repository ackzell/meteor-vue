import { Meteor } from 'meteor/meteor';
import { agenda } from '../imports/modules/agenda'
import '../imports/api/items';
import '../imports/api/processes/processes';


Meteor.startup(() => {
  // code to run on server at startup
  //agenda.start();
  //agenda.every("10 seconds", "test");
  //agenda.now("test");

});
