<template>
  <v-container>
    <v-sheet
        color="orange"
        class="pa-5">
      <v-avatar
          size="100"
          class="align-center"
      >
        <v-img src="https://boutique.3sigma.fr/487-large_default/capteur-de-distance-ultrason-hc-sr04.jpg"></v-img>
      </v-avatar>
      <sheet
          class="align-center"
          color="orange"
      >
        Projet FPGA Ultrason
      </sheet>
    </v-sheet>

    <v-layout class="pa-5" align-center="align-center" justify-center="justify-center">
      <v-sheet
          elevation="10"
          class="pa-5 ma-5"
          max-width="1000"
      >
        <v-card-title color="cyan lighten-1" class="text-h4"> Intoduction</v-card-title>
        <v-card
            class="ma-5 pa-5"
            elevation="2">
          <v-card-text class="text-body-1 text-justify">Dans ce projet, nous avons cherché à programmer un FPGA dans le but de récupérer les mesures d'un capteur à ultrason et par la suite de l'envoyer en UART sur un ordinateur ou alors l'afficher sur des écrans sept segments</v-card-text>
        </v-card>
        <v-row class="ma-5 pa-5">
          <v-col col="1">
            <v-card>
              <div><v-icon>mdi-calendar-month</v-icon> Début : fevrier 2021</div>
              <v-divider></v-divider>
              <div><v-icon>mdi-calendar-month</v-icon> Fin : mars 2021</div>
              <v-divider></v-divider>
              <div><v-icon>mdi-clock-time-eight-outline</v-icon> 2 mois</div>
            </v-card>
          </v-col>
          <v-col col="9">
            <v-img width="300" src="https://www.mouser.fr/images/marketingid/2018/img/186527521.png?v=052220.0340"></v-img>
          </v-col>
        </v-row>
        <v-card-title color="cyan lighten-1" class="text-h4"> Outils utilisés</v-card-title>
        <v-row>
          <v-col>
            <v-img width="350" src="http://media.digikey.com/photos/Altera%20Photos/modelsim.jpg"></v-img>
          </v-col>
          <v-col>
            <v-img width="200" src="https://www.jackenhack.com/wp-content/uploads/2020/01/Quartus_prime_icon.png"></v-img>
          </v-col>
        </v-row>
        <v-card-title color="cyan lighten-1" class="text-h4"> Démo </v-card-title>
        <video-embed  src="https://youtu.be/eg_chJsXS2Y"></video-embed>
        <v-card-title color="cyan lighten-1" class="text-h4"> Conclusion </v-card-title>
        <v-card
            class="ma-5 pa-5"
            elevation="2">
          <v-card-text class="text-body-1 text-justify">Ce projet m'a permis de mieux assimiler ce que j'ai apprit en programmation VHDL et également sur l'UART. Les FPGA sont des outils très puissant et c'est très interessant de voir ce que l'on peut designer avec.</v-card-text>
        </v-card>
      </v-sheet>
    </v-layout>
  </v-container>
</template>

<script>
export default {
name: "VHDL"
}
</script>

<style scoped>

</style>
