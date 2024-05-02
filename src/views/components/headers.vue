<template>

  <div class="relative mb-4 diagonal-gradient">
    <div class="flex justify-between  pt-5 pl-5">
      <div class="flex">
      <div @click="openMenu">
        <svg t="1714319497904" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5219" width="35" height="40"><path d="M212 338c-24.852 0-45-20.148-45-45S187.148 248 212 248h600c24.852 0 45 20.148 45 45S836.852 338 812 338H212z m0 220c-24.852 0-45-20.148-45-45S187.148 468 212 468h600c24.852 0 45 20.148 45 45S836.852 558 812 558H212z m0 220c-24.852 0-45-20.148-45-45S187.148 688 212 688h600c24.852 0 45 20.148 45 45S836.852 778 812 778H212z" fill="#ffffff" p-id="5220"></path></svg>
      </div>

      <v-mini-weather class="w-64 pl-20px pt-10px ">
        <template #default="{weather, icon}">
          <div class="flex text-amber-500 text-base" >
            <span class="mr-5px">{{weather.cityname}}</span>
            <v-mini-weather-icon  :icon="icon" class="h-24px w-24px mr-5px"></v-mini-weather-icon>
            <span class="mr-5px">{{weather.weather}}</span>
            <span >{{weather.temp}}℃</span>
          </div>
        </template>
      </v-mini-weather>
      </div>
      <div class="mr-10px">
        <n-dropdown trigger="hover" :options="menuOptions" @select="handleSelect">
          <n-avatar round size="medium" :style="{ backgroundColor: randomColor, display: 'flex', }">
            <n-icon size="20">
              <Person />
            </n-icon>
          </n-avatar>

        </n-dropdown>
      </div>
    </div>
    <div class="s-search">
      <div id="search" class="s-search mx-auto mt-30px">
        <!--<div id="search-list-menu" class="hide-type-list">
          <div class="s-type text-center">
            <div class="s-type-list big">
              <div class="anchor" style="position: absolute; left: 87.5px; opacity: 1; width: 35px;"></div>
              <label class="test" >
                <span  v-for="item in searchBar" :key="item.type" class="s-type-item labels">{{item.type}}</span>
              </label>
            </div>
          </div>
        </div>-->
        <form action="https://www.bing.com/search?q=" method="get" target="_blank" >
          <input type="text" id="search-text" class="" placeholder="必应搜索" style="outline:0" >
          <button @click="search" ><i class="iconfont icon-search"></i></button>
        </form>
        <!--<div id="search-list" class="hide-type-list">
          <div >
            <li v-for="group in searchBar" :key="group.type">
              <ul>

                <li v-for="item in group.list" :key="item.name">
                  <label>
                    <span class="text-muted">{{ item.name }}</span>
                  </label>
                </li>
              </ul>
            </li>
          </div>
        </div>-->
      </div>
    </div>
    </div>

</template>
<script setup>
import { vMiniWeather, vMiniWeatherIcon } from 'vue3-mini-weather'
import {computed, defineProps, h, ref} from 'vue'
import axios from "axios";
import {NAvatar, NDropdown, NIcon, NText} from "naive-ui";
import {
  LogOutOutline as LogoutIcon,
  Person,
  PersonCircleOutline as UserIcon,
  SettingsOutline as AdminIcon
} from "@vicons/ionicons5";

const props = defineProps({
  collapsed: { type: Boolean, required: true }
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
const systemInfo =ref(null)
const userInfo=ref(null)
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
          style: { 'margin-right': '12px', 'display': 'flex' },
        },() => [h(NText, { depth: 1 }, { default: () => userInfo.value.username })]),
        h("div", null, [
          h("div", null, [h(NText, { depth: 2 }, { default: () => userInfo.value.nickname })]),
          h("div", { style: "font-size: 12px;" }, [
            h(
                NText,
                { depth: 3 },
                { default: () => "欢迎访问Yserver服务平台" }
            )
          ])
        ])
      ]

  );
  //加入分割线

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
      key: 'user/record',
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
const handleSelect =(key)=>{
  if (key==='logout'){
    Logout()
  }
  else {
    location.href = systemInfo.value.BASE_URL+'/'+key
  }


}
const searchBar = ref([
  {
    type: '常用',
    list: [
      {
        name: '必应',
        url: 'https://www.bing.com/search?q='
      },
      {
        name: '谷歌',
        url: 'https://www.google.com/search?q='
      },
      {
        name: '淘宝',
        url: 'https://s.taobao.com/search?q='
      }
    ]
  },
  {
    type: '搜索引擎',
    list: [
      {
        name: '必应',
        url: 'https://www.bing.com/search?q='
      },
      {
        name: '谷歌',
        url: 'https://www.google.com/search?q='
      },
      {
        name: '百度',
        url: 'https://www.baidu.com/s?wd='
      },
      {
        name: '搜狗',
        url: 'https://www.sogou.com/web?query='
      },
      {
        name: '360',
        url: 'https://www.so.com/s?q='
      },
      {
        name: '神马搜索',
        url: 'https://yz.m.sm.cn/s?q='
      }
    ]
  }
])
//bing搜索
const search = (e) => {
  e.preventDefault();
  const searchText = document.getElementById('search-text').value
  window.open(`https://www.bing.com/search?q=${searchText}`)
}
const getUserInfo =async () => {
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
.labels {
  padding: 10px 20px;
  font-size: 16px;
  color: rgba(204,203,208,0.97);
}
.labels:hover {
  color: #fff;
}
label {
  display: block;
  font-size: 15px;
  text-align: center;
  font-weight: normal;
  margin-bottom: 0;
  padding: 2px 0;
  cursor: pointer;
  transition: .3s;
}
@keyframes diagonal-scroll {
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
}

.diagonal-gradient {
  background: linear-gradient(135deg, #6a0dad, #bc34d3, #3a0ca3);
  background-size: 300% 300%;;
  animation: diagonal-scroll 6s ease-in-out infinite;
}



</style>