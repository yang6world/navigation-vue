<script setup lang="ts">
import { ref, onBeforeMount, onBeforeUnmount, Ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  url: {
    type: String,
    default: 'https://weather.proxy.yserver.top/weather/'
  }
})
const emit = defineEmits(['notice'])
const isObject = (obj:unknown) => {
  return obj !== null && Object.prototype.toString.call(obj) === '[object Object]'
}
const handleSendError = (data:unknown) => {
  emit('notice', data)
}
const updating = ref(false)

const latitude = ref('')
const longitude = ref('')
const handleGetLocation = () => {
  if (typeof window !== 'undefined' && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      (result) => {
        latitude.value = result.coords.latitude.toFixed(6)
        longitude.value = result.coords.longitude.toFixed(6)
      },
      (error) => {
        switch (error.code) {
          case 0:
            handleSendError({
              type: 'warning',
              from: 'window.navigator.geolocation',
              msg: '获取位置信息出错！'
            })
            break
          case 1:
            handleSendError({
              type: 'warning',
              from: 'window.navigator.geolocation',
              msg: '阻止该页面获取位置信息！'
            })
            break
          case 2:
            handleSendError({
              type: 'warning',
              from: 'window.navigator.geolocation',
              msg: '浏览器无法确定您的位置！'
            })
            break
          case 3:
            handleSendError({
              type: 'warning',
              from: 'window.navigator.geolocation',
              msg: '获取位置信息超时！'
            })
            break
        }
      }
    )
  } else {
    handleSendError({
      type: 'warning',
      from: 'window.navigator.geolocation',
      msg: '浏览器不支持 HTML5 的定位功能！'
    })
  }
}

const weatherData:Ref<unknown> = ref(null)
const weathercode = ref('d00')
const timer:Ref<number | null> = ref(null)

const handleUpdate = () => {
  if (!updating.value) {
    updating.value = true
    timer.value && clearInterval(timer.value)
    handleGetWeather()
    timer.value = setInterval(() => {
      handleGetWeather()
    }, 30 * 60 * 1000)
  }
}
const handleGetWeather = async () => {
  const url = latitude.value && longitude.value
    ? `${props.url}?location_type=1&lat=${latitude.value}&lng=${longitude.value}&from=vmweather`
    : `${props.url}?location_type=0&from=vmweather`
  try {
    const response = await axios.get(url)
    weatherData.value = response.data.data.real_time_weather_data
    weathercode.value = isObject(response.data) ? response.data.data.real_time_weather_data.weathercode : 'd00'
    updating.value = false
  } catch (err:any) {
    updating.value = false
    console.log(`获取天气请求失败; status: ${err.response.status};`)
    handleSendError({
      type: 'error',
      from: 'axios.error',
      msg: '网络请求失败'
    })
  }
  console.log('weatherData:', weatherData.value)
}

onBeforeMount(() => {
  handleGetLocation()
  handleUpdate()
})
onBeforeUnmount(() => {
  timer.value && clearInterval(timer.value)
})
</script>

<template>
  <div class="v-weather" @click="handleUpdate"
       :style="`cursor: ${updating? 'not-allowed': 'pointer'}; user-select: none;`">
    <span v-if="updating">更新中...</span>
    <slot v-if="!updating" :weather="weatherData" :icon="weathercode"></slot>
  </div>
</template>
