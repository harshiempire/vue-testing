import { onMounted, onBeforeUnmount, watch, ref } from 'vue';
import Chart from 'chart.js/auto';
const props = defineProps();
// Chart.js instance & Canvas reference
const chartInstance = ref(null);
const canvasRef = ref(null);
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
watch(() => props.data, () => {
    createChart();
}, { deep: true });
// Destroy Chart on Unmount to Prevent Memory Leaks
onBeforeUnmount(() => {
    if (chartInstance.value) {
        chartInstance.value.destroy();
    }
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("w-full h-[300px]") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({
    ref: ("canvasRef"),
});
// @ts-ignore navigation for `const canvasRef = ref()`
/** @type { typeof __VLS_ctx.canvasRef } */ ;
['w-full', 'h-[300px]',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            canvasRef: canvasRef,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
