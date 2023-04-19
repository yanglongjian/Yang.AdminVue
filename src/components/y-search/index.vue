<!--通用查询表单-->

<template>
  <div>
    <a-row style="padding: 10px" v-if="list.length > 0">
      <a-col :flex="1">
        <a-form
          ref="formRef"
          :model="formModel"
          :label-col-props="{ span: label, xs: { span: 8 } }"
          :wrapper-col-props="{ span: wrapper, xs: { span: 16 } }"
          label-align="right"
        >
          <!--字段类型判断-->
          <a-row>
            <template v-for="(item, i) in list" :key="i">
              <a-col 
               :span="span"
                :xs="{ span: 24 }"
                :sm="{ span: 12 }"
                :md="{ span: 8 }"
                :lg="{ span: 8 }"
                :xl="{ span: 6 }"
                :xxl="{ span: 6 }"
               v-show="i < showCount || expand">
                <a-form-item :field="item.dataIndex" :label="item.title">
                  <!--输入框-->
                  <a-input
                    v-if="item.type == 'input'|| item.type == 'textarea' "
                    v-model="formModel[item.dataIndex]"
                    :placeholder="item.placeholder || `请输入${item.title}`"
                  />

                  <!--number-->
                  <a-input-number
                    v-if="item.type == 'number'"
                    v-model="formModel[item.dataIndex]"
                    :placeholder="item.placeholder || `请输入${item.title}`"
                  />

                  <!--下拉框-->
                  <a-select
                    v-if="item.type == 'select'"
                    v-model="formModel[item.dataIndex]"
                    :options="item.options"
                    :placeholder="item.placeholder || `请选择${item.title}`"
                    allow-clear
                    allow-search
                  />

                  <!--tree-->
                  <a-tree-select
                    v-if="item.type == 'tree' && item.options"
                    v-model="formModel[item.dataIndex]"
                    :data="item.options"
                    :placeholder="item.placeholder || `请选择${item.title}`"
                    :allow-search="true"
                  >
                    <template #tree-slot-icon>
                      <icon-calendar />
                    </template>
                  </a-tree-select>

                  <!--日期选择框-->
                  <a-range-picker
                    v-if="item.type == 'date'"
                    v-model="formModel[item.dataIndex]"
                    :disabledDate="(current) => dayjs(current).isAfter(dayjs())"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
            </template>
          </a-row>

          <a-row>
            <div style="margin: 0 auto;">
              <a-button type="primary" :loading="props.loading" @click="search">
                <template #icon>
                  <icon-search />
                </template>
                查询
              </a-button>
              &nbsp;
              <a-button @click="reset">
                <template #icon>
                  <icon-refresh />
                </template>
                重置
              </a-button>
              &nbsp;
              <a v-if="list.length > showCount" @click="expand = !expand">
                <template v-if="expand">
                  <icon-double-up style="font-size: 16px" />
                </template>
                <template v-else>
                  <icon-double-down style="font-size: 16px" />
                </template>
                展开
              </a>
            </div>
          </a-row>
        </a-form>
      </a-col>
    </a-row>

    <a-divider style="margin-top: 0" />
  </div>
</template>

<script lang="ts" setup>
import { ref,watch } from "vue";
import dayjs from "dayjs";
import { Message, ShortcutType } from "@arco-design/web-vue";

const emits = defineEmits(["search","reset"]);
const formRef = ref();
//查询表单
const expand = ref(false);
const formModel: any = ref();
const list: any = ref([]);

//Prop输入监听
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  label: {
    type: Number,
    default: 6,
  },
  wrapper: {
    type: Number,
    default: 18,
  },
  span: {
    type: Number,
    default: 6,
  },
  showCount: {
    type: Number,
    default: 4,
  },
  columns: {
    type: Array<any>,
    default: [],
    required: true,
  },
});

watch(
  () => props.columns,
  (array) => {
    let model: any = {};
    let filterList: any = [];
    array.forEach((item: any) => {
      if (item.type) {
        filterList.push(item);
        switch (item.type) {
          case "date":
            model[item.dataIndex] = [];
            break;
          default:
            model[item.dataIndex] = null;
            break;
        }
      }
    });
    formModel.value = model;
    list.value = filterList;
  },
  {
    immediate: true, // 这个属性是重点啦
    deep: true, // 深度监听的参数
  }
);

const search = () => {
  let rules: any[] = [];
  for (const item in formModel.value) {
    let column = list.value.find((m: any) => m.dataIndex === item);
    if (!column) {
      Message.warning(`指定属性${item}不存在`);
      return;
    }
    const itemValue = formModel.value[item];

    if (column.type === "select" || column.type === "number") {
      if (`${itemValue}`.trim() === "") continue;
    } else {
      if (!itemValue || itemValue.length == 0) continue;
    }
    if (column.type === "date") {
      rules.push({
        field: item,
        value: itemValue[0].toLocaleDateString(),
        opreate: 3,
      });
      rules.push({
        field: item,
        value: itemValue[1].toLocaleDateString() + " 23:59:59",
        opreate: 4,
      });
    } else {
      rules.push({
        field: item,
        value: `${itemValue}`.trim(),
        opreate: column.type === "input" ? 2 : 1,
      });
    }
  }

  // #endregion
  emits("search", rules);
};

const reset = () => {
  formRef.value.resetFields();
  emits("reset",false);
};
</script>
<style lang="less" scoped>
 :deep(.arco-form-item) {
  margin-bottom: 10px;
}

:deep(.arco-divider-horizontal) {
  margin: 5px 0;
}
</style>
