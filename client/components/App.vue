<template>
  <v-app>
    <v-app-bar app>
      <v-tabs>
        <v-tab @click="$router.push('/')">
          Home
        </v-tab>
        <v-tab @click="$router.push('/About')">
          About
        </v-tab>
        <v-tab>Tab 3</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <h1>
          {{ greeting }}
        </h1>
      </v-container>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export default {
  data() {
    return {
      greeting: 'Hello Meteor, from Vue',
      user: null,
    };
  },
  created() {
    Tracker.autorun(() => {
      this.user = Meteor.user();
      console.log(this.user);
    });
  },
};
</script>

<style scoped>
</style>