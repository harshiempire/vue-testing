import { ref, computed } from 'vue';
import { useNoticeStore } from '@/stores/notice';
const noticeStore = useNoticeStore();
const activeCategory = ref('announcement');
const showCreateModal = ref(false);
const showFilters = ref(false);
// Filter states
const selectedClass = ref('all');
const dateRange = ref({
    start: '',
    end: ''
});
// Mock teacher's assigned classes
const assignedClasses = ['6A', '6B', '7A', '8A'];
const categories = [
    { id: 'announcement', label: 'Announcements', icon: '📢' },
    { id: 'event', label: 'Events', icon: '📅' },
    { id: 'examination', label: 'Examination', icon: '📝' },
    { id: 'emergency', label: 'Emergency', icon: '🚨' },
    { id: 'class', label: 'Class Notices', icon: '👨‍🏫' }
];
const newNotice = ref({
    title: '',
    content: '',
    category: 'class',
    class: '6A',
    subject: 'Mathematics',
    createdBy: {
        id: 'teacher1',
        name: 'Rohan Bhattacharya',
        role: 'Mathematics Teacher'
    }
});
const filteredNotices = computed(() => {
    let notices = noticeStore.noticesByCategory[activeCategory.value];
    if (selectedClass.value !== 'all') {
        notices = notices.filter(notice => notice.class === selectedClass.value);
    }
    if (dateRange.value.start) {
        notices = notices.filter(notice => new Date(notice.createdAt) >= new Date(dateRange.value.start));
    }
    if (dateRange.value.end) {
        notices = notices.filter(notice => new Date(notice.createdAt) <= new Date(dateRange.value.end + 'T23:59:59'));
    }
    return notices;
});
const handleCreateNotice = () => {
    noticeStore.addNotice(newNotice.value);
    showCreateModal.value = false;
    newNotice.value = {
        title: '',
        content: '',
        category: 'class',
        class: '6A',
        subject: 'Mathematics',
        createdBy: {
            id: 'teacher1',
            name: 'Rohan Bhattacharya',
            role: 'Mathematics Teacher'
        }
    };
};
const clearFilters = () => {
    selectedClass.value = 'all';
    dateRange.value = {
        start: '',
        end: ''
    };
};
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("min-h-screen bg-[#F5F5F5] pl-64 pt-16") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("p-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center mb-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("text-2xl font-bold") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showFilters = !__VLS_ctx.showFilters;
        } },
    ...{ class: ("px-4 py-2 border border-[#ECECEC] bg-white text-gray-700 rounded-xl flex items-center gap-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showCreateModal = true;
        } },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
if (__VLS_ctx.showFilters) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-4 mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-end gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.selectedClass)),
        ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("all"),
    });
    for (const [class_] of __VLS_getVForSourceType((__VLS_ctx.assignedClasses))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            key: ((class_)),
            value: ((class_)),
        });
        (class_);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.dateRange.start);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.dateRange.end);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.clearFilters) },
        ...{ class: ("px-4 py-2 text-gray-600 hover:text-gray-800") },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4 mb-6 overflow-x-auto pb-2") },
});
for (const [category] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.activeCategory = category.id;
            } },
        key: ((category.id)),
        ...{ class: ("px-4 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap") },
        ...{ class: ((__VLS_ctx.activeCategory === category.id ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700')) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (category.icon);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (category.label);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-2 py-0.5 text-sm rounded-lg") },
        ...{ class: ((__VLS_ctx.activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100')) },
    });
    (__VLS_ctx.noticeStore.noticesByCategory[category.id].length);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-4") },
});
for (const [notice] of __VLS_getVForSourceType((__VLS_ctx.filteredNotices))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((notice.id)),
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-xl font-semibold") },
    });
    (notice.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex gap-2 mt-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-sm text-gray-500") },
    });
    (notice.createdBy.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-sm text-gray-500") },
    });
    (__VLS_ctx.formatDate(notice.createdAt));
    if (notice.class) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex gap-2 mt-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm") },
        });
        (notice.class);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-1 bg-purple-50 text-purple-700 rounded text-sm") },
        });
        (notice.subject);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-gray-600 whitespace-pre-line") },
    });
    (notice.content);
}
if (__VLS_ctx.showCreateModal) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl p-6 w-full max-w-lg") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showCreateModal)))
                    return;
                __VLS_ctx.showCreateModal = false;
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.newNotice.title)),
        type: ("text"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        placeholder: ("Notice title"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.newNotice.category)),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("class"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.newNotice.class)),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    for (const [class_] of __VLS_getVForSourceType((__VLS_ctx.assignedClasses))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            key: ((class_)),
            value: ((class_)),
        });
        (class_);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.newNotice.content)),
        rows: ("4"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        placeholder: ("Notice content"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-end gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showCreateModal)))
                    return;
                __VLS_ctx.showCreateModal = false;
            } },
        ...{ class: ("px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.handleCreateNotice) },
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
    });
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'flex', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'bg-white', 'text-gray-700', 'rounded-xl', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-4', 'mb-6', 'flex', 'items-end', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'px-4', 'py-2', 'text-gray-600', 'hover:text-gray-800', 'flex', 'gap-4', 'mb-6', 'overflow-x-auto', 'pb-2', 'px-4', 'py-2', 'rounded-xl', 'flex', 'items-center', 'gap-2', 'whitespace-nowrap', 'px-2', 'py-0.5', 'text-sm', 'rounded-lg', 'space-y-4', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'flex', 'justify-between', 'items-start', 'mb-4', 'text-xl', 'font-semibold', 'flex', 'gap-2', 'mt-2', 'text-sm', 'text-gray-500', 'text-sm', 'text-gray-500', 'flex', 'gap-2', 'mt-1', 'px-2', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded', 'text-sm', 'px-2', 'py-1', 'bg-purple-50', 'text-purple-700', 'rounded', 'text-sm', 'text-gray-600', 'whitespace-pre-line', 'fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-lg', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-xl', 'font-bold', 'text-gray-500', 'hover:text-gray-700', 'space-y-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'flex', 'justify-end', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-gray-700', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            noticeStore: noticeStore,
            activeCategory: activeCategory,
            showCreateModal: showCreateModal,
            showFilters: showFilters,
            selectedClass: selectedClass,
            dateRange: dateRange,
            assignedClasses: assignedClasses,
            categories: categories,
            newNotice: newNotice,
            filteredNotices: filteredNotices,
            handleCreateNotice: handleCreateNotice,
            clearFilters: clearFilters,
            formatDate: formatDate,
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
