<template>
  <div>
    <!--按钮组 begin -->
    <div
      style="margin-bottom: 5px; display: flex; justify-content: space-between"
    >
      <a-space>
        <!--按钮插槽-->
        <slot name="buttons"></slot>
      </a-space>

      <a-space>
        <a-tooltip :content="'刷新'" v-if="props.showPage">
          <div class="action-icon" @click="refresh">
            <icon-refresh size="18" />
          </div>
        </a-tooltip>
        <a-dropdown @select="handleSelectDensity">
          <a-tooltip :content="'密度'">
            <div class="action-icon"><icon-line-height size="18" /></div>
          </a-tooltip>
          <template #content>
            <a-doption
              v-for="item in densityList"
              :key="item.value"
              :value="item.value"
              :class="{ active: item.value === size }"
            >
              <span>{{ item.name }}</span>
            </a-doption>
          </template>
        </a-dropdown>
        <a-tooltip :content="'列设置'">
          <a-popover
            trigger="click"
            position="bl"
            @popup-visible-change="popupVisibleChange"
          >
            <div class="action-icon"><icon-settings size="18" /></div>
            <template #content>
              <div id="tableSetting">
                <div
                  v-for="(item, index) in showColumns"
                  :key="item.dataIndex"
                  class="setting"
                >
                  <div style="margin-right: 4px; cursor: move">
                    <icon-drag-arrow />
                  </div>
                  <div>
                    <a-checkbox
                      v-model="item.checked"
                      @change="
                        handleChange($event, item as TableColumnData, index)
                      "
                    >
                    </a-checkbox>
                  </div>
                  <div class="title">
                    {{ item.title === "#" ? "序列号" : item.title }}
                  </div>
                </div>
              </div>
            </template>
          </a-popover>
        </a-tooltip>
      </a-space>
    </div>
    <!--按钮组 end-->

    <a-table
      :row-key="props.rowKey"
      :loading="props.loading"
      :stripe="props.stripe"
      :bordered="{ cell: props.bordered }"
      :column-resizable="props.columnResizable"
      :data="props.renderData"
      :pagination="props.showPage ? pagination : false"
      :page-position="'bottom'"
      :row-selection="rowSelection"
      v-model:selectedKeys="checkKeys"
      :default-expand-all-rows="true"
      :hide-expand-button-on-empty="true"
      :columns="(cloneColumns as TableColumnData[])"
      :size="size"
      @page-change="onPageChange"
      @page-size-change="onPageSizeChange"
      @sorter-change="onSorterChange"
    >
      <!--Slot begin-->
      <template #columns>
        <template v-for="item in cloneColumns">
          <a-table-column
            v-if="item.slotName"
            :title="`${item.title}`"
            :width="item.width"
            :key="item.dataIndex"
            :sortable="item.sortable"
            :fixed="item.fixed"
          >
            <template #cell="{ record, column, rowIndex }" v-if="item.slotName">
              <!--:record对应slot参数接收-->
              <slot
                :name="item.slotName"
                :record="record"
                :rowIndex="rowIndex"
              ></slot>
            </template>
          </a-table-column>

          <a-table-column
            v-else
            :title="`${item.title}`"
            :width="item.width"
            :data-index="item.dataIndex"
            :sortable="item.sortable"
            :fixed="item.fixed"
          >
          </a-table-column>
        </template>
      </template>

      <!--Slot end-->
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, watch, nextTick } from "vue";
import { useI18n } from "vue-i18n";
import cloneDeep from "lodash/cloneDeep";
import Sortable from "sortablejs";
import type { TableColumnData } from "@arco-design/web-vue/es/table/interface";
import { PaginationProps } from "@arco-design/web-vue/es/pagination";
const { t } = useI18n();
const emits = defineEmits(["change", "sorter", "check"]);

type Column = TableColumnData & { checked?: true };
const cloneColumns = ref<Column[]>([]);
const showColumns = ref<Column[]>([]);
const checkKeys = ref<any[]>([]);
//props watch监听
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  rowKey: {
    type: String,
    default: "id",
  },
  stripe: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  columnResizable: {
    type: Boolean,
    default: false,
  },
  request: {
    type: Object,
    defult: null,
  },
  showPage: {
    type: Boolean,
    default: true,
  },
  columns: {
    type: Array<any>,
    default: [],
    required: true,
  },
  renderData: {
    type: Array<any>,
    default: [],
  },
  selectionType: {
    type: String,
    default: "",
  },
  selectedKeys: {
    type: Array<any>,
    default: [],
  },
});

const rowSelection = ref<any>();

const pagination = reactive<PaginationProps>({
  current: 1,
  pageSize: 20,
  showTotal: true,
  showMore: true,
  showJumper: true,
  showPageSize: true,
  pageSizeOptions: [10, 20, 50, 100, 200],
});

watch(
  () => props.columns,
  (val) => {
    cloneColumns.value = cloneDeep(val);
    cloneColumns.value.forEach((item, index) => {
      item.checked = true;
    });
    showColumns.value = cloneDeep(cloneColumns.value);
  },
  { deep: true, immediate: true }
);
watch(
  () => props.request,
  (val) => {
    pagination.current = val?.PageIndex;
    pagination.pageSize = val?.PageSize;
    pagination.total = val?.Total;
  },
  { deep: true, immediate: true }
);
watch(
  () => props.selectionType,
  (val) => {
    if (val) {
      rowSelection.value = {
        type: val,
        showCheckedAll: true,
        onlyCurrent: true,
      };
    }
  },
  { deep: true, immediate: true }
);

watch(
  () => checkKeys,
  (val) => {
    emits("check", val);
  },
  { deep: true, immediate: true }
);

// #region 表格change事件
const onSorterChange = (dataIndex: string, direction: string) => {
  emits("sorter", {
    sortField: "dataIndex",
    orderByType: direction == "ascend" ? 0 : 1,
  });
};
const onPageChange = (current: number) => {
  emits("change", current, pagination.pageSize);
};
const onPageSizeChange = (pageSize: number) => {
  emits("change", pagination.current, pageSize);
};
const refresh = () => {
  emits("change", pagination.current, pagination.pageSize);
};

// #endregion

// #region 表格大小改变
type SizeProps = "small" | "medium" | "large";
const size = ref<SizeProps>("small");
const densityList = computed(() => [
  // {
  //   name: 'mini',
  //   value: "mini",
  // },
  {
    name: "small",
    value: "small",
  },
  {
    name: "medium",
    value: "medium",
  },
  {
    name: "large",
    value: "large",
  },
]);
const handleSelectDensity = (
  val: string | number | Record<string, any> | undefined,
  e: Event
) => {
  size.value = val as SizeProps;
};
// #endregion

// #region 字段显隐
const handleChange = (
  checked: boolean | (string | boolean | number)[],
  column: Column,
  index: number
) => {
  if (!checked) {
    cloneColumns.value = showColumns.value.filter(
      (item) => item.dataIndex !== column.dataIndex
    );
  } else {
    cloneColumns.value.splice(index, 0, column);
  }
};
const popupVisibleChange = (val: boolean) => {
  if (val) {
    nextTick(() => {
      const el = document.getElementById("tableSetting") as HTMLElement;
      const sortable = new Sortable(el, {
        onEnd(e: any) {
          const { oldIndex, newIndex } = e;
          exchangeArray(cloneColumns.value, oldIndex, newIndex);
          exchangeArray(showColumns.value, oldIndex, newIndex);
        },
      });
    });
  }
};
const exchangeArray = <T extends Array<any>>(
  array: T,
  beforeIdx: number,
  newIdx: number,
  isDeep = false
): T => {
  const newArray = isDeep ? cloneDeep(array) : array;
  if (beforeIdx > -1 && newIdx > -1) {
    // 先替换后面的，然后拿到替换的结果替换前面的
    newArray.splice(
      beforeIdx,
      1,
      newArray.splice(newIdx, 1, newArray[beforeIdx]).pop()
    );
  }
  return newArray;
};
// #endregion
</script>
<style scoped lang="less">
.action-icon {
  margin-left: 12px;
  cursor: pointer;
}
.active {
  color: #0960bd;
  background-color: #e3f4fc;
}
.setting {
  display: flex;
  align-items: center;
  width: 150px;
  .title {
    margin-left: 5px;
    cursor: pointer;
  }
}

:deep(.arco-btn-size-small) {
  padding: 0 5px;
}

:deep(div.arco-typography, p.arco-typography) {
  margin-bottom: 0;
}
</style>
