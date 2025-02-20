import { ref, computed } from 'vue';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
// Mock data
const students = ref([
    { id: '1', name: 'Alice Johnson', rollNo: '6A01', present: true },
    { id: '2', name: 'Bob Smith', rollNo: '6A02', present: true },
    { id: '3', name: 'Charlie Brown', rollNo: '6A03', present: true },
    { id: '4', name: 'Diana Miller', rollNo: '6A04', present: true },
    { id: '5', name: 'Edward Wilson', rollNo: '6A05', present: false }
]);
const currentClass = ref({
    name: '6A',
    totalStudents: 5,
    presentToday: 35
});
// Students list (fix: remove ref from each present field)
const attendancePercentage = computed(() => Math.round((currentClass.value.presentToday / currentClass.value.totalStudents) * 100));
const markAllPresent = () => {
    students.value.forEach(student => {
        student.present = true;
    });
};
const markAllAbsent = () => {
    students.value.forEach(student => {
        student.present = false;
    });
};
const toggleAttendance = (student) => {
    student.present = !student.present; // Fix: No need for `.value`
};
const saveAttendance = () => {
    // Calculate new attendance
    const presentCount = students.value.filter(s => s.present).length;
    currentClass.value.presentToday = presentCount;
    console.log('Saving attendance:', {
        date: new Date().toISOString(),
        class: currentClass.value.name,
        attendance: students.value.map(s => ({
            id: s.id,
            present: s.present
        }))
    });
};
// Attendance history
const attendanceHistory = ref([
    { date: '2024-03-07', present: 38, total: 40 },
    { date: '2024-03-06', present: 37, total: 40 },
    { date: '2024-03-05', present: 39, total: 40 },
    { date: '2024-03-04', present: 36, total: 40 },
    { date: '2024-03-03', present: 40, total: 40 }
]);
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
(__VLS_ctx.currentClass.name);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-right") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-lg font-medium") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-3xl font-bold text-[#0447A8]") },
});
(__VLS_ctx.attendancePercentage);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-12 gap-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("col-span-8") },
});
// @ts-ignore
/** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center mb-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: ("text-lg font-semibold") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-sm text-gray-600") },
});
(new Date().toLocaleDateString());
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-x-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.markAllPresent) },
    ...{ class: ("px-3 py-1 text-sm bg-green-50 text-green-700 rounded-lg") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.markAllAbsent) },
    ...{ class: ("px-3 py-1 text-sm bg-red-50 text-red-700 rounded-lg") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.saveAttendance) },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-2 gap-3") },
});
for (const [student] of __VLS_getVForSourceType((__VLS_ctx.students))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((student.id)),
        ...{ class: ("flex items-center justify-between p-3 bg-gray-50 rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("font-medium") },
    });
    (student.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-500") },
    });
    (student.rollNo);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleAttendance(student);
            } },
        ...{ class: ("px-3 py-1 text-sm rounded-lg") },
        ...{ class: ((student.present ?
                'bg-green-50 text-green-700' :
                'bg-red-50 text-red-700')) },
    });
    (student.present ? 'Present' : 'Absent');
}
__VLS_4.slots.default;
var __VLS_4;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("col-span-4") },
});
// @ts-ignore
/** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: ("text-lg font-semibold mb-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-3") },
});
for (const [record] of __VLS_getVForSourceType((__VLS_ctx.attendanceHistory))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((record.date)),
        ...{ class: ("p-3 bg-gray-50 rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("font-medium") },
    });
    (new Date(record.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
    (record.present);
    (record.total);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("h-2 bg-gray-200 rounded-full overflow-hidden") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("h-full bg-[#0447A8]") },
        ...{ style: (({ width: `${(record.present / record.total) * 100}%` })) },
    });
}
__VLS_9.slots.default;
var __VLS_9;
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'text-gray-600', 'text-right', 'text-lg', 'font-medium', 'text-3xl', 'font-bold', 'text-[#0447A8]', 'grid', 'grid-cols-12', 'gap-6', 'col-span-8', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-lg', 'font-semibold', 'text-sm', 'text-gray-600', 'space-y-4', 'flex', 'justify-between', 'items-center', 'space-x-2', 'px-3', 'py-1', 'text-sm', 'bg-green-50', 'text-green-700', 'rounded-lg', 'px-3', 'py-1', 'text-sm', 'bg-red-50', 'text-red-700', 'rounded-lg', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'grid', 'grid-cols-2', 'gap-3', 'flex', 'items-center', 'justify-between', 'p-3', 'bg-gray-50', 'rounded-xl', 'font-medium', 'text-sm', 'text-gray-500', 'px-3', 'py-1', 'text-sm', 'rounded-lg', 'col-span-4', 'text-lg', 'font-semibold', 'mb-4', 'space-y-3', 'p-3', 'bg-gray-50', 'rounded-xl', 'flex', 'justify-between', 'items-center', 'mb-2', 'font-medium', 'text-sm', 'text-gray-600', 'h-2', 'bg-gray-200', 'rounded-full', 'overflow-hidden', 'h-full', 'bg-[#0447A8]',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DashboardCard: DashboardCard,
            students: students,
            currentClass: currentClass,
            attendancePercentage: attendancePercentage,
            markAllPresent: markAllPresent,
            markAllAbsent: markAllAbsent,
            toggleAttendance: toggleAttendance,
            saveAttendance: saveAttendance,
            attendanceHistory: attendanceHistory,
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
