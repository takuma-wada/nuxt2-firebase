<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="email" label="mail" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="password" label="password" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn color="primary" @click="login">login</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn text color="primary" to="./register">register</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
export default {
  data() {
    return {
      email : '',
      password : '',
    }
  },
  methods: {
    login () {
      const auth = getAuth(this.$firebase)
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then(userCredential => {
        console.log(userCredential.user);
        console.log('succses!');
      }).catch(e => {
        alert(e)
        console.error('error' , e)
      })
    },
  }
}
</script>

<style>
</style>
