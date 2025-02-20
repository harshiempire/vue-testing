```vue
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import logoSrc from '@/assets/logo.svg';

const route = useRoute();
const activeRoute = computed(() => route.path);

const navigationItems = [
  {
    section: 'OVERALL',
    items: [
      { name: 'Dashboard', icon: '📊', route: '/' }
    ]
  },
  {
    section: 'EDUCATION CENTER',
    items: [
      { name: 'Subject Management', icon: '📚', route: '/subjects' },
      { name: 'Academics', icon: '🎓', route: '/academics' },
      { name: 'Reports', icon: '📈', route: '/reports' },
      { name: 'Academic Calendar', icon: '🗓', route: '/calendar' },
      { name: 'Academic Journey', icon: '🚀', route: '/journey' },
      { name: 'QB Generation', icon: '📝', route: '/qb' },
      { name: 'Notice Board', icon: '📢', route: '/notices' },
      { name: 'Content Library', icon: '📂', route: '/library' },
      { name: 'CPD', icon: '🎯', route: '/cpd' },
      { name: 'Parent Teacher Meeting', icon: '👨‍🏫', route: '/ptm' }
    ]
  },
  {
    section: 'SYSTEM PREFERENCE',
    items: [
      { name: 'Settings', icon: '⚙', route: '/settings' },
      { name: 'Help', icon: '❓', route: '/help' },
      { name: 'Logout', icon: '🚪', route: '/logout' }
    ]
  }
];
</script>

<template>
  <aside class="w-64 h-screen bg-white border-r border-[#ECECEC] fixed left-0 top-0">
    <div class="p-6">
      <div class="mb-8">
        <img :src="logoSrc" alt="LMS Logo" class="h-8" />
      </div>
      
      <nav>
        <div v-for="section in navigationItems" :key="section.section" class="mb-6">
          <h3 class="text-xs font-semibold text-gray-500 mb-2">{{ section.section }}</h3>
          <ul class="space-y-2">
            <li v-for="item in section.items" :key="item.name">
              <a 
                :href="item.route"
                class="flex items-center px-4 py-2 text-sm rounded-xl transition-colors"
                :class="activeRoute === item.route ? 'bg-blue-50 text-[#0447A8]' : 'text-gray-700 hover:bg-gray-50'"
              >
                <span class="mr-3">{{ item.icon }}</span>
                <span class="truncate">{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>
```