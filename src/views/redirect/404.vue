<template>
  <div class="container">
    <Breadcrumb :items="['menu.result', 'menu.result.error']" />
    <div class="wrapper">
      <a-result
        class="result"
        status="error"
        :title="'404'"
        :subtitle="'你访问的页面不存在~'"
      >
        <template #extra>
          <a-space class="operation-wrap" :size="16">
            <a-button key="again" type="secondary" @click="$router.push({ path: 'workplace' })">
              {{ '回到首页' }}
            </a-button>
          </a-space>
        </template>
      </a-result>

      <div class="details-wrapper">
        <a-typography-title :heading="6" style="margin-top: 0">
          {{  '错误详情' }}
        </a-typography-title>
        <a-typography-paragraph style="margin-bottom: 0">
          <ol>
            <li>
              {{ '当前访问的地址不存在' }}
            </li>
            <li>{{ '或您的账户不具有此操作的权限' }}</li>
          </ol>
        </a-typography-paragraph>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'Error',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }
  .wrapper {
    padding: 24px 150px;
    background-color: var(--color-bg-2);
    border-radius: 4px;
  }

  .result {
    margin: 150px 0 36px 0;
  }

  .operation-wrap {
    margin-bottom: 40px;
    text-align: center;
  }

  .details-wrapper {
    width: 100%;
    margin-bottom: 150px;
    padding: 20px;
    background-color: rgb(var(--gray-1));
  }
</style>
