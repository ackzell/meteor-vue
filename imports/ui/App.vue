<template>
  <div>
    <p>
      {{ greeting }}
    </p>

    <temp-component />
  </div>
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