<template>
  <div>
    <a-card>
      <!--表格 begin-->
      <y-table
        ref="searchTableRef"
        :loading="state.loading"
        :columns="columns"
        :renderData="state.rows"
      >
        <!--按钮组 begin-->
        <template #buttons>
          <a-button
            type="primary"
            @click="handleCreate"
            v-permission="['Root.CMS.Channel.Create']"
          >
            <template #icon>
              <icon-plus />
            </template>
            新增
          </a-button>
        </template>
        <!--按钮组 end-->

        <!--slot begin-->
        <template #picture="{ record }">
          <a-image width="64" :src="record.picture" />
        </template>
        <template #status="{ record }">
          <a-tag
            :color="
              statusOptions.filter((r) => r.value == record.status)[0]?.other ||
              ''
            "
          >
            {{
              statusOptions.filter((r) => r.value == record.status)[0]?.label ||
              ""
            }}
          </a-tag>
        </template>
        <!--slot end-->

        <!--操作 begin-->
        <template #operations="{ record }">
          <a-button
            v-permission="['Root.CMS.Channel.Update']"
            size="small"
            @click="handleUpdate(record)"
          >
            <template #icon>
              <icon-edit />
            </template>
            编辑
          </a-button>
          &nbsp;
          <a-popconfirm
            content="确认要删除数据?"
            type="warning"
            @ok="handleDeleted([record.id])"
          >
            <a-button
              :loading="state.loading"
              v-permission="['Root.CMS.Channel.Delete']"
              status="danger"
              size="small"
            >
              <template #icon>
                <icon-delete />
              </template>
              删除
            </a-button>
          </a-popconfirm>
          &nbsp;
        </template>
        <!--操作 end-->
      </y-table>
      <!--表格 end-->
    </a-card>

    <!--编辑表单 begin-->
    <a-modal
      v-model:visible="state.visible"
      :top="20"
      :title="state.isUpdate ? '编辑' : '新建'"
      :footer="false"
      :align-center="false"
      
      :mask-closable="false"
      @cancel="state.visible = false"
    >
      <y-form ref="editFormRef" :schemas="editSchemas" :rules="editRules">
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
          &nbsp;
          <a-button @click="state.visible = false">
            <template #icon>
              <icon-close />
            </template>
            关闭
          </a-button>
        </template>
      </y-form>
    </a-modal>
    <!--编辑表单 end-->
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, nextTick } from "vue";
import {
  read,
  create,
  update,
  deleted
} from "@/api/cms/channel";
import { statusOptions,booleanOptions } from "@/api/global";
import { useI18n } from "vue-i18n";
import { Message } from "@arco-design/web-vue";
const { t } = useI18n();

const state = reactive({
  loading: false,
  rows: [],
  //编辑
  visible: false,
  isUpdate: false,
});

const columns = computed(() => [
  {
    title: "栏目ID",
    dataIndex: "id",
    type: "number",
  },
  {
    title: "栏目图片",
    dataIndex: "picture",
    slotName: "picture",
  },
  {
    title: "栏目名称",
    dataIndex: "name",
    type: "input",
    sortable: { sortDirections: ["ascend", "descend"] },
  },
  {
    title: "链接地址",
    dataIndex: "link",
    type: "input",
  },
  {
    title: "状态",
    dataIndex: "status",
    slotName: "status",
    type: "select",
    options: statusOptions,
    sortable: { sortDirections: ["ascend", "descend"] },
  },
  {
    title: "关键词",
    dataIndex: "keywords",
    type: "input",
  },
  {
    title: "描述",
    dataIndex: "description",
    type: "input",
  },
  {
    title: "创建时间",
    dataIndex: "createdTime",
    type: "date",
    sortable: { sortDirections: ["ascend", "descend"] },
  },
  {
    title: "操作",
    dataIndex: "operations",
    slotName: "operations",
    fixed: "right",
  },
]);

// #region 查询
const searchTableRef = ref();
const handleFetch = async () => {
  try {
    state.loading = true;
    const { data }: any = await read();
    state.rows = data;
  } finally {
    state.loading = false;
  }
};
handleFetch();
// #endregion

// #region 增删改
const editFormRef = ref();
const editSchemas = computed(() => [
  {
    dataIndex: "id",
    type: "number",
    hidden: true,
    default: 0,
  },
  {
    title: "栏目图片",
    dataIndex: "picture",
    type: "image",
  },
  {
    title: "栏目名称",
    dataIndex: "name",
    type: "input",
  },
  {
    title: "链接地址",
    dataIndex: "link",
    type: "input",
  },
  {
    title: "状态",
    dataIndex: "status",
    type: "select",
    options: statusOptions,
  },
  {
    title: "关键词",
    dataIndex: "keywords",
    type: "input",
  },
  {
    title: "描述",
    dataIndex: "description",
    type: "textarea",
  },
]);
const editRules = ref<any>({
  name: [
    { required: true, message: "请输入角色名称" },
    { minLength: 5, message: "角色名称长度不能小于5位" },
  ],
  status: [{ required: true, message: "请选择状态" }],
});

const handleCreate = () => {
  nextTick(() => {
    state.visible = true;
    state.isUpdate = false;
    editFormRef.value.setData();
  });
};
const handleUpdate = (record: any) => {
  nextTick(() => {
    state.visible = true;
    state.isUpdate = true;
    editFormRef.value.setData(record);
  });
};

const handleSubmit = async (values: any) => {
  state.loading = true;
  try {
    const { data }: any = state.isUpdate
      ? await update(values)
      : await create(values);
    Message.success(data);
  } finally {
    state.loading = false;
    state.visible = false;
    await handleFetch();
  }
};
const handleDeleted = (ids: any[]) => {
  nextTick(async () => {
    if (ids.length == 0 || !ids) {
      Message.warning("请选择要删除的数据");
      return;
    }
    state.loading = true;
    try {
      const { data }: any = await deleted(ids);
      Message.success(data);
    } finally {
      state.loading = false;
      await handleFetch();
    }
  });
};
// #endregion

</script>
