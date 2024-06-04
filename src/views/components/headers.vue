<template>

  <div class="relative mb-4 diagonal-gradient">
    <div class="flex justify-between  pt-5 pl-5">
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
    <div class="s-search">
      <div class="categories">
        <div>
        <button v-for="(category, index) in categories" class="m-button" :key="index" @click="changeCategory(index)">{{
            category
          }}
        </button>
        </div>
        <div class="anchor" style="position: absolute; left: 367.5px; opacity: 1; width: 35px;"></div>
      </div>
      <div id="search" class="s-search mx-auto mt-3">
        <div class="search-box">
          <form :action="currentAction" method="get" target="_blank">
            <input id="search-text" class="" :placeholder="currentPlaceholder" style="outline:0" type="text">
            <button @click="search"><i class="iconfont icon-search"></i></button>
          </form>
        </div>
      </div>
      <div class="subcategories" style="display: block">
        <!-- 小类按钮 -->
        <button v-for="(subcategory, index) in subcategories[currentCategoryIndex]" :key="index"
                class="c-button" @click="changeSubcategory(index)">{{ subcategory.name }}
        </button>
      </div>
    </div>
  </div>

</template>
<script setup>
import vMiniWeather from '@/views/components/vMiniWeather.vue'
import vMiniWeatherIcon from '@/views/components/vMiniWeatherIcon/vMiniWeatherIcon.vue'
import {computed, defineProps, h, onMounted, ref} from 'vue'
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
const categories = ['搜索', '工具', '社区', '生活', '影视'];
const subcategories = [
  [
    {
      "name": "必应",
      "url": "https://www.bing.com/search?q=",
      "placeholder": "必应"
    },
    {
      "name": "谷歌",
      "url": "https://www.google.com/search?q=",
      "placeholder": "谷歌两下"
    },
    {
      "name": "360",
      "url": "https://www.so.com/s?q=",
      "placeholder": "360好搜"
    },
    {
      "name": "搜狗",
      "url": "https://www.sogou.com/web?query=",
      "placeholder": "搜狗搜索"
    },
    {
      "name": "磁力",
      "url": "https://p9.btapp.me/so.php?word=",
      "placeholder": "磁力搜索"
    },
    {
      "name": "神马",
      "url": "https://yz.m.sm.cn/s?q=",
      "placeholder": "神马搜索"
    }
  ],
  [
    {
      "name": "权重查询",
      "url": "https://rank.chinaz.com/all/",
      "placeholder": "请输入网址(不带https://)"
    },
    {
      "name": "友链检测",
      "url": "https://link.chinaz.com/",
      "placeholder": "请输入网址(不带https://)"
    },
    {
      "name": "备案查询",
      "url": "https://icp.chinaz.com/",
      "placeholder": "请输入网址(不带https://)"
    },
    {
      "name": "PING检测",
      "url": "https://ping.chinaz.com/",
      "placeholder": "请输入网址(不带https://)"
    },
    {
      "name": "死链检测",
      "url": "https://tool.chinaz.com/Links/?DAddress=",
      "placeholder": "请输入网址(不带https://)"
    },
    {
      "name": "关键词挖掘",
      "url": "https://www.ciku5.com/s?wd=",
      "placeholder": "请输入关键词"
    }
  ],
  [
    {
      "name": "知乎",
      "url": "https://www.zhihu.com/search?type=content&q=",
      "placeholder": "知乎"
    },
    {
      "name": "微信",
      "url": "https://weixin.sogou.com/weixin?type=2&query=",
      "placeholder": "微信"
    },
    {
      "name": "微博",
      "url": "https://s.weibo.com/weibo/",
      "placeholder": "微博"
    },
    {
      "name": "豆瓣",
      "url": "https://www.douban.com/search?q=",
      "placeholder": "豆瓣"
    },
    {
      "name": "搜外问答",
      "url": "https://ask.seowhy.com/search/?q=",
      "placeholder": "SEO问答社区"
    }
  ],

  [
    {
      "name": "淘宝",
      "url": "https://s.taobao.com/search?q=",
      "placeholder": "淘宝"
    },
    {
      "name": "京东",
      "url": "https://search.jd.com/Search?keyword=",
      "placeholder": "京东"
    },
    {
      "name": "下厨房",
      "url": "https://www.xiachufang.com/search/?keyword=",
      "placeholder": "下厨房"
    },
    {
      "name": "香哈菜谱",
      "url": "https://www.xiangha.com/so/?q=caipu&s=",
      "placeholder": "香哈菜谱"
    },
    {
      "name": "12306",
      "url": "https://www.12306.cn/?",
      "placeholder": "12306"
    },
    {
      "name": "快递100",
      "url": "https://www.kuaidi100.com/?",
      "placeholder": "快递100"
    },
    {
      "name": "去哪儿",
      "url": "https://www.qunar.com/?",
      "placeholder": "去哪儿"
    }
  ],
  [
    {
      "name": "油1",
      "url": "https://piped.hostux.net/results?search_query=",
      "placeholder": "油1"
    },
    {
      "name": "油2",
      "url": "https://watch.leptons.xyz/results?search_query=",
      "placeholder": "油2"
    },
    {
      "name": "油3",
      "url": "https://cf.piped.video/results?search_query=",
      "placeholder": "油3"
    },
    {
      "name": "油4",
      "url": "https://piped.video/results?search_query=",
      "placeholder": "油4"
    }
  ]

];
const currentCategoryIndex = ref(0);
const currentSubcategoryIndex = ref(0);

const currentAction = ref()

function changeCategory(index) {
  currentCategoryIndex.value = index;
  currentSubcategoryIndex.value = 0; // 切换大类时，默认选中第一个小类
  currentAction.value = subcategories[index][0].url
  const buttons = document.querySelectorAll('.m-button');
  buttons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('m-active');
    } else {
      button.classList.remove('m-active');
    }
  });
}



function changeSubcategory(index) {
  currentSubcategoryIndex.value = index;
  currentAction.value = subcategories[currentCategoryIndex.value][index].url
  // 使元素为选中状态
  const buttons = document.querySelectorAll('.c-button');
  buttons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}
const currentPlaceholder = computed(() => {
  return subcategories[currentCategoryIndex.value][currentSubcategoryIndex.value].placeholder;
});
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
//bing搜索
const search = (e) => {
  e.preventDefault();
  const searchText = document.getElementById('search-text')
  window.open(currentAction.value+searchText.value)
  searchText.value = ''
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
onMounted(() => {
  currentAction.value = subcategories[0][0].url
  const c_buttons = document.querySelectorAll('.c-button');
  c_buttons.forEach((button, i) => {
    if (i === 0) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  const m_buttons = document.querySelectorAll('.m-button');
  m_buttons.forEach((button, i) => {
    if (i === 0) {
      button.classList.add('m-active');
    } else {
      button.classList.remove('m-active');
    }
  });
});
getUserInfo()
</script>
<style>

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


.categories, .subcategories {
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.active:before {
  content: '';
  border-width: 8px 8px 8px 8px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.6) transparent transparent;
  position: relative;
  left: 50%;
  top: 0;
  margin-left: -8px;
}

.c-button {
  padding: 6px 10px 0px 10px;
  background-color: rgba(204, 203, 208, 0);
  border: none;
  color: #d0ccc0;
}

.c-button:hover {
  color: white;
}

/* 选中状态 */
.c-button.active {
  color: white;
}
.m-button:hover:after {
  content: '';
  width: 5px;
  height: 5px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 110%;
  left: 50%;
}

.m-button {
  padding: 0 20px;
  background-color: rgba(204, 203, 208, 0);
  border: none;
  color: #d0ccc0;
  font-size: 16px;
  text-align: center;
  font-weight: normal;
  transition: .3s;
  position: relative;

}
.m-button:hover {
  color: white;

}
.m-button.m-active {
  color: white;
}

.m-active:before{
  content: '';
  background:#fff;
  border-radius:100px;
  width:35px;
  height:5px;
  bottom:5px;
  -webkit-transition:.25s;
  transition:.25s;
  position: absolute;
  top: 110%;
}

</style>