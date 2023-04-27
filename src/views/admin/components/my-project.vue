<template>
  <a-card class="general-card" :title="'我的项目'">
    <template #extra>
      <a-link>{{ '查看更多' }}</a-link>
    </template>
    <a-row :gutter="16">
      <a-col
        v-for="(project, index) in projectList"
        :key="index"
        :xs="12"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="8"
        :xxl="8"
        class="my-project-item"
      >
        <a-card>
          <a-skeleton v-if="loading" :loading="loading" :animation="true">
            <a-skeleton-line :rows="3" />
          </a-skeleton>
          <a-space v-else direction="vertical">
            <a-typography-text bold>{{ project.name }}</a-typography-text>
            <a-typography-text type="secondary">
              {{ project.description }}
            </a-typography-text>
            <a-space>
              <a-avatar-group :size="24">
                {{ project.contributors }}
                <a-avatar
                  v-for="(contributor, idx) in project.contributors"
                  :key="idx"
                  :size="32"
                >
                  <img alt="avatar" :src="contributor.avatar" />
                </a-avatar>
              </a-avatar-group>
              <a-typography-text type="secondary">
                等{{ project.peopleNumber }}人
              </a-typography-text>
            </a-space>
          </a-space>
        </a-card>
      </a-col>
    </a-row>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

  const defaultValue = Array(6).fill({} as any);
  const loading=ref(true);
  const projectList=ref<any>();

  const fetchData = async () => {
    try {
      const contributors = [
        {
          name: '秦臻宇',
          email: 'qingzhenyu@arco.design',
          avatar:
            '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          name: '于涛',
          email: 'yuebao@arco.design',
          avatar:
            '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          name: '宁波',
          email: 'ningbo@arco.design',
          avatar:
            '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          name: '郑曦月',
          email: 'zhengxiyue@arco.design',
          avatar:
            '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          name: '宁波',
          email: 'ningbo@arco.design',
          avatar:
            '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
      ];
      const units = [
        {
          name: '企业级产品设计系统',
          description: 'Arco Design System',
        },
        {
          name: '火山引擎智能应用',
          description: 'The Volcano Engine',
        },
        {
          name: 'OCR文本识别',
          description: 'OCR text recognition',
        },
        {
          name: '内容资源管理',
          description: 'Content resource management ',
        },
        {
          name: '今日头条内容管理',
          description: 'Toutiao content management',
        },
        {
          name: '智能机器人',
          description: 'Intelligent Robot Project',
        },
      ];
      projectList.value =  new Array(6).fill(null).map((_item, index) => ({
          id: index,
          name: units[index].name,
          description: units[index].description,
          peopleNumber:10,
          contributors,
        }))
    } catch (err) {
    } finally {
      loading.value=false;
    }
  };
  fetchData();

</script>

<style scoped lang="less">
  :deep(.arco-card-body) {
    min-height: 128px;
    padding-bottom: 0;
  }
  .my-project {
    &-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    &-title {
      margin-top: 0 !important;
      margin-bottom: 18px !important;
    }

    &-list {
      display: flex;
      justify-content: space-between;
    }

    &-item {
      // padding-right: 16px;
      margin-bottom: 16px;

      &:last-child {
        padding-right: 0;
      }
    }
  }
</style>
