<template>
  <a-space direction="vertical" :style="{ width: '100%' }">
    <a-upload
      action="/"
      :auto-upload="false"
      list-type="picture-card"
      :file-list="fileList"
      :limit="props.limit"
      :headers="props.headers"
      :image-preview="props.imagePreview"
      :multiple="props.multiple"
      :accept="props.accept"
      @change="onChange"
    >
    </a-upload>
  </a-space>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { uploadImage } from "@/api/upload";
import { FileItem } from "@arco-design/web-vue/es/upload/interfaces";
import { Message } from "@arco-design/web-vue";

const value = ref<any>();
const fileList = ref<any>([]);
const onChange = async (fileList: FileItem[], fileItem: FileItem) => {
  if (fileItem) {
    const formData = new FormData();
    formData.append("file", fileItem.file as Blob);
    const res:any = await uploadImage(formData);
    value.value = res.data.resourceUrl;
  }
};

const emits = defineEmits(["onClick", "update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  limit: {
    type: Number,
    default: 1,
  },
  headers: {
    type: Object,
    default: {},
  },
  imagePreview: {
    type: Boolean,
    default: true,
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  accept: {
    type: String,
    default: "image/*",
  },
});
watch(
  () => props.modelValue,
  (val) => {
    value.value = val;
    if (val) {
      fileList.value = [];
      fileList.value.push({ url: val });
    }else{
      fileList.value = [];
    }
  },
  { immediate: true, deep: true }
);

watch(
  () => value,
  (val) => {
    emits("update:modelValue", val);
  },
  { immediate: true, deep: true }
);
</script>
