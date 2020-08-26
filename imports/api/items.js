import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Items = new Mongo.Collection('items');

if (Meteor.isServer) {
  Meteor.publish('allItems', function () {
    return Items.find();
  });
}

Meteor.methods({
  createItem(item) {
    return Items.insert(item);
  },
  deleteItem(item) {
    return Items.remove({ _id: item._id });
  },
});
