<!--  -->
<template>
  <div class="listViewTop" >
    <img class="bg" :src="playlist.coverImgUrl"  >
    <div class="listViewTopNav">
      <div class="back">
          <svg class="icon search" aria-hidden="true">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>    
        <div class="title">歌单</div>
      </div>
      <div class="right">
        
          <svg class="icon search" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-diandiandianshu"></use>
          </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
         <img :src="playlist.coverImgUrl">
            <div class="count">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofangsanjiaoxing"></use>
            </svg>
            <span> {{changeValue(playlist.playCount)}}</span></div> 
      </div>
      <div class="contentRight">
          <h3>{{playlist.name}}</h3>
          <!-- <div class="author">
              <img :src="playlist.creator.avatarUrl" >
              <span>{{playlist.creator.nickname}}</span>
          </div>   -->
          <!-- this is bug!  -->
          <div class="description">
              {{playlist.description}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name:'listviewTop',
  props:['playlist'],
   setup(){
        
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
      
        return{
          changeValue,
        }
   }

};
</script>

<style lang="less" scoped>
.listViewTop{
    width:7.5rem;
    padding:0 0.4rem;
    height:6rem;
   
    .bg{
        position: fixed;
        left:0;
        right:0;
        width:7.5rem;
        height:auto;
        z-index: -1;
        filter:blur(40px);
    }
    .listViewTopNav{
        display:flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.4rem;
        height:1.2rem;
        .back{
            display:flex;
         fill:#fff;
            .icon{
                width:0.5rem;
                height:0.5rem;
                fill:#fff;
            }
            .title{
                margin-left: 0.2rem;
                color:#fff;
            }
        }
        .right{
            display:flex;
            .icon{
                width:0.5rem;
                height:0.5rem;
                fill:#fff;
            }
            .search{
                margin-right: 0.2rem;
            }
        }
    }
    .content{
        display:flex;
        justify-content: space-between;
        padding:0.6rem 0;
        .contentLeft{
            position:relative;
            img{
               width:2.8rem; 
               height:2.8rem;
               border-radius:0.1rem;  
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
        .contentRight{
            width:3.5rem;
            .author{
                display: flex;
                img{
                   width:0.6rem;
                   align-items: center;
                   height: 0.6rem;
                   border-radius: 100%;
                }
            }
            .description{
                font-size: 0.24rem;
            }
        }
    }
}
</style>
