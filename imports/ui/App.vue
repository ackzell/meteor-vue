<template>
  <v-app>
    <v-container>
      <h1>
        {{ greeting }}
      </h1>

      <header>
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/about">
          About
        </router-link>
      </header>

      <router-view v-if="user" />
    </v-container>
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