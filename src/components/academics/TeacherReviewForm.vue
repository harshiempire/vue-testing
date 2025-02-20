<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Task, Review, Evidence, RubricScore } from '@/types/academics';

const props = defineProps<{
  task: Task;
  evidence: Evidence;
  existingReviews: {
    self?: Review;
    peer: Review[];
    teacher?: Review;
  };
}>();

const emit = defineEmits<{
  (e: 'submit', review: Omit<Review, 'id' | 'createdAt'>): void;
}>();

const feedback = ref('');
const rubricScores = ref<RubricScore[]>(
  props.task.rubrics.map(rubric => ({
    rubricId: rubric.id,
    level: 0,
    comment: ''
  }))
);

const totalMarks = computed(() => {
  return rubricScores.value.reduce((total, score) => {
    const rubric = props.task.rubrics.find(r => r.id === score.rubricId);
    if (!rubric) return total;
    const level = rubric.levels.find(l => l.level === score.level);
    return total + (level?.marks || 0);
  }, 0);
});

const submitReview = () => {
  emit('submit', {
    taskId: props.task.id,
    studentId: props.evidence.studentId,
    reviewerId: 'teacher1', // This would come from auth context
    marks: totalMarks.value,
    feedback: feedback.value,
    type: 'teacher',
    rubricScores: rubricScores.value
  });
};

const taxonomyColors = {
  remember: 'blue',
  understand: 'green',
  apply: 'yellow',
  analyze: 'orange',
  evaluate: 'purple',
  create: 'red'
};
</script>

<template>
  <div class="space-y-6">
    <!-- Previous Reviews Section -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div v-if="existingReviews.self" class="bg-gray-50 rounded-xl p-4">
        <h4 class="font-medium mb-2">Self Review</h4>
        <p class="text-sm text-gray-600">{{ existingReviews.self.feedback }}</p>
      </div>
      <div v-if="existingReviews.peer.length > 0" class="bg-gray-50 rounded-xl p-4">
        <h4 class="font-medium mb-2">Peer Reviews</h4>
        <div class="space-y-2">
          <div 
            v-for="review in existingReviews.peer" 
            :key="review.id"
            class="text-sm text-gray-600"
          >
            {{ review.feedback }}
          </div>
        </div>
      </div>
    </div>

    <!-- Rubrics Table -->
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-4 py-3 text-left font-medium text-gray-700">Criterion</th>
            <th class="px-4 py-3 text-left font-medium text-gray-700">Taxonomy Level</th>
            <th class="px-4 py-3 text-left font-medium text-gray-700">Weightage</th>
            <th class="px-4 py-3 text-left font-medium text-gray-700">Level Selection</th>
            <th class="px-4 py-3 text-left font-medium text-gray-700">Comments</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="rubric in task.rubrics" :key="rubric.id">
            <td class="px-4 py-3">
              <div class="font-medium">{{ rubric.criterion }}</div>
            </td>
            <td class="px-4 py-3">
              <span 
                class="inline-block px-2 py-1 text-xs rounded"
                :class="`bg-${taxonomyColors[rubric.taxonomyLevel]}-50 
                  text-${taxonomyColors[rubric.taxonomyLevel]}-700`"
              >
                {{ rubric.taxonomyLevel.charAt(0).toUpperCase() + rubric.taxonomyLevel.slice(1) }}
              </span>
            </td>
            <td class="px-4 py-3 text-sm">
              {{ rubric.weightage }}%
            </td>
            <td class="px-4 py-3">
              <div class="space-y-2">
                <div 
                  v-for="level in rubric.levels" 
                  :key="level.level"
                  class="flex items-start gap-2"
                >
                  <input
                    type="radio"
                    :name="`rubric-${rubric.id}`"
                    :value="level.level"
                    v-model="rubricScores.find(score => score.rubricId === rubric.id)!.level"
                    class="mt-1"
                  />
                  <div class="text-sm">
                    <div class="font-medium">Level {{ level.level }} ({{ level.marks }} marks)</div>
                    <p class="text-gray-600">{{ level.description }}</p>
                  </div>
                </div>
              </div>
            </td>
            <td class="px-4 py-3">
              <textarea
                v-model="rubricScores.find(score => score.rubricId === rubric.id)!.comment"
                rows="2"
                class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                placeholder="Add specific feedback..."
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Overall Feedback -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block font-medium mb-2">Overall Feedback</label>
        <textarea
          v-model="feedback"
          rows="4"
          class="w-full px-4 py-2 border border-gray-200 rounded-xl"
          placeholder="Provide overall feedback..."
        ></textarea>
      </div>
      <div class="flex flex-col justify-end">
        <div class="text-lg font-medium mb-4">
          Total Marks: {{ totalMarks }} / {{ task.maxMarks }}
        </div>
        <button
          @click="submitReview"
          class="px-4 py-2 bg-[#0447A8] text-white rounded-xl w-full"
        >
          Submit Review
        </button>
      </div>
    </div>
  </div>
</template>