<template>
  <div class="flex justify-between  pt-5 pl-5 h-32px">
      <div class="flex">
        <div @click="openMenu">
          <svg class="icon" height="40" p-id="5219" t="1714319497904" version="1.1"
               viewBox="0 0 1024 1024" width="35" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M212 338c-24.852 0-45-20.148-45-45S187.148 248 212 248h600c24.852 0 45 20.148 45 45S836.852 338 812 338H212z m0 220c-24.852 0-45-20.148-45-45S187.148 468 212 468h600c24.852 0 45 20.148 45 45S836.852 558 812 558H212z m0 220c-24.852 0-45-20.148-45-45S187.148 688 212 688h600c24.852 0 45 20.148 45 45S836.852 778 812 778H212z"
                fill="#ffffff" p-id="5220"></path>
          </svg>
        </div>

        <v-mini-weather class="w-64 pl-20px pt-10px ">
          <template #default="{weather, icon}">
            <div class="flex text-amber-500 text-base">
              <span class="mr-5px">{{ weather.cityname }}</span>
              <v-mini-weather-icon :icon="icon" class="h-24px w-24px mr-5px"></v-mini-weather-icon>
              <span class="mr-5px">{{ weather.weather }}</span>
              <span>{{ weather.temp }}℃</span>
            </div>
          </template>
        </v-mini-weather>
      </div>
      <div class="mr-10px">
        <n-dropdown :options="menuOptions" trigger="hover" @select="handleSelect">
          <n-avatar :style="{  display: 'flex', }" round size="medium">
            <n-icon size="20">
              <Person/>
            </n-icon>
          </n-avatar>

        </n-dropdown>
      </div>
    </div>
</template>
<script setup>
import vMiniWeather from '@/views/components/vMiniWeather.vue'
import vMiniWeatherIcon from '@/views/components/vMiniWeatherIcon/vMiniWeatherIcon.vue'
import {computed, defineProps, h, ref} from 'vue'
import axios from "axios";
import {NAvatar, NDropdown, NIcon, NText, useMessage} from "naive-ui";
import {
  LogOutOutline as LogoutIcon,
  Person,
  PersonCircleOutline as UserIcon,
  SettingsOutline as AdminIcon
} from "@vicons/ionicons5";

const message = useMessage();
const props = defineProps({
  collapsed: {type: Boolean, required: true}
})

const emit = defineEmits(['update:collapsed']);
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};


const openMenu = () => {
  emit('update:collapsed', !props.collapsed);
}
const systemInfo = ref(null)
const userInfo = ref(null)
const Logout = async () => {
  try {
    await axios.post('/api/logout');
    localStorage.removeItem('user');
    window.location.reload();
    message.success('退出登录成功');
  } catch (error) {
    const msg = error.response?.data?.msg || '请检查网络连接';
    message.error(msg);
  }
};
const renderCustomHeader = () => {
  return h(
      "div",
      {
        style: "display: flex; align-items: center; padding: 8px 12px;"
      },
      [
        h(NAvatar, {
          round: true,
          style: {'margin-right': '12px', 'display': 'flex'},
        }, () => [h(NText, {depth: 1}, {default: () => userInfo.value.username})]),
        h("div", null, [
          h("div", null, [h(NText, {depth: 2}, {default: () => userInfo.value.nickname})]),
          h("div", {style: "font-size: 12px;"}, [
            h(
                NText,
                {depth: 3},
                {default: () => "欢迎访问Yserver服务平台"}
            )
          ])
        ])
      ]
  );
}

const menuOptions = computed(() => {
  return [
    {
      key: "header",
      type: "render",
      render: renderCustomHeader
    },
    {
      key: 'header-divider',
      type: 'divider'
    },
    {
      label: '用户信息',
      key: 'user/info',
      icon: renderIcon(UserIcon)
    },
    {
      label: '后台管理',
      key: 'admin',
      icon: renderIcon(AdminIcon)

    },
    {
      label: '退出登录',
      key: 'logout',
      icon: renderIcon(LogoutIcon)
    },
  ];
});
const handleSelect = (key) => {
  if (key === 'logout') {
    Logout()
  } else {
    location.href = systemInfo.value.base_url + '/' + key
  }
}

const getUserInfo = async () => {
  axios.get('/api/user/me', {withCredentials: true}).then(response => {
    userInfo.value = response.data.result
  }).catch(error => {
    console.error('获取用户信息失败:', error);
  });
  try {
    const response = await axios.get('/api/system/info');
    systemInfo.value = response.data.result;
  } catch (error) {
  }
}
getUserInfo()
</script>
<style>


</style>