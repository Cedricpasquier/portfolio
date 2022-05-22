<template>
  <v-container>
    <v-sheet
        color="orange"
        class="pa-5">
      <v-avatar
          size="100"
          class="align-center"
      >
        <v-img src="https://drive.google.com/uc?export=view&id=1ZA2YRZXNpzOr2KnOE44lV987_shz-n3_"></v-img>
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
        <v-card-title color="cyan lighten-1" class="text-h4"> Description </v-card-title>
        <v-card
        class="ma-5 pa-5"
        elevation="2">
          <v-card-text class="text-body-1 text-justify">
            Dans ce projet, l'objectif était de comprendre comment fonctionner les mesh sur Unity avec le sdk ARCore.
            Nous avons donc appliqué un mesh de visage sur celui détecté à travers la caméra et ajouté des
            interactions pour pouvoir le changer. <br /> Les deux interactions que nous avons implémentées sont l'appui sur un
            bouton visible sur l'écran ainsi que de tourner sa tête vers la droite ou la gauche.
          </v-card-text>
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
            <v-img width="300" src="https://drive.google.com/uc?export=view&id=1kSWD2dyJUfZQRW6fw-f6TNiXDeWLj0cw"></v-img>
          </v-col>
        </v-row>
        <v-card-title color="cyan lighten-1" class="text-h4"> Outils utilisés</v-card-title>
        <v-container class="center">
          <v-item-group>
            <v-item
                v-for="button in buttonsfilter"
                :key="button.time"
            >
              <v-btn class="ma-1"
                     :color="competencefilter === button.settype ? 'blue-grey lighten-1' : 'blue-grey lighten-5'"
                     @click="competencefilter=button.settype">{{ button.nom }}
              </v-btn>
            </v-item>
          </v-item-group>
        </v-container>
        <v-sheet>
          <v-item-group>
            <v-item
                v-for="outil in outils"
                :key="outil.time"
                v-show="outil.type===competencefilter || competencefilter==='tout'"
            >
              <v-avatar
                  size="100"
                  class="align-center ma-5"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-img v-on="on" :src=outil.img></v-img>
                  </template>
                  <span>{{ outil.nom }}</span>
                </v-tooltip>
              </v-avatar>
            </v-item>
          </v-item-group>
        </v-sheet>
        <v-card-title color="cyan lighten-1" class="text-h4"> Démo </v-card-title>
        <video-embed  src="https://www.youtube.com/watch?v=_gc8Ibd7DTY&ab_channel=SamZegga%C3%AF"></video-embed>
        <v-card-title color="cyan lighten-1" class="text-h4"> Conclusion </v-card-title>
        <v-card
            class="ma-5 pa-5"
            elevation="2">
          <v-card-text class="text-body-1 text-justify">
            Ce projet m'a permis de découvrir plus en détail le moteur Unity et de me familiariser avec lui.
            ARCore est facilement intégrable à Unity et est facile à prendre en main.
            J'ai eu beaucoup de plaisir à réalisé ce projet.</v-card-text>
        </v-card>
      </v-sheet>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "VR",
  data: () => ({
    competencefilter: 'tout',
    buttonsfilter: [
      {
        nom: 'tout',
        settype: 'tout'
      },
      {
        nom: 'Langage',
        settype: 'lgg'
      },
      {
        nom: 'Logiciel',
        settype: 'lgc'
      },
      {
        nom: 'SDK',
        settype: 'sdk'
      }
    ],
    outils: [
      {
        nom: 'Unity',
        img: 'https://drive.google.com/uc?export=view&id=1oDMRteFgGUW64KyB6Nhdtj1FLOc1U_09',
        type: 'lgc'
      },
      {
        nom: 'ARCore',
        img: 'https://drive.google.com/uc?export=view&id=1nNzUmKyFyo2B4pjZPNvbYcL8bOO8XeYM',
        type: 'sdk'
      },
      {
        nom: 'C#',
        img: 'https://drive.google.com/uc?export=view&id=1mHhS942iGjNyu-pY9Keco2SQ6CLOkueN',
        type: 'lgg'
      }
    ]
  })

}
</script>

<style scoped>

</style>
