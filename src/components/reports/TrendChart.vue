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
      borderColor: string;
      tension: number;
    }[];
  };
}>();

onMounted(() => {
  const ctx = document.getElementById('trendChart') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'line',
    data: props.data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
});
</script>

<template>
  <div class="w-full h-[300px]">
    <canvas id="trendChart"></canvas>
  </div>
</template>
```