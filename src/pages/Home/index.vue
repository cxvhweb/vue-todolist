<template>
  <div>
    <Input @add="addHandler" />
    <List :list="list"  @del="delHandler"/>
  </div>
</template>
<script>
import Input from '@/components/Input/index.vue'
import List from '@/components/List/index.vue'
export default {
  name:'todolist',
  data(){
    return {
      list:[
        {
          id: 1,
          title: '标题1'
        },
        {
          id: 2,
          title: '标题2'
        }
      ]
    }
  },
  components:{
    Input,
    List
  },
  methods:{
    addHandler(title){
      this.list.unshift({
        id:`id-${Date.now()}`,
        title
      });
    },
    delHandler(id){
      this.list=this.list.filter(item=>item.id !== id)
    }
  }
}
</script>
