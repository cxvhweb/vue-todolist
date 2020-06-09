const state={
  money:1
};
const mutations={
  increment(state,val){
    state.money+=isNaN(val)?100:val;
  },
  decrement(state){
    state.money--
  }
};
const actions={
  increment(store,val){
    store.commit('increment',val)
  },
  decrement(store){
    store.commit('decrement')
  }
}
// namespaced 命名空间，防止冲突
export default {namespaced:true,state,mutations,actions}
