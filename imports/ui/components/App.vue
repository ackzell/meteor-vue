<template>
  <div id="app">
    <!-- App.vue -->
    <v-app>
      <menu-left/>

      <menu-top/>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <!-- router-view />-->
          <router-multi-view/>
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
import MenuLeft from './MenuLeft.vue';
import MenuTop from './MenuTop.vue';

export default {
  components: { MenuLeft, MenuTop },
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