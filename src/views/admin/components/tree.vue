<template>
  <div>
    <a-modal
      v-model:visible="visible"
      :top="20"
      :title="title"
      :footer="false"
      :align-center="false"
      draggable
      :mask-closable="false"
      @cancel="handleClose"
    >
      <a-row>
        <a-col :span="24">
          <a-form-item :label="''">
            <a-tree
              :blockNode="true"
              :checkable="true"
              :default-expand-all="true"
              :default-expand-checked="true"
              v-model:checked-keys="checkedKeys"
              :size="'large'"
              :fieldNames="{
                key: 'id',
                title: 'name',
                children: 'children',
              }"
              :data="treeData"
            />
          </a-form-item>
        </a-col>
      </a-row>

      <!--按钮begin-->
      <a-row>
        <div style="margin: 0 auto">
          <a-button type="primary" :loading="loading" @click="handleSubmit">
            <template #icon>
              <icon-check-circle />
            </template>
            提交</a-button
          >
          &nbsp;
          <a-button @click="handleClose">
            <template #icon>
              <icon-close />
            </template>
            关闭</a-button
          >
        </div>
      </a-row>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  visible: {
    type: Boolean,
    default: false,
  },
  checkedKeys: {
    type: Array<any>,
    default: [],
  },
  treeData: {
    type: Array<any>,
    default: [],
  },
});

const emits = defineEmits(["close", "submit"]);

const handleClose = () => {
  emits("close");
};
const handleSubmit = () => {
  emits("submit");
};
</script>
