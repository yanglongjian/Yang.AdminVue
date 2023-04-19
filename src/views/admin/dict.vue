<template>
  <div>
    <a-card>
      <a-row>
        <a-col :span="5">
          <!--树节点begin-->
          <div style="padding: 20px">
            <a-input-search
              placeholder="输入关键词进行过滤"
              style="margin-bottom: 8px"
              v-model="state.searchKey"
            />
            <a-tree
              :blockNode="true"
              :show-line="true"
              :default-expand-all="true"
              v-model:expanded-keys="state.expandedKeys"
              :size="'large'"
              :data="state.treeData"
              @select="handleSelected"
              :fieldNames="{
                key: 'id',
                title: 'name',
                children: 'children',
              }"
            >
              <template #extra="nodeData">
                <a-popconfirm
                  content="确认删除该节点?"
                  type="warning"
                  @ok="handleDeleted(nodeData)"
                >
                  <icon-delete
                    style="
                      position: absolute;
                      right: 8px;
                      font-size: 16px;
                      top: 10px;
                      color: #f53f3f;
                    "
                  />
                </a-popconfirm>
              </template>
            </a-tree>
            <a-divider />
            <a-button type="primary" long @click="handleCreate">
              <icon-plus />
              数据字典</a-button
            >
          </div>
          <!--树节点end-->
        </a-col>

        <a-col :span="1">
          <a-divider direction="vertical" style="height: 80vh" />
        </a-col>

        <a-col :span="12" :offset="2">
        
          <y-form ref="editFormRef" :disabled="state.disabled" :schemas="editSchemas" :rules="editRules">
        <template #y-form-buttons="{ values }">
          <a-button
            type="primary"
            :disabled="state.disabled"
            :loading="state.loading"
            @click="handleSubmit(values)"
          >
            <template #icon>
              <icon-check />
            </template>
            提交
          </a-button>
        </template>
      </y-form>
        
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, reactive, nextTick } from "vue";
import { read, create, update, deleted } from "@/api/admin/dict";
import { useI18n } from "vue-i18n";
import { SelectOptionData, Message } from "@arco-design/web-vue";
import { statusOptions } from "@/api/global";
const { t } = useI18n();

const state = reactive({
  loading: false,
  disabled: true,
  isUpdate: false,
  searchKey: "",
  expandedKeys:<any>[],
  parentIdOptions:<any>[],
  treeData: [],
});


const baseOptions = [
  {
    title: "父节点",
    key: 0,
  },
];
const handleFetch = async () => {
  state.loading = true;
  try {
    const { data } = await read();
    state.treeData = data;
    const expandedKeys = (data as unknown as Array<any>)
      .filter((r) => r.parentId == 0)
      .map((r) => {
        return r.id;
      });

      const options = (data as unknown as Array<any>)
      .filter((r) => r.parentId == 0)
      .map((r) => {
        return {
          key:r.id,
          title:r.name
        }
      });

    state.expandedKeys = expandedKeys;
    state.parentIdOptions =[...baseOptions, ...options];
  } finally {
    state.loading = false;
  }
};
handleFetch();

//#region 增删改
const editFormRef = ref();
const editSchemas = computed(() => [
  {
    dataIndex: "id",
    type: "number",
    hidden: true,
    default: 0,
  },
  {
    title: "父节点",
    dataIndex: "parentId",
    type: "tree",
    options:state.parentIdOptions,
  },
  {
    title: "字典名称",
    dataIndex: "name",
    type: "input",
  },
  {
    title: "代码",
    dataIndex: "code",
    type: "input",
    readonly: state.isUpdate,
  },
  {
    title: "键值",
    dataIndex: "value",
    type: "input"
  },
  {
    title: "状态",
    dataIndex: "status",
    type: "select",
    options: statusOptions,
  },
  {
    title: "排序码",
    dataIndex: "orderCode",
    type: "number"
  },
  {
    title: "备注",
    dataIndex: "remark",
    type: "textarea",
  },
]);
const editRules = ref<any>({
  name: [{ required: true, message: "请输入字典名称" }],
  code: [
    { required: true, message: "请输入代码" },
    { minLength: 5, message: "代码长度不能小于5位" },
  ],
  status: [{ required: true, message: "请选择状态" }],
  orderCode: [{ required: true, message: "请输入排序码" }],
});




const handleCreate = () => {
  nextTick(() => {
    state.disabled = false;
    state.isUpdate = false;
    editFormRef.value.setData();
  });
};
const handleSelected = (selectNode: (string | number)[], event: any) => {
  nextTick(() => {
    state.disabled = false;
    state.isUpdate = true;
    editFormRef.value.setData(event.node);
  });
};

const handleSubmit = async (values: any) => {
  state.loading = true;
  try {
    const { data } = state.isUpdate
      ? await update(values)
      : await create(values);
    Message.success(data);
  } finally {
    state.loading = false;
    state.disabled = true;
    await handleFetch();
  }
};
const handleReset=()=>{

}
const handleDeleted = async (nodeData: any) => {
  try {
    const { data } = await deleted([nodeData.key]);
    Message.success(data);
  } finally {
    await handleFetch();
  }
};
// #endregion
</script>
