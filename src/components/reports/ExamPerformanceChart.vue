```vue
<script setup lang="ts">
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps<{
  studentScores: {
    FA1?: number;
    FA2?: number;
    SA1?: number;
    FA3?: number;
    FA4?: number;
    SA2?: number;
  };
  classAverages: {
    FA1: number;
    FA2: number;
    SA1: number;
    FA3: number;
    FA4: number;
    SA2: number;
  };
}>();

onMounted(() => {
  const ctx = document.getElementById('examPerformanceChart') as HTMLCanvasElement;
  
  const exams = ['FA1', 'FA2', 'SA1', 'FA3', 'FA4', 'SA2'];
  const studentScores = exams.map(exam => props.studentScores[exam as keyof typeof props.studentScores] || 0);
  const classAverages = exams.map(exam => props.classAverages[exam as keyof typeof props.classAverages]);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: exams,
      datasets: [
        {
          label: 'Your Score',
          data: studentScores,
          backgroundColor: '#0447A8',
          borderRadius: 6
        },
        {
          label: 'Class Average',
          data: classAverages,
          backgroundColor: '#E5E7EB',
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      },
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
});
</script>

<template>
  <div class="w-full h-[300px]">
    <canvas id="examPerformanceChart"></canvas>
  </div>
</template>
```