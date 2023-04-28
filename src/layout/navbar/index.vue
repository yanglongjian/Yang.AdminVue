<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <icon-menu-fold
          v-if="appStore.device === 'mobile'"
          style="font-size: 22px; cursor: pointer"
          @click="toggleDrawerMenu"
        />
      </a-space>
      <Breadcrumb v-if="appStore.device !== 'mobile'" :items="breadList" />
    </div>
    <ul class="right-side">
      <li>
        <a-tooltip :content="'搜索'">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="searchVisible = true"
          >
            <template #icon>
              <icon-search />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="'语言'">
          <a-dropdown trigger="click" @select="selectLocale">
            <a-button class="nav-btn" type="outline" :shape="'circle'">
              <template #icon>
                <icon-language />
              </template>
            </a-button>
            <template #content>
              <a-doption
                v-for="item in locales"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </a-doption>
            </template>
          </a-dropdown>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip
          :content="
            theme === 'light' ? '点击切换为暗黑模式' : '点击切换为亮色模式'
          "
        >
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="handleToggleTheme"
          >
            <template #icon>
              <icon-moon-fill v-if="theme === 'dark'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <!-- <li>
        <a-tooltip :content="$t('settings.navbar.alerts')">
          <div class="message-box-trigger">
            <a-badge :count="9" dot>
              <a-button
                class="nav-btn"
                type="outline"
                :shape="'circle'"
                @click="setPopoverVisible"
              >
                <icon-notification />
              </a-button>
            </a-badge>
          </div>
        </a-tooltip>
        <a-popover
          trigger="click"
          :arrow-style="{ display: 'none' }"
          :content-style="{ padding: 0, minWidth: '400px' }"
          content-class="message-popover"
        >
          <div ref="refBtn" class="ref-btn"></div>
          <template #content>
            <message-box />
          </template>
        </a-popover>
      </li> -->
      <li>
        <a-tooltip
          :content="isFullscreen ? '点击退出全屏模式' : '点击切换全屏模式'"
        >
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="toggleFullScreen"
          >
            <template #icon>
              <icon-fullscreen-exit v-if="isFullscreen" />
              <icon-fullscreen v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <!-- <li>
        <a-tooltip :content="'页面配置'">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="setVisible"
          >
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li> -->
      <li>
        <a-dropdown trigger="click">
          <a-avatar
            :size="32"
            :style="{ marginRight: '8px', cursor: 'pointer' }"
          >
            <img :alt="userInfo.account" :src="userInfo.avatar" />
          </a-avatar>
          <template #content>
            <a-doption>
              <a-space @click="$router.push({ name: 'profile' })">
                <icon-user />
                <span> 用户信息 </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space @click="handleChangePwdOpen">
                <icon-settings />
                <span> 密码修改 </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space @click="handleLogout">
                <icon-export />
                <span> 退出登录 </span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>

    <!--修改密码 begin-->
    <a-modal
      v-model:visible="state.changePwdVisible"
      :top="20"
      :title="'修改密码'"
      :footer="false"
      :align-center="false"
      
      :mask-closable="false"
      @cancel="state.changePwdVisible = false"
    >
      <y-form
        ref="changePwdFormRef"
        :schemas="changePwdSchemas"
        :rules="changePwdRules"
      >
        <template #y-form-buttons="{ values }">
          <a-button
            type="primary"
            :loading="state.loading"
            @click="handleChangePwdSubmit(values)"
          >
            <template #icon>
              <icon-check />
            </template>
            提交
          </a-button>
          &nbsp;
          <a-button @click="state.changePwdVisible = false">
            <template #icon>
              <icon-close />
            </template>
            关闭
          </a-button>
        </template>
      </y-form>
    </a-modal>
    <!--重置密码 end-->
  </div>

  <a-modal
    v-model:visible="searchVisible"
    :top="20"
    :align-center="false"
    :mask-closable="false"
    @cancel="searchVisible = false"
  >
    <template #title> 搜索 </template>
    <a-form :model="searchForm">
      <a-input-search
        v-model="searchForm.searchKey"
        placeholder="请输入关键词搜索"
        search-button
      />
    </a-form>

    <a-empty />

    <template #footer>
      <span class="mr-14px">
        <icon-arrow-up class="icon" />
        &nbsp;
        <icon-arrow-down class="icon" />
        切换
      </span>
    </template>
  </a-modal>
</template>

<script lang="ts" setup>
import { computed, ref, inject, Ref, watch, reactive, nextTick } from "vue";
import { Message } from "@arco-design/web-vue";
import Logo from "@/layout/logo/index.vue";
import { useDark, useToggle, useFullscreen } from "@vueuse/core";
import { useAppStore, useUserStore } from "@/store";
import { useRoute, useRouter, RouteLocationMatched } from "vue-router";
import { changePassword } from "@/api/admin/identity";

import { LOCALE_OPTIONS } from "@/locale";
import useLocale from "@/hooks/locale";
import useUser from "@/hooks/user";
import MessageBox from "../message-box/index.vue";
import Breadcrumb from "../breadcrumb/index.vue";

const appStore = useAppStore();
const userStore = useUserStore();
const { logout } = useUser();
const { changeLocale } = useLocale();
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
const locales = [...LOCALE_OPTIONS];
const userInfo: any = computed(() => {
  return userStore.userInfo;
});
const theme = computed(() => {
  return appStore.theme;
});
const selectLocale = (value: any) => {
  changeLocale(value);
};

const isDark = useDark({
  selector: "body",
  attribute: "arco-theme",
  valueDark: "dark",
  valueLight: "light",
  storageKey: "arco-theme",
  onChanged(dark: boolean) {
    // overridden default behavior
    appStore.toggleTheme(dark);
  },
});
const toggleTheme = useToggle(isDark);
const handleToggleTheme = () => {
  toggleTheme();
};
const setVisible = () => {
  appStore.updateSettings({ globalSettings: true });
};
const refBtn = ref();
const triggerBtn = ref();
const setPopoverVisible = () => {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  refBtn.value.dispatchEvent(event);
};
const handleLogout = () => {
  logout();
};
const setDropDownVisible = () => {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  triggerBtn.value.dispatchEvent(event);
};
// const switchRoles = async () => {
//   const res = await userStore.switchRoles();
//   Message.success(res as string);
// };
const toggleDrawerMenu = inject("toggleDrawerMenu") as () => void;

const breadList: Ref<any[]> = ref([]);
const route = useRoute();
const getBreadcrumb = (): void => {
  let matched = route.matched.filter((item) => item.meta && item.meta.locale);
  breadList.value = matched
    .filter((item) => item.meta && item.meta.locale)
    .map((item) => {
      return item.meta.locale;
    });
};
getBreadcrumb();
watch(
  () => route.path,
  () => getBreadcrumb()
);

// #region 修改密码
const state = reactive({
  loading: false,
  changePwdVisible: false,
});
const changePwdFormRef = ref();
const changePwdSchemas = computed(() => [
  {
    title: "原密码",
    dataIndex: "oldPassword",
    type: "password",
  },
  {
    title: "新密码",
    dataIndex: "newPassword",
    type: "password",
  },
  {
    title: "确认密码",
    dataIndex: "confirmNewPassword",
    type: "password",
  },
]);
const changePwdRules = ref<any>({
  oldPassword: [
    { required: true, message: "请输入原密码" },
    { minLength: 6, message: "密码长度不能小于6位" },
  ],
  newPassword: [
    { required: true, message: "请输入新密码" },
    { minLength: 6, message: "密码长度不能小于6位" },
  ],
  confirmNewPassword: [
    { required: true, message: "请输入确认密码" },
    { minLength: 6, message: "密码长度不能小于6位" },
  ],
});

const handleChangePwdOpen = () => {
  nextTick(() => {
    state.changePwdVisible = true;
    changePwdFormRef.value.setData({
      oldPwssword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  });
};

const handleChangePwdSubmit = async (values: any) => {
  state.loading = true;
  try {
    const { data } = await changePassword(values);
    Message.success(data);
  } finally {
    state.changePwdVisible = false;
    state.loading = false;
  }
};
// endregion

const searchVisible = ref(false);
const searchForm = reactive({
  searchKey: "",
});
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.right-side {
  display: flex;
  padding-right: 20px;
  list-style: none;
  :deep(.locale-select) {
    border-radius: 20px;
  }
  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  a {
    color: var(--color-text-1);
    text-decoration: none;
  }
  .nav-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 16px;
  }
  .trigger-btn,
  .ref-btn {
    position: absolute;
    bottom: 14px;
  }
  .trigger-btn {
    margin-left: 14px;
  }
}
</style>

<style lang="less">
.message-popover {
  .arco-popover-content {
    margin-top: 0;
  }
}
.mr-14px {
  font-size: 16px;
}
.icon {
  box-shadow: inset 0 -2px #cdcde6, inset 0 0 1px 1px #fff,
    0 1px 2px 1px #1e235a66;
}
</style>
