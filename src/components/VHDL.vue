<template>
  <v-container>
    <v-sheet
        color="orange"
        class="pa-5">
      <v-avatar
          size="100"
          class="align-center"
      >
        <v-img src="https://drive.google.com/uc?export=view&id=1BnMb_z-lpokxsdUW8UpDvLcOZfueWqDh"></v-img>
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
        <v-card-title color="cyan lighten-1" class="text-h4"> Description </v-card-title>
        <v-card
            class="ma-5 pa-5"
            elevation="2">
          <v-card-text class="text-body-1 text-justify">
            Dans ce projet, nous avons cherché à programmer un FPGA
            dans le but de récupérer les mesures d'un capteur à ultrason et par la suite de l'envoyer en UART sur un
            ordinateur ou alors l'afficher sur des écrans sept segments.
          </v-card-text>
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
            <v-img width="300" src="https://drive.google.com/uc?export=view&id=1aQKKzV0PH8Kro-AcYpMGLWaTWhD8bFIm"></v-img>
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
  name: "VHDL",
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
    ],
    outils: [
      {
        nom: 'ModelSim',
        img: 'https://drive.google.com/uc?export=view&id=1LqWvpeKrMhC1BHMedZomtSbolfxZpQRV',
        type: 'lgc'
      },
      {
        nom: 'Quartus',
        img: 'https://drive.google.com/uc?export=view&id=1Vpj1g5tcAx9Nq5QVkLhgXlfvkLjxxPla',
        type: 'lgc'
      },
      {
        nom: 'VHDL',
        img: 'https://drive.google.com/uc?export=view&id=19d57Et8WEwu5SEpJemrx7luxHJo6RmR8',
        type: 'lgg'
      },
      {
        nom: 'C',
        img: 'https://drive.google.com/uc?export=view&id=1Avn8xIhwsqWehRUgg5_oM9tzj6DLDnnV',
        type: 'lgg'
      }
    ]
  })

}
</script>

<style scoped>

</style>
