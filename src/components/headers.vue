<template>

  <div class="relative mb-4 diagonal-gradient">
    <div class="flex pt-20px pl-20px">
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
    <div class="s-search">
      <div id="search" class="s-search mx-auto">
        <div id="search-list-menu" class="hide-type-list">
          <div class="s-type text-center">
            <div class="s-type-list big">
              <div class="anchor" style="position: absolute; left: 87.5px; opacity: 1; width: 35px;"></div>
              <label class="" data-id="group-a">
                <span>常用</span>
              </label>
              <label data-id="group-b">
                <span>搜索</span>
              </label>
              <label data-id="group-c">
                <span>工具</span>
              </label>
              <label data-id="group-d">
                <span>社区</span>
              </label>
              <label data-id="group-e">
                <span>生活</span>
              </label>
            </div>
          </div>
        </div>
        <form action="https://www.bing.com/search?q=" method="get" target="_blank" class="super-search-fm">
          <input type="text" id="search-text" class="form-control smart-tips search-key" placeholder="必应" style="outline:0" autocomplete="off">
          <button type="submit"><i class="iconfont icon-search"></i></button>
        </form>
        <div id="search-list" class="hide-type-list">
          <div class="search-group">
            <ul class="search-type">
              <li><input checked="checked" hidden="" type="radio" name="type" id="type-baidu" value="https://www.bing.com/search?q=" data-placeholder="必应"><label for="type-baidu"><span class="text-muted">必应</span></label></li>
              <li><input hidden="" type="radio" name="type" id="type-google" value="https://www.google.com/search?q=" data-placeholder="谷歌两下"><label for="type-google"><span class="text-muted">谷歌</span></label></li>
              <li><input hidden="" type="radio" name="type" id="type-zhannei" value="https://www.423down.com/?s=" data-placeholder="软件搜索"><label for="type-zhannei"><span class="text-muted">软件</span></label></li>
              <li><input hidden="" type="radio" name="type" id="type-taobao" value="https://s.taobao.com/search?q=" data-placeholder="淘宝"><label for="type-taobao"><span class="text-muted">淘宝</span></label></li>
              <li><input hidden="" type="radio" name="type" id="type-bing" value="https://www.cupfox.com/search?key=" data-placeholder="影视资源聚合搜索"><label for="type-bing"><span class="text-muted">影视</span></label></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>

</template>
<script setup>
import { vMiniWeather, vMiniWeatherIcon } from 'vue3-mini-weather'
import {defineProps, ref} from 'vue'
const props = defineProps({
  collapsed: { type: Boolean, required: true }
})
const emit = defineEmits(['update:collapsed']);

const openMenu = () => {
  emit('update:collapsed', !props.collapsed);
}
const searchBar = ref({

})
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



</style>