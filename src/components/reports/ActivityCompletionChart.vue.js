import { onMounted, computed } from 'vue';
import Chart from 'chart.js/auto';
const props = defineProps();
const percentage = computed(() => Math.round((props.data.completed / props.data.total) * 100));
onMounted(() => {
    const ctx = document.getElementById('completionChart');
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative w-full h-[300px]") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("absolute inset-0 flex items-center justify-center") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-center") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-3xl font-bold text-[#0447A8]") },
});
(__VLS_ctx.percentage);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-500") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({
    id: ("completionChart"),
});
['relative', 'w-full', 'h-[300px]', 'absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'text-center', 'text-3xl', 'font-bold', 'text-[#0447A8]', 'text-sm', 'text-gray-500',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            percentage: percentage,
        };
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
