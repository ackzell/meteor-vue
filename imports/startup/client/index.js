import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import router from './router'
import AppComponent from '../../ui/components/App.vue';

function startupVue() {
    Vue.use(VueMeteorTracker);
    Vue.use(Vuetify);

    const vuetify = new Vuetify({
        theme: {
            dark: false,
        },
    });

    new Vue({
        render: (h) => h(AppComponent),
        vuetify,
        router,
    }).$mount('main');
}

exports.startupVue = startupVue;