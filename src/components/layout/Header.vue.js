import { ref } from 'vue';
const selectedClass = ref('6A');
const classes = ['6A', '6B', '7A', '7B', '8A', '8B'];
const searchQuery = ref('');
const teacher = {
    name: 'Rohan Bhattacharya',
    role: 'Mathematics Teacher',
    stage: 'Middle Stage'
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: ("h-16 bg-white border-b border-[#ECECEC] fixed top-0 left-64 right-0 z-10") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("h-full px-6 flex items-center justify-between") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center space-x-4 flex-1") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: ((__VLS_ctx.selectedClass)),
    ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
});
for (const [class_] of __VLS_getVForSourceType((__VLS_ctx.classes))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: ((class_)),
        value: ((class_)),
    });
    (class_);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex-1 max-w-2xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    value: ((__VLS_ctx.searchQuery)),
    type: ("text"),
    placeholder: ("Search anything..."),
    ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center space-x-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-right") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("font-medium") },
});
(__VLS_ctx.teacher.name);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-500") },
});
(__VLS_ctx.teacher.role);
(__VLS_ctx.teacher.stage);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
['h-16', 'bg-white', 'border-b', 'border-[#ECECEC]', 'fixed', 'top-0', 'left-64', 'right-0', 'z-10', 'h-full', 'px-6', 'flex', 'items-center', 'justify-between', 'flex', 'items-center', 'space-x-4', 'flex-1', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'flex-1', 'max-w-2xl', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'flex', 'items-center', 'space-x-4', 'text-right', 'font-medium', 'text-sm', 'text-gray-500', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            selectedClass: selectedClass,
            classes: classes,
            searchQuery: searchQuery,
            teacher: teacher,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
