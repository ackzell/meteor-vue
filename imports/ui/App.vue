<template>
  <v-app>
    <v-container>
      <h1>
        {{ greeting }}
      </h1>

      <temp-component />
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello Meteor, from Vue',
    };
  },
};
</script>

<style scoped>
</style>