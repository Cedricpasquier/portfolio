<template>
  <v-container>
    <v-sheet
        color="orange"
        class="pa-5">
      <v-avatar
          size="100"
          class="align-center"
      >
        <v-img src="https://img.utdstc.com/icon/5b0/443/5b044358e015aa2051bc6ee4799870b97f92d9677a2fb7f6bc016ee508d3db0f:200"></v-img>
      </v-avatar>
      <sheet
          class="align-center"
          color="orange"
      >
        Projet filtre réalité augmenter
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
          <v-card-text class="text-body-1 text-justify">Dans ce projet, nous avons cherché à tracker notre visage grâce au moteur unity en utilisant le plugin ARCore</v-card-text>
        </v-card>
        <v-row class="ma-5 pa-5">
          <v-col col="1">
            <v-card>
              <div><v-icon>mdi-calendar-month</v-icon> Début : Octobre 2020</div>
              <v-divider></v-divider>
              <div><v-icon>mdi-calendar-month</v-icon> Fin : Décembre 2020</div>
              <v-divider></v-divider>
              <div><v-icon>mdi-clock-time-eight-outline</v-icon> 3 mois</div>
            </v-card>
          </v-col>
          <v-col col="9">
            <v-img width="300" src="https://www.micrococktails.com/wp-content/uploads/2019/05/logo-smartphone.jpg"></v-img>
          </v-col>
        </v-row>
        <v-card-title color="cyan lighten-1" class="text-h4"> Outils utilisés</v-card-title>
        <v-row>
          <v-col>
              <v-img width="350" src="https://unity.com/logo-unity-web.png"></v-img>
          </v-col>
          <v-col>
              <v-img width="200" src="https://miro.medium.com/max/3150/1*KV3lq1ssjHg4Jf1xSzUXaQ.jpeg"></v-img>
          </v-col>
        </v-row>
        <v-card-title color="cyan lighten-1" class="text-h4"> Démo </v-card-title>
        <video-embed  src="https://www.youtube.com/watch?v=_gc8Ibd7DTY&ab_channel=SamZegga%C3%AF"></video-embed>
        <v-card-title color="cyan lighten-1" class="text-h4"> Conclusion </v-card-title>
        <v-card
            class="ma-5 pa-5"
            elevation="2">
          <v-card-text class="text-body-1 text-justify">Ce projet m'a permis de découvrir plus en détail le moteur unity et de me familiariser avec lui. ARCore est facilement intégrable à unity et est facile à prendre en main. J'ai eu beaucoup de plaisir à réalisé ce projet.</v-card-text>
        </v-card>
      </v-sheet>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "VR"

}
</script>

<style scoped>

</style>
