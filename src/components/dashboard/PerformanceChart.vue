<script setup lang="ts">
import { onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps<{
  stats: {
    acceptable: number;
    needsImprovement: number;
    unacceptable: number;
  }
}>();

let chart: Chart | null = null;

const createChart = () => {
  const ctx = document.getElementById('performanceChart') as HTMLCanvasElement;
  
  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Acceptable', 'Needs Improvement', 'Unacceptable'],
      datasets: [{
        data: [
          props.stats.acceptable,
          props.stats.needsImprovement,
          props.stats.unacceptable
        ],
        backgroundColor: [
          '#22C55E',
          '#EAB308',
          '#EF4444'
        ],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
};

onMounted(() => {
  createChart();
});

watch(() => props.stats, () => {
  createChart();
}, { deep: true });
</script>

<template>
  <div class="relative h-[200px]">
    <canvas id="performanceChart"></canvas>
  </div>
</template>