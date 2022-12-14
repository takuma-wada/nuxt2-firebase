import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const state = () => ({
  isLoggedIn : false,
  userId : '',
  email : ''
})

export const mutations = {
  setLoginState(state, isLoggedIn){
    state.isLoggedIn = isLoggedIn
  },

  setUserId(state, userId){
    state.userId = userId
  },

  setEmails(state, email){
    state.email = email
  },
}

export const actions = {
  async login({commit}, payload) {
    const auth = getAuth(this.$firebase)
      await signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then(userCredential => {
        commit('setLoginState', true)
        commit('setUserId', userCredential.user.uid)
        commit('setEmails', userCredential.user.email)
        this.$router.push('/')
      }).catch(e => {
        alert(e)
        console.error('error' , e)
      })
  },

  async logout({commit}) {
    const auth = getAuth(this.$firebase)
    await signOut(auth)
      .then(() => {
        commit('setLoginState', false)
        commit('setUserId', '')
        commit('setEmails', '')
        this.$router.push('/auth/login')
      })
  }
}

export const getters = {
  getLoggedIn: state => !!state.isLoggedIn,
  getUserId: state => state.userId,
  getEmail: state => state.email
}
