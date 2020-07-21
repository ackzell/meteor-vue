import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Items = new Mongo.Collection('items');

Meteor.methods({
  createItem(item) {
    return Items.insert(item);
  },
});
