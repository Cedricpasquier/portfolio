<template>
  <v-container>
    <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"

    >
      <v-row
          align="center"
          justify="center"
      >
        <a href="https://www.linkedin.com/in/cedric-pasquier-003284133/">
        <v-avatar
            size="300"
            class="align-center"
        >
          <v-img src="https://drive.google.com/uc?export=view&id=1IH7R9uGwcGU6tYot8t6m927ZIDrOoPzi"></v-img>
        </v-avatar></a>
      </v-row>
      <v-row
          align="center"
          justify="center"
      >
        <div class="text-h4 mb-10 font-weight-thin">Cédric Pasquier</div>
      </v-row>
    </v-parallax>
    <v-layout class="pa-5" align-center="align-center" justify-center="justify-center">
      <v-sheet
          elevation="10"
          class="pa-5 ma-5"
          max-width="1000"
      >
        <v-card-title color="cyan lighten-1" class="text-h4">
          <v-icon x-large left color="grey darken-1">mdi-account-circle-outline</v-icon>
          À propos
        </v-card-title>
        <v-card
            elevation="0"
            class="ma-5 pa-5"
        >
          <v-card-text class="text-body-1 text-justify">Je me présente,
            je m'appelle Cédric, j'ai 24 ans, étant actuellement en dernière année d'école d'ingénieur à l'école ESIEA,
            je suis à la recherche d'une opportunité en ville de Québec en tant que développeur logiciel.
          </v-card-text>
        </v-card>

        <!-- ############################# Experience pro #############################
        -->

        <v-card-title class="text-h4">
          <v-icon x-large left color="blue">mdi-briefcase</v-icon>
          Expériences professionnelles
        </v-card-title>
        <v-timeline
            align-center
            dense
        >
          <v-timeline-item
              v-for="experience in experiences"
              :key="experience.time"
              color="blue"
              small
          >
            <div>
              <v-card
                  elevation="5"
                  class="pa-10 mr-10"
              >
                <v-row>
                  <v-col><a :href="experience.lien">
                    <v-img :max-width="150" :src="experience.img"></v-img>
                  </a></v-col>
                  <v-col>
                    <div class="ma-5 title font-weight-bold ">{{ experience.poste }}</div>
                  </v-col>
                </v-row>
                <v-row class="mt-5">
                  <v-icon class="mr-3" medium>mdi-clock-time-eight-outline</v-icon>
                  {{ experience.duree }}
                  <v-icon class="mx-3" medium>mdi-calendar-month</v-icon>
                  {{ experience.date }}
                </v-row>
                <v-row class="mt-5">
                  <v-icon class="mr-3" medium>mdi-office-building-outline</v-icon>
                  {{ experience.entreprise }}
                </v-row>
                <v-row class="mt-5">
                  <v-icon class="mr-3" medium>mdi-map-marker-outline</v-icon>
                  {{ experience.lieux }}
                </v-row>
              </v-card>
            </div>
          </v-timeline-item>
        </v-timeline>

        <!-- ############################# Fomations #############################
        -->

        <v-card-title class="text-h4">
          <v-icon x-large left color="orange">mdi-certificate</v-icon>
          Fomations
        </v-card-title>
        <v-timeline
            align-center
            dense
        >
          <v-timeline-item
              v-for="formation in formations"
              :key="formation.time"
              color="orange"
              small
          >
            <div>
              <v-card
                  elevation="5"
                  class="pa-10 mr-10"
              >
                <v-row>
                  <v-col><a :href="formation.lien">
                    <v-img :href="formation.lien" max-width="150" :src="formation.img"></v-img>
                  </a></v-col>
                  <v-col>
                    <div class="ma-5 title font-weight-bold ">{{ formation.nom }}</div>
                  </v-col>
                </v-row>
                <v-row class="mt-5">
                  <v-icon class="mr-3" medium>mdi-clock-time-eight-outline</v-icon>
                  {{ formation.duree }}
                  <v-icon class="mx-3" medium>mdi-calendar-month</v-icon>
                  {{ formation.date }}
                </v-row>
                <v-row class="mt-5">
                  <v-icon class="mr-3" medium>mdi-office-building-outline</v-icon>
                  {{ formation.etablissement }}
                </v-row>
                <v-row class="mt-5">
                  <v-icon class="mr-3" medium>mdi-map-marker-outline</v-icon>
                  {{ formation.lieux }}
                </v-row>
              </v-card>
            </div>
          </v-timeline-item>
        </v-timeline>

        <!-- ############################# Competences techniques #############################
        -->

        <v-card-title class="text-h4">
          <v-icon x-large left color="grey darken-1">mdi-cog</v-icon>
          Compétences techniques
        </v-card-title>
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
                v-for="competence in competences"
                :key="competence.time"
                v-show="competence.type===competencefilter || competencefilter==='tout'"
            >
              <v-avatar
                  size="100"
                  class="align-center ma-5"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-img v-on="on" :src=competence.img></v-img>
                  </template>
                  <span>{{ competence.nom }}</span>
                </v-tooltip>
              </v-avatar>
            </v-item>
          </v-item-group>
        </v-sheet>

        <!-- ############################# Projet #############################
        -->

        <v-card-title class="text-h4">
          <v-icon x-large left color="grey darken-1">mdi-code-tags</v-icon>
          Projets
        </v-card-title>
        <v-card
            v-for="projet in projets"
            :key="projet.time"
            elevation="10"
            class="pa-5 ma-5"
            :to="projet.path"
        >
          <v-row>
            <v-col cols="3">
              <v-img class="ma-2" max-width="150"
                     :src="projet.img"></v-img>
            </v-col>
            <v-col>
              <v-card-title>
                {{projet.nom}}
              </v-card-title>
              <v-card-text class="text-body-1 text-justify">
                {{projet.description}}
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-sheet>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    competencefilter: 'tout',
    buttonsfilter: [
      {
        nom: 'tout',
        settype: 'tout'
      },
      {
        nom: 'Applicatif',
        settype: 'applicatif'
      },
      {
        nom: 'Frontend',
        settype: 'frontend'

      },
      {
        nom: 'Backend',
        settype: 'backend'
      },
      {
        nom: 'Base de données',
        settype: 'bdd'
      }

    ],
    experiences: [
      {
        img: 'https://drive.google.com/uc?export=view&id=1qcUmbfzZPBjVHLNzbrqum9HRTol3nf3N',
        poste: 'Développeur systèmes embarqués',
        lien: 'https://www.faurecia.com/',
        entreprise: 'Forvia Faurecia',
        lieux: 'Méru, France',
        duree: '2 ans et 7 mois',
        date: 'Octobre 2020 - aujourd\'hui'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1qyzD39-myWWFahhy2FXCX9D6B9P8rZyv',
        poste: 'Développeur web',
        entreprise: 'STSI²',
        lien: 'https://www.linkedin.com/company/stsisi/?originalSubdomain=fr',
        lieux: 'Issy-les-Moulineaux, France',
        duree: '2 mois',
        date: 'Juin 2018'
      }
    ],
    formations: [
      {
        img: 'https://drive.google.com/uc?export=view&id=1FpI9b9ZW26NSJiRPHNGhosZ9VeKlWBIX',
        nom: 'Diplôme d\'ingénieur en Informatique',
        etablissement: 'ESIEA',
        lien: 'https://www.esiea.fr/',
        lieux: 'Ivry-sur-Seine, France',
        duree: '3 ans',
        date: '2019 - 2022'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1DvSrIx3Z9yEXS5Tj8gPv3NoTEdlKvG9v',
        nom: 'Baccalaureat en Informatique',
        lien: 'https://www.uqac.ca/',
        etablissement: 'Université du Québec à Chicoutimi, Chicoutimi, Québec, Canada',
        lieux: 'Chicoutimi, Québec, Canada',
        duree: '1 ans',
        date: '2018 - 2019'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1xQMJIBqXkW7QDDOpr9-ZWDZxgVncw_Cw',
        nom: 'DUT informatique',
        lien: 'https://www.iut-velizy-rambouillet.uvsq.fr/',
        etablissement: 'IUT de Vélizy',
        lieux: 'Vélizy, France',
        duree: '2 ans',
        date: '2016 - 2018'
      }

    ],
    competences: [
      {
        img: 'https://drive.google.com/uc?export=view&id=1yAexQ7FW5pdTkvZxwgurHDULFg2TXY0x',
        nom: 'PHP',
        type: 'frontend'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1XfJRtSmEhsvZH4UadJQsJe-KEyzzfgsF',
        nom: 'HTML',
        type: 'frontend'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1bAWiyeCkZfiq8-tZsvFBvycXqRIudhph',
        nom: 'CSS',
        type: 'frontend'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=19d57Et8WEwu5SEpJemrx7luxHJo6RmR8',
        nom: 'VHDL',
        type: 'applicatif'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1WuZXk0SBjprVk-IcDA1ZwFzzbC4_2wsA',
        nom: 'Springboot',
        type: 'backend'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1ENrvFsaxYK-ngtKaCauY3iY6JOjQBlpc',
        nom: 'Vue.js',
        type: 'frontend'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1fxzDhEU2x42kgiYwdGZgDTF58DrBqNUx',
        nom: 'Vuetify',
        type: 'frontend'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1_2IY-nUlzN5aNO2nMwAI3yqwj3TiTEIA',
        nom: 'JQuerry',
        type: 'backend'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1Avn8xIhwsqWehRUgg5_oM9tzj6DLDnnV',
        nom: 'C',
        type: 'applicatif'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=19wMqkJy8QKTh76Y2noSmzs9ed8Kmci3L',
        nom: 'Java',
        type: 'applicatif'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1TWXj_NJ9bjKw5EVgt3-cdgkCDS6G2DGv',
        nom: 'Python',
        type: 'applicatif'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1gxLvJ0rJCqhf35g9fM8felpU69T6vDI-',
        nom: 'Kotlin',
        type: 'applicatif'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1rJP6my7YKew4wNeleFEYVKzYSRNUG5zP',
        nom: 'MySQL',
        type: 'bdd'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1aZS9Z-4mjK5gtHu7ooeWSFBT51aHp3KQ',
        nom: 'Angular',
        type: 'frontend'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1PWgDVGXkeK3A7y0LLrsMEQVH3phclRAH',
        nom: 'Apache Spark',
        type: 'bdd'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1mHhS942iGjNyu-pY9Keco2SQ6CLOkueN',
        nom: 'C#',
        type: 'applicatif'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1KdSCvyc5wgpAcSC3j-UiZ0ndnevAXKB1',
        nom: 'Node.js',
        type: 'backend'
      },

      {
        nom: 'JavaScript',
        img: 'https://drive.google.com/uc?export=view&id=1PgUqkT5eMyrfr9uOWHVMry6rfXxaFkYg',
        type: 'applicatif'
      },
      {
        img: 'https://drive.google.com/uc?export=view&id=1ZBLggiz2SpbkF9sOUd7BRjPhar6lH-1I',
        nom: 'Docker',
        type: 'applicatif'
      },
      {
        nom: 'Axios',
        img: 'https://drive.google.com/uc?export=view&id=19_-WpkYUT-Iruy2BRZ_wTt8nFUaDSRJb',
        type: 'backend'
      }
    ],
    projets: [
      {
        nom: 'Traking de visage AR',
        description: 'Un projet en réalité virtuel réalisé avec Unity est ARcore, le' +
            'but était de tracker le visage afin de lui appliquer un filtre et de le changer par un appui de bouton' +
            ' ou de mouvement de tête',
        img: 'https://drive.google.com/uc?export=view&id=1ZA2YRZXNpzOr2KnOE44lV987_shz-n3_',
        path:'/VR'
      },
      {
        nom: 'Site d\'organisation d\'évenements',
        description: 'Développement d\'un site en Vue, Spring et MySQL permettant de créer des événements'+
        'et de proposer des dates. Les autres utilisateurs peuvent les voir et donner leur disponibilité.',
        img: 'https://drive.google.com/uc?export=view&id=1t8y48LkuYV8ITyvmZGDHCs6WWuxNwxzg',
        path:'/Website'
      },
      {
        nom: 'Affichage distance sur carte VHDL',
        description: 'Programmation d\'une carte FPGA avec un capteur à ultrason\n' +
            '                afin d\'afficher la distance calculée.',
        img: 'https://drive.google.com/uc?export=view&id=1BnMb_z-lpokxsdUW8UpDvLcOZfueWqDh',
        path:'/VHDL'
      }
    ]
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
