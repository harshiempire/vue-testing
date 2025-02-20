import { ref } from 'vue';
const props = defineProps();
// Mock students data
const students = [
    { id: '1', name: 'Alice Johnson', rollNo: '6A01', present: true },
    { id: '2', name: 'Bob Smith', rollNo: '6A02', present: true },
    { id: '3', name: 'Charlie Brown', rollNo: '6A03', present: false },
    { id: '4', name: 'Diana Miller', rollNo: '6A04', present: true },
    { id: '5', name: 'Edward Wilson', rollNo: '6A05', present: false }
].map(student => ({
    ...student,
    present: ref(student.present)
}));
const markAllPresent = () => {
    students.forEach(student => student.present.value = true);
};
const markAllAbsent = () => {
    students.forEach(student => student.present.value = false);
};
const saveAttendance = () => {
    // Here you would typically save the attendance to your backend
    console.log('Saving attendance:', students.map(s => ({
        id: s.id,
        present: s.present.value
    })));
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
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
    ...{ class: ("px-3 py-1 text-sm bg-[#0447A8] text-white rounded-lg") },
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
                student.present.value = !student.present.value;
            } },
        ...{ class: ("px-3 py-1 text-sm rounded-lg") },
        ...{ class: ((student.present.value ?
                'bg-green-50 text-green-700' :
                'bg-red-50 text-red-700')) },
    });
    (student.present.value ? 'Present' : 'Absent');
}
['space-y-4', 'flex', 'justify-between', 'items-center', 'space-x-2', 'px-3', 'py-1', 'text-sm', 'bg-green-50', 'text-green-700', 'rounded-lg', 'px-3', 'py-1', 'text-sm', 'bg-red-50', 'text-red-700', 'rounded-lg', 'px-3', 'py-1', 'text-sm', 'bg-[#0447A8]', 'text-white', 'rounded-lg', 'grid', 'grid-cols-2', 'gap-3', 'flex', 'items-center', 'justify-between', 'p-3', 'bg-gray-50', 'rounded-xl', 'font-medium', 'text-sm', 'text-gray-500', 'px-3', 'py-1', 'text-sm', 'rounded-lg',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            students: students,
            markAllPresent: markAllPresent,
            markAllAbsent: markAllAbsent,
            saveAttendance: saveAttendance,
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
