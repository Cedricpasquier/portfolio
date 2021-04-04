<template>
  <div class="container">
    <form>
      <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Nom"
          required
          @input="$v.from_name.$touch()"
          @blur="$v.from_name.$touch()"
      ></v-text-field>
      <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
      ></v-text-field>
      <v-textarea
          v-model="message"
          name="input-7-1"
          filled
          label="Message"
          auto-grow
          value=""
          @input="$v.message.$touch()"
          @blur="$v.message.$touch()"
      ></v-textarea>

      <v-btn
          class="mr-4"
          @click="submit"
      >
        Envoyer
      </v-btn>
      <v-btn @click="clear">
        Effacer
      </v-btn>
    </form>
    <v-bottom-sheet
        v-model="sheet"
        inset
    >
      <v-sheet
          class="text-center"
          height="200px"
      >
        <v-btn
            class="mt-6"
            text
            color="error"
            @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="my-3">
          {{ messagesheet }}
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>

</template>

<script>
import emailjs from 'emailjs-com';
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  name: "message",
  messagesheet: "",
  validations: {
    name: {required, maxLength: maxLength(10)},
    email: {required, email}
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      to_name: 'Cedric',
      sheet: false,
    }
  },
  methods: {
    submit () {
      if(!this.$v.$invalid){
        emailjs.send("service_lrce4qw","template_5gyv1w8",{
          to_name: "Cedric",
          from_name: this.name,
          message: this.message,
          email: this.email
          // eslint-disable-next-line no-unused-vars
        }, 'user_6l0A1l7CpEmESC2YnwLf7').then((result) => {

          this.messagesheet = 'Envoie réussi';
          this.sheet = true;
          // Reset form field
          this.name = ''
          this.email = ''
          this.message = ''
          // eslint-disable-next-line no-unused-vars
        }, (error) => {
          this.messagesheet = 'Une erreur est survenu'
          this.sheet = true;
          // Reset form field
          this.name = ''
          this.email = ''
          this.message = ''
        });

      }
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Le nom doit faire au plus 10 charactères')
      !this.$v.name.required && errors.push('Le nom est requit.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('L\'email doit être valide')
      !this.$v.email.required && errors.push('L\'Email est necessaire')
      return errors
    },
  },

}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
