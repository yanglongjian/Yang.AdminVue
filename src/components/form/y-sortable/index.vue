<template>
  <div style="width: 100%">
    <a-form ref="formRef" :model="formData">
      <a-table
        ref="tableRef"
        :size="'small'"
        :key="toggleIndex"
        :pagination="false"
        :columns="tableColumns"
        :data="data"
        :loading="loading"
      >
        <!-- <template #operation>
          <a-button type="primary" size="mini" shape="circle" @click="rowAdd">
            <template #icon>
              <icon-plus />
            </template>
          </a-button>
        </template> -->

        <!--自定义表头-->
        <template
          v-for="(item, index) in tableColumns?.filter((r) => r.titleSlotName)"
          v-slot:[item.titleSlotName]
          :key="index"
        >
          <a-button
            v-if="item.titleSlotName == 'operation'"
            type="primary"
            size="mini"
            shape="circle"
            @click="rowAdd"
          >
            <template #icon>
              <icon-plus />
            </template>
          </a-button>

          <a-tooltip
            v-else
            :content="item.tooltip"
          >
            <a-button type="text" :width="item.width" status="warning" >
               <a style="color:#000">{{item.title}}  </a>
              <template #icon>
                <icon-info-circle-fill />
            </template>
          </a-button>
          </a-tooltip>
        </template>

        <template
          v-slot:[item.slotName]="{ rowIndex, record }"
          v-for="(item, index) in tableColumns"
          :key="index"
        >
          <div v-if="item.type">
            <a-table-column :width="item.width">
              <a-button
                type="primary"
                status="danger"
                size="mini"
                shape="circle"
                v-if="item.type == 'button'"
                @click="rowDel(record, rowIndex)"
              >
                <template #icon>
                  <icon-delete />
                </template>
              </a-button>

              <a-form-item
                v-else
                :field="`list.${rowIndex}.${item.dataIndex}`"
                :rules="item.rules"
              >
                <!--drag-->
                <span
                  v-if="item.type == 'span'"
                  class="move"
                  style="cursor: move"
                >
                  <icon-drag-dot-vertical />
                  &nbsp;
                  <div>
                    {{
                      (formData.list[rowIndex][item.dataIndex] = rowIndex + 1)
                    }}
                  </div>
                </span>

                <!--input-->
                <a-input
                  v-if="item.type == 'input'"
                  v-model="formData.list[rowIndex][item.dataIndex]"
                  :readonly="item.readonly"
                />
                <!--number-->
                <a-input-number
                  v-if="item.type == 'number'"
                  v-model="formData.list[rowIndex][item.dataIndex]"
                />

                <!--select-->
                <a-select
                  v-if="item.type == 'select'"
                  style="width: 100%"
                  v-model="formData.list[rowIndex][item.dataIndex]"
                  allow-clear
                  allow-search
                >
                  <a-option
                    :value="tag.value"
                    v-for="tag in item.options"
                    :key="tag.value"
                    >{{ tag.label }}</a-option
                  >
                </a-select>

                <!--cascader级联选择-->
                <a-cascader
                  v-if="item.type == 'cascader'"
                  style="width: 100%"
                  v-model="formData.list[rowIndex][item.dataIndex]"
                  :options="item.options"
                  allow-clear
                  allow-search
                />

                <!--date-->
                <a-date-picker
                  v-if="item.type == 'date'"
                  v-model="formData.list[rowIndex][item.dataIndex]"
                />
                <!--time-->
                <a-time-picker
                  v-if="item.type == 'time'"
                  v-model="formData.list[rowIndex][item.dataIndex]"
                />

                <!--switch-->
                <a-switch
                  v-if="item.type == 'switch'"
                  v-model="formData.list[rowIndex][item.dataIndex]"
                />

                <!--file  todo-->
                
              </a-form-item>
            </a-table-column>
          </div>
        </template>
      </a-table>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import Sortable from "sortablejs";
import { computed, ref, reactive, watch, nextTick, onMounted } from "vue";
const loading = ref(false);
const props = defineProps({
  columns: {
    type: Array<any>,
    default: () => [],
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  addTemplate: {
    type: Object,
    default: () => {},
  },
});

//基础字段
const baseColumns = ref([
  {
    slotName: "button",
    titleSlotName: "operation",
    type: "button",
    width: 40,
  },
  {
    title: "#",
    slotName: "index",
    type: "span",
    align: "center",
    width: 80,
  },
]);
const tableColumns = ref<Array<any>>();

const tableRef = ref();
const formRef = ref();
const data = ref<Array<any>>([]);
const formData = ref<any>({
  list: [],
});

const toggleIndex = ref(0);
const emits = defineEmits(["update:modelValue", "update:modelErrors"]);
onMounted(() => {
  tableColumns.value = baseColumns.value.concat(props.columns);
  rowDrop();
});

watch(
  () => props.modelValue,
  (val) => {
    if (val && val.length > 0) {
      data.value = val;
      formData.value.list = val;
    }
  },
  { immediate: true, deep: true }
);
watch(
  () => data,
  (val) => {
    nextTick(() => {
      if (formRef.value) {
        formRef.value.validate((errors: any) => {
          emits("update:modelValue", val);
          emits("update:modelErrors", errors);
        });
      }
    });
  },
  { immediate: true, deep: true }
);

const rowDrop = () => {
  const tbody = tableRef.value.$el.querySelector(".arco-table-element tbody");
  Sortable.create(tbody, {
    handle: ".move",
    animation: 300,
    ghostClass: "ghost",
    onEnd({ newIndex, oldIndex }) {
      const tableData = data.value;
      const currRow = tableData.splice(oldIndex, 1)[0];
      tableData.splice(newIndex, 0, currRow);
      toggleIndex.value += 1;
      nextTick(() => {
        rowDrop();
      });
    },
  });
};
const rowAdd = () => {
  const temp = JSON.parse(JSON.stringify(props.addTemplate));
  data.value.push(temp);
};
const rowDel = (row: any, index: any) => {
  nextTick(() => {
    data.value.splice(index, 1);
  });
};
</script>

<style lang="less" scoped>
.move {
  display: flex;
  align-items: center;
}
/deep/ .arco-form-item-message {
  margin-top: -28px;
  margin-left: 5px;
  z-index: -1;
}
/deep/ .arco-table-size-small .arco-table-cell {
  padding: 5px 5px;
}
/deep/ .arco-col-5 {
  flex: 0;
  width: 0%;
}
/deep/ .arco-col-19 {
  flex: 1;
  width: 100%;
}
/deep/ .arco-form-item {
  margin-bottom: 0px;
}
</style>
