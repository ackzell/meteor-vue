import { Meteor } from 'meteor/meteor';
import { MongoInternals } from 'meteor/mongo';
import { Agenda } from "agenda/es";
import '../imports/api/items';
import '../imports/api/processes/processes';




Meteor.startup(() => {
  // code to run on server at startup
  const { db: mongo } = MongoInternals.defaultRemoteCollectionDriver().mongo;
  const agenda = new Agenda({ mongo });
});
