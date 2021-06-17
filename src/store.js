import { createStore } from "vuex" 
import axios from 'axios';
import { router } from './router';

const store = createStore({
  state:{
    username: '',
    id: '',
    isAdmin: false,
    token: '',
    myChannels: [],
  },
  mutations: {
    setUsername (state, username) {
      state.username = username;
    },
    setId (state, id) {
      state.id = id;
    },
    setIsAdmin (state, isAdmin) {
      state.isAdmin = isAdmin;
    },
    setToken (state, token) {
      state.token = token;
    },
    addChannels (state, channels) {
      state.myChannels = [...state.myChannels, ...channels];
    }
  },
  actions: {
    getToken({ commit }, user) {
      axios.post('http://localhost:3000/auth/login', user).then((resp) => {
                  commit('setToken', resp.data.access_token);
                  return axios.get('http://localhost:3000/profile', {
                    headers: {
                          Authorization: 'Bearer ' + resp.data.access_token
                    },
                  })}).then((res) => {
                    store.commit('setUsername', res.data.user.username);
                    store.commit('setId', res.data.user._id);
                    store.commit('setIsAdmin', res.data.user.isAdmin);
                    router.push({path: '/home'});   
                  }).catch((err) => {
                    console.log(err);
                  });
    },
    getMyChannels({ state }) {
      axios.get(`http://localhost:3000/channel/user/${state.id}`,{
                    headers: {
                          Authorization: 'Bearer ' + state.token
                    },
                  }).then((resp) => {console.log(resp)}).catch((err) => {console.log(err); console.log(state.token)})
    }
  }
})

export default store