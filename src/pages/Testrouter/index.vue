<template>
  <div>
    <button @click="toggleShow">isshow</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isshow:false
    }
  },
  methods:{
    toggleShow(){
      if(localStorage.isshow){
        //
      }
      localStorage.isshow=localStorage.isshow==="true"?"false":"true";
    }
  }
}
</script>
