import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDashboardStore } from '@/stores/dashboard';
import { useSubjectStore } from '@/stores/subject';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
import NotificationPanel from '@/components/dashboard/NotificationPanel.vue';
import PerformanceChart from '@/components/dashboard/PerformanceChart.vue';
import TaskList from '@/components/dashboard/TaskList.vue';
const router = useRouter();
const dashboardStore = useDashboardStore();
const subjectStore = useSubjectStore();
// Mock class data
const currentClass = {
    name: '6A',
    totalStudents: 40,
    presentToday: 35
};
const attendancePercentage = computed(() => Math.round((currentClass.presentToday / currentClass.totalStudents) * 100));
const performanceGroups = subjectStore.getStudentsByPerformance();
const performanceStats = computed(() => ({
    acceptable: (performanceGroups.excellent.length / currentClass.totalStudents) * 100,
    needsImprovement: (performanceGroups.needsImprovement.length / currentClass.totalStudents) * 100,
    unacceptable: (performanceGroups.unacceptable.length / currentClass.totalStudents) * 100
}));
const navigateToAttendance = () => {
    router.push('/attendance');
};
const navigateToTasks = () => {
    router.push('/tasks');
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("text-2xl font-bold") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: ("text-gray-600") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-right") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-lg font-medium") },
});
(__VLS_ctx.currentClass.name);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-600") },
});
(__VLS_ctx.currentClass.presentToday);
(__VLS_ctx.currentClass.totalStudents);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-3 gap-6 mb-6") },
});
// @ts-ignore
/** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
    title: (""),
}));
const __VLS_1 = __VLS_0({
    title: (""),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center justify-between") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-600") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-2xl font-bold") },
});
(__VLS_ctx.attendancePercentage);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.navigateToAttendance) },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
__VLS_4.slots.default;
var __VLS_4;
// @ts-ignore
/** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
    title: (""),
}));
const __VLS_6 = __VLS_5({
    title: (""),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center justify-between") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-600") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-2xl font-bold") },
});
(__VLS_ctx.dashboardStore.tasks.length);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.navigateToTasks) },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
__VLS_9.slots.default;
var __VLS_9;
// @ts-ignore
/** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
    title: (""),
}));
const __VLS_11 = __VLS_10({
    title: (""),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center justify-between") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-600") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-2xl font-bold") },
});
(Math.round(__VLS_ctx.subjectStore.averageClassScore));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-2xl") },
});
__VLS_14.slots.default;
var __VLS_14;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-2 gap-6") },
});
// @ts-ignore
/** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
    title: (""),
}));
const __VLS_16 = __VLS_15({
    title: (""),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center mb-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: ("text-lg font-semibold") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.navigateToTasks) },
    ...{ class: ("text-sm text-[#0447A8] hover:underline") },
});
// @ts-ignore
/** @type { [typeof TaskList, ] } */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(TaskList, new TaskList({
    filter: ("all"),
    sortBy: ("deadline"),
}));
const __VLS_21 = __VLS_20({
    filter: ("all"),
    sortBy: ("deadline"),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
__VLS_19.slots.default;
var __VLS_19;
// @ts-ignore
/** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
    title: (""),
}));
const __VLS_26 = __VLS_25({
    title: (""),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center mb-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: ("text-lg font-semibold") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.dashboardStore.markAllNotificationsRead) },
    ...{ class: ("text-sm text-[#0447A8]") },
});
// @ts-ignore
/** @type { [typeof NotificationPanel, ] } */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(NotificationPanel, new NotificationPanel({}));
const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_29.slots.default;
var __VLS_29;
// @ts-ignore
/** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
    title: (""),
}));
const __VLS_36 = __VLS_35({
    title: (""),
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center mb-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: ("text-lg font-semibold") },
});
// @ts-ignore
/** @type { [typeof PerformanceChart, ] } */ ;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent(PerformanceChart, new PerformanceChart({
    stats: ((__VLS_ctx.performanceStats)),
}));
const __VLS_41 = __VLS_40({
    stats: ((__VLS_ctx.performanceStats)),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("mt-4 space-y-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center justify-between text-sm") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("flex items-center gap-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("w-3 h-3 rounded-full bg-green-500") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(Math.round(__VLS_ctx.performanceStats.acceptable));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center justify-between text-sm") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("flex items-center gap-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("w-3 h-3 rounded-full bg-yellow-500") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(Math.round(__VLS_ctx.performanceStats.needsImprovement));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center justify-between text-sm") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("flex items-center gap-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("w-3 h-3 rounded-full bg-red-500") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(Math.round(__VLS_ctx.performanceStats.unacceptable));
__VLS_39.slots.default;
var __VLS_39;
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'text-gray-600', 'text-right', 'text-lg', 'font-medium', 'text-sm', 'text-gray-600', 'grid', 'grid-cols-3', 'gap-6', 'mb-6', 'flex', 'items-center', 'justify-between', 'text-sm', 'text-gray-600', 'text-2xl', 'font-bold', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'flex', 'items-center', 'justify-between', 'text-sm', 'text-gray-600', 'text-2xl', 'font-bold', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'flex', 'items-center', 'justify-between', 'text-sm', 'text-gray-600', 'text-2xl', 'font-bold', 'w-16', 'h-16', 'bg-purple-50', 'rounded-full', 'flex', 'items-center', 'justify-center', 'text-2xl', 'grid', 'grid-cols-2', 'gap-6', 'flex', 'justify-between', 'items-center', 'mb-4', 'text-lg', 'font-semibold', 'text-sm', 'text-[#0447A8]', 'hover:underline', 'flex', 'justify-between', 'items-center', 'mb-4', 'text-lg', 'font-semibold', 'text-sm', 'text-[#0447A8]', 'flex', 'justify-between', 'items-center', 'mb-4', 'text-lg', 'font-semibold', 'mt-4', 'space-y-2', 'flex', 'items-center', 'justify-between', 'text-sm', 'flex', 'items-center', 'gap-2', 'w-3', 'h-3', 'rounded-full', 'bg-green-500', 'flex', 'items-center', 'justify-between', 'text-sm', 'flex', 'items-center', 'gap-2', 'w-3', 'h-3', 'rounded-full', 'bg-yellow-500', 'flex', 'items-center', 'justify-between', 'text-sm', 'flex', 'items-center', 'gap-2', 'w-3', 'h-3', 'rounded-full', 'bg-red-500',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DashboardCard: DashboardCard,
            NotificationPanel: NotificationPanel,
            PerformanceChart: PerformanceChart,
            TaskList: TaskList,
            dashboardStore: dashboardStore,
            subjectStore: subjectStore,
            currentClass: currentClass,
            attendancePercentage: attendancePercentage,
            performanceStats: performanceStats,
            navigateToAttendance: navigateToAttendance,
            navigateToTasks: navigateToTasks,
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
