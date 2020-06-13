/*
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
  count:1
}
const mutations={
  mutIncrement(state){
    state.count++
  },
  mutDecrement(state){
    state.count--
  }
}
const actions={
  increment:({commit})=>{
    commit('mutIncrement')
  },
  decrement:({commit})=>{
    commit('mutDecrement')
  }
}

export default new Vuex.Store({
  state,mutations,actions
})
*/
import Vue from 'vue'
import Vuex from 'vuex'
import crement from './modules/crement'
import money from './modules/money'
import list from './modules/list'

Vue.use(Vuex);
/*
const store=()=>new Vuex.Store({
  modules:{
    crement,
    money
  }
})
export default store;
*/
export default new Vuex.Store({
  modules:{
    crement,
    money,
    list
  }
})
