const __VLS_props = defineProps();
const emit = defineEmits();
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
    ...{ class: ("text-xl font-semibold") },
});
(__VLS_ctx.paper.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-2 mt-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm") },
});
(__VLS_ctx.paper.class);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm") },
});
(__VLS_ctx.paper.subject);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-right") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-lg font-medium") },
});
(__VLS_ctx.paper.totalMarks);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-600") },
});
(__VLS_ctx.paper.duration);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-end gap-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('publish');
        } },
    ...{ class: ("px-4 py-2 border border-[#ECECEC] text-green-600 rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('edit');
        } },
    ...{ class: ("px-4 py-2 border border-[#ECECEC] text-[#0447A8] rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('preview');
        } },
    ...{ class: ("px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('download');
        } },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
['bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'flex', 'justify-between', 'items-start', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'gap-2', 'mt-2', 'px-3', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded-lg', 'text-sm', 'px-3', 'py-1', 'bg-purple-50', 'text-purple-700', 'rounded-lg', 'text-sm', 'text-right', 'text-lg', 'font-medium', 'text-sm', 'text-gray-600', 'flex', 'justify-end', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-green-600', 'rounded-xl', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-[#0447A8]', 'rounded-xl', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-gray-700', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
