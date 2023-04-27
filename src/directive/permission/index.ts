import { DirectiveBinding } from 'vue';
import { useUserStore } from '@/store';

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding;
  const userStore = useUserStore();
  const permissions = userStore.permissions as undefined as any;
  if (Array.isArray(value)) {
    if (value.length > 0) {
      const hasPermission = permissions.includes(value[0]);
      if (!hasPermission && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error(`need permissionValues! v-permission="['xxxx']"`);
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
};
