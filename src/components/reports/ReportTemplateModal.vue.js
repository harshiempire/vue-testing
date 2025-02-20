import { ref, computed } from "vue";
import html2pdf from "html2pdf.js";
import logoSrc from "@/assets/logo.svg";
import ExamPerformanceChart from "./ExamPerformanceChart.vue";
import SubjectPerformanceChart from "./SubjectPerformanceChart.vue";
const props = defineProps();
const emit = defineEmits();
const selectedTemplate = ref("standard");
const showHeader = ref(true);
const showLogo = ref(true);
const showFooter = ref(true);
const showCharts = ref(true);
const orientation = ref("portrait");
const templates = [
    {
        id: "standard",
        name: "Standard Template",
        description: "Clean and professional layout with all details",
    },
    {
        id: "minimal",
        name: "Minimal Template",
        description: "Simplified layout focusing on key metrics",
    },
    {
        id: "detailed",
        name: "Detailed Template",
        description: "Comprehensive layout with extended information",
    },
];
// Prepare exam data for charts
const examData = computed(() => {
    if (!props.data?.scholastic?.examScores)
        return null;
    const subjects = Object.keys(props.data.scholastic.examScores);
    const exams = ["FA1", "FA2", "SA1", "FA3", "FA4", "SA2"];
    const studentScores = {};
    const classAverages = {
        FA1: 0, // Make sure all fields have default values
        FA2: 0,
        SA1: 0,
        FA3: 0,
        FA4: 0,
        SA2: 0,
    };
    exams.forEach((exam) => {
        let totalStudent = 0;
        let totalClass = 0;
        subjects.forEach((subject) => {
            totalStudent += props.data.scholastic.examScores[subject][exam] || 0;
            totalClass += props.data.scholastic.classAverages[subject][exam] || 0;
        });
        studentScores[exam] = totalStudent / subjects.length;
        classAverages[exam] = totalClass / subjects.length;
    });
    return {
        studentScores,
        classAverages,
    };
});
// Prepare subject data for charts
const subjectData = computed(() => {
    if (!props.data?.scholastic?.examScores)
        return null;
    const subjects = Object.keys(props.data.scholastic.examScores);
    const exams = ["FA1", "FA2", "SA1", "FA3", "FA4", "SA2"];
    const studentScores = subjects.map((subject) => {
        const total = exams.reduce((sum, exam) => sum + (props.data.scholastic.examScores[subject][exam] || 0), 0);
        return total / exams.length;
    });
    const classAverages = subjects.map((subject) => {
        const total = exams.reduce((sum, exam) => sum + (props.data.scholastic.classAverages[subject][exam] || 0), 0);
        return total / exams.length;
    });
    return {
        subjects,
        studentScores,
        classAverages,
    };
});
const generatePDF = () => {
    const element = document.getElementById("report-preview");
    if (!element)
        return;
    const opt = {
        margin: 1,
        filename: `${props.type}-report.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: "in",
            format: orientation.value === "portrait" ? "a4" : "a4",
            orientation: orientation.value,
        },
    };
    html2pdf().set(opt).from(element).save();
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.show) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl p-6 w-full max-w-6xl h-[90vh] flex gap-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-80 border-r border-gray-200 pr-6 overflow-y-auto") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.show)))
                    return;
                __VLS_ctx.emit('close');
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-sm font-medium text-gray-700 mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [template] of __VLS_getVForSourceType((__VLS_ctx.templates))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.show)))
                        return;
                    __VLS_ctx.selectedTemplate = template.id;
                } },
            key: ((template.id)),
            ...{ class: ("border rounded-xl p-4 cursor-pointer transition-colors") },
            ...{ class: ((__VLS_ctx.selectedTemplate === template.id
                    ? 'border-[#0447A8] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300')) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (template.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (template.description);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-sm font-medium text-gray-700 mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("flex items-center gap-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("checkbox"),
        ...{ class: ("rounded text-[#0447A8]") },
    });
    (__VLS_ctx.showHeader);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("flex items-center gap-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("checkbox"),
        ...{ class: ("rounded text-[#0447A8]") },
    });
    (__VLS_ctx.showLogo);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("flex items-center gap-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("checkbox"),
        ...{ class: ("rounded text-[#0447A8]") },
    });
    (__VLS_ctx.showFooter);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("flex items-center gap-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("checkbox"),
        ...{ class: ("rounded text-[#0447A8]") },
    });
    (__VLS_ctx.showCharts);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-sm font-medium text-gray-700 mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.orientation)),
        ...{ class: ("w-full px-3 py-2 border border-gray-200 rounded-lg") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("portrait"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("landscape"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.generatePDF) },
        ...{ class: ("w-full px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-1 overflow-y-auto") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white shadow-lg max-w-[21cm] mx-auto") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        id: ("report-preview"),
        ...{ class: ("p-8") },
    });
    if (__VLS_ctx.showHeader) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-center mb-8") },
        });
        if (__VLS_ctx.showLogo) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mb-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
                src: ((__VLS_ctx.logoSrc)),
                alt: ("School Logo"),
                ...{ class: ("h-16 mx-auto") },
            });
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
            ...{ class: ("text-2xl font-bold") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-600") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600 mt-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-bold") },
    });
    (props.type === "student"
        ? "Student Progress Report"
        : "Class Performance Report");
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-8") },
    });
    if (props.type === 'student') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (__VLS_ctx.data.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (__VLS_ctx.data.class);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (__VLS_ctx.data.rollNo);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (__VLS_ctx.data.section);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-xl font-bold border-b pb-2") },
    });
    if (__VLS_ctx.showCharts && __VLS_ctx.examData && __VLS_ctx.subjectData) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-6") },
        });
        if (props.type === 'student') {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
                ...{ class: ("font-bold mb-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("grid grid-cols-2 gap-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("aspect-[4/3] bg-white shadow rounded-lg p-4") },
            });
            // @ts-ignore
            /** @type { [typeof ExamPerformanceChart, ] } */ ;
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(ExamPerformanceChart, new ExamPerformanceChart({
                studentScores: ((__VLS_ctx.examData.studentScores)),
                classAverages: ((__VLS_ctx.examData.classAverages)),
            }));
            const __VLS_1 = __VLS_0({
                studentScores: ((__VLS_ctx.examData.studentScores)),
                classAverages: ((__VLS_ctx.examData.classAverages)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_0));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("aspect-[4/3] bg-white shadow rounded-lg p-4") },
            });
            // @ts-ignore
            /** @type { [typeof SubjectPerformanceChart, ] } */ ;
            // @ts-ignore
            const __VLS_5 = __VLS_asFunctionalComponent(SubjectPerformanceChart, new SubjectPerformanceChart({
                subjects: ((__VLS_ctx.subjectData.subjects)),
                studentScores: ((__VLS_ctx.subjectData.studentScores)),
                classAverages: ((__VLS_ctx.subjectData.classAverages)),
            }));
            const __VLS_6 = __VLS_5({
                subjects: ((__VLS_ctx.subjectData.subjects)),
                studentScores: ((__VLS_ctx.subjectData.studentScores)),
                classAverages: ((__VLS_ctx.subjectData.classAverages)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: ("w-full") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({
        ...{ class: ("bg-gray-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-2 text-left") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-2 text-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-2 text-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-2 text-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-2 text-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-2 text-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-2 text-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
        ...{ class: ("divide-y divide-gray-200") },
    });
    for (const [subject] of __VLS_getVForSourceType((Object.keys(__VLS_ctx.data.scholastic?.examScores || {})))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: ((subject)),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-2") },
        });
        (subject);
        for (const [exam] of __VLS_getVForSourceType(([
            'FA1',
            'FA2',
            'SA1',
            'FA3',
            'FA4',
            'SA2',
        ]))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                key: ((exam)),
                ...{ class: ("px-4 py-2 text-center") },
            });
            (__VLS_ctx.data.scholastic?.examScores[subject][exam] || "-");
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    for (const [subjectData, subject] of __VLS_getVForSourceType((__VLS_ctx.data.scholastic
        ?.subjectPerformance))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((subject)),
            ...{ class: ("p-4 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium mb-2") },
        });
        (subject);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-2") },
        });
        for (const [activity] of __VLS_getVForSourceType((subjectData.activities))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((activity.name)),
                ...{ class: ("flex justify-between text-sm") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (activity.name);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (activity.score);
            (activity.timeSpent);
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-xl font-bold border-b pb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    for (const [activity] of __VLS_getVForSourceType((__VLS_ctx.data.coScholastic?.activities))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((activity.name)),
            ...{ class: ("p-4 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-center mb-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (activity.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm") },
        });
        (activity.level);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-1 text-sm text-gray-600") },
        });
        for (const [achievement] of __VLS_getVForSourceType((activity.achievements))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((achievement)),
            });
            (achievement);
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-3 gap-4") },
    });
    for (const [badge] of __VLS_getVForSourceType((__VLS_ctx.data.coScholastic?.badges))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((badge.name)),
            ...{ class: ("flex items-center gap-3 p-3 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-2xl") },
        });
        (badge.icon);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (badge.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (new Date(badge.date).toLocaleDateString());
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-xl font-bold border-b pb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-3 gap-4") },
    });
    for (const [value, key] of __VLS_getVForSourceType((__VLS_ctx.data.health?.profile))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((key)),
            ...{ class: ("p-3 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600 capitalize") },
        });
        (key);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (Array.isArray(value) ? value.join(", ") : value);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    for (const [value, metric] of __VLS_getVForSourceType((__VLS_ctx.data.health?.wellbeing))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((metric)),
            ...{ class: ("flex justify-between items-center p-3 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium capitalize") },
        });
        (String(metric)
            .replace(/([A-Z])/g, " $1")
            .trim());
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("px-2 py-1 rounded-lg text-sm") },
            ...{ class: (({
                    'bg-green-50 text-green-700': value === 'Low' ||
                        value === 'Normal' ||
                        value === 'Positive',
                    'bg-yellow-50 text-yellow-700': value === 'Moderate',
                    'bg-red-50 text-red-700': value === 'High' || value === 'Negative',
                })) },
        });
        (value);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    for (const [screening] of __VLS_getVForSourceType((__VLS_ctx.data.health?.screenings))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((screening.type)),
            ...{ class: ("p-3 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-center") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (screening.type);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (new Date(screening.date).toLocaleDateString());
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("px-2 py-1 rounded-lg text-sm") },
            ...{ class: (({
                    'bg-green-50 text-green-700': screening.result === 'Normal' ||
                        screening.result === 'Good',
                    'bg-yellow-50 text-yellow-700': screening.result === 'Fair',
                    'bg-red-50 text-red-700': screening.result === 'Poor',
                })) },
        });
        (screening.result);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-xl font-bold border-b pb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    for (const [achievement] of __VLS_getVForSourceType((__VLS_ctx.data.achievements?.scholastic))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((achievement.title)),
            ...{ class: ("flex items-start gap-3 p-4 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-2xl") },
        });
        (achievement.badge);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (achievement.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600 mt-1") },
        });
        (achievement.description);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-500 mt-1") },
        });
        (new Date(achievement.date).toLocaleDateString());
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    for (const [achievement] of __VLS_getVForSourceType((__VLS_ctx.data.achievements?.coScholastic))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((achievement.title)),
            ...{ class: ("flex items-start gap-3 p-4 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-2xl") },
        });
        (achievement.badge);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (achievement.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600 mt-1") },
        });
        (achievement.description);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-500 mt-1") },
        });
        (new Date(achievement.date).toLocaleDateString());
    }
    if (__VLS_ctx.showFooter) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-8 pt-8 border-t") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between text-sm text-gray-600") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (new Date().toLocaleDateString());
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    }
}
['fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-6xl', 'h-[90vh]', 'flex', 'gap-6', 'w-80', 'border-r', 'border-gray-200', 'pr-6', 'overflow-y-auto', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-xl', 'font-bold', 'text-gray-500', 'hover:text-gray-700', 'space-y-6', 'text-sm', 'font-medium', 'text-gray-700', 'mb-2', 'space-y-2', 'border', 'rounded-xl', 'p-4', 'cursor-pointer', 'transition-colors', 'font-medium', 'text-sm', 'text-gray-600', 'text-sm', 'font-medium', 'text-gray-700', 'mb-2', 'space-y-3', 'flex', 'items-center', 'gap-2', 'rounded', 'text-[#0447A8]', 'flex', 'items-center', 'gap-2', 'rounded', 'text-[#0447A8]', 'flex', 'items-center', 'gap-2', 'rounded', 'text-[#0447A8]', 'flex', 'items-center', 'gap-2', 'rounded', 'text-[#0447A8]', 'text-sm', 'font-medium', 'text-gray-700', 'mb-2', 'space-y-3', 'block', 'text-sm', 'mb-1', 'w-full', 'px-3', 'py-2', 'border', 'border-gray-200', 'rounded-lg', 'w-full', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'flex-1', 'overflow-y-auto', 'bg-white', 'shadow-lg', 'max-w-[21cm]', 'mx-auto', 'p-8', 'text-center', 'mb-8', 'mb-4', 'h-16', 'mx-auto', 'text-2xl', 'font-bold', 'text-gray-600', 'text-sm', 'text-gray-600', 'mt-2', 'text-center', 'mb-6', 'text-xl', 'font-bold', 'text-sm', 'text-gray-600', 'space-y-8', 'grid', 'grid-cols-2', 'gap-4', 'p-4', 'bg-gray-50', 'rounded-xl', 'text-sm', 'text-gray-600', 'font-medium', 'text-sm', 'text-gray-600', 'font-medium', 'text-sm', 'text-gray-600', 'font-medium', 'text-sm', 'text-gray-600', 'font-medium', 'space-y-6', 'text-xl', 'font-bold', 'border-b', 'pb-2', 'space-y-6', 'font-bold', 'mb-4', 'grid', 'grid-cols-2', 'gap-4', 'aspect-[4/3]', 'bg-white', 'shadow', 'rounded-lg', 'p-4', 'aspect-[4/3]', 'bg-white', 'shadow', 'rounded-lg', 'p-4', 'space-y-4', 'font-bold', 'w-full', 'bg-gray-50', 'px-4', 'py-2', 'text-left', 'px-4', 'py-2', 'text-center', 'px-4', 'py-2', 'text-center', 'px-4', 'py-2', 'text-center', 'px-4', 'py-2', 'text-center', 'px-4', 'py-2', 'text-center', 'px-4', 'py-2', 'text-center', 'divide-y', 'divide-gray-200', 'px-4', 'py-2', 'px-4', 'py-2', 'text-center', 'space-y-4', 'font-bold', 'grid', 'grid-cols-2', 'gap-4', 'p-4', 'bg-gray-50', 'rounded-xl', 'font-medium', 'mb-2', 'space-y-2', 'flex', 'justify-between', 'text-sm', 'space-y-6', 'text-xl', 'font-bold', 'border-b', 'pb-2', 'space-y-4', 'font-bold', 'grid', 'grid-cols-2', 'gap-4', 'p-4', 'bg-gray-50', 'rounded-xl', 'flex', 'justify-between', 'items-center', 'mb-2', 'font-medium', 'px-2', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded-lg', 'text-sm', 'space-y-1', 'text-sm', 'text-gray-600', 'space-y-4', 'font-bold', 'grid', 'grid-cols-3', 'gap-4', 'flex', 'items-center', 'gap-3', 'p-3', 'bg-gray-50', 'rounded-xl', 'text-2xl', 'font-medium', 'text-sm', 'text-gray-600', 'space-y-6', 'text-xl', 'font-bold', 'border-b', 'pb-2', 'space-y-4', 'font-bold', 'grid', 'grid-cols-3', 'gap-4', 'p-3', 'bg-gray-50', 'rounded-xl', 'text-sm', 'text-gray-600', 'capitalize', 'font-medium', 'space-y-4', 'font-bold', 'grid', 'grid-cols-2', 'gap-4', 'flex', 'justify-between', 'items-center', 'p-3', 'bg-gray-50', 'rounded-xl', 'font-medium', 'capitalize', 'px-2', 'py-1', 'rounded-lg', 'text-sm', 'bg-green-50', 'text-green-700', 'bg-yellow-50', 'text-yellow-700', 'bg-red-50', 'text-red-700', 'space-y-4', 'font-bold', 'grid', 'grid-cols-2', 'gap-4', 'p-3', 'bg-gray-50', 'rounded-xl', 'flex', 'justify-between', 'items-center', 'font-medium', 'text-sm', 'text-gray-600', 'px-2', 'py-1', 'rounded-lg', 'text-sm', 'bg-green-50', 'text-green-700', 'bg-yellow-50', 'text-yellow-700', 'bg-red-50', 'text-red-700', 'space-y-6', 'text-xl', 'font-bold', 'border-b', 'pb-2', 'space-y-4', 'font-bold', 'space-y-3', 'flex', 'items-start', 'gap-3', 'p-4', 'bg-gray-50', 'rounded-xl', 'text-2xl', 'font-medium', 'text-sm', 'text-gray-600', 'mt-1', 'text-sm', 'text-gray-500', 'mt-1', 'space-y-4', 'font-bold', 'space-y-3', 'flex', 'items-start', 'gap-3', 'p-4', 'bg-gray-50', 'rounded-xl', 'text-2xl', 'font-medium', 'text-sm', 'text-gray-600', 'mt-1', 'text-sm', 'text-gray-500', 'mt-1', 'mt-8', 'pt-8', 'border-t', 'flex', 'justify-between', 'text-sm', 'text-gray-600',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            logoSrc: logoSrc,
            ExamPerformanceChart: ExamPerformanceChart,
            SubjectPerformanceChart: SubjectPerformanceChart,
            emit: emit,
            selectedTemplate: selectedTemplate,
            showHeader: showHeader,
            showLogo: showLogo,
            showFooter: showFooter,
            showCharts: showCharts,
            orientation: orientation,
            templates: templates,
            examData: examData,
            subjectData: subjectData,
            generatePDF: generatePDF,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
