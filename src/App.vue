<template>
  <n-config-provider :locale="zhCN" :theme="darkTheme" >
    <n-global-style />
    <n-message-provider>
      <n-dialog-provider>
            <router-view/>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import {NMessageProvider, NConfigProvider, NGlobalStyle, NDialogProvider} from 'naive-ui';
import { darkTheme, zhCN } from 'naive-ui';
import {computed, onMounted} from 'vue';


</script>

