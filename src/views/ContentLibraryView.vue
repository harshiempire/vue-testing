<script setup lang="ts">
import { ref, computed } from 'vue';
import { useContentStore, type Resource } from '@/stores/content';
import { useSubjectStore } from '@/stores/subject';
import ResourceUploadModal from '@/components/content/ResourceUploadModal.vue';

const contentStore = useContentStore();
const subjectStore = useSubjectStore();

const activeTab = ref<'library' | 'scholastic' | 'co-scholastic'>('library');
const selectedSubject = ref<string>('all');
const selectedType = ref<'all' | 'video' | 'pdf' | 'image'>('all');
const selectedSource = ref<'all' | 'global' | 'teacher'>('all');
const selectedSubCategory = ref<'all' | 'visual-arts' | 'performance-arts'>('all');
const showUploader = ref(false);
const selectedResource = ref<Resource | null>(null);

const showPopularSection = computed(() => activeTab.value === 'library');

// Mock user ID for likes functionality
const currentUserId = 'user1';

const filteredResources = computed(() => {
  const filters: any = {};
  
  if (selectedSubject.value !== 'all') {
    filters.subject = selectedSubject.value;
  }
  
  if (selectedType.value !== 'all') {
    filters.type = selectedType.value;
  }
  
  if (selectedSource.value !== 'all') {
    filters.source = selectedSource.value;
  }

  if (activeTab.value === 'library') {
    // Show all resources in library tab
  } else if (activeTab.value === 'scholastic') {
    filters.category = 'academic';
  } else {
    filters.category = 'co-scholastic';
    if (selectedSubCategory.value !== 'all') {
      filters.subCategory = selectedSubCategory.value;
    }
  }

  return contentStore.filterResources(filters);
});

const mostViewedResources = computed(() => contentStore.getMostViewed());
const mostLikedResources = computed(() => contentStore.getMostLiked());

const handleResourceUpload = async (file: File, title: string, type: 'video' | 'pdf' | 'image') => {
  // In a real application, you would upload the file to a server here
  const fakeUrl = URL.createObjectURL(file);
  
  contentStore.addResource({
    title,
    type,
    url: fakeUrl,
    subject: 'Mathematics', // This would come from selected subject
    source: 'teacher',
    thumbnail: type === 'video' ? 'https://placehold.co/400x225' : undefined,
    category: activeTab.value === 'co-scholastic' ? 'co-scholastic' : 'academic',
    subCategory: activeTab.value === 'co-scholastic' ? selectedSubCategory.value as any : undefined
  });
  
  showUploader.value = false;
};

const openResource = (resource: Resource) => {
  selectedResource.value = resource;
  contentStore.incrementViews(resource.id);
};

const closeResource = () => {
  selectedResource.value = null;
};

const toggleLike = (resource: Resource) => {
  contentStore.toggleLike(resource.id, currentUserId);
};

const isLiked = (resource: Resource) => {
  return resource.likedBy.includes(currentUserId);
};
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Content Library</h1>
        <button 
          @click="showUploader = true"
          class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
        >
          Upload Resource
        </button>
      </div>

      <!-- Tabs -->
      <div class="flex gap-4 mb-6">
        <button
          v-for="tab in ['library', 'scholastic', 'co-scholastic'] as const"
          :key="tab"
          class="px-4 py-2 rounded-xl"
          :class="activeTab === tab ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700'"
          @click="activeTab = tab"
        >
          {{ tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-') }}
        </button>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-3xl border border-[#ECECEC] p-4 mb-6">
        <div class="flex gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              v-model="selectedSubject"
              class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
            >
              <option value="all">All Subjects</option>
              <option v-for="subject in contentStore.subjects" :key="subject" :value="subject">
                {{ subject }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              v-model="selectedType"
              class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
            >
              <option value="all">All Types</option>
              <option value="video">Videos</option>
              <option value="pdf">PDFs</option>
              <option value="image">Images</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Source
            </label>
            <select
              v-model="selectedSource"
              class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
            >
              <option value="all">All Sources</option>
              <option value="global">Global</option>
              <option value="teacher">Teacher Uploads</option>
            </select>
          </div>

          <div v-if="activeTab === 'co-scholastic'">
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              v-model="selectedSubCategory"
              class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
            >
              <option value="all">All Categories</option>
              <option value="visual-arts">Visual Arts</option>
              <option value="performance-arts">Performance Arts</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Popular Resources - Only show in Library tab -->
      <div v-if="showPopularSection" class="grid grid-cols-2 gap-6 mb-6">
        <div class="bg-white rounded-3xl border border-[#ECECEC] p-4">
          <h3 class="font-medium mb-4">Most Viewed Resources</h3>
          <div class="space-y-2">
            <div 
              v-for="resource in mostViewedResources" 
              :key="resource.id"
              class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              @click="openResource(resource)"
            >
              <div class="flex items-center gap-2">
                <span class="text-sm">{{ resource.title }}</span>
                <span 
                  class="px-2 py-0.5 text-xs rounded-lg"
                  :class="{
                    'bg-blue-50 text-blue-700': resource.type === 'video',
                    'bg-red-50 text-red-700': resource.type === 'pdf',
                    'bg-green-50 text-green-700': resource.type === 'image'
                  }"
                >
                  {{ resource.type }}
                </span>
                <span 
                  v-if="resource.category"
                  class="px-2 py-0.5 text-xs rounded-lg"
                  :class="{
                    'bg-purple-50 text-purple-700': resource.category === 'academic',
                    'bg-orange-50 text-orange-700': resource.category === 'co-scholastic'
                  }"
                >
                  {{ resource.category === 'academic' ? 'Scholastic' : 'Co-Scholastic' }}
                </span>
              </div>
              <div class="text-sm text-gray-600">{{ resource.views }} views</div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-[#ECECEC] p-4">
          <h3 class="font-medium mb-4">Most Liked Resources</h3>
          <div class="space-y-2">
            <div 
              v-for="resource in mostLikedResources" 
              :key="resource.id"
              class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              @click="openResource(resource)"
            >
              <div class="flex items-center gap-2">
                <span class="text-sm">{{ resource.title }}</span>
                <span 
                  class="px-2 py-0.5 text-xs rounded-lg"
                  :class="{
                    'bg-blue-50 text-blue-700': resource.type === 'video',
                    'bg-red-50 text-red-700': resource.type === 'pdf',
                    'bg-green-50 text-green-700': resource.type === 'image'
                  }"
                >
                  {{ resource.type }}
                </span>
                <span 
                  v-if="resource.category"
                  class="px-2 py-0.5 text-xs rounded-lg"
                  :class="{
                    'bg-purple-50 text-purple-700': resource.category === 'academic',
                    'bg-orange-50 text-orange-700': resource.category === 'co-scholastic'
                  }"
                >
                  {{ resource.category === 'academic' ? 'Scholastic' : 'Co-Scholastic' }}
                </span>
              </div>
              <div class="text-sm text-gray-600">{{ resource.likes }} likes</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resource Grid -->
      <div class="grid grid-cols-4 gap-6">
        <div 
          v-for="resource in filteredResources"
          :key="resource.id"
          class="bg-white rounded-3xl border border-[#ECECEC] overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div 
            v-if="resource.thumbnail" 
            class="aspect-video bg-gray-100 cursor-pointer"
            @click="openResource(resource)"
          >
            <img :src="resource.thumbnail" :alt="resource.title" class="w-full h-full object-cover" />
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between gap-2">
              <h3 
                class="font-medium cursor-pointer hover:text-[#0447A8]"
                @click="openResource(resource)"
              >
                {{ resource.title }}
              </h3>
              <div class="flex flex-wrap gap-1">
                <span 
                  class="px-2 py-1 text-xs rounded-lg"
                  :class="{
                    'bg-blue-50 text-blue-700': resource.type === 'video',
                    'bg-red-50 text-red-700': resource.type === 'pdf',
                    'bg-green-50 text-green-700': resource.type === 'image'
                  }"
                >
                  {{ resource.type.toUpperCase() }}
                </span>
                <span 
                  v-if="activeTab === 'library' && resource.category"
                  class="px-2 py-1 text-xs rounded-lg"
                  :class="{
                    'bg-purple-50 text-purple-700': resource.category === 'academic',
                    'bg-orange-50 text-orange-700': resource.category === 'co-scholastic'
                  }"
                >
                  {{ resource.category === 'academic' ? 'Scholastic' : 'Co-Scholastic' }}
                </span>
              </div>
            </div>
            <div v-if="resource.description" class="mt-2 text-sm text-gray-600 line-clamp-2">
              {{ resource.description }}
            </div>
            <div class="mt-2 text-sm text-gray-600">
              <div class="flex items-center gap-1">
                <span>👤</span>
                <span>{{ resource.uploadedBy.name }}</span>
              </div>
              <div class="flex items-center gap-1">
                <span>🏫</span>
                <span>{{ resource.uploadedBy.school }}</span>
              </div>
            </div>
            <div class="mt-2 flex items-center justify-between text-sm text-gray-500">
              <div>{{ new Date(resource.uploadedAt).toLocaleDateString() }}</div>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1">
                  <span>👁</span>
                  <span>{{ resource.views }}</span>
                </div>
                <button 
                  class="flex items-center gap-1 hover:text-red-500"
                  @click="toggleLike(resource)"
                >
                  <span>{{ isLiked(resource) ? '❤️' : '🤍' }}</span>
                  <span>{{ resource.likes }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resource Upload Modal -->
      <ResourceUploadModal
        v-if="showUploader"
        :show="showUploader"
        :active-tab="activeTab"
        @upload="handleResourceUpload"
        @close="showUploader = false"
      />

      <!-- Resource Viewer -->
      <div v-if="selectedResource" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-3xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div class="flex justify-between items-start mb-6">
            <div>
              <h2 class="text-xl font-bold">{{ selectedResource.title }}</h2>
              <div class="text-sm text-gray-600">{{ selectedResource.subject }}</div>
              <div class="mt-2 flex items-center gap-4 text-sm">
                <div class="flex items-center gap-1">
                  <span>👁</span>
                  <span>{{ selectedResource.views }} views</span>
                </div>
                <button 
                  class="flex items-center gap-1 hover:text-red-500"
                  @click="toggleLike(selectedResource)"
                >
                  <span>{{ isLiked(selectedResource) ? '❤️' : '🤍' }}</span>
                  <span>{{ selectedResource.likes }} likes</span>
                </button>
              </div>
            </div>
            <button 
              @click="closeResource"
              class="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div class="space-y-4">
            <!-- PDF Viewer -->
            <iframe
              v-if="selectedResource.type === 'pdf'"
              :src="selectedResource.url"
              class="w-full h-[70vh] border rounded-lg"
            ></iframe>

            <!-- Video Player -->
            <video
              v-else-if="selectedResource.type === 'video'"
              :src="selectedResource.url"
              controls
              class="w-full rounded-lg"
            ></video>

            <!-- Image Viewer -->
            <img
              v-else-if="selectedResource.type === 'image'"
              :src="selectedResource.url"
              :alt="selectedResource.title"
              class="w-full rounded-lg"
            />

            <div v-if="selectedResource.description" class="text-gray-600">
              {{ selectedResource.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>