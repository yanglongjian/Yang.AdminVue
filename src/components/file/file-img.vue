<template>
  <a-image v-if="isImg" height="100%" style="object-fit: cover;" :src="props.data.src || ''">
    <template #loader>
      <img
        width="100%"
        height="100%"
        :src="loaderImg"
        style="filter: blur(5px)"
      />
    </template>
  </a-image>

  <y-svg v-else size="100%" :name="getFileImg"></y-svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import { fileExtendNameIconMap, imageTypeList } from "@/api/global";

import loaderImg from '@/assets/loaderImg.webp';

const props = defineProps({
  // 文件数据
  data: {
    type: Object as PropType<any>,
    default: () => {},
  },
});

// 是否是图片类型文件
const isImg = computed<boolean>(() => {
  return imageTypeList.includes(props.data.extendName.toLowerCase());
});

// 获取文件图标，如果是图片这显示图片
const getFileImg = computed<string>(() => {
  if (props.data.isDir) {
    return fileExtendNameIconMap["dir"] || "";
  } else if (imageTypeList.includes(props.data.extendName.toLowerCase())) {
    return props.data.src || "";
  } else if (
    !Object.keys(fileExtendNameIconMap).includes(
      props.data.extendName.toLowerCase()
    )
  ) {
    return fileExtendNameIconMap["other"] || "";
  } else {
    return fileExtendNameIconMap[props.data.extendName.toLowerCase()] || "";
  }
});
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
