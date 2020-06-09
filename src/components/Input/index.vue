<template>
  <div>
    <input type="text" v-model="title" />
    <button @click="addFn">添加</button>
  </div>
</template>
<script>
import event from '../event'
export default {
  data(){
    return {
      title:'123'
    }
  },
  methods:{
    addFn(){
      // 调用父组件的事件
      this.$emit('add',this.title)
      // 调用触发自定义事件
      event.$emit('onAddTitle',this.title)
      this.title=''
    }
  }
}
</script>
