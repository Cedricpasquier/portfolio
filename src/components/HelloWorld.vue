<template>
  <v-container>
    <v-layout class="pa-5" align-center="align-center" justify-center="justify-center">
      <v-card
        elevation="0"
        width="800"
      >
        <v-card-title color="cyan lighten-1" class="text-h4"><v-icon x-large left color="grey darken-1">mdi-account-circle-outline</v-icon> À propos</v-card-title>
        <v-card-title class="text-h4"><v-icon x-large left color="grey darken-1">mdi-briefcase</v-icon> Expériences professionnelles</v-card-title>
        <v-card-title class="text-h4"><v-icon x-large left color="grey darken-1">mdi-certificate</v-icon> Fomations</v-card-title>
        <v-card-title class="text-h4"><v-icon x-large left color="grey darken-1">mdi-cog</v-icon> Compétences techniques</v-card-title>
        <v-card-title class="text-h4"><v-icon x-large left color="grey darken-1">mdi-code-tags</v-icon> Projets</v-card-title>
      </v-card>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
