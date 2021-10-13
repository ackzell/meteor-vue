<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>