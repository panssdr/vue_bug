<template>
  <router-view/>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;//这样设置之后 宽和高都是按设计的标准显示 不会受到内边距的影响
  font-family: '微软雅黑';
}
.icon {
   width: 0.3rem;    
   height:0.3rem;
   
}
a{
  color:#333;
  text-decoration: none;
  //a标签下划线设置为none
}

</style>
