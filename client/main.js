import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import AppComponent from '/imports/ui/App.vue';

Meteor.startup(() => {
  Vue.use(VueMeteorTracker);
  Vue.use(Vuetify);

  const vuetify = new Vuetify({
    theme: {
      dark: true,
    },
  });

  new Vue({
    render: (h) => h(AppComponent),
    vuetify,
  }).$mount('main');
});
