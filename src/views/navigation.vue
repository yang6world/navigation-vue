<script setup>
import {h, nextTick, onMounted, onUnmounted, ref} from "vue";
import {NIcon, NLayout, NLayoutSider, NMenu, NTooltip} from "naive-ui";
import headers from "@/views/components/headers.vue";
import yserver from "@/views/components/icon/yserver.vue"
import yserverLong from "@/views/components/icon/yserverLong.vue"
import axios from "axios";


function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

const loading = ref(true)
setTimeout(function () {
  loading.value = false
}, 1000);
const websites = ref([
  {
    title: "常用推荐",
    websites: [
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },


    ]
  },
  {
    title: "组织应用",
    websites: [
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
      {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      }, {
        title: "GitHub",
        description: "全球最大同性交友网站",
        url: "https://github.com/",
        icon: "/ico/github.png"
      },
    ]
  }
]);

const getWebsites = async () => {
  loading.value = true;
  try {
    websites.value = await axios.get('/api/websites');
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const collapsed = ref(true)
const handleCollapsedUpdate = (newCollapsed) => {
  collapsed.value = newCollapsed;
}
const menuOptions = ref(websites.value.map((website) => {
  return {
    label: website.title,
    icon: () => h('i', {class: 'iconfont icon-shoucang icon-fw icon-lg '}),
    key: website.title,
  }
}))
const sectionRefs = ref({});
const topRef = ref(null);
const setRef = (title) => {
  return (el) => {
    if (el) sectionRefs.value[title] = el;
  };
};

const onMenuSelect = (value) => {
  nextTick(() => {
    const section = sectionRefs.value[value];
    console.log(section);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  });
};
const backTop = () => {
  topRef.value.scrollIntoView({behavior: 'smooth'});
};
const isMobile = ref(window.innerWidth < 768);  // 假设移动端断点为 768px

function updateMobileStatus() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  window.addEventListener('resize', updateMobileStatus);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateMobileStatus);
});
</script>

<template>
  <transition name="fade">
    <div v-if="loading" class="loading">
      <div class="loader">Yserver</div>
    </div>
    <div v-else>

      <n-layout has-sider>
        <n-layout-sider
            :collapsed="collapsed"
            :collapsed-width="64"
            :width="240"
            bordered
            collapse-mode="width"
            show-trigger
            @collapse="collapsed = true"
            @expand="collapsed = false"
            fixed
            v-if="!isMobile"


        >
          <div style="padding: 20px 10px 20px 10px">
            <yserver v-if="collapsed"/>
            <yserver-long v-if="collapsed  !==true"/>
          </div>
          <n-menu
              :collapsed="collapsed"
              :collapsed-icon-size="22"
              :collapsed-width="64"
              :options="menuOptions"
              @update:value="onMenuSelect"
          />
        </n-layout-sider>
        <n-layout class="overflow-auto bg-slate-100">
          <div ref="topRef">
            <headers style="height: 230px" v-model:collapsed="collapsed" @update:collapsed="handleCollapsedUpdate"/>
            <div class="ml-6 mr-6 ">
              <div v-for="website in websites" :key="website.title" :ref="setRef(website.title)">
                <div class="d-flex flex-fill ">
                  <h4 class="text-gray text-lg mb-4">
                    <i id="term-2" class="site-tag iconfont icon-tag icon-lg mr-1 "></i>
                    {{ website.title }}
                  </h4>
                  <div class="flex-fill"></div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  <div v-for="item in website.websites" :key="item.title"
                       class="card transform transition-transform hover:scale-105 hover:shadow-2xl description">
                    <n-tooltip placement="bottom" trigger="hover">
                      <template #trigger>
                        <div class="p-4 bg-white rounded-lg shadow flex description">
                          <a :href="item.url" class="block hover:text-red description" rel="noopener noreferrer"
                             target="_blank">
                            <div class="flex items-center space-x-2">
                              <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                                <img :src="item.icon" alt="GitHub" class="w-full h-full">
                              </div>
                              <div class="flex-grow description">
                                <div class="text-sm font-bold truncate">
                                  {{ item.title }}
                                </div>
                                <p class="m-0 text-xs text-gray-600 truncate description">{{ item.description }}</p>
                              </div>
                            </div>
                          </a>
                          <a :href="item.url" class="togo block text-center text-gray-600 hover:text-gray-800"
                             rel="nofollow" title="直达">
                            <i class="iconfont icon-goto"></i>
                          </a>
                        </div>
                      </template>
                      <span>{{ item.description }}</span>
                    </n-tooltip>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </n-layout>
      </n-layout>

      <div class="flex flex-col items-center" id="footer-tools">
        <a @click="backTop" class="btn rounded-full p-2 m-1 cursor-pointer" rel="go-top">
          <i class="iconfont icon-to-up"></i>
        </a>
        <a href="javascript:" class="btn rounded-full p-2 m-1 cursor-pointer" title="夜间模式">
          <i class="mode-ico iconfont icon-yejian icon-night"></i>
        </a>
      </div>

    </div>

  </transition>

</template>

<style scoped>
.n-layout {
  height: 100vh;

}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0; /* 重要：允许在 flex 容器中缩小 */
  flex-shrink: 1; /* 允许元素根据容器大小缩小 */
}

.n-layout-sider {
  height: 100vh;
}

a {
  text-decoration: none;
  color: black;
}

.togo {
  position: absolute;
  top: 20px;
  right: 0;
  width: 30px;
  height: 30px;
  line-height: 30px;
  opacity: .2;
  transition: opacity .3s;

}

.togo:hover {
  opacity: 1;
}

.loader {
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: helvetica, arial, sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  color: #f1404b;
  letter-spacing: 0.2em
}

.loader::before,
.loader::after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  background: #f1404b;
  position: absolute;
  animation: load .7s infinite alternate ease-in-out
}

.loader::before {
  top: 0
}

.loader::after {
  bottom: 0
}

@keyframes load {
  0% {
    left: 0;
    height: 30px;
    width: 15px
  }

  50% {
    height: 8px;
    width: 40px
  }

  100% {
    left: 235px;
    height: 30px;
    width: 15px
  }
}
</style>
