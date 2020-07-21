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

    <form @submit.prevent="saveNewItem">
      <label for="item-name">Name</label>
      <input
        id="item-name"
        v-model="item.name"
        type="text"
      >
      <br>
      <label for="item-price">Price</label>
      <input
        id="item-price"
        v-model="item.price"
        type="text"
      >
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { Items } from '/imports/api/items';

export default {
  data() {
    return {
      message: 'Hello YouTube!',
      message2: 'Subscribe',
      item: { name: '', price: 0 },
    };
  },
  computed: {
    myComputed() {
      let undef = 4;
      return undef;
    },
  },
  methods: {
    saveNewItem() {
      Meteor.call('createItem', this.item, function(error, result) {
        if (error) {
          console.error('something went wrong', error);
        } else {
          console.info(result);
        }
      });
    },
  },
  meteor: {
    $subscribe: {
      allItems: [],
    },
    items() {
      return Items.find({}).fetch();
    },
  },
};
</script>

<style lang="css" scoped>
</style>