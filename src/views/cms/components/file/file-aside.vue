<template>
  <div v-if="windowWidth > 715" class="file-aside">
    <gi-title title="文件管理"></gi-title>

    <div class="gi-title" :class="{ 'is-fill': false, shadow: false }">
    <a-row justify="space-between" align="center" class="wrapper" :style="{ 'border-bottom-style': 'dashed' }">
      <h3 class="title">文件管理</h3>
      <a-space>
        <slot></slot>
      </a-space>
    </a-row>
  </div>

    <a-menu
      :style="{ width: '220px', height: '100%', 'border-radius': '2px' }"
      :default-open-keys="['0']"
      :default-selected-keys="[currentKey]"
      theme="light"
      >
      <a-sub-menu key="0">
        <template #icon>
          <a-icon-apps></a-icon-apps>
        </template>
        <template #title>文件类型</template>
        <a-menu-item v-for="item in fileTypeList" :key="item.value.toString()" @click="onClickMenuItem(item)">
          <template #icon>
            <gi-svg-icon :size="28" :name="item.menuIcon"></gi-svg-icon>
          </template>
          <span>{{ item.name }}</span>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useWindowSize } from "@vueuse/core"
import { fileTypeList } from "./constants"
const route = useRoute()
const router = useRouter()

const { width: windowWidth } = useWindowSize()

const currentKey = ref("0")

// 监听路由变化
watch(
  () => route.query,
  () => {
    if (route.query.fileType) {
      currentKey.value = route.query.fileType.toString()
    }
  },
  {
    immediate: true
  }
)

// 点击事件
const onClickMenuItem = (item: any) => {
  router.push({ path: "/file/main", query: { fileType: item.value } })
}
</script>

<style lang="less" scoped>
.gi-title {
  z-index: 99;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 44px;
  padding: 0 16px;

  > .wrapper {
    box-sizing: border-box;
    height: 100%;
    border-bottom-color: var(--color-neutral-3);
    border-bottom-width: 1px;
  }

  &.is-fill {
    padding: 0;

    > .wrapper {
      padding: 0 16px;
    }
  }

  &.shadow {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 8%);

    > .wrapper {
      border: 0;
    }
  }

  .title {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 16px;
    font-weight: normal;
    color: var(--color-text-1);
  }
}

.file-aside {
  height: fit-content;
  margin: 16px 0 16px 16px;
  background: var(--color-bg-1);
  border-radius: 2px;
}

:deep(.arco-menu-light) {
  background-color: var(--color-menu-light-bg);
}
</style>
