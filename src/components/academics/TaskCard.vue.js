import { ref } from 'vue';
import { useAcademicsStore } from '@/stores/academics';
import TaskDetailsModal from './TaskDetailsModal.vue';
const props = defineProps();
const showDetailsModal = ref(false);
const academicsStore = useAcademicsStore();
const evidence = academicsStore.getTaskEvidence(props.task.id);
const reviews = academicsStore.getTaskReviews(props.task.id);
const getStatusColor = (status) => {
    const colors = {
        draft: 'gray',
        assigned: 'blue',
        submitted: 'yellow',
        reviewed: 'green'
    };
    return colors[status];
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-start mb-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
    ...{ class: ("text-xl font-semibold mb-2") },
});
(__VLS_ctx.task.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-2 mb-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("px-3 py-1 text-sm rounded-lg") },
    ...{ class: ((`bg-${__VLS_ctx.getStatusColor(__VLS_ctx.task.status)}-50 text-${__VLS_ctx.getStatusColor(__VLS_ctx.task.status)}-700`)) },
});
(__VLS_ctx.task.status);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm") },
});
(__VLS_ctx.task.type);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-right") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-500") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("font-medium") },
});
(new Date(__VLS_ctx.task.dueDate).toLocaleDateString());
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: ("text-gray-600 mb-4") },
});
(__VLS_ctx.task.description);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-500") },
});
(__VLS_ctx.task.maxMarks);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-500") },
});
(__VLS_ctx.evidence.length);
(__VLS_ctx.reviews.length);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showDetailsModal = true;
        } },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
// @ts-ignore
/** @type { [typeof TaskDetailsModal, ] } */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(TaskDetailsModal, new TaskDetailsModal({
    ...{ 'onClose': {} },
    show: ((__VLS_ctx.showDetailsModal)),
    task: ((__VLS_ctx.task)),
}));
const __VLS_1 = __VLS_0({
    ...{ 'onClose': {} },
    show: ((__VLS_ctx.showDetailsModal)),
    task: ((__VLS_ctx.task)),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_5;
const __VLS_6 = {
    onClose: (...[$event]) => {
        __VLS_ctx.showDetailsModal = false;
    }
};
let __VLS_2;
let __VLS_3;
var __VLS_4;
['bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'flex', 'justify-between', 'items-start', 'mb-4', 'text-xl', 'font-semibold', 'mb-2', 'flex', 'gap-2', 'mb-2', 'px-3', 'py-1', 'text-sm', 'rounded-lg', 'px-3', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded-lg', 'text-sm', 'text-right', 'text-sm', 'text-gray-500', 'font-medium', 'text-gray-600', 'mb-4', 'flex', 'justify-between', 'items-center', 'text-sm', 'text-gray-500', 'text-sm', 'text-gray-500', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TaskDetailsModal: TaskDetailsModal,
            showDetailsModal: showDetailsModal,
            evidence: evidence,
            reviews: reviews,
            getStatusColor: getStatusColor,
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
