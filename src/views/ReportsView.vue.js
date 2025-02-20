import { ref, computed } from 'vue';
import ClassReport from '@/components/reports/ClassReport.vue';
import StudentReport from '@/components/reports/StudentReport.vue';
import ReportTemplateModal from '@/components/reports/ReportTemplateModal.vue';
const activeTab = ref('scholastic');
const selectedStudent = ref(null);
const selectedSubject = ref('Mathematics');
const showReportModal = ref(false);
// Mock student data
const students = [
    { id: '1', name: 'Alice Johnson', rollNo: '6A01', class: '6A', section: 'A' },
    { id: '2', name: 'Bob Smith', rollNo: '6A02', class: '6A', section: 'A' },
    { id: '3', name: 'Charlie Brown', rollNo: '6A03', class: '6A', section: 'A' },
    { id: '4', name: 'Diana Miller', rollNo: '6A04', class: '6A', section: 'A' },
    { id: '5', name: 'Edward Wilson', rollNo: '6A05', class: '6A', section: 'A' },
];
// Mock subjects
const subjects = ['Mathematics', 'Science', 'English', 'Social Studies'];
const selectedStudentData = computed(() => {
    if (!selectedStudent.value)
        return null;
    return students.find((s) => s.id === selectedStudent.value);
});
const handleGenerateReport = () => {
    showReportModal.value = true;
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center gap-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("text-2xl font-bold") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: ((__VLS_ctx.selectedStudent)),
    ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: (""),
});
for (const [student] of __VLS_getVForSourceType((__VLS_ctx.students))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: ((student.id)),
        value: ((student.id)),
    });
    (student.name);
    (student.rollNo);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: ((__VLS_ctx.selectedSubject)),
    ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
});
for (const [subject] of __VLS_getVForSourceType((__VLS_ctx.subjects))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: ((subject)),
        value: ((subject)),
    });
    (subject);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.handleGenerateReport) },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4 mb-6") },
});
for (const [tab] of __VLS_getVForSourceType(['scholastic', 'co-scholastic', 'health', 'achievements'])) {
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
    (tab
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('-'));
}
if (!__VLS_ctx.selectedStudent) {
    // @ts-ignore
    /** @type { [typeof ClassReport, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ClassReport, new ClassReport({
        activeTab: ((__VLS_ctx.activeTab)),
    }));
    const __VLS_1 = __VLS_0({
        activeTab: ((__VLS_ctx.activeTab)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
else {
    // @ts-ignore
    /** @type { [typeof StudentReport, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(StudentReport, new StudentReport({
        studentId: ((__VLS_ctx.selectedStudent)),
        activeTab: ((__VLS_ctx.activeTab)),
    }));
    const __VLS_6 = __VLS_5({
        studentId: ((__VLS_ctx.selectedStudent)),
        activeTab: ((__VLS_ctx.activeTab)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
}
if (__VLS_ctx.showReportModal) {
    // @ts-ignore
    /** @type { [typeof ReportTemplateModal, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(ReportTemplateModal, new ReportTemplateModal({
        ...{ 'onClose': {} },
        show: ((__VLS_ctx.showReportModal)),
        type: ((__VLS_ctx.selectedStudent ? 'student' : 'class')),
        data: ((__VLS_ctx.selectedStudent ? __VLS_ctx.selectedStudentData : {})),
    }));
    const __VLS_11 = __VLS_10({
        ...{ 'onClose': {} },
        show: ((__VLS_ctx.showReportModal)),
        type: ((__VLS_ctx.selectedStudent ? 'student' : 'class')),
        data: ((__VLS_ctx.selectedStudent ? __VLS_ctx.selectedStudentData : {})),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    let __VLS_15;
    const __VLS_16 = {
        onClose: (...[$event]) => {
            if (!((__VLS_ctx.showReportModal)))
                return;
            __VLS_ctx.showReportModal = false;
        }
    };
    let __VLS_12;
    let __VLS_13;
    var __VLS_14;
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'flex', 'items-center', 'gap-4', 'text-2xl', 'font-bold', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'flex', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'flex', 'gap-4', 'mb-6', 'px-4', 'py-2', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ClassReport: ClassReport,
            StudentReport: StudentReport,
            ReportTemplateModal: ReportTemplateModal,
            activeTab: activeTab,
            selectedStudent: selectedStudent,
            selectedSubject: selectedSubject,
            showReportModal: showReportModal,
            students: students,
            subjects: subjects,
            selectedStudentData: selectedStudentData,
            handleGenerateReport: handleGenerateReport,
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
