import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDashboardStore } from '@/stores/dashboard';
import { useAcademicsStore } from '@/stores/academics';
import TaskDetailsModal from '@/components/academics/TaskDetailsModal.vue';
const props = defineProps();
const router = useRouter();
const dashboardStore = useDashboardStore();
const academicsStore = useAcademicsStore();
const selectedTask = ref(null);
const showDetailsModal = ref(false);
// Mock tasks with priority
const tasks = computed(() => {
    let filteredTasks = dashboardStore.tasks.map(task => ({
        ...task,
        priority: getPriorityFromDueDate(task.dueDate)
    }));
    if (props.filter !== 'all') {
        filteredTasks = filteredTasks.filter(task => task.priority === props.filter);
    }
    return filteredTasks.sort((a, b) => {
        if (props.sortBy === 'deadline') {
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
const viewTask = (task) => {
    // Find corresponding academic task
    const academicTask = academicsStore.tasks.find(t => t.title === task.title);
    if (academicTask) {
        selectedTask.value = academicTask;
        showDetailsModal.value = true;
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-3") },
});
for (const [task] of __VLS_getVForSourceType((__VLS_ctx.tasks))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((task.id)),
        ...{ class: ("bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-start gap-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.dashboardStore.markTaskCompleted(task.id);
            } },
        type: ("checkbox"),
        ...{ class: ("mt-1 rounded border-gray-300 text-[#0447A8] focus:ring-[#0447A8]") },
        checked: ((task.status === 'completed')),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-1") },
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
                'bg-green-50 text-green-700': task.priority === 'low'
            })) },
    });
    (task.priority);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-1 text-sm text-gray-600") },
    });
    (task.subject);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-2 flex items-center justify-between") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-4 text-sm text-gray-500") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("flex items-center gap-1") },
    });
    (new Date(task.dueDate).toLocaleDateString());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-2 py-0.5 rounded-full text-xs") },
        ...{ class: (({
                'bg-blue-50 text-blue-700': task.type === 'grading',
                'bg-purple-50 text-purple-700': task.type === 'planning',
                'bg-orange-50 text-orange-700': task.type === 'meeting'
            })) },
    });
    (task.type);
    if (task.type === 'grading') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((task.type === 'grading')))
                        return;
                    __VLS_ctx.viewTask(task);
                } },
            ...{ class: ("text-sm text-[#0447A8] hover:underline") },
        });
    }
}
if (__VLS_ctx.showDetailsModal && __VLS_ctx.selectedTask) {
    // @ts-ignore
    /** @type { [typeof TaskDetailsModal, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TaskDetailsModal, new TaskDetailsModal({
        ...{ 'onClose': {} },
        show: ((__VLS_ctx.showDetailsModal)),
        task: ((__VLS_ctx.selectedTask)),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onClose': {} },
        show: ((__VLS_ctx.showDetailsModal)),
        task: ((__VLS_ctx.selectedTask)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onClose: (...[$event]) => {
            if (!((__VLS_ctx.showDetailsModal && __VLS_ctx.selectedTask)))
                return;
            __VLS_ctx.showDetailsModal = false;
        }
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
}
['space-y-3', 'bg-white', 'rounded-xl', 'border', 'border-gray-100', 'p-4', 'hover:shadow-md', 'transition-shadow', 'flex', 'items-start', 'gap-3', 'mt-1', 'rounded', 'border-gray-300', 'text-[#0447A8]', 'focus:ring-[#0447A8]', 'flex-1', 'flex', 'justify-between', 'items-start', 'font-medium', 'px-2', 'py-0.5', 'text-xs', 'rounded-full', 'bg-red-50', 'text-red-700', 'bg-yellow-50', 'text-yellow-700', 'bg-green-50', 'text-green-700', 'mt-1', 'text-sm', 'text-gray-600', 'mt-2', 'flex', 'items-center', 'justify-between', 'flex', 'items-center', 'gap-4', 'text-sm', 'text-gray-500', 'flex', 'items-center', 'gap-1', 'px-2', 'py-0.5', 'rounded-full', 'text-xs', 'bg-blue-50', 'text-blue-700', 'bg-purple-50', 'text-purple-700', 'bg-orange-50', 'text-orange-700', 'text-sm', 'text-[#0447A8]', 'hover:underline',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TaskDetailsModal: TaskDetailsModal,
            dashboardStore: dashboardStore,
            selectedTask: selectedTask,
            showDetailsModal: showDetailsModal,
            tasks: tasks,
            viewTask: viewTask,
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
