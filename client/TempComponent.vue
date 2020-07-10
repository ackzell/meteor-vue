<template>
  <div
    id="some-id"
    class="my-class"
  >
    {{ message }} <br> {{ message2 }}

    <br>

    <ul>
      <li
        v-for="(item, idx) in items"
        :key="idx"
      >
        {{ item.name }} | ${{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Items } from '/imports/api/items';

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
  meteor: {
    items() {
      return Items.find({}).fetch();
    },
  },
};
</script>

<style lang="css" scoped>
</style>