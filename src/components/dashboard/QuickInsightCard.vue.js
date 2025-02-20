const __VLS_props = defineProps();
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("bg-white rounded-xl border border-[#ECECEC] p-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-start mb-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("text-2xl") },
});
(__VLS_ctx.insight.icon);
if (__VLS_ctx.insight.trend) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-sm") },
        ...{ class: ((__VLS_ctx.insight.trend.direction === 'up' ? 'text-green-500' : 'text-red-500')) },
    });
    (__VLS_ctx.insight.trend.direction === 'up' ? '↑' : '↓');
    (__VLS_ctx.insight.trend.value);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-2xl font-bold mb-1") },
});
(__VLS_ctx.insight.value);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-600") },
});
(__VLS_ctx.insight.label);
['bg-white', 'rounded-xl', 'border', 'border-[#ECECEC]', 'p-4', 'flex', 'justify-between', 'items-start', 'mb-2', 'text-2xl', 'flex', 'items-center', 'text-sm', 'text-2xl', 'font-bold', 'mb-1', 'text-sm', 'text-gray-600',];
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
