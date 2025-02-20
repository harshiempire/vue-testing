import { onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';
const props = defineProps();
let chart = null;
const createChart = () => {
    const ctx = document.getElementById('performanceChart');
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative h-[200px]") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({
    id: ("performanceChart"),
});
['relative', 'h-[200px]',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
