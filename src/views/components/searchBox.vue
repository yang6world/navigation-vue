
<template>
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
    <div id="search" class="mx-auto mt-3">
      <div class="search-box" style="margin: 0 6px">
        <form :action="currentAction" method="get" target="_blank">
          <input v-model="searchText" ref="searchTextInput" class="search-text" :placeholder="currentPlaceholder" style="outline:0" type="text">
          <button @click="search"><i class="iconfont icon-search"></i></button>
        </form>
      </div>
      <div class="suggest-card search-smart-tips" ref="searchSuggestBox" style="display: none">
        <ul>
          <li  @mousedown.prevent v-for="item in searchSuggest" @click="selectSuggest(item.Txt)">{{item.Txt}}</li>
        </ul>
      </div>
    </div>
    <div class="subcategories" style="display: block">
      <!-- 小类按钮 -->
      <button v-for="(subcategory, index) in subcategories[currentCategoryIndex]" :key="index"
              class="c-button" @click="changeSubcategory(index)">{{ subcategory.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import {computed,  onMounted, ref, watch} from 'vue'


const searchText = ref('')
const searchSuggest = ref([])
const searchTextInput = ref(null);
const searchSuggestBox = ref(null);

const emit = defineEmits(['update:collapsed']);

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



const search = (e) => {
  e.preventDefault();
  window.open(currentAction.value+searchText.value)
  searchText.value = ''
}
const getSuggestion = () => {
  // 移除之前的 JSONP 回调函数
  if (window.bing && window.bing.sug) {
    delete window.bing.sug;
  }

  // 创建 JSONP 回调函数
  window.bing = {
    sug: (data) => {
      searchSuggest.value = data.AS.Results.flatMap(result => result.Suggests);
      console.log(searchSuggest.value);
    }
  };

  // 创建 script 标签
  const script = document.createElement('script');
  script.src = `https://api.bing.com/qsonhs.aspx?type=cb&q=${searchText.value}&cb=window.bing.sug`;

  // 添加错误处理
  script.onerror = () => {
    console.error('获取搜索建议失败');
  };

  // 将 script 标签添加到 DOM 中
  document.body.appendChild(script);

  // 清理旧的 script 标签
  script.onload = () => {
    document.body.removeChild(script);
  };
}

watch(searchText, () => {
  getSuggestion()


});
const selectSuggest = (text) => {
  console.log(text);
  searchText.value = text;
}
onMounted(() => {
  getSuggestion()
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
  //如果鼠标焦点在搜索框内，显示搜索建议
  searchTextInput.value.addEventListener('focus', () => {
    searchSuggestBox.value.style.display = 'block';
  });
//如果鼠标焦点不在搜索框内，隐藏搜索建议
  searchTextInput.value.addEventListener('blur', () => {
    searchSuggestBox.value.style.display = 'none';
  });
});
</script>

<style>
.search-smart-tips {
  width: unset;
  left: 20px;
  right: 20px;
  position: absolute;
  z-index: 20;
  overflow: hidden;
}
.suggest-card {
  top:80px;
  background: #fff;
  border-width: 0;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 20px -5px rgba(158,158,158,.2);
  transition: background-color .3s;
  text-align: left;
}
.suggest-card {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}

.search-smart-tips ul li {
  line-height: 30px;
  font-size: 14px;
  padding: 0px 20px;
  cursor: pointer;
  list-style: none;
  transition: .3s;
  animation: showIn 1s;
}
@keyframes showIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.search-smart-tips ul li:hover, .search-smart-tips ul li.current {
  background-color: rgba(130,130,130,.5);
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
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
#search {
  max-width: 800px;
  position: relative;
  justify-content: center;
  text-align: center;
}

#search form {
  position: relative;
  display: flex;

}

.s-search{
  width: unset;
}

.search-text {
  border-radius: 50px;
  color: #fff;
  border: 1px solid rgba(255,255,255,.05);
  padding: 9px 20px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(0,0,0,0.6)!important;
  width: 100%;
  height: 30px;
}

#search button {
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: 0!important;
  width: unset;
  height: unset;
  margin: 0 10px;
  line-height: 50px;
  border-radius: 3px;
  font-size: inherit;
}

#search button:hover {
  cursor: pointer
}

#search button i {
  color: #fff;
  font-size: 18px
}
</style>