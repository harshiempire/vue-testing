import { ref, computed } from 'vue';
import { useDashboardStore } from '@/stores/dashboard';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
const dashboardStore = useDashboardStore();
const activeTab = ref('upcoming');
const selectedFilter = ref('all');
const selectedSort = ref('deadline');
const filteredTasks = computed(() => {
    let tasks = dashboardStore.tasks.map((task) => ({
        ...task,
        priority: getPriorityFromDueDate(task.dueDate),
    }));
    // Filter by status
    switch (activeTab.value) {
        case 'completed':
            tasks = tasks.filter((task) => task.status === 'completed');
            break;
        case 'pending':
            tasks = tasks.filter((task) => task.status === 'pending' && new Date(task.dueDate) < new Date());
            break;
        case 'upcoming':
            tasks = tasks.filter((task) => task.status === 'pending' && new Date(task.dueDate) >= new Date());
            break;
    }
    // Filter by priority
    if (selectedFilter.value !== 'all') {
        tasks = tasks.filter((task) => task.priority === selectedFilter.value);
    }
    // Sort tasks
    return tasks.sort((a, b) => {
        if (selectedSort.value === 'deadline') {
            return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        }
        return getPriorityWeight(b.priority) - getPriorityWeight(a.priority);
    });
});
function getPriorityFromDueDate(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    const daysUntilDue = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (daysUntilDue <= 2)
        return 'high';
    if (daysUntilDue <= 5)
        return 'medium';
    return 'low';
}
function getPriorityWeight(priority) {
    const weights = { high: 3, medium: 2, low: 1 };
    return weights[priority] || 0;
}
const handleMarkComplete = (taskId) => {
    dashboardStore.markTaskCompleted(taskId);
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: ((__VLS_ctx.selectedFilter)),
    ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("all"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("high"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("medium"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("low"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: ((__VLS_ctx.selectedSort)),
    ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("deadline"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("priority"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4 mb-6") },
});
for (const [tab] of __VLS_getVForSourceType((['upcoming', 'pending', 'completed']))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.activeTab = tab;
            } },
        key: ((tab)),
        ...{ class: ("px-4 py-2 rounded-xl") },
        ...{ class: ((__VLS_ctx.activeTab === tab
                ? 'bg-[#0447A8] text-white'
                : 'bg-white text-gray-700')) },
    });
    (tab.charAt(0).toUpperCase() + tab.slice(1));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-3 gap-6") },
});
for (const [task] of __VLS_getVForSourceType((__VLS_ctx.filteredTasks))) {
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: (""),
        key: ((task.id)),
    }));
    const __VLS_1 = __VLS_0({
        title: (""),
        key: ((task.id)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium") },
    });
    (task.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-2 py-0.5 text-xs rounded-full") },
        ...{ class: (({
                'bg-red-50 text-red-700': task.priority === 'high',
                'bg-yellow-50 text-yellow-700': task.priority === 'medium',
                'bg-green-50 text-green-700': task.priority === 'low',
            })) },
    });
    (task.priority);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-sm text-gray-600") },
    });
    (task.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-between text-sm") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-gray-500") },
    });
    (task.subject);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-2 py-0.5 rounded-full text-xs") },
        ...{ class: (({
                'bg-blue-50 text-blue-700': task.type === 'grading',
                'bg-purple-50 text-purple-700': task.type === 'planning',
                'bg-orange-50 text-orange-700': task.type === 'meeting',
            })) },
    });
    (task.type);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-between") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-500") },
    });
    (new Date(task.dueDate).toLocaleDateString());
    if (task.status === 'pending') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((task.status === 'pending')))
                        return;
                    __VLS_ctx.handleMarkComplete(task.id);
                } },
            ...{ class: ("text-sm text-[#0447A8] hover:underline") },
        });
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-sm text-green-600") },
        });
    }
    __VLS_4.slots.default;
    var __VLS_4;
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'flex', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'flex', 'gap-4', 'mb-6', 'px-4', 'py-2', 'rounded-xl', 'grid', 'grid-cols-3', 'gap-6', 'space-y-3', 'flex', 'justify-between', 'items-start', 'font-medium', 'px-2', 'py-0.5', 'text-xs', 'rounded-full', 'bg-red-50', 'text-red-700', 'bg-yellow-50', 'text-yellow-700', 'bg-green-50', 'text-green-700', 'text-sm', 'text-gray-600', 'flex', 'items-center', 'justify-between', 'text-sm', 'text-gray-500', 'px-2', 'py-0.5', 'rounded-full', 'text-xs', 'bg-blue-50', 'text-blue-700', 'bg-purple-50', 'text-purple-700', 'bg-orange-50', 'text-orange-700', 'flex', 'items-center', 'justify-between', 'text-sm', 'text-gray-500', 'text-sm', 'text-[#0447A8]', 'hover:underline', 'text-sm', 'text-green-600',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DashboardCard: DashboardCard,
            activeTab: activeTab,
            selectedFilter: selectedFilter,
            selectedSort: selectedSort,
            filteredTasks: filteredTasks,
            handleMarkComplete: handleMarkComplete,
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
