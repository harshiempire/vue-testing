<script setup lang="ts">
import { computed } from "vue";
import DashboardCard from "@/components/dashboard/DashboardCard.vue";
import ActivityCompletionChart from "@/components/reports/ActivityCompletionChart.vue";
import PerformanceChart from "@/components/reports/PerformanceChart.vue";
import type { PerformanceChartData } from "@/types/reports";

const props = defineProps<{
  activeTab: "scholastic" | "co-scholastic" | "health" | "achievements";
}>();

// Mock class data
const classData = computed(() => ({
  scholastic: {
    activityCompletion: {
      completed: 85,
      total: 100,
      pending: 15,
    },
    eventParticipation: {
      participated: 75,
      total: 100,
    },
    subjectPerformance: {
      Mathematics: {
        average: 82,
        emergent: 5,
        transitional: 20,
        proficient: 15,
      },
      Science: {
        average: 78,
        emergent: 8,
        transitional: 18,
        proficient: 14,
      },
    },
    classPerformance: {
      acceptable: 65,
      needsImprovement: 25,
      unacceptable: 10,
    },
  },
  coScholastic: {
    participation: {
      total: 40,
      participating: 32,
      activities: [
        { name: "Dance", participants: 15 },
        { name: "Music", participants: 12 },
        { name: "Art", participants: 18 },
        { name: "Sports", participants: 25 },
      ],
    },
  },
  health: {
    bmiDistribution: {
      underweight: 5,
      normal: 25,
      overweight: 8,
      obese: 2,
    },
    wellbeingStats: {
      stressLevels: {
        low: 20,
        moderate: 15,
        high: 5,
      },
      anxietyLevels: {
        normal: 30,
        mild: 8,
        severe: 2,
      },
    },
  },
}));

const transformClassData = (
  data: typeof classData.value.scholastic.classPerformance
): PerformanceChartData => {
  return {
    labels: ["Acceptable", "Needs Improvement", "Unacceptable"],
    datasets: [
      {
        label: "Students",
        data: [data.acceptable, data.needsImprovement, data.unacceptable],
        borderColor: "#4F46E5",
        backgroundColor: "#818CF8",
      },
    ],
  };
};
</script>

<template>
  <div class="space-y-6">
    <!-- Scholastic Overview -->
    <template v-if="activeTab === 'scholastic'">
      <div class="grid grid-cols-2 gap-6">
        <!-- Activity Completion -->
        <DashboardCard title="Class Activity Completion">
          <ActivityCompletionChart
            :data="classData.scholastic.activityCompletion"
          />
        </DashboardCard>

        <!-- Performance Distribution -->
        <DashboardCard title="Class Performance Distribution">
          <PerformanceChart
            :data="transformClassData(classData.scholastic.classPerformance)"
          />
        </DashboardCard>

        <!-- Subject Performance -->
        <DashboardCard title="Subject-wise Performance">
          <div class="space-y-4">
            <div
              v-for="(data, subject) in classData.scholastic.subjectPerformance"
              :key="subject"
            >
              <div class="flex justify-between items-center mb-2">
                <div class="font-medium">{{ subject }}</div>
                <div class="text-sm text-gray-600">
                  Avg: {{ data.average }}%
                </div>
              </div>
              <div class="flex gap-2 text-sm">
                <div
                  class="flex-1 p-2 bg-red-50 text-red-700 rounded-lg text-center"
                >
                  Emergent: {{ data.emergent }}
                </div>
                <div
                  class="flex-1 p-2 bg-yellow-50 text-yellow-700 rounded-lg text-center"
                >
                  Transitional: {{ data.transitional }}
                </div>
                <div
                  class="flex-1 p-2 bg-green-50 text-green-700 rounded-lg text-center"
                >
                  Proficient: {{ data.proficient }}
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </template>

    <!-- Co-scholastic Overview -->
    <template v-else-if="activeTab === 'co-scholastic'">
      <div class="grid grid-cols-2 gap-6">
        <DashboardCard title="Activity Participation">
          <div class="space-y-4">
            <div class="text-center mb-6">
              <div class="text-3xl font-bold text-[#0447A8]">
                {{
                  Math.round(
                    (classData.coScholastic.participation.participating /
                      classData.coScholastic.participation.total) *
                      100
                  )
                }}%
              </div>
              <div class="text-sm text-gray-500">
                {{ classData.coScholastic.participation.participating }} out of
                {{ classData.coScholastic.participation.total }} students
                participating
              </div>
            </div>

            <div class="space-y-3">
              <div
                v-for="activity in classData.coScholastic.participation
                  .activities"
                :key="activity.name"
                class="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
              >
                <div class="font-medium">{{ activity.name }}</div>
                <div class="text-sm text-gray-600">
                  {{ activity.participants }} students
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </template>

    <!-- Health Overview -->
    <template v-else-if="activeTab === 'health'">
      <div class="grid grid-cols-2 gap-6">
        <!-- BMI Distribution -->
        <DashboardCard title="BMI Distribution">
          <div class="space-y-3">
            <div
              v-for="(count, category) in classData.health.bmiDistribution"
              :key="category"
              class="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
            >
              <div class="font-medium capitalize">{{ category }}</div>
              <div class="text-sm">{{ count }} students</div>
            </div>
          </div>
        </DashboardCard>

        <!-- Well-being Stats -->
        <DashboardCard title="Well-being Statistics">
          <div class="space-y-4">
            <div>
              <h3 class="font-medium mb-2">Stress Levels</h3>
              <div class="space-y-2">
                <div
                  v-for="(count, level) in classData.health.wellbeingStats
                    .stressLevels"
                  :key="level"
                  class="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                >
                  <div class="capitalize">{{ level }}</div>
                  <div>{{ count }} students</div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-medium mb-2">Anxiety Levels</h3>
              <div class="space-y-2">
                <div
                  v-for="(count, level) in classData.health.wellbeingStats
                    .anxietyLevels"
                  :key="level"
                  class="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                >
                  <div class="capitalize">{{ level }}</div>
                  <div>{{ count }} students</div>
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </template>
  </div>
</template>
