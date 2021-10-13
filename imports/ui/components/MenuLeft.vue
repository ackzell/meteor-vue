<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
    >
      <v-list-item 
       class="px-2"
       link
      >
        <v-list-item-avatar>
          <v-img :src="user.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{user.surname+" "+user.name}}</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"    
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item    
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        user: {name: "Klotzek", surname: "Johannes", avatar:"https://randomuser.me/api/portraits/men/85.jpg"},
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'Aufgaben', icon: 'mdi-format-list-checks' },
          { title: 'Favoriten', icon: 'mdi-star' },
          { title: 'Kontakte', icon: 'mdi-contacts' },
        ],
        mini: true,
      }
    },
  }
</script>