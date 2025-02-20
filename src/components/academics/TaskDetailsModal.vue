<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAcademicsStore } from '@/stores/academics';
import type { Task, Evidence, Review, SelfAssessment } from '@/types/academics';
import TeacherReviewForm from './TeacherReviewForm.vue';

// Add this to your imports


// In your setup function
const assessment = ref({
  id: '',
  status: '',
  rubricScores: [],
  reflection: ''
})
const props = defineProps<{
  show: boolean;
  task: Task;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const academicsStore = useAcademicsStore();
const selectedStudent = ref<string | null>(null);
const showReviewForm = ref(false);

// Mock student data (in real app, this would come from a store)
const students = [
  { id: 'student1', name: 'Alice Johnson', rollNo: '6A01' },
  { id: 'student2', name: 'Bob Smith', rollNo: '6A02' },
  { id: 'student3', name: 'Charlie Brown', rollNo: '6A03' },
  { id: 'student4', name: 'Diana Miller', rollNo: '6A04' },
  { id: 'student5', name: 'Edward Wilson', rollNo: '6A05' }
];

const evidence = computed(() => academicsStore.getTaskEvidence(props.task.id));
const reviews = computed(() => academicsStore.getTaskReviews(props.task.id));

const getStudentEvidence = (studentId: string) => 
  evidence.value.find(e => e.studentId === studentId);

const getStudentReviews = (studentId: string) => {
  const studentReviews = reviews.value.filter(r => r.studentId === studentId);
  return {
    self: studentReviews.find(r => r.type === 'self'),
    peer: studentReviews.filter(r => r.type === 'peer'),
    teacher: studentReviews.find(r => r.type === 'teacher')
  };
};

const getSubmissionStatus = (studentId: string) => {
  const studentEvidence = getStudentEvidence(studentId);
  if (!studentEvidence) return 'Not Submitted';
  return studentEvidence.status;
};

const getStatusColor = (status: string) => {
  const colors = {
    'Not Submitted': 'red',
    'submitted': 'yellow',
    'self_reviewed': 'blue',
    'peer_reviewed': 'purple',
    'teacher_reviewed': 'green'
  };
  return colors[status as keyof typeof colors] || 'gray';
};

const handleReviewSubmit = (review: Omit<Review, 'id' | 'createdAt'>) => {
  const newReview = {
    ...review,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };
  
  academicsStore.reviews.push(newReview);
  
  // Update evidence status
  const studentEvidence = evidence.value.find(e => e.studentId === review.studentId);
  if (studentEvidence) {
    studentEvidence.status = 'teacher_reviewed';
  }
  
  showReviewForm.value = false;
  selectedStudent.value = null;
};

const handleApprove = (assessmentId: string) => {
  academicsStore.updateSelfAssessmentStatus(assessmentId, 'approved');
};

const handleReject = (assessmentId: string) => {
  academicsStore.updateSelfAssessmentStatus(assessmentId, 'rejected');
};

const getStudentSelfAssessment = (studentId: string) => {
  return academicsStore.getTaskSelfAssessment(props.task.id, studentId);
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-3xl p-6 w-full max-w-[90vw] max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-start mb-6">
        <div>
          <h2 class="text-2xl font-bold mb-2">{{ task.title }}</h2>
          <p class="text-gray-600">{{ task.description }}</p>
          <div class="mt-2 space-x-2">
            <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm">
              Due: {{ new Date(task.dueDate).toLocaleDateString() }}
            </span>
            <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm">
              Max Marks: {{ task.maxMarks }}
            </span>
          </div>
        </div>
        <button 
          @click="emit('close')"
          class="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div v-if="!showReviewForm">
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Student</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Evidence</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Self Review</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Peer Review</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Teacher Review</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="student in students" :key="student.id" class="hover:bg-gray-50">
                <td class="px-4 py-3">
                  <div class="font-medium">{{ student.name }}</div>
                  <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
                </td>
                <td class="px-4 py-3">
                  <span 
                    class="px-3 py-1 text-sm rounded-lg inline-block"
                    :class="`bg-${getStatusColor(getSubmissionStatus(student.id))}-50 
                      text-${getStatusColor(getSubmissionStatus(student.id))}-700`"
                  >
                    {{ getSubmissionStatus(student.id).replace('_', ' ') }}
                  </span>
                </td>
                <td class="px-4 py-3">
                  <div v-if="getStudentEvidence(student.id)" class="flex gap-2">
                    <a 
                      v-for="file in getStudentEvidence(student.id)?.files"
                      :key="file.name"
                      :href="file.url"
                      target="_blank"
                      class="px-2 py-1 bg-white border border-gray-200 rounded text-sm hover:bg-gray-50"
                    >
                      {{ file.name }}
                    </a>
                  </div>
                  <span v-else class="text-sm text-gray-500">No evidence submitted</span>
                </td>
                <td class="px-4 py-3">
                  <div v-if="getStudentReviews(student.id).self" class="text-sm">
                    {{ getStudentReviews(student.id).self?.feedback }}
                  </div>
                  <span v-else class="text-sm text-gray-500">No self review</span>
                </td>
                <td class="px-4 py-3">
                  <div v-if="getStudentReviews(student.id).peer.length" class="text-sm">
                    <div v-for="review in getStudentReviews(student.id).peer" :key="review.id">
                      {{ review.feedback }}
                    </div>
                  </div>
                  <span v-else class="text-sm text-gray-500">No peer reviews</span>
                </td>
                <td class="px-4 py-3">
                  <div v-if="getStudentReviews(student.id).teacher" class="text-sm">
                    <div class="font-medium">
                      Marks: {{ getStudentReviews(student.id).teacher?.marks }}
                    </div>
                    {{ getStudentReviews(student.id).teacher?.feedback }}
                  </div>
                  <span v-else class="text-sm text-gray-500">No teacher review</span>
                </td>
                <td class="px-4 py-3">
                  <button 
                    v-if="getStudentEvidence(student.id) && 
                      getSubmissionStatus(student.id) !== 'teacher_reviewed'"
                    @click="selectedStudent = student.id; showReviewForm = true"
                    class="px-3 py-1 bg-[#0447A8] text-white rounded-lg text-sm"
                  >
                    Review
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-else>
        <div class="mb-6">
          <button
            @click="showReviewForm = false"
            class="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            ← Back to Student List
          </button>
        </div>

        <TeacherReviewForm
          v-if="selectedStudent"
          :task="task"
          :evidence="getStudentEvidence(selectedStudent)!"
          :existing-reviews="getStudentReviews(selectedStudent)"
          @submit="handleReviewSubmit"
        />
      </div>

      <!-- Self Assessment Section for Co-scholastic Tasks -->
      <div v-if="task.category === 'co-scholastic'" class="mt-6">
        <h3 class="text-lg font-semibold mb-4">Student Self-Assessment</h3>
        
        <div v-for="student in students" :key="student.id" class="mb-6">
          <div class="bg-gray-50 rounded-xl p-4">
            <div class="flex justify-between items-start mb-4">
              <div>
                <div class="font-medium">{{ student.name }}</div>
                <div class="text-sm text-gray-600">{{ student.rollNo }}</div>
              </div>
              
              <div 
                v-if="getStudentSelfAssessment(student.id)"
                class="px-3 py-1 text-sm rounded-lg"
                :class="{
                  'bg-yellow-50 text-yellow-700': assessment.status === 'pending',
                  'bg-green-50 text-green-700': assessment.status === 'approved',
                  'bg-red-50 text-red-700': assessment.status === 'rejected'
                }"
              >
                {{ assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1) }}
              </div>
            </div>

            <div v-if="getStudentSelfAssessment(student.id)" class="space-y-4">
              <div v-for="score in assessment.rubricScores" :key="score.rubricId">
                <div class="font-medium">
                  {{ task.rubrics.find(r => r.id === score.rubricId)?.criterion }}
                </div>
                <div class="text-sm">
                  <div>Level: {{ score.level }}</div>
                  <div class="text-gray-600">{{ score.comment }}</div>
                </div>
              </div>

              <div>
                <div class="font-medium">Student Reflection</div>
                <div class="text-sm text-gray-600">{{ assessment.reflection }}</div>
              </div>

              <div v-if="assessment.status === 'pending'" class="flex gap-4">
                <button
                  @click="handleApprove(assessment.id)"
                  class="px-4 py-2 bg-green-600 text-white rounded-xl text-sm"
                >
                  Approve
                </button>
                <button
                  @click="handleReject(assessment.id)"
                  class="px-4 py-2 bg-red-600 text-white rounded-xl text-sm"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>