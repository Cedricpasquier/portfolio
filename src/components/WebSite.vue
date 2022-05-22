<template>
  <v-container>
    <v-sheet
        color="orange"
        class="pa-5">
      <v-avatar
          size="100"
          class="align-center"
      >
        <v-img src="https://drive.google.com/uc?export=view&id=1t8y48LkuYV8ITyvmZGDHCs6WWuxNwxzg"></v-img>
      </v-avatar>
      <sheet
          class="align-center"
          color="orange"
      >
        Site d'organisation d'évenement
      </sheet>
    </v-sheet>

    <v-layout class="pa-5" align-center="align-center" justify-center="justify-center">
      <v-sheet
          elevation="10"
          class="pa-5 ma-5"
          max-width="1000"
      >
        <v-card-title color="cyan lighten-1" class="text-h4"> Description</v-card-title>
        <v-card
            class="ma-5 pa-5"
            elevation="2">
          <v-card-text class="text-body-1 text-justify"> Ce site a été développé pour s'exercer à la
            programmation orienté mobile. Nous avons utilisé Vue.js pour faire le front, front qui utilise le client
            axios pour pouvoir faire des requêtes api vers un server comportant une RESTfull Api spring. Ceci nous permet
            de délocaliser les données du site sur un base de données accessible depuis l'API. Le site comporte également
            des sessions pour chaque utilisateur avec un token, ces tokens son géré par Firebase.<br />
            Ce projet est disponible sur Github : <br />
            - <a href="https://github.com/Cedricpasquier/Projet_PWOM_Front">Projet PWOM Front</a><br />
            - <a href="https://github.com/Cedricpasquier/Projet_PWOM_Back">Projet PWOM Back</a>
          </v-card-text>
        </v-card>
        <v-row class="ma-5 pa-5">
          <v-col col="1">
            <v-card>
              <div><v-icon>mdi-calendar-month</v-icon> Début : novembre 2021</div>
              <v-divider></v-divider>
              <div><v-icon>mdi-calendar-month</v-icon> Fin : décembre 2021</div>
              <v-divider></v-divider>
              <div><v-icon>mdi-clock-time-eight-outline</v-icon> 2 mois</div>
            </v-card>
          </v-col>
          <v-col col="9">
            <v-img width="300" src="https://drive.google.com/uc?export=view&id=1f7HHXVR-dA8LUwyDjJnF9i7LarlSvM6E"></v-img>
          </v-col>
        </v-row>
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
        <v-card-title color="cyan lighten-1" class="text-h4"> Conclusion </v-card-title>
        <v-card
            class="ma-5 pa-5"
            elevation="2">
          <v-card-text class="text-body-1 text-justify">
            Ce projet m'a permis de mieux comprendre comment construire un site web de façon plus flexible, plus
            esthétique et plus sécuritaire. Les sites d'aujourd'hui sont presque tous fait en single page avec des
            technologies comme Vue, Angular ou encore RECT. Il est donc nécessaire de les maitriser en plus d'utiliser
            d'autre technologies essentielles de nos jours comme les API.
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Website",
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
        nom: 'Front',
        settype: 'frt'
      },
      {
        nom: 'Base de données',
        settype: 'bdd'
      },
      {
        nom: 'Back',
        settype: 'bck'
      }
    ],
    outils: [
      {
        nom: 'WebStorm',
        img: 'https://drive.google.com/uc?export=view&id=13sIKNkDctWXX2NOhtM4fhrfR9OG7eoHP',
        type: 'lgc'
      },
      {
        nom: 'Firebase',
        img: 'https://drive.google.com/uc?export=view&id=1AhTVpHPQDTTA4X6-yG81IQK-5BLdSsDi',
        type: 'frt'
      },
      {
        nom: 'Spring RESTfull Web API',
        img: 'https://drive.google.com/uc?export=view&id=1nKZQ-rZHxynm5FDQTwm2a7iaYu0LxOql',
        type: 'bck'
      },
      {
        nom: 'Vue.js',
        img: 'https://drive.google.com/uc?export=view&id=1ENrvFsaxYK-ngtKaCauY3iY6JOjQBlpc',
        type: 'frt'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1fxzDhEU2x42kgiYwdGZgDTF58DrBqNUx',
        nom: 'Vuetify',
        type: 'frt'
      },
      {
        nom: 'Node.js',
        img: 'https://drive.google.com/uc?export=view&id=1KdSCvyc5wgpAcSC3j-UiZ0ndnevAXKB1',
        type: 'bck'
      },
      {
        nom: 'MySQL',
        img: 'https://drive.google.com/uc?export=view&id=1rJP6my7YKew4wNeleFEYVKzYSRNUG5zP',
        type: 'bdd'
      },
      {
        nom: 'JavaScript',
        img: 'https://drive.google.com/uc?export=view&id=1PgUqkT5eMyrfr9uOWHVMry6rfXxaFkYg',
        type: 'lgg'
      },
      {
        nom: 'Java',
        img: 'https://drive.google.com/uc?export=view&id=19wMqkJy8QKTh76Y2noSmzs9ed8Kmci3L',
        type: 'lgg'
      },
      {
        nom: 'Axios',
        img: 'https://drive.google.com/uc?export=view&id=19_-WpkYUT-Iruy2BRZ_wTt8nFUaDSRJb',
        type: 'bck'
      }
    ]
  })

}
</script>

<style scoped>

</style>
