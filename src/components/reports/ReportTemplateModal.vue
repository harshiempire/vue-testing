<script setup lang="ts">
import { ref, computed } from "vue";
import html2pdf from "html2pdf.js";
import logoSrc from "@/assets/logo.svg";
import ExamPerformanceChart from "./ExamPerformanceChart.vue";
import SubjectPerformanceChart from "./SubjectPerformanceChart.vue";

const props = defineProps<{
  show: boolean;
  type: "student" | "class";
  data: any;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const selectedTemplate = ref("standard");
const showHeader = ref(true);
const showLogo = ref(true);
const showFooter = ref(true);
const showCharts = ref(true);
const orientation = ref<"portrait" | "landscape">("portrait");

const templates = [
  {
    id: "standard",
    name: "Standard Template",
    description: "Clean and professional layout with all details",
  },
  {
    id: "minimal",
    name: "Minimal Template",
    description: "Simplified layout focusing on key metrics",
  },
  {
    id: "detailed",
    name: "Detailed Template",
    description: "Comprehensive layout with extended information",
  },
];

// Prepare exam data for charts
const examData = computed(() => {
  if (!props.data?.scholastic?.examScores) return null;

  const subjects = Object.keys(props.data.scholastic.examScores);
  const exams = ["FA1", "FA2", "SA1", "FA3", "FA4", "SA2"];

  const studentScores = {};
  const classAverages = {
    FA1: 0, // Make sure all fields have default values
    FA2: 0,
    SA1: 0,
    FA3: 0,
    FA4: 0,
    SA2: 0,
  };

  exams.forEach((exam) => {
    let totalStudent = 0;
    let totalClass = 0;

    subjects.forEach((subject) => {
      totalStudent += props.data.scholastic.examScores[subject][exam] || 0;
      totalClass += props.data.scholastic.classAverages[subject][exam] || 0;
    });

    studentScores[exam] = totalStudent / subjects.length;
    classAverages[exam] = totalClass / subjects.length;
  });

  return {
    studentScores,
    classAverages,
  };
});

// Prepare subject data for charts
const subjectData = computed(() => {
  if (!props.data?.scholastic?.examScores) return null;

  const subjects = Object.keys(props.data.scholastic.examScores);
  const exams = ["FA1", "FA2", "SA1", "FA3", "FA4", "SA2"];

  const studentScores = subjects.map((subject) => {
    const total = exams.reduce(
      (sum, exam) =>
        sum + (props.data.scholastic.examScores[subject][exam] || 0),
      0
    );
    return total / exams.length;
  });

  const classAverages = subjects.map((subject) => {
    const total = exams.reduce(
      (sum, exam) =>
        sum + (props.data.scholastic.classAverages[subject][exam] || 0),
      0
    );
    return total / exams.length;
  });

  return {
    subjects,
    studentScores,
    classAverages,
  };
});

const generatePDF = () => {
  const element = document.getElementById("report-preview");
  if (!element) return;

  const opt = {
    margin: 1,
    filename: `${props.type}-report.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "in",
      format: orientation.value === "portrait" ? "a4" : "a4",
      orientation: orientation.value,
    },
  };

  html2pdf().set(opt).from(element).save();
};
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-3xl p-6 w-full max-w-6xl h-[90vh] flex gap-6">
      <!-- Settings Panel -->
      <div class="w-80 border-r border-gray-200 pr-6 overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">Report Settings</h2>
          <button
            @click="emit('close')"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div class="space-y-6">
          <!-- Template Selection -->
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">
              Select Template
            </h3>
            <div class="space-y-2">
              <div
                v-for="template in templates"
                :key="template.id"
                class="border rounded-xl p-4 cursor-pointer transition-colors"
                :class="
                  selectedTemplate === template.id
                    ? 'border-[#0447A8] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                "
                @click="selectedTemplate = template.id"
              >
                <div class="font-medium">{{ template.name }}</div>
                <div class="text-sm text-gray-600">
                  {{ template.description }}
                </div>
              </div>
            </div>
          </div>

          <!-- Layout Options -->
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">
              Layout Options
            </h3>
            <div class="space-y-3">
              <label class="flex items-center gap-2">
                <input
                  v-model="showHeader"
                  type="checkbox"
                  class="rounded text-[#0447A8]"
                />
                <span>Show Header</span>
              </label>
              <label class="flex items-center gap-2">
                <input
                  v-model="showLogo"
                  type="checkbox"
                  class="rounded text-[#0447A8]"
                />
                <span>Show School Logo</span>
              </label>
              <label class="flex items-center gap-2">
                <input
                  v-model="showFooter"
                  type="checkbox"
                  class="rounded text-[#0447A8]"
                />
                <span>Show Footer</span>
              </label>
              <label class="flex items-center gap-2">
                <input
                  v-model="showCharts"
                  type="checkbox"
                  class="rounded text-[#0447A8]"
                />
                <span>Include Charts</span>
              </label>
            </div>
          </div>

          <!-- Page Settings -->
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">
              Page Settings
            </h3>
            <div class="space-y-3">
              <div>
                <label class="block text-sm mb-1">Orientation</label>
                <select
                  v-model="orientation"
                  class="w-full px-3 py-2 border border-gray-200 rounded-lg"
                >
                  <option value="portrait">Portrait</option>
                  <option value="landscape">Landscape</option>
                </select>
              </div>
            </div>
          </div>

          <button
            @click="generatePDF"
            class="w-full px-4 py-2 bg-[#0447A8] text-white rounded-xl"
          >
            Download PDF
          </button>
        </div>
      </div>

      <!-- Preview Panel -->
      <div class="flex-1 overflow-y-auto">
        <div class="bg-white shadow-lg max-w-[21cm] mx-auto">
          <div id="report-preview" class="p-8">
            <!-- Header -->
            <div v-if="showHeader" class="text-center mb-8">
              <div v-if="showLogo" class="mb-4">
                <img :src="logoSrc" alt="School Logo" class="h-16 mx-auto" />
              </div>
              <h1 class="text-2xl font-bold">Delhi Public School</h1>
              <p class="text-gray-600">Excellence in Education</p>
              <div class="text-sm text-gray-600 mt-2">
                <div>UDICE: 123456789012</div>
                <div>APAR Code: DL1234</div>
              </div>
            </div>

            <!-- Report Title -->
            <div class="text-center mb-6">
              <h2 class="text-xl font-bold">
                {{
                  props.type === "student"
                    ? "Student Progress Report"
                    : "Class Performance Report"
                }}
              </h2>
              <div class="text-sm text-gray-600">Academic Year 2023-24</div>
            </div>

            <!-- Report Content -->
            <div class="space-y-8">
              <!-- Student/Class Info -->
              <div
                v-if="props.type === 'student'"
                class="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div>
                  <div class="text-sm text-gray-600">Name</div>
                  <div class="font-medium">{{ data.name }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-600">Class</div>
                  <div class="font-medium">{{ data.class }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-600">Roll Number</div>
                  <div class="font-medium">{{ data.rollNo }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-600">Section</div>
                  <div class="font-medium">{{ data.section }}</div>
                </div>
              </div>

              <!-- Scholastic Section -->
              <div class="space-y-6">
                <h3 class="text-xl font-bold border-b pb-2">
                  Scholastic Performance
                </h3>

                <!-- Charts -->
                <div
                  v-if="showCharts && examData && subjectData"
                  class="space-y-6"
                >
                  <div v-if="props.type === 'student'">
                    <h3 class="font-bold mb-4">Academic Performance</h3>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="aspect-[4/3] bg-white shadow rounded-lg p-4">
                        <ExamPerformanceChart
                          :student-scores="examData.studentScores"
                          :class-averages="examData.classAverages"
                        />
                      </div>
                      <div class="aspect-[4/3] bg-white shadow rounded-lg p-4">
                        <SubjectPerformanceChart
                          :subjects="subjectData.subjects"
                          :student-scores="subjectData.studentScores"
                          :class-averages="subjectData.classAverages"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Detailed Scores -->
                <div class="space-y-4">
                  <h4 class="font-bold">Examination Scores</h4>
                  <table class="w-full">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="px-4 py-2 text-left">Subject</th>
                        <th class="px-4 py-2 text-center">FA1</th>
                        <th class="px-4 py-2 text-center">FA2</th>
                        <th class="px-4 py-2 text-center">SA1</th>
                        <th class="px-4 py-2 text-center">FA3</th>
                        <th class="px-4 py-2 text-center">FA4</th>
                        <th class="px-4 py-2 text-center">SA2</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      <tr
                        v-for="subject in Object.keys(
                          data.scholastic?.examScores || {}
                        )"
                        :key="subject"
                      >
                        <td class="px-4 py-2">{{ subject }}</td>
                        <td
                          v-for="exam in [
                            'FA1',
                            'FA2',
                            'SA1',
                            'FA3',
                            'FA4',
                            'SA2',
                          ]"
                          :key="exam"
                          class="px-4 py-2 text-center"
                        >
                          {{
                            data.scholastic?.examScores[subject][exam] || "-"
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Activity Performance -->
                <div class="space-y-4">
                  <h4 class="font-bold">Activity Performance</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div
                      v-for="(subjectData, subject) in data.scholastic
                        ?.subjectPerformance"
                      :key="subject"
                      class="p-4 bg-gray-50 rounded-xl"
                    >
                      <div class="font-medium mb-2">{{ subject }}</div>
                      <div class="space-y-2">
                        <div
                          v-for="activity in subjectData.activities"
                          :key="activity.name"
                          class="flex justify-between text-sm"
                        >
                          <span>{{ activity.name }}</span>
                          <span
                            >{{ activity.score }}% ({{
                              activity.timeSpent
                            }}
                            min)</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Co-scholastic Section -->
              <div class="space-y-6">
                <h3 class="text-xl font-bold border-b pb-2">
                  Co-scholastic Performance
                </h3>

                <!-- Activities -->
                <div class="space-y-4">
                  <h4 class="font-bold">Activities & Achievements</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div
                      v-for="activity in data.coScholastic?.activities"
                      :key="activity.name"
                      class="p-4 bg-gray-50 rounded-xl"
                    >
                      <div class="flex justify-between items-center mb-2">
                        <div class="font-medium">{{ activity.name }}</div>
                        <div
                          class="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm"
                        >
                          {{ activity.level }}
                        </div>
                      </div>
                      <div class="space-y-1 text-sm text-gray-600">
                        <div
                          v-for="achievement in activity.achievements"
                          :key="achievement"
                        >
                          • {{ achievement }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Badges -->
                <div class="space-y-4">
                  <h4 class="font-bold">Badges Earned</h4>
                  <div class="grid grid-cols-3 gap-4">
                    <div
                      v-for="badge in data.coScholastic?.badges"
                      :key="badge.name"
                      class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <div class="text-2xl">{{ badge.icon }}</div>
                      <div>
                        <div class="font-medium">{{ badge.name }}</div>
                        <div class="text-sm text-gray-600">
                          {{ new Date(badge.date).toLocaleDateString() }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Health Section -->
              <div class="space-y-6">
                <h3 class="text-xl font-bold border-b pb-2">Health Report</h3>

                <!-- Health Profile -->
                <div class="space-y-4">
                  <h4 class="font-bold">Health Profile</h4>
                  <div class="grid grid-cols-3 gap-4">
                    <div
                      v-for="(value, key) in data.health?.profile"
                      :key="key"
                      class="p-3 bg-gray-50 rounded-xl"
                    >
                      <div class="text-sm text-gray-600 capitalize">
                        {{ key }}
                      </div>
                      <div class="font-medium">
                        {{ Array.isArray(value) ? value.join(", ") : value }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Well-being -->
                <div class="space-y-4">
                  <h4 class="font-bold">Well-being Assessment</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div
                      v-for="(value, metric) in data.health?.wellbeing"
                      :key="metric"
                      class="flex justify-between items-center p-3 bg-gray-50 rounded-xl"
                    >
                      <div class="font-medium capitalize">
                        {{
                          String(metric)
                            .replace(/([A-Z])/g, " $1")
                            .trim()
                        }}
                      </div>
                      <div
                        class="px-2 py-1 rounded-lg text-sm"
                        :class="{
                          'bg-green-50 text-green-700':
                            value === 'Low' ||
                            value === 'Normal' ||
                            value === 'Positive',
                          'bg-yellow-50 text-yellow-700': value === 'Moderate',
                          'bg-red-50 text-red-700':
                            value === 'High' || value === 'Negative',
                        }"
                      >
                        {{ value }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Health Screenings -->
                <div class="space-y-4">
                  <h4 class="font-bold">Health Screenings</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div
                      v-for="screening in data.health?.screenings"
                      :key="screening.type"
                      class="p-3 bg-gray-50 rounded-xl"
                    >
                      <div class="flex justify-between items-center">
                        <div>
                          <div class="font-medium">{{ screening.type }}</div>
                          <div class="text-sm text-gray-600">
                            {{ new Date(screening.date).toLocaleDateString() }}
                          </div>
                        </div>
                        <div
                          class="px-2 py-1 rounded-lg text-sm"
                          :class="{
                            'bg-green-50 text-green-700':
                              screening.result === 'Normal' ||
                              screening.result === 'Good',
                            'bg-yellow-50 text-yellow-700':
                              screening.result === 'Fair',
                            'bg-red-50 text-red-700':
                              screening.result === 'Poor',
                          }"
                        >
                          {{ screening.result }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Achievements Section -->
              <div class="space-y-6">
                <h3 class="text-xl font-bold border-b pb-2">Achievements</h3>

                <!-- Scholastic Achievements -->
                <div class="space-y-4">
                  <h4 class="font-bold">Scholastic Achievements</h4>
                  <div class="space-y-3">
                    <div
                      v-for="achievement in data.achievements?.scholastic"
                      :key="achievement.title"
                      class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <div class="text-2xl">{{ achievement.badge }}</div>
                      <div>
                        <div class="font-medium">{{ achievement.title }}</div>
                        <div class="text-sm text-gray-600 mt-1">
                          {{ achievement.description }}
                        </div>
                        <div class="text-sm text-gray-500 mt-1">
                          {{ new Date(achievement.date).toLocaleDateString() }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Co-scholastic Achievements -->
                <div class="space-y-4">
                  <h4 class="font-bold">Co-scholastic Achievements</h4>
                  <div class="space-y-3">
                    <div
                      v-for="achievement in data.achievements?.coScholastic"
                      :key="achievement.title"
                      class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <div class="text-2xl">{{ achievement.badge }}</div>
                      <div>
                        <div class="font-medium">{{ achievement.title }}</div>
                        <div class="text-sm text-gray-600 mt-1">
                          {{ achievement.description }}
                        </div>
                        <div class="text-sm text-gray-500 mt-1">
                          {{ new Date(achievement.date).toLocaleDateString() }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div v-if="showFooter" class="mt-8 pt-8 border-t">
              <div class="flex justify-between text-sm text-gray-600">
                <div>Generated on {{ new Date().toLocaleDateString() }}</div>
                <div>Page 1 of 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
