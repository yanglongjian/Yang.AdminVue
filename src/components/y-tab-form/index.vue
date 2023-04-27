<!--编辑表单-->
<template>
  <div>
    <a-form
      ref="formRef"
      :model="formModel"
      :rules="props.rules"
      :disabled="props.disabled"
    >
      <!--字段 begin-->
      <a-row>
        <a-tabs>
      <a-tab-pane v-for="tab in props.schemas" :key="tab.title" :title="tab.title">
        <template v-for="item in tab.schemas" :key="item.dataIndex">
          <!--hidden-->
          <a-form-item
            v-if="item.hidden"
            :field="item.dataIndex"
            v-show="false"
            :label="item.title"
          >
            <a-input
              v-if="item.type == 'input'"
              v-model="formModel[item.dataIndex]"
            />
            <a-input-number
              v-if="item.type == 'number'"
              v-model="formModel[item.dataIndex]"
            />
          </a-form-item>

          <!--需要自定义栅格填写的请传span值-->
          <a-col v-else :span="item.span || 24">
            <a-form-item
              :field="item.dataIndex"
              :label="item.title"
              :label-col-flex="props.labelCol"
            >
              <!--input-->
              <a-input
                v-if="item.type == 'input'"
                v-model="formModel[item.dataIndex]"
                :placeholder="item.placeholder || `请输入${item.title}`"
                :readonly="item.readonly"
              />

              <!---password-->
              <a-input-password
                v-if="item.type == 'password'"
                v-model="formModel[item.dataIndex]"
                :placeholder="item.placeholder || `请输入${item.title}`"
                :readonly="item.readonly"
                autocomplete="off"
                allow-clear
              />

              <!--number-->
              <a-input-number
                v-if="item.type == 'number'"
                v-model="formModel[item.dataIndex]"
                :placeholder="item.placeholder || `请输入${item.title}`"
              />

              <!--inputtag-->
              <a-input-tag
                v-if="item.type == 'tag'"
                v-model="formModel[item.dataIndex]"
                allow-clear
              />

              <!--textarea-->
              <a-textarea
                v-if="item.type == 'textarea'"
                v-model="formModel[item.dataIndex]"
                :placeholder="item.placeholder || `请输入${item.title}`"
                :auto-size="{
                  minRows: item.minRows || 3,
                }"
              />

              <!--select-->
              <a-select
                v-if="item.type == 'select'"
                v-model="formModel[item.dataIndex]"
                :placeholder="item.placeholder || `请选择${item.title}`"
                allow-clear
                allow-search
              >
                <a-option
                  v-for="option of item.options"
                  :value="option.value"
                  :label="option.label"
                />
              </a-select>

              <!--multiple-->
              <a-select
                v-if="item.type == 'multiple' && item.options"
                v-model="formModel[item.dataIndex]"
                :placeholder="item.placeholder || `请选择${item.title}`"
                multiple
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
                v-if="item.type == 'cascader' && item.options"
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
                :placeholder="`请选择${item.title}`"
                :allow-search="true"
              >
                <template #tree-slot-icon>
                  <icon-calendar />
                </template>
              </a-tree-select>

              <!--date-->
              <a-date-picker
                v-if="item.type == 'date'"
                v-model="formModel[item.dataIndex]"
                :placeholder="item.placeholder || `请选择${item.title}`"
              />
              <!--time-->
              <a-time-picker
                v-if="item.type == 'time'"
                v-model="formModel[item.dataIndex]"
                :placeholder="item.placeholder || `请选择${item.title}`"
              />

              <!--radio-->
              <a-radio-group
                v-if="item.type == 'radio' && item.options"
                v-model="formModel[item.dataIndex]"
              >
                <a-radio
                  :value="tag.value"
                  v-for="tag in item.options"
                  :key="tag.value"
                  >{{ tag.label }}</a-radio
                >
              </a-radio-group>

              <!--checkbox-->
              <a-checkbox-group
                v-if="item.type == 'checkbox' && item.options"
                v-model="formModel[item.dataIndex]"
              >
                <a-checkbox
                  :value="tag.value"
                  v-for="tag in item.options"
                  :key="tag.value"
                  >{{ tag.label }}</a-checkbox
                >
              </a-checkbox-group>

              <!--slider滑块-->
              <a-slider
                v-if="item.type == 'slider'"
                v-model="formModel[item.dataIndex]"
              />

              <!--rate 评分-->
              <a-rate
                v-if="item.type == 'rate'"
                v-model="formModel[item.dataIndex]"
                allow-clear
              />

              <!--switch-->
              <a-switch
                v-if="item.type == 'switch'"
                v-model="formModel[item.dataIndex]"
              />

              <!--image-->
              <y-image
                v-if="item.type == 'image'"
                v-model="formModel[item.dataIndex]"
                :limit="item.limit || 1"
                :multiple="item.multiple || false"
              ></y-image>

              <!--editor-->
              <y-editor
                v-if="item.type == 'editor'"
                v-model="formModel[item.dataIndex]"
                :height="400"
              >
              </y-editor>

              <!--table-->
              <y-sortable
                v-if="item.type == 'table'"
                v-model="formModel[item.dataIndex]"
                :columns="item.columns"
                :addTemplate="item.addTemplate"
                @update:model-errors="tableUpdate"
              >
              </y-sortable>
            </a-form-item>
          </a-col>
        </template>
      </a-tab-pane>
      </a-tabs>
      </a-row>
      <!--字段 end-->

      <!--按钮begin-->
      <a-row>
        <div style="margin: 0 auto">
          <slot name="y-form-buttons" :values="formModel"></slot>
        </div>
      </a-row>
      <!--按钮end-->
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import YImage from "@/components/form/y-image/index.vue";
import YEditor from "@/components/form/y-editor/index.vue";
import YSortable from "@/components/form/y-sortable/index.vue";
const { t } = useI18n();

//编辑表单
const formRef = ref();
const formModel = ref<any>();

const props = defineProps({
  labelCol: {
    type: String,
    default: "80px",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  schemas: {
    type: Array<any>,
    default: [],
  },
  rules: {
    type: Object,
    default: [],
  },
});

watch(
  () => props.schemas,
  (array) => {
    let model: any = {};
    if (array.length == 0) return;
    array.forEach((tab: any) => {
      tab.schemas.forEach((item: any) => {
        switch (item.type) {
          case "multiple":
          case "checkbox":
          case "table":
          case "tag":
            model[item.dataIndex] = [];
            break;
          case "switch":
            model[item.dataIndex] = false;
            break;
          default:
            model[item.dataIndex] = null;
            break;
        }
      });
    });
    //如果没有传值用
    if (!formModel.value) {
      formModel.value = model;
    }
  },
  { immediate: true, deep: true }
);

const setData = (data: any) => {
  if (data) {
    //清空校验状态
    formRef.value.clearValidate();
    //直接合并进去
    Object.assign(formModel.value, data);
  } else {
    formRef.value.resetFields();
    props.schemas.forEach((item: any) => {
      if (Object.prototype.hasOwnProperty.call(item, "default")) {
        formModel.value[item.dataIndex] = item.default;
      }
    });
  }
};

//导出给父组件使用
defineExpose({
  setData,
});

const tableErrors = ref<Array<any>>();
const tableUpdate = (errors: any) => {
  tableErrors.value = errors;
};
</script>
