<template>
  <div class="container">
    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card class="general-card">
          <a-row justify="space-between" style="padding: 10px">
            <div>
              <a-button
                type="primary"
                @click="handleCreate"
                v-permission="['Root.CMS.Advert.Create']"
              >
                <template #icon>
                  <icon-plus />
                </template>
                新增
              </a-button>
              &nbsp;
              <a-popconfirm
                content="确定要删除选中数据?"
                type="warning"
                @ok="handleDeleted(state.selectedKeys)"
              >
                <a-button
                  type="primary"
                  status="danger"
                  :disabled="state.selectedKeys.length == 0"
                  v-permission="['Root.CMS.Advert.Delete']"
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
            </div>
            <a-input-search
              :placeholder="'搜索'"
              style="width: 240px; position: absolute; right: 20px"
            />
          </a-row>

          <a-row class="list-row" :gutter="24">
            <a-col
              v-for="item in state.renderData"
              :key="item.id"
              :xs="12"
              :sm="12"
              :md="12"
              :lg="6"
              :xl="6"
              :xxl="6"
              class="list-col"
              style="min-height: 140px"
            >
              <CardWrap
                :loading="state.loading"
                :title="item.title"
                :description="item.description"
                :default-value="item.enable"
                :action-type="item.actionType"
                :tag-text="'已开通'"
              >
                <template #skeleton>
                  <a-skeleton :animation="true">
                    <a-skeleton-line :widths="['100%', '40%']" :rows="2" />
                    <a-skeleton-line :widths="['40%']" :rows="1" />
                  </a-skeleton>
                </template>
              </CardWrap>
            </a-col>
          </a-row>

          <a-space direction="vertical" size="large">
            <a-pagination :total="50" show-total show-jumper show-page-size />
          </a-space>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import CardWrap from './components/card-wrap.vue';
const state = reactive({
  selectedKeys: [],
  loading: false,
  renderData: <any>[],
});

const rulesPresetList: any[] = [
  {
    id: 1,
    title: "内容屏蔽规则",
    description:
      "用户在执行特定的内容分发任务时，可使用内容屏蔽规则根据特定标签，过滤内容集合。",
    enable: true,
    actionType: "switch",
  },
  {
    id: 2,
    title: "内容置顶规则",
    description:
      "该规则支持用户在执行特定内容分发任务时，对固定的几条内容置顶。",
    enable: true,
    actionType: "switch",
  },
  {
    id: 3,
    title: "内容加权规则",
    description: "选定内容加权规则后可自定义从不同内容集合获取内容的概率。",
    enable: false,
    actionType: "switch",
  },
  {
    id: 4,
    title: "内容分发规则",
    description: "内容分发时，对某些内容需要固定在C端展示的位置。",
    enable: true,
    actionType: "switch",
  },
  {
    id: 5,
    title: "违禁内容识别",
    description: "精准识别赌博、刀枪、毒品、造假、贩假等违规物品和违规行为。",
    enable: false,
    actionType: "switch",
  },
  {
    id: 6,
    title: "多语言文字符号识别",
    description:
      "精准识别英语、维语、藏语、蒙古语、朝鲜语等多种语言以及emoji表情形态的语义识别。",
    enable: false,
    actionType: "switch",
  },
];

const initData = () => {
  state.renderData = rulesPresetList;
};
initData();

const handleCreate = () => {};
const handleDeleted = (ids: any) => {};
</script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;
  :deep(.arco-list-content) {
    overflow-x: hidden;
  }

  :deep(.arco-card-meta-title) {
    font-size: 14px;
  }
}
:deep(.arco-list-col) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

:deep(.arco-list-item) {
  width: 33%;
}

:deep(.block-title) {
  margin: 0 0 12px 0;
  font-size: 14px;
}
:deep(.list-wrap) {
  // min-height: 140px;
  .list-row {
    align-items: stretch;
    .list-col {
      margin-bottom: 16px;
    }
  }
  :deep(.arco-space) {
    width: 100%;
    .arco-space-item {
      &:last-child {
        flex: 1;
      }
    }
  }
}
</style>
