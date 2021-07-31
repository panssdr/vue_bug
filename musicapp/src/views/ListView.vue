<!--  -->
<template>
  <div> 
     <!-- <listview-top :playlist="state.playlist"></listview-top> -->
      <listview-top :playlist="state.playlist"></listview-top>
   </div>
</template>

<script>
import listviewTop from '@/components/listview/listviewTop.vue'
import {getPlayListDetail} from '@/api';
import {onMounted, reactive} from 'vue'
import {useRoute} from 'vue-router'

export default {
  name:'ListView',
  components:{
    listviewTop
  },
  setup(){
     const route =  useRoute()
     let state = reactive({
       list:[],
       playlist:{}
       })
    onMounted(async ()=>{
      let id = route.query.id;
     
      let result = await getPlayListDetail(id); 
      state.playlist= result.data.playlist
   
       
    }) 
   return {
     state
   }
  }
}
</script>

<style  scoped>

</style>
