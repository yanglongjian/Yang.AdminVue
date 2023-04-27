<template>
  <a-card class="general-card" :title="'站内信'">
    <a-skeleton v-if="loading" :animation="true">
      <a-skeleton-line :rows="3" />
    </a-skeleton>
    <a-result v-else status="404">
      <template #subtitle>
        {{ '暂无数据' }}
      </template>
    </a-result>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 500);
</script>

<style lang="less" scoped>
:deep(.arco-result) {
  padding: 40px 32px 108px;
}
</style>
