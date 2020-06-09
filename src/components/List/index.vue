<template>
  <ul>
      <li v-for="(item,idx) in list" :key="item.id">{{idx}}------{{item.title}}<button @click="delHandler(item.id)">删除</button></li>
  </ul>
</template>
<script>
import event from '../event'
export default {
  props:{
    list:Array
  },
  methods:{
    addTitleHandler(title){
      console.log('自定义事件执行')
    },
    delHandler(id){
      this.$emit('del',id);
    }
  },
  mounted(){
    // 绑定自定义事件，第二个参数建议用指针，方便解绑
    event.$on('onAddTitle',this.addTitleHandler)
  },
  beforeDestroy(){
    // 及时摧毁，否则可能造成内存泄漏
    event.$off('onAddTitle',this.addTitleHandler)
  }
}
</script>
