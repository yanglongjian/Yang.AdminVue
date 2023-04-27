<template>
  <div>
    <a-card>
      <y-tab-form ref="editFormRef" :schemas="editSchemas" :rules="editRules">
        <template #y-form-buttons="{ values }">
          <a-button
            type="primary"
            :loading="state.loading"
            @click="handleSubmit(values)"
          >
            <template #icon>
              <icon-check />
            </template>
            提交
          </a-button>
        </template>
      </y-tab-form>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, nextTick } from "vue";
import { read, create } from "@/api/admin/role";
import { useI18n } from "vue-i18n";
import { Message } from "@arco-design/web-vue";
const { t } = useI18n();

const state = reactive({
  loading: false,
});
const editFormRef = ref();
const editSchemas = computed(() => [
  {
    title: "站点配置",
    schemas: [
      {
        title: "站点标题",
        dataIndex: "title",
        type: "input",
      },
      {
        title: "域名",
        dataIndex: "domain",
        type: "input",
      },
      {
        title: "图标",
        dataIndex: "icon",
        type: "image",
      },
      {
        title: "站点模板",
        dataIndex: "template",
        type: "input",
      },
      {
        title: "作者",
        dataIndex: "author",
        type: "input",
      },
      {
        title: "关键词",
        dataIndex: "keywords",
        type: "input",
      },
      {
        title: "描述",
        dataIndex: "keywords",
        type: "textarea",
      },
      {
        title: "版权信息",
        dataIndex: "copyright",
        type: "input",
      },
      {
        title: "备案号",
        dataIndex: "icp",
        type: "input",
      },
    ],
  },
  {
    title: "客服配置",
    schemas: [
      {
        title: "QQ",
        dataIndex: "qq",
        type: "input",
      },
      {
        title: "微信",
        dataIndex: "wechat",
        type: "input",
      },
      {
        title: "电话",
        dataIndex: "mobile",
        type: "input",
      },
      {
        title: "邮箱",
        dataIndex: "email",
        type: "input",
      },
      {
        title: "抖音",
        dataIndex: "douyin",
        type: "input",
      },
      {
        title: "快手",
        dataIndex: "kuaishou",
        type: "input",
      },
      {
        title: "小红书",
        dataIndex: "xiaohongshu",
        type: "input",
      },
    ],
  },
]);
const editRules = ref<any>({
  title: [{ required: true, message: "请输入站点标题" }],
});

const handleSubmit = async (values: any) => {
  state.loading = true;
  try {
    const { data } = await create(values);
    Message.success(data);
  } finally {
    state.loading = false;
  }
};
</script>
