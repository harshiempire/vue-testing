<script setup lang="ts">
import { computed } from 'vue';
import { useDashboardStore } from '@/stores/dashboard';

const dashboardStore = useDashboardStore();

const notifications = computed(() => 
  dashboardStore.notifications.sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )
);

const markAsRead = (notificationId: string) => {
  const notification = dashboardStore.notifications.find(n => n.id === notificationId);
  if (notification) {
    notification.read = true;
  }
};
</script>

<template>
  <div class="space-y-4 max-h-[500px] overflow-y-auto">
    <div 
      v-for="notification in notifications"
      :key="notification.id"
      class="flex gap-3 p-3 rounded-xl transition-colors"
      :class="notification.read ? 'bg-gray-50' : 'bg-blue-50'"
    >
      <div 
        class="w-2 h-2 mt-2 rounded-full flex-shrink-0"
        :class="{
          'bg-blue-500': notification.type === 'info',
          'bg-yellow-500': notification.type === 'warning',
          'bg-green-500': notification.type === 'success'
        }"
      ></div>
      
      <div class="flex-1">
        <p 
          class="text-sm"
          :class="{ 'font-medium': !notification.read }"
        >
          {{ notification.message }}
        </p>
        <div class="mt-1 flex items-center justify-between">
          <span class="text-xs text-gray-500">
            {{ new Date(notification.timestamp).toLocaleString() }}
          </span>
          <button 
            v-if="!notification.read"
            @click="markAsRead(notification.id)"
            class="text-xs text-[#0447A8] hover:underline"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  </div>
</template>