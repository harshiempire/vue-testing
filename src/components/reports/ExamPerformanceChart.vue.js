import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
const props = defineProps();
onMounted(() => {
    const ctx = document.getElementById('examPerformanceChart');
    const exams = ['FA1', 'FA2', 'SA1', 'FA3', 'FA4', 'SA2'];
    const studentScores = exams.map(exam => props.studentScores[exam] || 0);
    const classAverages = exams.map(exam => props.classAverages[exam]);
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("w-full h-[300px]") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({
    id: ("examPerformanceChart"),
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
