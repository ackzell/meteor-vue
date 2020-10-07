<template>
  <div id="app">
    <!-- App.vue -->
    <v-app>
      <v-navigation-drawer app>
        <!-- -->
      </v-navigation-drawer>

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

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view />
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
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