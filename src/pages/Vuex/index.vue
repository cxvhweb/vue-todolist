<template>
  <div>
    vuex:
    <h2>$store.state.count</h2>
    <h2>{{$store.state.crement.count}}</h2>
    <button @click="increment(10)">增加</button>
    <button @click="decrement">减少</button>
    <button @click="addFn(1000)">增加1000</button>
    <button @click="addFn2(500)">增加money500</button>
    <money />
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import money from './money'
export default {
  // methods:mapActions([
  //   "increment",
  //   "decrement"
  // ])
    components:{
      money
    },
    methods:{
      ...mapActions('crement',[
        "increment",
        "decrement"
      ]),
      addFn(v){
        this.$store.commit('crement/mutIncrement',v)
      },
      addFn2(v){
        this.$store.commit('money/increment',v)
      }
    }
}
</script>
