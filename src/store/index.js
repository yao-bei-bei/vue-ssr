import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
//持久化
Vue.use(Vuex)
const state={
  movieList: [],
  movie:[],
  datalist:[]
};

const mutations = {
  DATALIST(state, data) {
    state.datalist = data;
    Vue.set(state.datalist, data)
  },
  MOVIELIST(state, data) {
    state.movieList =data;
    Vue.set(state.movieList, data)
  },
  MOVIE(state, data) {
    state.movie = data;
    Vue.set(state.movie, data)
  }

}
const actions = {
  get({commit}) {
    //请求多个接口
    return axios.get('http://www.getfunent.com/api/getNewTop?size=10').then( res => {
      if(res.data.content.length){
        commit('MOVIE',res.data.content)

      }
    })
  },
  getMovieList ({commit}) {
    let detailsOfEvent = new Promise((resolve, reject) => {
      axios.get('http://www.getfunent.com/api/getNewTop?size=1').then( res => {
        if(res.data.content.length){
          resolve(res.data.content);
        }
      })
    })
    let detailsOfEvent1 = new Promise((resolve, reject) => {
      axios.get('http://www.getfunent.com/api/getNewTop?size=10').then( res => {
        if(res.data.content.length){
          resolve(res.data.content);
        }
      })
    })
    return Promise.all([detailsOfEvent,detailsOfEvent1]).then(result=>{
      if(result[1].length){
        commit('MOVIELIST',result[1])
      }
      if(result[0].length){
        commit('DATALIST',result[0])
      }
    })
  },
}
export function createStore() {
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}
