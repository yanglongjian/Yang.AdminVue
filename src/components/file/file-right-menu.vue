<template>
  <file-option :class="{ option: showClassStyle }">
    <file-option-item @click="onClickItem('rename')">
      <template #icon><y-svg name="menu-edit"></y-svg> </template>
      <span>重命名</span>
    </file-option-item>
    <file-option-item @click="onClickItem('move')">
      <template #icon><y-svg name="menu-move"></y-svg> </template>
      <span>移动到</span>
    </file-option-item>
    <file-option-item @click="onClickItem('download')">
      <template #icon><y-svg name="menu-download"></y-svg> </template>
      <span>下载</span>
    </file-option-item>
    <a-popover
      v-if="props.fileInfo.extendName === 'zip'"
      position="right"
      :content-style="{ padding: 0, overflow: 'hidden', width: '150px' }"
      :arrow-style="{ display: 'none' }">
      <file-option-item more>
        <template #icon><y-svg name="menu-zip"></y-svg> </template>
        <span>解压</span>
      </file-option-item>
      <template #content>
        <file-option>
          <file-option-item @click="onClickItem('zip1')">
            <template #icon><y-svg name="file-rar"></y-svg> </template>
            <span>解压到当前目录</span>
          </file-option-item>
          <file-option-item @click="onClickItem('zip2')">
            <template #icon><y-svg name="file-rar"></y-svg> </template>
            <span>解压到其他目录</span>
          </file-option-item>
        </file-option>
      </template>
    </a-popover>
    <file-option-item @click="onClickItem('detail')">
      <template #icon><y-svg name="menu-detail"></y-svg> </template>
      <span>详情</span>
    </file-option-item>
    <file-option-item @click="onClickItem('delete')">
      <template #icon><y-svg name="menu-delete"></y-svg> </template>
      <span>删除</span>
    </file-option-item>
  </file-option>
</template>

<script setup lang="ts">
import FileOption from "./file-option.vue"
import FileOptionItem from "./file-optionItem.vue"

const props = defineProps({
  // 文件数据
  fileInfo: {
    type: Object,
    default: () => {}
  },
  showClassStyle: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(["click"])

const onClickItem = (mode: string) => {
  emit("click", mode)
}
</script>

<style lang="less" scoped>
.option {
  box-sizing: border-box;
  overflow: hidden;
  background: var(--color-bg-popup);
  border: 1px solid var(--color-border-2);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 12%), 0 0 6px rgba(0, 0, 0, 4%);
}
</style>
