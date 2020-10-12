import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Processes = new Mongo.Collection('processes');

if (Meteor.isServer) {
    Meteor.publish('allItems', function () {
        return Processes.find();
    });
}

Meteor.methods({
    createProcess(process) {
        return Processes.insert(process);
    },
    deleteProcess(process) {
        return Processes.remove({ _id: process._id });
    },
});
