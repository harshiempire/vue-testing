<script setup lang="ts">
import { ref, computed } from 'vue';
import { useNoticeStore } from '@/stores/notice';
import type { Notice, NoticeCategory } from '@/types/notice';

const noticeStore = useNoticeStore();
const activeCategory = ref<NoticeCategory>('announcement');
const showCreateModal = ref(false);
const showFilters = ref(false);

// Filter states
const selectedClass = ref<string>('all');
const dateRange = ref({
  start: '',
  end: ''
});

// Mock teacher's assigned classes
const assignedClasses = ['6A', '6B', '7A', '8A'];

const categories: { id: NoticeCategory; label: string; icon: string }[] = [
  { id: 'announcement', label: 'Announcements', icon: '📢' },
  { id: 'event', label: 'Events', icon: '📅' },
  { id: 'examination', label: 'Examination', icon: '📝' },
  { id: 'emergency', label: 'Emergency', icon: '🚨' },
  { id: 'class', label: 'Class Notices', icon: '👨‍🏫' }
];

const newNotice = ref({
  title: '',
  content: '',
  category: 'class' as NoticeCategory,
  class: '6A',
  subject: 'Mathematics',
  createdBy: {
    id: 'teacher1',
    name: 'Rohan Bhattacharya',
    role: 'Mathematics Teacher'
  }
});

const filteredNotices = computed(() => {
  let notices = noticeStore.noticesByCategory[activeCategory.value];

  if (selectedClass.value !== 'all') {
    notices = notices.filter(notice => notice.class === selectedClass.value);
  }

  if (dateRange.value.start) {
    notices = notices.filter(notice => 
      new Date(notice.createdAt) >= new Date(dateRange.value.start)
    );
  }

  if (dateRange.value.end) {
    notices = notices.filter(notice => 
      new Date(notice.createdAt) <= new Date(dateRange.value.end + 'T23:59:59')
    );
  }

  return notices;
});

const handleCreateNotice = () => {
  noticeStore.addNotice(newNotice.value);
  showCreateModal.value = false;
  newNotice.value = {
    title: '',
    content: '',
    category: 'class',
    class: '6A',
    subject: 'Mathematics',
    createdBy: {
      id: 'teacher1',
      name: 'Rohan Bhattacharya',
      role: 'Mathematics Teacher'
    }
  };
};

const clearFilters = () => {
  selectedClass.value = 'all';
  dateRange.value = {
    start: '',
    end: ''
  };
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Notice Board</h1>
        <div class="flex gap-4">
          <button 
            @click="showFilters = !showFilters"
            class="px-4 py-2 border border-[#ECECEC] bg-white text-gray-700 rounded-xl flex items-center gap-2"
          >
            <span>🔍</span>
            Filters
          </button>
          <button 
            @click="showCreateModal = true"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
          >
            Create Notice
          </button>
        </div>
      </div>

      <!-- Filters Panel -->
      <div v-if="showFilters" class="bg-white rounded-3xl border border-[#ECECEC] p-4 mb-6">
        <div class="flex items-end gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Class
            </label>
            <select
              v-model="selectedClass"
              class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
            >
              <option value="all">All Classes</option>
              <option v-for="class_ in assignedClasses" :key="class_" :value="class_">
                Class {{ class_ }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              From Date
            </label>
            <input
              v-model="dateRange.start"
              type="date"
              class="px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              To Date
            </label>
            <input
              v-model="dateRange.end"
              type="date"
              class="px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
          <button
            @click="clearFilters"
            class="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <!-- Category Tabs -->
      <div class="flex gap-4 mb-6 overflow-x-auto pb-2">
        <button
          v-for="category in categories"
          :key="category.id"
          class="px-4 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap"
          :class="activeCategory === category.id ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700'"
          @click="activeCategory = category.id"
        >
          <span>{{ category.icon }}</span>
          <span>{{ category.label }}</span>
          <span 
            class="px-2 py-0.5 text-sm rounded-lg"
            :class="activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100'"
          >
            {{ noticeStore.noticesByCategory[category.id].length }}
          </span>
        </button>
      </div>

      <!-- Notices List -->
      <div class="space-y-4">
        <div 
          v-for="notice in filteredNotices"
          :key="notice.id"
          class="bg-white rounded-3xl border border-[#ECECEC] p-6"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold">{{ notice.title }}</h3>
              <div class="flex gap-2 mt-2">
                <span class="text-sm text-gray-500">
                  By {{ notice.createdBy.name }}
                </span>
                <span class="text-sm text-gray-500">
                  {{ formatDate(notice.createdAt) }}
                </span>
              </div>
              <div v-if="notice.class" class="flex gap-2 mt-1">
                <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                  Class {{ notice.class }}
                </span>
                <span class="px-2 py-1 bg-purple-50 text-purple-700 rounded text-sm">
                  {{ notice.subject }}
                </span>
              </div>
            </div>
          </div>
          
          <p class="text-gray-600 whitespace-pre-line">{{ notice.content }}</p>
        </div>
      </div>
    </div>

    <!-- Create Notice Modal -->
    <div v-if="showCreateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-full max-w-lg">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">Create Notice</h2>
          <button 
            @click="showCreateModal = false"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              v-model="newNotice.title"
              type="text"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              placeholder="Notice title"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              v-model="newNotice.category"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            >
              <option value="class">Class Notice</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Class
            </label>
            <select
              v-model="newNotice.class"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            >
              <option v-for="class_ in assignedClasses" :key="class_" :value="class_">
                Class {{ class_ }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              v-model="newNotice.content"
              rows="4"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              placeholder="Notice content"
            ></textarea>
          </div>

          <div class="flex justify-end gap-4">
            <button
              @click="showCreateModal = false"
              class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
            >
              Cancel
            </button>
            <button
              @click="handleCreateNotice"
              class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
            >
              Create Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>