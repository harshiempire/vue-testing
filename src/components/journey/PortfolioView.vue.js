import { ref, computed } from 'vue';
import { useJourneyStore } from '@/stores/journey';
const props = defineProps();
const journeyStore = useJourneyStore();
const activeTab = ref('scholastic');
const selectedCategory = ref('');
const scholasticCategories = ['Mathematics', 'Science', 'English', 'Social Studies'];
const coScholasticCategories = ['Dance', 'Music', 'Art', 'Sports'];
const portfolios = computed(() => journeyStore.getPortfolioByType(props.studentId, activeTab.value));
const filteredPortfolio = computed(() => {
    if (!selectedCategory.value)
        return portfolios.value;
    return portfolios.value.filter(p => p.category === selectedCategory.value);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
for (const [tab] of __VLS_getVForSourceType(['scholastic', 'co-scholastic'])) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.activeTab = tab;
            } },
        key: ((tab)),
        ...{ class: ("px-4 py-2 rounded-xl") },
        ...{ class: ((__VLS_ctx.activeTab === tab ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700')) },
    });
    (tab.charAt(0).toUpperCase() + tab.slice(1));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
for (const [category] of __VLS_getVForSourceType((__VLS_ctx.activeTab === 'scholastic' ? __VLS_ctx.scholasticCategories : __VLS_ctx.coScholasticCategories))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectedCategory = category;
            } },
        key: ((category)),
        ...{ class: ("px-3 py-1 rounded-lg text-sm") },
        ...{ class: ((__VLS_ctx.selectedCategory === category ? 'bg-[#0447A8] text-white' : 'bg-gray-50 text-gray-700')) },
    });
    (category);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-3 gap-6") },
});
for (const [portfolio] of __VLS_getVForSourceType((__VLS_ctx.filteredPortfolio))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((portfolio.id)),
    });
    for (const [item] of __VLS_getVForSourceType((portfolio.items))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((item.id)),
            ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] overflow-hidden") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("p-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("font-medium mb-2") },
        });
        (item.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-sm text-gray-600 mb-4") },
        });
        (item.description);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-500") },
        });
        (new Date(item.date).toLocaleDateString());
        if (item.files.length) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mt-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("text-sm font-medium mb-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex flex-wrap gap-2") },
            });
            for (const [file] of __VLS_getVForSourceType((item.files))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
                    key: ((file.name)),
                    href: ((file.url)),
                    target: ("_blank"),
                    ...{ class: ("px-3 py-1 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 flex items-center gap-2") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (file.name);
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                    ...{ class: ("text-xs text-gray-500") },
                });
                (file.type);
            }
        }
    }
}
['space-y-6', 'flex', 'gap-4', 'px-4', 'py-2', 'rounded-xl', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-4', 'flex', 'gap-4', 'px-3', 'py-1', 'rounded-lg', 'text-sm', 'grid', 'grid-cols-3', 'gap-6', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'overflow-hidden', 'p-4', 'font-medium', 'mb-2', 'text-sm', 'text-gray-600', 'mb-4', 'text-sm', 'text-gray-500', 'mt-4', 'text-sm', 'font-medium', 'mb-2', 'flex', 'flex-wrap', 'gap-2', 'px-3', 'py-1', 'bg-gray-50', 'rounded-lg', 'text-sm', 'hover:bg-gray-100', 'flex', 'items-center', 'gap-2', 'text-xs', 'text-gray-500',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            activeTab: activeTab,
            selectedCategory: selectedCategory,
            scholasticCategories: scholasticCategories,
            coScholasticCategories: coScholasticCategories,
            filteredPortfolio: filteredPortfolio,
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
