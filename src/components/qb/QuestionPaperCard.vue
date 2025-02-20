<script setup lang="ts">
import type { QuestionPaper } from '@/types/qb';

defineProps<{
  paper: QuestionPaper;
}>();

const emit = defineEmits<{
  (e: 'edit'): void;
  (e: 'preview'): void;
  (e: 'download'): void;
  (e: 'publish'): void;
}>();
</script>

<template>
  <div class="bg-white rounded-3xl border border-[#ECECEC] p-6">
    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 class="text-xl font-semibold">{{ paper.title }}</h3>
        <div class="flex gap-2 mt-2">
          <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm">
            Class {{ paper.class }}
          </span>
          <span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm">
            {{ paper.subject }}
          </span>
        </div>
      </div>
      <div class="text-right">
        <div class="text-lg font-medium">{{ paper.totalMarks }} Marks</div>
        <div class="text-sm text-gray-600">{{ paper.duration }} minutes</div>
      </div>
    </div>

    <div class="flex justify-end gap-4">
      <button
        @click="emit('publish')"
        class="px-4 py-2 border border-[#ECECEC] text-green-600 rounded-xl"
      >
        Publish
      </button>
      <button
        @click="emit('edit')"
        class="px-4 py-2 border border-[#ECECEC] text-[#0447A8] rounded-xl"
      >
        Edit
      </button>
      <button
        @click="emit('preview')"
        class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
      >
        Preview
      </button>
      <button
        @click="emit('download')"
        class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
      >
        Download
      </button>
    </div>
  </div>
</template>