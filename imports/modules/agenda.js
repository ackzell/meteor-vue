import { MongoInternals } from 'meteor/mongo';
import { Agenda } from "agenda/es";

const { db: mongo } = MongoInternals.defaultRemoteCollectionDriver().mongo;
export const agenda = new Agenda({ mongo });

agenda.define("test", async (job) => {
  console.log("Job wurde ausgeführt");
});

/*(async function () {
  // IIFE to give access to async/await
  await agenda.start();

  await agenda.every("30 seconds", "test");

})();*/