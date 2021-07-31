<!--  -->
<template>
  <div id="swipercom">
  <swiper class="swiperContant" 
   :slides-per-view="swiper_options.slidesPerView"
   :autoplay="swiper_options.autoplay" 
   :loop="swiper_options.loop" 
   :pagination="{ clickable: true }"
   :coverflowEffect="swiper_options.coverflowEffect"
   :slidesPerView="swiper_options.slidesPerView"
   :spaceBetween="swiper_options.spaceBetween"
   :centeredSlides="swiper_options.centeredSlides" 
   effect="coverflow"
    >
  
  //swiper-slide轮播图每一项内部可嵌套图片
  //
       <swiper-slide v-for="(item,i) in imgs" :key="i">
            <img :src="item.pic"/>  
        </swiper-slide>
      </swiper>
  </div>
</template>


<script>
import SwiperCore, { Autoplay,Navigation, Pagination, Scrollbar, A11y,Virtual,EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {reactive} from 'vue';
import {getBanner} from '../api'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.less";
import "swiper/components/navigation/navigation.less";

SwiperCore.use([EffectCoverflow,Autoplay,Navigation, Pagination, Scrollbar, A11y,Virtual ]);

export default {
name:"swiperCom",
components:{
    Swiper,
    SwiperSlide,
},
data(){
    return {
       imgs:[
      {}
   ]
 }
},
setup(){ 
  
   
   let swiper_options = reactive({
        autoplay: {
        disableOnInteraction: false, // 鼠标滑动后继续自动播放
        delay: 4000, //4秒切换一次
      },
        speed:500 ,
        //切换过度速度
        loop:true,
        slidesPerView: "auto", //解决最后一张切换到第一张中间的空白
         coverflowEffect: {
        // rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 50, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
        depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 1, //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        // slideShadows: false, //开启slide阴影。默认 true。
      },
      spaceBetween:20,
       centeredSlides: true,
   })


   return {
       swiper_options
   }
}, 
async mounted(){
     let res = await getBanner()
  
     this.imgs=res.data.banners
}

}
</script>

<style lang="less" scope>
#swipercom{
  width:7.5rem;
  .swiperContant{
     width:6rem;
     overflow: visible;
     height:3rem;
     border-radius:0.1rem;
         img{
               width:100%;
               height:100%;
    }
}
.swiper-pagination-bullet-active{
    background-color:orange;
}
}

</style>
