<template>
  <div>
    vuex:
    <h2>$store.state.money</h2>
    <h2>{{$store.state.money.money}}</h2>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="addFn">增加10000</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  // methods:mapActions([
  //   "increment",
  //   "decrement"
  // ])
    methods:{
      ...mapActions('money',[
        "increment",
        "decrement"
      ]),
      addFn(){
        this.$store.commit('money/increment',10000)
      }
    }
}
</script>
