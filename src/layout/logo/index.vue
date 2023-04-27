<template>
  <div class="logo">
      <img
        :src="'//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image'"
      />
      <a-typography-title class="title" :style="{color:'#fff'}" :heading="5">
        Arco Design
      </a-typography-title>
    </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { useAppStore } from "@/store";
const appStore = useAppStore();
const toggleDrawerMenu = inject("toggleDrawerMenu") as () => void;
</script>

<style scoped lang="less">
.logo {
  display: flex;
  height: 32px;
  margin: 12px 8px;

  .title{    
     margin: 0 10px;
     font-size: '18px';
     line-height:32px;
 }
}
</style>
