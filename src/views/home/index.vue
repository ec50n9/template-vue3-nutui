<script setup>
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template lang="pug">
div 
  NButton(@click="appStore.increment()") 当前：{{ appStore.count }}
</template>

<style scoped></style>
