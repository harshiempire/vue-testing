```vue
<script setup lang="ts">
import { computed } from 'vue';
import { useSubjectStore } from '@/stores/subject';
import { useAcademicsStore } from '@/stores/academics';

const props = defineProps<{
  studentId: string;
  subject: string;
}>();

const subjectStore = useSubjectStore();
const academicsStore = useAcademicsStore();

const student = computed(() => 
  subjectStore.students.find(s => s.id === props.studentId)
);

const examScores = computed(() => {
  if (!student.value) return null;
  return {
    FA1: student.value.scores.FA1 || '-',
    FA2: student.value.scores.FA2 || '-',
    SA1: student.value.scores.SA1 || '-',
    FA3: student.value.scores.FA3 || '-',
    FA4: student.value.scores.FA4 || '-',
    SA2: student.value.scores.SA2 || '-'
  };
});

const getLevel = (score: number) => {
  if (score >= 90) return { label: 'Advanced', color: 'green' };
  if (score >= 75) return { label: 'Proficient', color: 'blue' };
  return { label: 'Beginner', color: 'yellow' };
};

const attendance = {
  present: 85,
  total: 95,
  percentage: Math.round((85 / 95) * 100)
};

const healthProfile = {
  height: '145 cm',
  weight: '35 kg',
  bmi: '16.6',
  bloodGroup: 'B+',
  vision: 'Normal'
};
</script>

<template>
  <div v-if="student" class="space-y-8">
    <!-- School Header -->
    <div class="text-center space-y-2">
      <h1 class="text-2xl font-bold">Delhi Public School</h1>
      <div class="text-sm text-gray-600">
        <div>UDICE: 123456789012</div>
        <div>APAR Code: DL1234</div>
      </div>
    </div>

    <!-- Student Info -->
    <div class="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
      <div>
        <div class="text-sm text-gray-600">Name</div>
        <div class="font-medium">{{ student.name }}</div>
      </div>
      <div>
        <div class="text-sm text-gray-600">Roll Number</div>
        <div class="font-medium">{{ student.rollNo }}</div>
      </div>
    </div>

    <!-- Health Profile -->
    <div class="border rounded-xl p-4">
      <h3 class="font-medium mb-4">Health Profile</h3>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(value, key) in healthProfile" :key="key">
          <div class="text-sm text-gray-600">{{ key }}</div>
          <div class="font-medium">{{ value }}</div>
        </div>
      </div>
    </div>

    <!-- Attendance -->
    <div class="border rounded-xl p-4">
      <h3 class="font-medium mb-4">Attendance Summary</h3>
      <div class="flex items-center gap-8">
        <div class="flex-1">
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="h-full bg-[#0447A8]"
              :style="{ width: `${attendance.percentage}%` }"
            ></div>
          </div>
        </div>
        <div class="text-right">
          <div class="font-medium">{{ attendance.percentage }}%</div>
          <div class="text-sm text-gray-600">
            {{ attendance.present }}/{{ attendance.total }} days
          </div>
        </div>
      </div>
    </div>

    <!-- Scholastic Areas -->
    <div class="border rounded-xl p-4">
      <h3 class="font-medium mb-4">Scholastic Areas</h3>
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Exam</th>
            <th class="px-4 py-2 text-center text-sm font-medium text-gray-700">Marks</th>
            <th class="px-4 py-2 text-center text-sm font-medium text-gray-700">Grade</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="(score, exam) in examScores" :key="exam">
            <td class="px-4 py-2">{{ exam }}</td>
            <td class="px-4 py-2 text-center">{{ score }}</td>
            <td class="px-4 py-2">
              <div class="flex justify-center">
                <span 
                  v-if="score !== '-'"
                  class="px-2 py-1 text-sm rounded-lg"
                  :class="{
                    'bg-green-50 text-green-700': getLevel(Number(score)).color === 'green',
                    'bg-blue-50 text-blue-700': getLevel(Number(score)).color === 'blue',
                    'bg-yellow-50 text-yellow-700': getLevel(Number(score)).color === 'yellow'
                  }"
                >
                  {{ getLevel(Number(score)).label }}
                </span>
                <span v-else>-</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Co-Scholastic Areas -->
    <div class="border rounded-xl p-4">
      <h3 class="font-medium mb-4">Co-Scholastic Areas</h3>
      <div class="space-y-4">
        <div v-for="activity in ['Art & Craft', 'Music', 'Physical Education']" :key="activity">
          <div class="flex justify-between items-center">
            <div>{{ activity }}</div>
            <div class="flex gap-1">
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span class="text-gray-300">⭐️</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Remarks -->
    <div class="border rounded-xl p-4">
      <h3 class="font-medium mb-4">Teacher's Remarks</h3> ```vue
      <div class="text-gray-600">
        Shows consistent improvement in academic performance. Demonstrates strong analytical skills and active participation in class activities. Needs to focus more on time management during examinations.
      </div>
    </div>

    <!-- Footer -->
    <div class="flex justify-between items-center pt-8 border-t">
      <div class="text-sm text-gray-600">
        Generated on {{ new Date().toLocaleDateString() }}
      </div>
      <div class="text-sm text-gray-600">
        Class Teacher's Signature
      </div>
    </div>
  </div>
</template>
```