```vue
<script setup lang="ts">
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps<{
  subjects: string[];
  studentScores: number[];
  classAverages: number[];
}>();

onMounted(() => {
  const ctx = document.getElementById('subjectPerformanceChart') as HTMLCanvasElement;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: props.subjects,
      datasets: [
        {
          label: 'Your Score',
          data: props.studentScores,
          backgroundColor: '#0447A8',
          borderRadius: 6
        },
        {
          label: 'Class Average',
          data: props.classAverages,
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
    <canvas id="subjectPerformanceChart"></canvas>
  </div>
</template>
```