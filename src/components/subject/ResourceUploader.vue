<script setup lang="ts">
import { ref } from 'vue';
import { useDropZone } from '@vueuse/core';

const emit = defineEmits<{
  (e: 'upload', file: File, title: string, type: 'textbook' | 'notes' | 'video'): void;
}>();

const dropZone = ref<HTMLDivElement>();
const isDragging = ref(false);
const selectedFile = ref<File | null>(null);
const title = ref('');
const type = ref<'textbook' | 'notes' | 'video'>('textbook');

const { isOverDropZone } = useDropZone(dropZone, {
  onDrop: (files) => {
    if (files && files.length > 0) {
      const file = files[0];
      if (file) {
        selectedFile.value = file;
        // Auto-fill title from filename (without extension)
        title.value = file.name.replace(/\.[^/.]+$/, "");
      }
    }
  },
  onEnter: () => isDragging.value = true,
  onLeave: () => isDragging.value = false
});

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    selectedFile.value = input.files[0];
    title.value = input.files[0].name.replace(/\.[^/.]+$/, "");
  }
};

const handleUpload = () => {
  if (selectedFile.value && title.value) {
    emit('upload', selectedFile.value, title.value, type.value);
    // Reset form
    selectedFile.value = null;
    title.value = '';
    type.value = 'textbook';
  }
};
</script>

<template>
  <div class="space-y-4">
    <!-- Drag & Drop Zone -->
    <div
      ref="dropZone"
      class="border-2 border-dashed rounded-xl p-8 text-center transition-colors"
      :class="{
        'border-gray-300 bg-gray-50': !isOverDropZone,
        'border-blue-400 bg-blue-50': isOverDropZone
      }"
    >
      <div class="space-y-2">
        <div class="text-4xl mb-2">📄</div>
        <p class="text-gray-600">
          Drag and drop your file here, or
          <label class="text-[#0447A8] cursor-pointer hover:underline">
            browse
            <input
              type="file"
              class="hidden"
              @change="handleFileSelect"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.mp4,.webm"
            >
          </label>
        </p>
        <p class="text-sm text-gray-500">
          Supported files: PDF, DOC, PPTX, XLS, TXT, MP4
        </p>
      </div>
    </div>

    <!-- Selected File Info -->
    <div v-if="selectedFile" class="bg-white rounded-xl border p-4 space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <div class="font-medium">Selected File:</div>
          <div class="text-sm text-gray-600">{{ selectedFile.name }}</div>
        </div>
        <button
          @click="selectedFile = null"
          class="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>

      <div class="space-y-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Resource Title
          </label>
          <input
            v-model="title"
            type="text"
            class="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter resource title"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Resource Type
          </label>
          <select
            v-model="type"
            class="w-full px-3 py-2 border rounded-lg"
          >
            <option value="textbook">Textbook</option>
            <option value="notes">Notes</option>
            <option value="video">Video</option>
          </select>
        </div>

        <button
          @click="handleUpload"
          :disabled="!title"
          class="w-full px-4 py-2 bg-[#0447A8] text-white rounded-xl disabled:opacity-50"
        >
          Upload Resource
        </button>
      </div>
    </div>
  </div>
</template>