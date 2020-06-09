/*
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
  count:1
}
const mutations={
  mutIncrement(state,val){
    state.count+=val
  },
  mutDecrement(state){
    state.count--
  }
}
const actions={
  increment:({commit})=>{
    commit('mutIncrement',10)
  },
  decrement:({commit})=>{
    commit('mutDecrement')
  }
}

export default new Vuex.Store({
  state,mutations,actions
})
*/
const state=()=>({
  count:1
});
const mutations={
  mutIncrement(state,val){
    state.count+=isNaN(val)?5:val
  },
  mutDecrement(state){
    state.count--
  }
};
const actions={
  increment(store,val){
    store.commit('mutIncrement',val)
  },
  decrement(store){
    store.commit('mutDecrement')
  }
}
// namespaced 命名空间，防止冲突
export default {namespaced:true,state,mutations,actions}
