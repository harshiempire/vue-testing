<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, ref } from 'vue';
import Chart from 'chart.js/auto';

// Define Props
const props = defineProps<{
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}>();

// Chart.js instance & Canvas reference
const chartInstance = ref<Chart | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

// Function to Initialize Chart
const createChart = () => {
  if (canvasRef.value) {
    // Destroy existing chart to prevent duplicates
    if (chartInstance.value) {
      chartInstance.value.destroy();
    }

    chartInstance.value = new Chart(canvasRef.value, {
      type: 'bar',
      data: props.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });
  }
};

// Create Chart on Mount
onMounted(() => {
  createChart();
});

// Watch for Data Changes & Update Chart
watch(
  () => props.data,
  () => {
    createChart();
  },
  { deep: true }
);

// Destroy Chart on Unmount to Prevent Memory Leaks
onBeforeUnmount(() => {
  if (chartInstance.value) {
    chartInstance.value.destroy();
  }
});
</script>

<template>
  <div class="w-full h-[300px]">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>
