<template>
  <div class="container">
    <UserInfoHeader />
    <div class="content">
      <div class="content-left">
        <a-grid :cols="24" :col-gap="16" :row-gap="16">
          <a-grid-item :span="24">
            <MyProject />
          </a-grid-item>
        </a-grid>

        <a-grid :cols="24" :col-gap="16" :row-gap="16">
          <a-grid-item :span="24">
            <a-card>
              <a-tabs default-active-key="1" type="rounded">
                <a-tab-pane
                  key="1"
                  :title="'基础信息'"
                >
                  <BasicInformation />
                </a-tab-pane>
                <a-tab-pane
                  key="2"
                  :title="'安全设置'"
                >
                  <SecuritySettings />
                </a-tab-pane>
              </a-tabs>
            </a-card>
          </a-grid-item>
        </a-grid>
      </div>

      <div class="content-right">
        <a-grid :cols="24" :row-gap="16">
          <a-grid-item class="panel" :span="24">
            <LatestNotification />
          </a-grid-item>
        </a-grid>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserInfoHeader from "./components/user-info-header.vue";
import LatestNotification from "./components/latest-notification.vue";
import MyProject from "./components/my-project.vue";

import BasicInformation from "./components/basic-information.vue";
import SecuritySettings from "./components/security-settings.vue";
</script>

<script lang="ts" setup></script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;
}

.content {
  display: flex;
  margin-top: 12px;

  &-left {
    flex: 1;
    margin-right: 16px;
    overflow: hidden;
    // background-color: var(--color-bg-2);

    :deep(.arco-tabs-nav-tab) {
      margin-left: 16px;
    }
  }

  &-right {
    width: 332px;
  }

  .tab-pane-wrapper {
    padding: 0 16px 16px 16px;
  }
}
</style>

<style lang="less" scoped>
.mobile {
  .content {
    display: block;
    &-left {
      margin-right: 0;
      margin-bottom: 16px;
    }
    &-right {
      width: 100%;
    }
  }
}
</style>
