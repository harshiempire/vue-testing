<script setup lang="ts">
import { computed } from "vue";
import DashboardCard from "@/components/dashboard/DashboardCard.vue";
import ExamPerformanceChart from "@/components/reports/ExamPerformanceChart.vue";
import SubjectPerformanceChart from "@/components/reports/SubjectPerformanceChart.vue";
import type { ExamScores } from "@/types/reports";

const props = defineProps<{
  studentId: string;
  activeTab: "scholastic" | "co-scholastic" | "health" | "achievements";
}>();

const defaultClassAverages = {
  FA1: 0,
  FA2: 0,
  SA1: 0,
  FA3: 0,
  FA4: 0,
  SA2: 0,
};

// Mock student data - In real app, this would come from a store
const studentData = computed(() => ({
  id: props.studentId,
  scholastic: {
    examScores: {
      Mathematics: {
        FA1: 85,
        FA2: 78,
        SA1: 92,
        FA3: 88,
        FA4: 82,
        SA2: 90,
      },
      Science: {
        FA1: 75,
        FA2: 82,
        SA1: 88,
        FA3: 85,
        FA4: 80,
        SA2: 87,
      },
      English: {
        FA1: 88,
        FA2: 85,
        SA1: 90,
        FA3: 92,
        FA4: 87,
        SA2: 91,
      },
    },
    classAverages: {
      Mathematics: {
        FA1: 75,
        FA2: 73,
        SA1: 78,
        FA3: 76,
        FA4: 75,
        SA2: 80,
      },
      Science: {
        FA1: 72,
        FA2: 75,
        SA1: 76,
        FA3: 78,
        FA4: 74,
        SA2: 77,
      },
      English: {
        FA1: 76,
        FA2: 78,
        SA1: 80,
        FA3: 82,
        FA4: 79,
        SA2: 83,
      },
    },
    activityCompletion: {
      completed: 15,
      total: 20,
      pending: 5,
    },
    subjectPerformance: {
      Mathematics: {
        average: 85,
        level: "Proficient",
        activities: [
          { name: "Activity 1", score: 90, timeSpent: 45 },
          { name: "Activity 2", score: 85, timeSpent: 30 },
        ],
      },
      Science: {
        average: 78,
        level: "Transitional",
        activities: [
          { name: "Activity 1", score: 75, timeSpent: 50 },
          { name: "Activity 2", score: 80, timeSpent: 40 },
        ],
      },
    },
    eventParticipation: [
      { name: "Science Fair", date: "2024-02-15", performance: "Winner" },
      { name: "Math Olympiad", date: "2024-03-01", performance: "Runner-up" },
    ],
  },
  coScholastic: {
    activities: [
      {
        name: "Classical Dance",
        level: "Advanced",
        achievements: ["Best Performer"],
      },
      {
        name: "Chess Club",
        level: "Intermediate",
        achievements: ["Tournament Winner"],
      },
    ],
    badges: [
      { name: "Creative Genius", icon: "🎨", date: "2024-02-10" },
      { name: "Team Player", icon: "🤝", date: "2024-03-01" },
    ],
  },
  health: {
    profile: {
      height: "155 cm",
      weight: "45 kg",
      bmi: 18.7,
      bloodGroup: "B+",
      allergies: ["None"],
    },
    wellbeing: {
      stressLevel: "Low",
      anxietyLevel: "Normal",
      mood: "Positive",
      lastAssessment: "2024-03-01",
    },
    screenings: [
      { type: "Vision", result: "Normal", date: "2024-02-15" },
      { type: "Dental", result: "Good", date: "2024-02-15" },
      { type: "Hearing", result: "Normal", date: "2024-02-15" },
    ],
  },
  achievements: {
    scholastic: [
      {
        title: "Mathematics Olympiad Winner",
        date: "2024-02-15",
        badge: "🏆",
        description: "First place in regional mathematics competition",
      },
    ],
    coScholastic: [
      {
        title: "Best Classical Dance Performance",
        date: "2024-03-01",
        badge: "🎭",
        description: "Outstanding performance in annual cultural fest",
      },
    ],
  },
}));

// Calculate overall exam averages
const examAverages = computed<{
  student: Partial<ExamScores>;
  class: Partial<ExamScores>;
}>(() => {
  const subjects = Object.keys(studentData.value.scholastic.examScores);
  const exams = ["FA1", "FA2", "SA1", "FA3", "FA4", "SA2"] as const;

  return exams.reduce(
    (acc, exam) => {
      // Calculate student's average across all subjects for this exam
      const studentTotal = subjects.reduce(
        (sum, subject) =>
          sum + (studentData.value.scholastic.examScores[subject][exam] || 0),
        0
      );
      const studentAvg = studentTotal / subjects.length;

      // Calculate class average across all subjects for this exam
      const classTotal = subjects.reduce(
        (sum, subject) =>
          sum +
          (studentData.value.scholastic.classAverages[subject][exam] || 0),
        0
      );
      const classAvg = classTotal / subjects.length;

      return {
        student: { ...acc.student, [exam]: studentAvg },
        class: { ...acc.class, [exam]: classAvg },
      };
    },
    { student: {}, class: {} } as {
      student: Partial<ExamScores>;
      class: Partial<ExamScores>;
    }
  );
});

// Calculate subject-wise averages
const subjectAverages = computed(() => {
  const subjects = Object.keys(studentData.value.scholastic.examScores);
  const exams = ["FA1", "FA2", "SA1", "FA3", "FA4", "SA2"];

  return {
    subjects,
    studentScores: subjects.map((subject) => {
      const total = exams.reduce(
        (sum, exam) =>
          sum + (studentData.value.scholastic.examScores[subject][exam] || 0),
        0
      );
      return total / exams.length;
    }),
    classAverages: subjects.map((subject) => {
      const total = exams.reduce(
        (sum, exam) =>
          sum +
          (studentData.value.scholastic.classAverages[subject][exam] || 0),
        0
      );
      return total / exams.length;
    }),
  };
});
</script>

<template>
  <div class="space-y-6">
    <!-- Scholastic Report -->
    <template v-if="activeTab === 'scholastic'">
      <div class="grid grid-cols-2 gap-6">
        <!-- Overall Exam Performance -->
        <DashboardCard title="Overall Exam Performance">
          <ExamPerformanceChart
            :student-scores="examAverages.student"
            :class-averages="examAverages.class as ExamScores"
          />
        </DashboardCard>

        <!-- Subject-wise Performance -->
        <DashboardCard title="Subject-wise Performance">
          <SubjectPerformanceChart
            :subjects="subjectAverages.subjects"
            :student-scores="subjectAverages.studentScores"
            :class-averages="subjectAverages.classAverages"
          />
        </DashboardCard>

        <!-- Activity Completion -->
        <DashboardCard title="Activity Completion">
          <div class="text-center mb-4">
            <div class="text-3xl font-bold text-[#0447A8]">
              {{
                Math.round(
                  (studentData.scholastic.activityCompletion.completed /
                    studentData.scholastic.activityCompletion.total) *
                    100
                )
              }}%
            </div>
            <div class="text-sm text-gray-600">
              {{ studentData.scholastic.activityCompletion.completed }} of
              {{ studentData.scholastic.activityCompletion.total }} activities
              completed
            </div>
          </div>
        </DashboardCard>

        <!-- Activity Details -->
        <DashboardCard title="Activity Performance">
          <div class="space-y-4">
            <div
              v-for="subject in Object.keys(
                studentData.scholastic.subjectPerformance
              )"
              :key="subject"
            >
              <h3 class="font-medium mb-2">{{ subject }}</h3>
              <div class="space-y-2">
                <div
                  v-for="activity in studentData.scholastic.subjectPerformance[
                    subject
                  ].activities"
                  :key="activity.name"
                  class="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                >
                  <div class="text-sm">{{ activity.name }}</div>
                  <div class="flex items-center gap-4 text-sm">
                    <span>Score: {{ activity.score }}%</span>
                    <span>Time: {{ activity.timeSpent }} min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>

        <!-- Event Participation -->
        <DashboardCard title="Event Participation">
          <div class="space-y-3">
            <div
              v-for="event in studentData.scholastic.eventParticipation"
              :key="event.name"
              class="p-3 bg-gray-50 rounded-xl"
            >
              <div class="font-medium">{{ event.name }}</div>
              <div class="flex justify-between items-center mt-1 text-sm">
                <div class="text-gray-600">
                  {{ new Date(event.date).toLocaleDateString() }}
                </div>
                <div class="text-[#0447A8]">{{ event.performance }}</div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </template>

    <!-- Co-scholastic Report -->
    <template v-else-if="activeTab === 'co-scholastic'">
      <div class="grid grid-cols-2 gap-6">
        <!-- Activities -->
        <DashboardCard title="Activities & Achievements">
          <div class="space-y-4">
            <div
              v-for="activity in studentData.coScholastic.activities"
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
              <div class="space-y-1">
                <div
                  v-for="achievement in activity.achievements"
                  :key="achievement"
                  class="text-sm text-gray-600"
                >
                  • {{ achievement }}
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>

        <!-- Badges -->
        <DashboardCard title="Badges Earned">
          <div class="space-y-3">
            <div
              v-for="badge in studentData.coScholastic.badges"
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
        </DashboardCard>
      </div>
    </template>

    <!-- Health Report -->
    <template v-else-if="activeTab === 'health'">
      <div class="grid grid-cols-2 gap-6">
        <!-- Health Profile -->
        <DashboardCard title="Health Profile">
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(value, key) in studentData.health.profile"
              :key="key"
              class="p-3 bg-gray-50 rounded-xl"
            >
              <div class="text-sm text-gray-600">{{ key }}</div>
              <div class="font-medium">{{ value }}</div>
            </div>
          </div>
        </DashboardCard>

        <!-- Well-being -->
        <DashboardCard title="Well-being Assessment">
          <div class="space-y-4">
            <div
              v-for="(value, metric) in studentData.health.wellbeing"
              :key="metric"
              class="flex justify-between items-center p-3 bg-gray-50 rounded-xl"
            >
              <div class="font-medium">{{ metric }}</div>
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
        </DashboardCard>

        <!-- Health Screenings -->
        <DashboardCard title="Health Screenings">
          <div class="space-y-3">
            <div
              v-for="screening in studentData.health.screenings"
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
                    'bg-yellow-50 text-yellow-700': screening.result === 'Fair',
                    'bg-red-50 text-red-700': screening.result === 'Poor',
                  }"
                >
                  {{ screening.result }}
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </template>

    <!-- Achievements Report -->
    <template v-else>
      <div class="grid grid-cols-2 gap-6">
        <!-- Scholastic Achievements -->
        <DashboardCard title="Scholastic Achievements">
          <div class="space-y-4">
            <div
              v-for="achievement in studentData.achievements.scholastic"
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
        </DashboardCard>

        <!-- Co-scholastic Achievements -->
        <DashboardCard title="Co-scholastic Achievements">
          <div class="space-y-4">
            <div
              v-for="achievement in studentData.achievements.coScholastic"
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
        </DashboardCard>
      </div>
    </template>
  </div>
</template>
