import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Items = new Mongo.Collection('items');

if (Meteor.isServer) {
  Meteor.publish('allItems', function (filter) {
    if (filter!="") {
      return Items.find(filter);
    }
    else {
      return Items.find();
    }
    
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
