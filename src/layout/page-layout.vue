<template>
  <div class="container">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <component
          :is="Component"
          v-if="route.meta.ignoreCache"
          :key="route.fullPath"
        />
        <keep-alive v-else :include="cacheList">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useTabBarStore } from "@/store";

const tabBarStore = useTabBarStore();

const cacheList = computed(() => tabBarStore.getCacheList);
</script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;
}
</style>
