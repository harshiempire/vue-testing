import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAcademicsStore } from '@/stores/academics';
import TaskCard from '@/components/academics/TaskCard.vue';
import CreateTaskModal from '@/components/academics/CreateTaskModal.vue';
import ResultsUploadModal from '@/components/academics/ResultsUploadModal.vue';
const route = useRoute();
const academicsStore = useAcademicsStore();
const activeTab = ref('tasks');
const showCreateModal = ref(false);
const showResultsModal = ref(false);
const selectedCategory = ref('all');
const tabs = [
    { id: 'pending', label: 'Pending', count: academicsStore.pendingTasks.length },
    { id: 'submitted', label: 'Submitted', count: academicsStore.submittedTasks.length },
    { id: 'reviewed', label: 'Reviewed', count: academicsStore.reviewedTasks.length }
];
const taskStatus = ref('pending');
// Handle task navigation from dashboard
onMounted(() => {
    const taskId = route.query.taskId;
    if (taskId) {
        activeTab.value = 'tasks';
        const task = academicsStore.tasks.find(t => t.id === taskId);
        if (task) {
            taskStatus.value = task.status;
        }
    }
});
const filteredTasks = computed(() => {
    let tasks = [];
    // First filter by status
    if (taskStatus.value === 'pending') {
        tasks = [...academicsStore.pendingTasks];
    }
    else if (taskStatus.value === 'submitted') {
        tasks = [...academicsStore.submittedTasks];
    }
    else {
        tasks = [...academicsStore.reviewedTasks];
    }
    // Then filter by category if not 'all'
    if (selectedCategory.value !== 'all') {
        tasks = tasks.filter(task => task.category === selectedCategory.value);
    }
    return tasks;
});
const handleCreateTask = (task) => {
    academicsStore.tasks.push(task);
    showCreateModal.value = false;
};
// Mock student data
const students = [
    { id: '1', name: 'Alice Johnson', rollNo: '6A01' },
    { id: '2', name: 'Bob Smith', rollNo: '6A02' },
    { id: '3', name: 'Charlie Brown', rollNo: '6A03' },
    { id: '4', name: 'Diana Miller', rollNo: '6A04' },
    { id: '5', name: 'Edward Wilson', rollNo: '6A05' }
];
const handleResultsUpload = (results) => {
    // Here you would update the results in your store
    console.log('Uploading results:', results);
    showResultsModal.value = false;
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
if (__VLS_ctx.activeTab === 'tasks') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.activeTab === 'tasks')))
                    return;
                __VLS_ctx.showCreateModal = true;
            } },
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(!((__VLS_ctx.activeTab === 'tasks'))))
                    return;
                __VLS_ctx.showResultsModal = true;
            } },
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4 mb-6") },
});
for (const [tab] of __VLS_getVForSourceType(['tasks', 'results'])) {
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
if (__VLS_ctx.activeTab === 'tasks') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex gap-4 mb-6") },
    });
    for (const [category] of __VLS_getVForSourceType(['all', 'scholastic', 'co-scholastic'])) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.activeTab === 'tasks')))
                        return;
                    __VLS_ctx.selectedCategory = category;
                } },
            key: ((category)),
            ...{ class: ("px-4 py-2 rounded-xl") },
            ...{ class: ((__VLS_ctx.selectedCategory === category ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700')) },
        });
        (category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex gap-4 mb-6") },
    });
    for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.activeTab === 'tasks')))
                        return;
                    __VLS_ctx.taskStatus = tab.id;
                } },
            key: ((tab.id)),
            ...{ class: ("px-4 py-2 rounded-xl flex items-center gap-2") },
            ...{ class: ((__VLS_ctx.taskStatus === tab.id ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700')) },
        });
        (tab.label);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-0.5 text-sm rounded-lg") },
            ...{ class: ((__VLS_ctx.taskStatus === tab.id ? 'bg-white/20' : 'bg-gray-100')) },
        });
        (tab.count);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    for (const [task] of __VLS_getVForSourceType((__VLS_ctx.filteredTasks))) {
        // @ts-ignore
        /** @type { [typeof TaskCard, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(TaskCard, new TaskCard({
            key: ((task.id)),
            task: ((task)),
        }));
        const __VLS_1 = __VLS_0({
            key: ((task.id)),
            task: ((task)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("overflow-x-auto") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: ("w-full") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
        ...{ class: ("bg-gray-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
        ...{ class: ("divide-y divide-gray-200") },
    });
    for (const [student] of __VLS_getVForSourceType((__VLS_ctx.students))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: ((student.id)),
            ...{ class: ("hover:bg-gray-50") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (student.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-500") },
        });
        (student.rollNo);
        for (const [exam] of __VLS_getVForSourceType((['FA1', 'FA2', 'SA1', 'FA3', 'FA4', 'SA2']))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                key: ((exam)),
                ...{ class: ("px-4 py-3") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("text-center") },
            });
        }
    }
}
// @ts-ignore
/** @type { [typeof CreateTaskModal, ] } */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(CreateTaskModal, new CreateTaskModal({
    ...{ 'onClose': {} },
    ...{ 'onCreate': {} },
    show: ((__VLS_ctx.showCreateModal)),
}));
const __VLS_6 = __VLS_5({
    ...{ 'onClose': {} },
    ...{ 'onCreate': {} },
    show: ((__VLS_ctx.showCreateModal)),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
let __VLS_10;
const __VLS_11 = {
    onClose: (...[$event]) => {
        __VLS_ctx.showCreateModal = false;
    }
};
const __VLS_12 = {
    onCreate: (__VLS_ctx.handleCreateTask)
};
let __VLS_7;
let __VLS_8;
var __VLS_9;
if (__VLS_ctx.showResultsModal) {
    // @ts-ignore
    /** @type { [typeof ResultsUploadModal, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(ResultsUploadModal, new ResultsUploadModal({
        ...{ 'onClose': {} },
        ...{ 'onUpload': {} },
        show: ((__VLS_ctx.showResultsModal)),
        students: ((__VLS_ctx.students)),
    }));
    const __VLS_14 = __VLS_13({
        ...{ 'onClose': {} },
        ...{ 'onUpload': {} },
        show: ((__VLS_ctx.showResultsModal)),
        students: ((__VLS_ctx.students)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onClose: (...[$event]) => {
            if (!((__VLS_ctx.showResultsModal)))
                return;
            __VLS_ctx.showResultsModal = false;
        }
    };
    const __VLS_20 = {
        onUpload: (__VLS_ctx.handleResultsUpload)
    };
    let __VLS_15;
    let __VLS_16;
    var __VLS_17;
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'flex', 'gap-4', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'flex', 'gap-4', 'mb-6', 'px-4', 'py-2', 'rounded-xl', 'flex', 'gap-4', 'mb-6', 'px-4', 'py-2', 'rounded-xl', 'flex', 'gap-4', 'mb-6', 'px-4', 'py-2', 'rounded-xl', 'flex', 'items-center', 'gap-2', 'px-2', 'py-0.5', 'text-sm', 'rounded-lg', 'space-y-6', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'overflow-x-auto', 'w-full', 'bg-gray-50', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'divide-y', 'divide-gray-200', 'hover:bg-gray-50', 'px-4', 'py-3', 'font-medium', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'text-center',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TaskCard: TaskCard,
            CreateTaskModal: CreateTaskModal,
            ResultsUploadModal: ResultsUploadModal,
            activeTab: activeTab,
            showCreateModal: showCreateModal,
            showResultsModal: showResultsModal,
            selectedCategory: selectedCategory,
            tabs: tabs,
            taskStatus: taskStatus,
            filteredTasks: filteredTasks,
            handleCreateTask: handleCreateTask,
            students: students,
            handleResultsUpload: handleResultsUpload,
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
