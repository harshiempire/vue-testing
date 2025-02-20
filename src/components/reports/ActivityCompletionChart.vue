```vue
<script setup lang="ts">
import { onMounted, computed } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps<{
  data: {
    completed: number;
    pending: number;
    total: number;
  };
}>();

const percentage = computed(() => 
  Math.round((props.data.completed / props.data.total) * 100)
);

onMounted(() => {
  const ctx = document.getElementById('completionChart') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Completed', 'Pending'],
      datasets: [{
        data: [props.data.completed, props.data.pending],
        backgroundColor: ['#0447A8', '#E5E7EB']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      cutout: '70%'
    }
  });
});
</script>

<template>
  <div class="relative w-full h-[300px]">
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center">
        <div class="text-3xl font-bold text-[#0447A8]">{{ percentage }}%</div>
        <div class="text-sm text-gray-500">Completed</div>
      </div>
    </div>
    <canvas id="completionChart"></canvas>
  </div>
</template>
```