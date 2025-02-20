<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5]">
    <Sidebar />
    <Header />
    <RouterView />
  </div>
</template>