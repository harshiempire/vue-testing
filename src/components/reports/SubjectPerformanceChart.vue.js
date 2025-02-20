import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
const props = defineProps();
onMounted(() => {
    const ctx = document.getElementById('subjectPerformanceChart');
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("w-full h-[300px]") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({
    id: ("subjectPerformanceChart"),
});
['w-full', 'h-[300px]',];
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
