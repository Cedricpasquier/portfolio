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
        <v-avatar
            size="200"
            class="align-center"
        >
          <v-img src="https://media-exp1.licdn.com/dms/image/C5603AQGq27sLmanE7g/profile-displayphoto-shrink_200_200/0/1568301042708?e=1622678400&v=beta&t=OSdHHK0CdRFqt8wYU7y7vixkfxisnsoQVas3uZ6t84E"></v-img>
        </v-avatar>
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
        <v-card-title color="cyan lighten-1" class="text-h4"><v-icon x-large left color="grey darken-1">mdi-account-circle-outline</v-icon> À propos</v-card-title>
        <v-card
          elevation="0"
          class="ma-5 pa-5"
          >
          <v-card-text class="text-body-1 text-justify">Je me présente, je m'appelle Cédric, j'ai 23 ans et je suis alternant à Faurecia interior system, vous trouvez ci-dessous mes expérience, mes formations et mes compétences techniques.
            Vous trouverez également une page sur ma mission en alternance et une autre pour me contacter.</v-card-text>
        </v-card>
        <v-card-title class="text-h4"><v-icon x-large left color="blue">mdi-briefcase</v-icon> Expériences professionnelles</v-card-title>
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
                <v-row><v-col><v-img max-width="150" :src="experience.img"></v-img></v-col><v-col><div class="ma-5 title font-weight-bold ">{{ experience.poste }}</div></v-col></v-row>
                <v-row class="mt-5"> <v-icon class="mr-3" medium>mdi-clock-time-eight-outline</v-icon> {{experience.duree}}   <v-icon class="mx-3" medium>mdi-calendar-month</v-icon> {{experience.date}}</v-row>
                <v-row class="mt-5"> <v-icon class="mr-3" medium>mdi-office-building-outline</v-icon> {{experience.entreprise}}</v-row>
              </v-card>
            </div>
          </v-timeline-item>
        </v-timeline>
        <v-card-title class="text-h4"><v-icon x-large left color="orange">mdi-certificate</v-icon> Fomations</v-card-title>
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
                <v-row><v-col><v-img max-width="150" :src="formation.img"></v-img></v-col><v-col><div class="ma-5 title font-weight-bold ">{{ formation.nom }}</div></v-col></v-row>
                <v-row class="mt-5"> <v-icon class="mr-3" medium>mdi-clock-time-eight-outline</v-icon> {{formation.duree}}   <v-icon class="mx-3" medium>mdi-calendar-month</v-icon> {{formation.date}}</v-row>
                <v-row class="mt-5"> <v-icon class="mr-3" medium>mdi-office-building-outline</v-icon> {{formation.etablissement}}</v-row>
              </v-card>
            </div>
          </v-timeline-item>
        </v-timeline>
        <v-card-title class="text-h4"><v-icon x-large left color="grey darken-1">mdi-cog</v-icon> Compétences techniques</v-card-title>
        <v-container class="center">
          <v-item-group>
            <v-item
                v-for="button in buttonsfilter"
                :key="button.time"
                >
              <v-btn class="ma-1" :color="competencefilter == button.settype ? 'blue-grey lighten-1' : 'blue-grey lighten-5'" @click="competencefilter=button.settype">{{button.nom}}</v-btn>
            </v-item>
          </v-item-group>
        </v-container>
        <v-sheet>
          <v-item-group>
            <v-item
                v-for="competence in competences"
                :key="competence.time"
                v-show="competence.type==competencefilter || competencefilter=='tout'"
                >
                  <v-avatar
                      size="100"
                      class="align-center ma-5"
                  >
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-img v-on="on" :src=competence.img></v-img>
                      </template>
                      <span>{{competence.nom}}</span>
                    </v-tooltip>
                  </v-avatar>
            </v-item>
          </v-item-group>
        </v-sheet>
        <v-card-title class="text-h4"><v-icon x-large left color="grey darken-1">mdi-code-tags</v-icon> Projets</v-card-title>
        <v-card
            elevation="10"
            class="pa-5 ma-5"
        >
          <v-row>
            <v-col cols="3">
              <v-img class="ma-2" max-width="150" src="https://img.utdstc.com/icon/5b0/443/5b044358e015aa2051bc6ee4799870b97f92d9677a2fb7f6bc016ee508d3db0f:200"></v-img>
            </v-col>
            <v-col>
              <v-card-title>Traking de visage AR</v-card-title>
              <v-card-text class="text-body-1 text-justify">Projet en réalité virtuel réalisé avec Unity est ARcore, le but était de tracker le visage afin de lui appliquer un filtre et de le changer par un appui de boutton ou de mouvement de tête</v-card-text>
            </v-col>
          </v-row>
        </v-card>
        <v-card
            elevation="10"
            class="pa-5 ma-5"
        >
          <v-row>
            <v-col cols="3">
              <v-img class="ma-2" max-width="150" src="https://boutique.3sigma.fr/487-large_default/capteur-de-distance-ultrason-hc-sr04.jpg"></v-img>
            </v-col>
            <v-col>
              <v-card-title>Affichage distance sur carte VHDL</v-card-title>
              <v-card-text class="text-body-1 text-justify">Programmation d'une carte FPGA avec un capteur à ultrason afin d'afficher la distance calculée.</v-card-text>
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
        nom: 'Framework',
        settype: 'framework'
      },
      {
        nom: 'Base de données',
        settype: 'bdd'
      }

    ],
    experiences: [
      {
        img: 'https://www.faurecia.com/sites/groupe/files/pages/logo.png',
        poste: 'Développeur systèmes embarqués',
        entreprise: 'Faurecia',
        duree: '1 ans et 5 mois',
        date: 'Octobre 2020 - aujourd\'hui'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Logo_ST%28SI%292.png/260px-Logo_ST%28SI%292.png',
        poste: 'Développeur web',
        entreprise: 'Service des Technologies et des Systèmes d\'inforamtions de la Sécurité Intérieur',
        duree: '2 mois',
        date: 'Juin 2018'
      }
    ],
    formations: [
      {
        img: 'https://s3-eu-west-1.amazonaws.com/assets.atout-on-line.com/images/ingenieur/Logos_Ecoles/2018_2021/esiea_300.jpg',
        nom: 'Diplôme d\'ingénieur en Informatique',
        etablissement: 'ESIEA',
        duree: '3 ans',
        date: '2019 - 2022'
      },
      {
        img: 'http://bswdev.ulaval.ca/duq/wp-content/uploads/uqac.png',
        nom: 'Baccalaureat en Informatique',
        etablissement: 'Université du Québec à Chicoutimi',
        duree: '1 ans',
        date: '2018 - 2019'
      },
      {
        img: 'https://lh3.googleusercontent.com/proxy/tU0d4tGK94IPn0tNHl9SkGFevm18SvrSYPh9k5Y2whb_S7im7BM_7D0D3e0VHxhS6HOaSju_M3rHjPuZy3MMNBg9aepJHjKjWKIGOIePM70GwnA',
        nom: 'DUT informatique',
        etablissement: 'IUT de Vélizy',
        duree: '2 ans',
        date: '2016 - 2018'
      }

    ],
    competences: [
      {
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7736e722374143.56311dd81f43d.png',
        nom: 'PHP',
        type: 'frontend'
      },
      {
        img: 'https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png',
        nom: 'HTML',
        type: 'frontend'
      },
      {
        img: 'https://img.flaticon.com/icons/png/512/919/919826.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
        nom: 'CSS',
        type: 'frontend'
      },
      {
        img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/41/e5/c6/41e5c6ba-2868-669c-fc06-8a7b004751fe/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
        nom: 'VHDL',
        type:'applicatif'
      },
      {
        img: 'https://camo.githubusercontent.com/2460cd17c86f4275fe343db612e2eb53ace1cc9fb388d457e0c09dfd2dda95b1/68747470733a2f2f70726f642d616362352e6b7863646e2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30322f737072696e672d626f6f742d69636f6e2d323030783139362e706e67',
        nom: 'Springboot',
        type: 'backend'
      },
      {
        img: 'https://images-eu.ssl-images-amazon.com/images/I/61np1wbr9pL.png',
        nom: 'Vue.js',
        type: 'frontend'
      },
      {
        img: 'https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_400/v1/tag/vuetify.jpg',
        nom: 'Vuetify',
        type: 'framework'
      },
      {
        img: 'https://img2.freepng.fr/20180816/hog/kisspng-jquery-computer-icons-port-jquery-icon-shared-by-astrid-1-2565-jmkxyy-5b7604c36a3628.8858824415344611234351.jpg',
        nom: 'JQuerry',
        type: 'backend'
      },
      {
        img: 'https://img.icons8.com/color/452/c-programming.png',
        nom: 'C',
        type: 'applicatif'
      },
      {
        img: 'https://icons-for-free.com/iconfiles/png/512/java+icon-1320167912601224138.png',
        nom: 'Java',
        type: 'applicatif'
      },
      {
        img: 'data:image/png;base64,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',
        nom: 'Python',
        type: 'applicatif'
      },
      {
        img: 'https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png',
        nom: 'Kotlin',
        type: 'applicatif'
      },
      {
        img: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg',
        nom: 'MySQL',
        type: 'bdd'
      }
    ]

  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
