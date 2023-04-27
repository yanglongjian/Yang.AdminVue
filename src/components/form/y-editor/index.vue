<template>
  <div style="width: 100%;">
    <Editor
      v-model="contentValue"
      :init="init"
      :disabled="disabled"
      :placeholder="placeholder"
      @onClick="onClick"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive, watch, nextTick, onMounted } from "vue";
import { uploadImage } from "@/api/upload";
import Editor from '@tinymce/tinymce-vue'
import tinymce from 'tinymce/tinymce'
import "tinymce/themes/silver";
import "tinymce/icons/default";
import "tinymce/models/dom";

// 引入编辑器插件
import "tinymce/plugins/code"; //编辑源码
import "tinymce/plugins/image"; //插入编辑图片
import "tinymce/plugins/media"; //插入视频
import "tinymce/plugins/link"; //超链接
import "tinymce/plugins/preview"; //预览
import "tinymce/plugins/template"; //模板
import "tinymce/plugins/table"; //表格
import "tinymce/plugins/pagebreak"; //分页
import "tinymce/plugins/lists"; //列
import "tinymce/plugins/advlist"; //列
import "tinymce/plugins/quickbars"; //快速工具条
import { emitKeypressEvents } from "readline";
import { AjaxResult } from "@/api/interceptor";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  height: {
    type: Number,
    default: 300,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  plugins: {
    type: [String, Array],
    default:
      "code image media link preview table quickbars template pagebreak lists advlist",
  },
  toolbar: {
    type: [String, Array],
    default:
      "undo redo |  forecolor backcolor bold italic underline strikethrough link | blocks fontfamily fontsize | \
					alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | pagebreak | \
					image media table template preview | code selectall",
  },
  templates: {
    type: Array,
    default: () => [],
  },
});

const init = ref({
  language_url: "../../../src/assets/tinymce/langs/zh_CN.js",
  language: "zh_CN",
  skin_url: "../../../src/assets/tinymce/skins/ui/oxide",
  content_css: "../../../src/assets/tinymce/skins/content/default/content.css",
  menubar: false,
  statusbar: true,
  plugins: props.plugins,
  toolbar: props.toolbar,
  toolbar_mode: "sliding",
  font_size_formats: "12px 14px 16px 18px 22px 24px 36px 72px",
  height: props.height,
  placeholder: props.placeholder,
  branding: false,
  resize: true,
  elementpath: true,
  content_style: "",
  templates: props.templates,
  quickbars_selection_toolbar:
    "forecolor backcolor bold italic underline strikethrough link",
  quickbars_image_toolbar: "alignleft aligncenter alignright",
  quickbars_insert_toolbar: false,
  image_caption: true,
  image_advtab: true,
  images_upload_handler: function (blobInfo:any) {
    return new Promise((resolve, reject) => {
      const data = new FormData();
      data.append("file", blobInfo.blob(), blobInfo.filename());
      uploadImage(data).then((res:any) => {
      	resolve(res.data.resourceUrl)
      }).catch(() => {
      	reject("Image upload failed")
      })
    });
  },
  setup: function (editor:any) {
    editor.on("init", function () {
      //this.getBody().style.fontSize = '14px';
    });
    editor.on("OpenWindow", function (e:any) {
      //FIX 编辑器在el-drawer中，编辑器的弹框无法获得焦点
      var D = document.querySelector(".el-drawer.open");
      var E = e.target.editorContainer;
      if (D && D.contains(E)) {
        var nowDA = document.activeElement;
        setTimeout(() => {
          //document.activeElement.blur()
          //nowDA.focus()
        }, 0);
      }
    });
  },
});

const contentValue = ref(props.modelValue);
const emits = defineEmits(["onClick", "update:modelValue"]);

watch(
  () => props.modelValue,
  (val) => {
    contentValue.value = val;
  },
  { immediate: true, deep: true }
);

watch(
  () => contentValue,
  (val) => {
    emits("update:modelValue", val);
  },
  { immediate: true, deep: true }
);

onMounted(() => {
  tinymce.init({});
});

const onClick = (e: any) => {
  emits("onClick", e, tinymce);
};
</script>
