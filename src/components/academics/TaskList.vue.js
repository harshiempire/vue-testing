import { computed } from 'vue';
import { useTaskStore } from '@/stores/task';
const props = defineProps();
const taskStore = useTaskStore();
const tasks = computed(() => taskStore.getTasksByClass(props.className));
const getTaskTypeLabel = (type) => {
    const labels = {
        activity: 'Activity Based Learning',
        project: 'Project Based Learning',
        mcq: 'MCQ Test'
    };
    return labels[type];
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-6") },
});
for (const [task] of __VLS_getVForSourceType((__VLS_ctx.tasks))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((task.id)),
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-xl font-semibold mb-2") },
    });
    (task.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("inline-block px-3 py-1 bg-blue-50 text-[#0447A8] rounded-lg text-sm") },
    });
    (__VLS_ctx.getTaskTypeLabel(task.type));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-right") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-500") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("font-medium") },
    });
    (new Date(task.dueDate).toLocaleDateString());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-gray-600 mb-4") },
    });
    (task.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-500") },
    });
    (task.maxMarks);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
    });
}
['space-y-6', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'flex', 'justify-between', 'items-start', 'mb-4', 'text-xl', 'font-semibold', 'mb-2', 'inline-block', 'px-3', 'py-1', 'bg-blue-50', 'text-[#0447A8]', 'rounded-lg', 'text-sm', 'text-right', 'text-sm', 'text-gray-500', 'font-medium', 'text-gray-600', 'mb-4', 'flex', 'justify-between', 'items-center', 'text-sm', 'text-gray-500', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            tasks: tasks,
            getTaskTypeLabel: getTaskTypeLabel,
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
