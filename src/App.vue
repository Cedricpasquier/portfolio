<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app>
      <v-list dense>
        <v-list-item link to="/Accueil">Accueil</v-list-item>
        <v-divider></v-divider>
        <v-list-item>Projet</v-list-item>
        <v-list-item
            v-for="projet in projets"
            :key="projet.title"
            :to="projet.to"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ projet.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ projet.title }}</v-list-item-title>

          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link to="/Message">
          <v-list-item-icon>
            <v-icon>mdi-forum</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Me contacter
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <a href="Cedric_PASQUIER_CV.pdf" style="text-decoration: none;" download>
        <v-list-item @click="download">
          <v-list-item-icon>
            <v-icon>mdi-download</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Mon CV
          </v-list-item-title>
        </v-list-item></a>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        app
        color="white"
        elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      projets: [
        { title: 'Traking AR', icon: 'mdi-code-tags', to: '/VR' },
        { title: 'Projet VHDL', icon: 'mdi-code-tags', to: '/VHDL' },
      ],
      drawer: true,
    }
  },
  created() {
    this.$router.push('/Accueil');
  },
  methods: {
    download() {
      /*axios({
        src: 'http://localhost:8080/Cedric_PASQUIER_CV.pfd',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'file.pdf');
        document.body.appendChild(fileLink);

        fileLink.click();
      });*/
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
