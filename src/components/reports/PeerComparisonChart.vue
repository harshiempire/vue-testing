```vue
<script setup lang="ts">
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps<{
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
}>();

onMounted(() => {
  const ctx = document.getElementById('peerComparisonChart') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'radar',
    data: props.data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      }
    }
  });
});
</script>

<template>
  <div class="w-full h-[300px]">
    <canvas id="peerComparisonChart"></canvas>
  </div>
</template>
```