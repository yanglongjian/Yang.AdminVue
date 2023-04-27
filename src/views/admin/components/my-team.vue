<template>
  <a-card
    class="general-card"
    :title="$t('userInfo.tab.title.team')"
    :header-style="{ paddingBottom: '18px' }"
    :body-style="{ paddingBottom: '12px' }"
  >
    <a-list :bordered="false">
      <a-list-item
        v-for="team in teamList"
        :key="team.id"
        action-layout="horizontal"
      >
        <a-skeleton v-if="loading" :loading="loading" :animation="true">
          <a-row :gutter="6">
            <a-col :span="6">
              <a-skeleton-shape shape="circle" />
            </a-col>
            <a-col :span="16">
              <a-skeleton-line :widths="['100%', '40%']" :rows="2" />
            </a-col>
          </a-row>
        </a-skeleton>
        <a-list-item-meta v-else :title="team.name">
          <template #avatar>
            <a-avatar>
              <img :src="team.avatar" />
            </a-avatar>
          </template>
          <template #description> 共{{ team.peopleNumber }}人 </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const defaultValue: any[] = new Array(4).fill({});

const teamList = ref();
const loading = ref(true);

const fetchData = async () => {
  try {
    teamList.value = [
      {
        id: 1,
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
        name: "火山引擎智能应用团队",
        peopleNumber: 23,
      },
      {
        id: 2,
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
        name: "企业级产品设计团队",
        peopleNumber: 45,
      },
      {
        id: 3,
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
        name: "前端/UE小分队",
        peopleNumber: 56,
      },
      {
        id: 4,
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp",
        name: "内容识别插件小分队",
        peopleNumber: 34,
      },
    ];
  } catch (err) {
    // you can report use errorHandler or other
  } finally {
    loading.value = false;
  }
};
fetchData();
</script>

<style scoped lang="less">
.general-card {
  height: 356px;
  .arco-list-item {
    height: 72px;
    padding-left: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-neutral-3);
    &:last-child {
      border-bottom: none;
    }
    .arco-list-item-meta {
      padding: 0;
    }
  }
}
</style>
