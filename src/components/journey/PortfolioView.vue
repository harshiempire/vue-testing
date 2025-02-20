<script setup lang="ts">
import { ref, computed } from 'vue';
import { useJourneyStore } from '@/stores/journey';
import type { Portfolio } from '@/types/journey';

const props = defineProps<{
  studentId: string;
}>();
type TabType = 'scholastic' | 'co-scholastic'

const journeyStore = useJourneyStore()
const activeTab = ref<TabType>('scholastic');
const selectedCategory = ref<string>('');

const scholasticCategories = ['Mathematics', 'Science', 'English', 'Social Studies'];
const coScholasticCategories = ['Dance', 'Music', 'Art', 'Sports'];

const portfolios = computed(() => 
  journeyStore.getPortfolioByType(props.studentId, activeTab.value)
);

const filteredPortfolio = computed(() => {
  if (!selectedCategory.value) return portfolios.value;
  return portfolios.value.filter(p => p.category === selectedCategory.value);
});
</script>

<template>
  <div class="space-y-6">
    <!-- Main Tabs -->
    <div class="flex gap-4">
      <button
        v-for="tab in ['scholastic', 'co-scholastic'] as const"
        :key="tab"
        class="px-4 py-2 rounded-xl"
        :class="activeTab === tab ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700'"
        @click="activeTab = tab"
      >
        {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
      </button>
    </div>

    <!-- Category Filter -->
    <div class="bg-white rounded-3xl border border-[#ECECEC] p-4">
      <div class="flex gap-4">
        <button
          v-for="category in activeTab === 'scholastic' ? scholasticCategories : coScholasticCategories"
          :key="category"
          class="px-3 py-1 rounded-lg text-sm"
          :class="selectedCategory === category ? 'bg-[#0447A8] text-white' : 'bg-gray-50 text-gray-700'"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Portfolio Grid -->
    <div class="grid grid-cols-3 gap-6">
      <div 
        v-for="portfolio in filteredPortfolio"
        :key="portfolio.id"
      >
        <div 
          v-for="item in portfolio.items"
          :key="item.id"
          class="bg-white rounded-3xl border border-[#ECECEC] overflow-hidden"
        >
          <div class="p-4">
            <h3 class="font-medium mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ item.description }}</p>
            <div class="text-sm text-gray-500">{{ new Date(item.date).toLocaleDateString() }}</div>

            <div v-if="item.files.length" class="mt-4">
              <div class="text-sm font-medium mb-2">Attachments</div>
              <div class="flex flex-wrap gap-2">
                <a
                  v-for="file in item.files"
                  :key="file.name"
                  :href="file.url"
                  target="_blank"
                  class="px-3 py-1 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 flex items-center gap-2"
                >
                  <span>{{ file.name }}</span>
                  <span class="text-xs text-gray-500">{{ file.type }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>