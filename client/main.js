import { Meteor } from 'meteor/meteor';
import Vue from 'vue';

import AppComponent from '/imports/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    render: (h) => h(AppComponent),
  }).$mount('main');
});
