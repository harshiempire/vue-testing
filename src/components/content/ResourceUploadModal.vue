<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  show: boolean;
  activeTab: 'library' | 'scholastic' | 'co-scholastic';
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'upload', file: File, title: string, type: 'video' | 'pdf' | 'image'): void;
}>();

const title = ref('');
const file = ref<File | null>(null);
const type = ref<'video' | 'pdf' | 'image'>('pdf');
const subject = ref('');
const description = ref('');

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    file.value = input.files[0];
    // Auto-fill title from filename (without extension)
    title.value = input.files[0].name.replace(/\.[^/.]+$/, "");
  }
};

const handleUpload = () => {
  if (file.value && title.value) {
    emit('upload', file.value, title.value, type.value);
    resetForm();
  }
};

const resetForm = () => {
  title.value = '';
  file.value = null;
  type.value = 'pdf';
  subject.value = '';
  description.value = '';
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Upload Resource</h2>
        <button 
          @click="emit('close')"
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
            v-model="title"
            type="text"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            placeholder="Resource title"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            v-model="subject"
            type="text"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            placeholder="Subject name"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Resource Type
          </label>
          <select
            v-model="type"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
          >
            <option value="pdf">PDF Document</option>
            <option value="video">Video</option>
            <option value="image">Image</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            v-model="description"
            rows="3"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            placeholder="Resource description"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            File
          </label>
          <div 
            class="border-2 border-dashed rounded-xl p-8 text-center"
            :class="file ? 'border-green-300 bg-green-50' : 'border-gray-300 bg-gray-50'"
          >
            <div v-if="!file" class="space-y-2">
              <div class="text-4xl mb-2">📄</div>
              <p class="text-gray-600">
                Drag and drop your file here, or
                <label class="text-[#0447A8] cursor-pointer hover:underline">
                  browse
                  <input
                    type="file"
                    class="hidden"
                    @change="handleFileSelect"
                    accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.mp4,.webm,.jpg,.jpeg,.png"
                  >
                </label>
              </p>
            </div>
            <div v-else class="flex items-center justify-between">
              <div class="font-medium">{{ file.name }}</div>
              <button
                @click="file = null"
                class="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-4 mt-6">
          <button
            @click="emit('close')"
            class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
          >
            Cancel
          </button>
          <button
            @click="handleUpload"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
            :disabled="!file || !title"
          >
            Upload Resource
          </button>
        </div>
      </div>
    </div>
  </div>
</template>