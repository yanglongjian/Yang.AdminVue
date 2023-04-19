<template>
  <div>
    <a-card>
      <!--表格 begin-->
      <y-table
        ref="searchTableRef"
        :loading="state.loading"
        :showPage="false"
        :columns="columns"
        :renderData="state.rows"
      >     
        <!--slot begin-->
        <template #accessType="{ record }">
          <a-tag
            :color="
              accessTypeOptions.filter((r) => r.value == record.accessType)[0]?.other ||
              ''
            "
          >
            {{
              accessTypeOptions.filter((r) => r.value == record.accessType)[0]?.label ||
              ""
            }}
          </a-tag>
        </template>
        <!--slot end-->

      </y-table>
      <!--表格 end-->
    </a-card>

  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, nextTick } from "vue";
import {read} from "@/api/admin/module";
import {accessTypeOptions } from "@/api/global";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const state = reactive({
  loading: false,
  rows: []
});

const columns = computed(() => [
  {
    title: "模块功能名称",
    dataIndex: "name"
  },
  {
    title: "权限代码",
    dataIndex: "code"
  },
  {
    title: "访问类型",
    dataIndex: "accessType",
    slotName: "accessType",
  }
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
const handleSearch = async () => {
  await handleFetch();
};
handleFetch();
// #endregion
</script>
