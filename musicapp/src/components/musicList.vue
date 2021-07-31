<!--  -->
<template>
  <div class="musicList">
      <div class="musicList-top">
          <div class="titt">发现好歌单</div>
          <div class="more">查看更多</div>
      </div>  
     <div class="mlist">
       <swiper class="swiper-container" 
       :slidesPerView="swiper_options.slidesPerView"
       :spaceBetween="swiper_options.spaceBetween"
       >
   
        <swiper-slide v-for="(item,i) in  state.musicList" :key="i">
           <router-link :to="{path:'/listview',query:{id:item.id}}" > 
            <img :src="item.picUrl" :alt="item.name">
            <div class="name">{{item.name}}</div>
            <div class="count">
            <svg class="icon search" aria-hidden="true">
            <use xlink:href="#icon-bofangsanjiaoxing"></use>
            </svg>
            <span> {{changeValue(item.playCount)}}</span></div> 
           </router-link>
        </swiper-slide>
     
       </swiper> 
     </div>
  </div>
</template>

<script>
import SwiperCore, { Autoplay,Navigation, Scrollbar, A11y,Virtual,EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {reactive,onMounted,onUpdated} from 'vue';
import {getMusicList} from '@/api'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.less";
import "swiper/components/navigation/navigation.less";
SwiperCore.use([EffectCoverflow,Autoplay,Navigation, Scrollbar, A11y,Virtual ]);


export default{
    name:'musicList',
    components:{
       SwiperSlide,
       Swiper
   },
    setup(){
        let state=reactive({musiList:[]});
        let swiper_options = reactive({
            slidesPerView: 3, 
            spaceBetween:10,
            centeredSlides: true,
       })
        function changeValue(number){
          let res=number;
          if(number>=100000000){
              res = number/100000000
           res=res.toFixed(2)+'亿' 
          }else if(number>10000){
              res = number/10000
           res=res.toFixed(2)+'万' 
          }
          return res
        } 
        onMounted(async()=>{
             let result = await getMusicList()
             state.musicList=result.data.result;
        })

        return{
          state,
          changeValue,
          swiper_options
        }
   }

}






// export default {
//    name:'musicList',
//    components:{
//        SwiperSlide,
//        Swiper
//    },
//    data(){
//        return{
//            musicList:[{}]
//        }
//    },
//    setup(){
//         let swiper_options = reactive({
//         slidesPerView: 3, 
//         spaceBetween:10,
//        centeredSlides: true,
//    })
//    return {
//        swiper_options
//       }
//    },
//    mounted:async function(){
//        let result = await getMusicList()
//        this.musicList=result.data.result;
//    },
//    methods:{
//         changeValue(number){
//           let res=number;
//           if(number>=100000000){
//               res = number/100000000
//            res=res.toFixed(2)+'亿' 
//           }else if(number>10000){
//               res = number/10000
//            res=res.toFixed(2)+'万' 
//           }
//           return res
           
//         }  
//    },
//    filter:{
      
//    }
// }
</script>

<style lang="less" scoped>
.musicList{
    width:7.5rem;
    padding:0 0.4rem;
    .musicList-top{
        display: flex;
        justify-content: space-between;
        height:1rem;
        align-items: center; 
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
         .more{
            border:1px solid #ccc; 
           
            border-radius:0.2rem;
            font-size: 0.24rem;
            height:0.5rem;
            width:1.2rem;
            text-align: center;
            line-height: 0.5rem;
        }
    }
    .mlist{
        .swiper-container{
            width:100%;
            height:3rem;
                .swiper-slide{
                    // background-color: orange;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    img{
                        width:100%;
                        height: auto;
                        border-radius:0.1rem
                    }
                    .name{
                        height: 0.6em;
                        width:100%;
                        font-size: 0.24rem;
                        line-height:0.4rem;
                    }
                    .count{
                        position:absolute;
                        right:0.1rem;
                        top:0.1rem;
                        font-size: 0.24rem;
                        color:#ccc;
                        display:flex;
                        align-items: center;
                        .icon{
                              fill:#ccc;
                              //svg格式 使用fill来设置颜色
                        }
                    }
                }
        }
       
    }
   

}
</style>
