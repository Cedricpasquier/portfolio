<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app>
      <v-list dense>
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
        <v-list-item link to="/portfolio/Message">
          <v-list-item-icon>
            <v-icon>mdi-forum</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Me contacter
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <!-- <a href="Cedric_PASQUIER_CV.pdf" style="text-decoration: none;" download> -->
        <v-list-item @click="downloadWithAxios">
          <v-list-item-icon>
            <v-icon>mdi-download</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Mon CV
          </v-list-item-title>
        </v-list-item>
        <!-- </a>-->

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        app
        color="blue darken-1"
        elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/portfolio/Accueil" >
        <v-icon>mdi-home</v-icon>
      </v-btn>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return{
      projets: [
        { title: 'Traking AR', icon: 'mdi-code-tags', to: '/portfolio/VR' },
        { title: 'Site d\'évenements', icon: 'mdi-code-tags', to: '/portfolio/Website' },
        { title: 'Projet VHDL', icon: 'mdi-code-tags', to: '/portfolio/VHDL' },
      ],
      drawer: true,
    }
  },
  created() {
    this.$router.push('/portfolio/Accueil');
  },
  methods: {
    forceFileDownload(response, title) {
      console.log(title)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Cedric_PASQUIER_CV.pdf')
      document.body.appendChild(link)
      link.click()
    },
    downloadWithAxios() {
      axios({
        method: 'get',
        url: 'https://cedricpasquier.github.io/portfolio/CV_Cedric_PASQUIER_Quebec_Web.pdf',
        responseType: 'arraybuffer',
      })
          .then((response) => {
            this.forceFileDownload(response)
          })
          .catch(() => console.log('error occured'))
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
