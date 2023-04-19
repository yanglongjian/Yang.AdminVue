<template>
  <div>
    <a-card>
      <!--查询表单-->
      <y-search
        :loading="state.loading"
        :columns="columns"
        @search="handleSearch"
        @reset="handleReset"
      />

      <!--表格 begin-->
      <y-table
        ref="searchTableRef"
        :loading="state.loading"
        :selectionType="'checkbox'"
        :request="state.request"
        :columns="columns"
        :renderData="state.rows"
        @change="handleChange"
        @sorter="handleSorter"
        @check="handleCheck"
      >
        <!--按钮组 begin-->
        <template #buttons>
          <a-button
            type="primary"
            @click="handleCreate"
            v-permission="['Root.Admin.Role.Create']"
          >
            <template #icon>
              <icon-plus />
            </template>
            新增
          </a-button>

          <a-popconfirm
            content="确定要删除选中数据?"
            type="warning"
            @ok="handleDeleted(state.selectedKeys)"
          >
            <a-button
              type="primary"
              status="danger"
              :disabled="state.selectedKeys.length == 0"
              v-permission="['Root.Admin.Role.Delete']"
            >
              <template #icon>
                <icon-delete />
              </template>
              {{
                state.selectedKeys.length == 0
                  ? "删除"
                  : `删除 [${state.selectedKeys.length}]`
              }}
            </a-button>
          </a-popconfirm>
        </template>
        <!--按钮组 end-->

        <!--slot begin-->
        <template #isAdmin="{ record }">
          <a-switch :default-checked="record.isAdmin" disabled/>
        </template>
        <template #isDefault="{ record }">
          <a-switch :default-checked="record.isDefault" disabled/>
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
            v-permission="['Root.Admin.Role.Update']"
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
              v-permission="['Root.Admin.Role.Delete']"
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
          <a-button
            v-permission="['Root.Admin.Role.SetRoleModules']"
            type="primary"
            size="small"
            @click="handleModuleOpen(record)"
          >
            <template #icon>
              <icon-safe />
            </template>
            设置权限
          </a-button>
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
      draggable
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

 
    <!--权限 begin-->
    <tree
      :title="'设置角色权限'"
      :visible="state.moduleVisible"
      :loading="state.loading"
      :tree-data="state.moduleTree"
      :checked-keys="state.moduleKeys"
      @close="state.moduleVisible = false"
      @submit="handleModuleSubmit"
    ></tree>

    <!--权限 end-->
  </div>
</template>

<script lang="ts" setup>
import tree from "./components/tree.vue";
import { computed, ref, reactive, nextTick } from "vue";
import {
  read,
  create,
  update,
  deleted,
  readRoleModules,
  setRoleModules
} from "@/api/admin/role";
import { statusOptions,booleanOptions } from "@/api/global";
import { useI18n } from "vue-i18n";
import { Message } from "@arco-design/web-vue";
const { t } = useI18n();

const state = reactive({
  loading: false,
  selectedKeys: [],
  rows: [],
  request: {
    PageIndex: 1,
    PageSize: 20,
    FilterRules: <any>[],
    SortConditions: <any>[],
    Total: 0,
  },
  //编辑
  visible: false,
  isUpdate: false,
  //权限
  roleId:0,
  moduleVisible: false,
  moduleTree: [],
  moduleKeys: [],
});

const columns = computed(() => [
  {
    title: "角色ID",
    dataIndex: "id",
    type: "number",
  },
  {
    title: "角色名称",
    dataIndex: "name",
    type: "input",
    sortable: { sortDirections: ["ascend", "descend"] },
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
    title: "是否管理员",
    dataIndex: "isAdmin",
    slotName: "isAdmin",
    type: "select",
    options: booleanOptions,
    sortable: { sortDirections: ["ascend", "descend"] },
  },
  {
    title: "默认角色",
    dataIndex: "isDefault",
    slotName: "isDefault",
    type: "select",
    options: booleanOptions,
    sortable: { sortDirections: ["ascend", "descend"] },
  },
  {
    title: "备注",
    dataIndex: "remark",
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
    const { data }: any = await read(state.request);
    state.rows = data.rows;
    state.request.Total = data.total;
  } finally {
    state.loading = false;
  }
};
const handleSearch = async (rules: any) => {
  state.request.PageIndex = 1;
  state.request.FilterRules = rules;
  await handleFetch();
};
const handleReset = async (isRefresh: boolean) => {
  searchTableRef.value.clearSorters();
  if (isRefresh) {
    await handleFetch();
  }
};
const handleChange = async (current: number, pageSize: number) => {
  state.request.PageIndex = current;
  state.request.PageSize = pageSize;
  await handleFetch();
};
const handleSorter = async (sortConditions: any) => {
  state.request.SortConditions = [sortConditions];
  await handleFetch();
};
const handleCheck = (keys: any) => {
  state.selectedKeys = keys;
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
    title: "角色名称",
    dataIndex: "name",
    type: "input",
    readonly: state.isUpdate,
  },
  {
    title: "状态",
    dataIndex: "status",
    type: "select",
    options: statusOptions,
  },
  {
    title: "是否管理员",
    dataIndex: "isAdmin",
    type: "switch",
    span:12
  },
  {
    title: "默认角色",
    dataIndex: "isDefault",
    type: "switch",
    span:12
  },
  {
    title: "备注",
    dataIndex: "remark",
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

//#region 设置权限

const handleModuleOpen = (record: any) => {
  nextTick(async () => {
    state.loading = true;
    state.roleId = record.id;
    const { data }: any = await readRoleModules({ roleId: state.roleId });
    state.moduleTree = data.rows;
    state.moduleKeys = data.checkedKeys;
    state.moduleVisible = true;
    state.loading = false;
  });
};
const handleModuleSubmit = async () => {
  state.loading = true;
  try {
    const { data } = await setRoleModules({
      roleId: state.roleId,
      ModuleIds: state.moduleKeys,
    });
    Message.success(data);
  } finally {
    state.loading = false;
    state.moduleVisible = false;
  }
};

//#endregion
</script>
