<template>
  <div
    id="some-id"
    class="my-class"
  >
    {{ message }} <br> {{ message2 }}
  </div>
</template>

<script>
export default {
  data() {
    return { message: 'Hello YouTube!', message2: 'Subscribe' };
  },
  computed: {
    myComputed() {
      let undef = 4;
      return undef;
    },
  },
};
</script>

<style lang="css" scoped>
</style>