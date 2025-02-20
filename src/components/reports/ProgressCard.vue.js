import { computed } from 'vue';
import { useSubjectStore } from '@/stores/subject';
import { useAcademicsStore } from '@/stores/academics';
const props = defineProps();
const subjectStore = useSubjectStore();
const academicsStore = useAcademicsStore();
const student = computed(() => subjectStore.students.find(s => s.id === props.studentId));
const examScores = computed(() => {
    if (!student.value)
        return null;
    return {
        FA1: student.value.scores.FA1 || '-',
        FA2: student.value.scores.FA2 || '-',
        SA1: student.value.scores.SA1 || '-',
        FA3: student.value.scores.FA3 || '-',
        FA4: student.value.scores.FA4 || '-',
        SA2: student.value.scores.SA2 || '-'
    };
});
const getLevel = (score) => {
    if (score >= 90)
        return { label: 'Advanced', color: 'green' };
    if (score >= 75)
        return { label: 'Proficient', color: 'blue' };
    return { label: 'Beginner', color: 'yellow' };
};
const attendance = {
    present: 85,
    total: 95,
    percentage: Math.round((85 / 95) * 100)
};
const healthProfile = {
    height: '145 cm',
    weight: '35 kg',
    bmi: '16.6',
    bloodGroup: 'B+',
    vision: 'Normal'
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.student) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-8") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center space-y-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-2xl font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
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
    (__VLS_ctx.student.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("font-medium") },
    });
    (__VLS_ctx.student.rollNo);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("border rounded-xl p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-3 gap-4") },
    });
    for (const [value, key] of __VLS_getVForSourceType((__VLS_ctx.healthProfile))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((key)),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (key);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (value);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("border rounded-xl p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-8") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("h-2 bg-gray-200 rounded-full overflow-hidden") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("h-full bg-[#0447A8]") },
        ...{ style: (({ width: `${__VLS_ctx.attendance.percentage}%` })) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-right") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("font-medium") },
    });
    (__VLS_ctx.attendance.percentage);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
    (__VLS_ctx.attendance.present);
    (__VLS_ctx.attendance.total);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("border rounded-xl p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: ("w-full") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({
        ...{ class: ("bg-gray-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-2 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-2 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-2 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
        ...{ class: ("divide-y divide-gray-200") },
    });
    for (const [score, exam] of __VLS_getVForSourceType((__VLS_ctx.examScores))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: ((exam)),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-2") },
        });
        (exam);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-2 text-center") },
        });
        (score);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-center") },
        });
        if (score !== '-') {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("px-2 py-1 text-sm rounded-lg") },
                ...{ class: (({
                        'bg-green-50 text-green-700': __VLS_ctx.getLevel(Number(score)).color === 'green',
                        'bg-blue-50 text-blue-700': __VLS_ctx.getLevel(Number(score)).color === 'blue',
                        'bg-yellow-50 text-yellow-700': __VLS_ctx.getLevel(Number(score)).color === 'yellow'
                    })) },
            });
            (__VLS_ctx.getLevel(Number(score)).label);
        }
        else {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("border rounded-xl p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [activity] of __VLS_getVForSourceType((['Art & Craft', 'Music', 'Physical Education']))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((activity)),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-center") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (activity);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex gap-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-gray-300") },
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("border rounded-xl p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-gray-600") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center pt-8 border-t") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
    (new Date().toLocaleDateString());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
}
['space-y-8', 'text-center', 'space-y-2', 'text-2xl', 'font-bold', 'text-sm', 'text-gray-600', 'grid', 'grid-cols-2', 'gap-4', 'p-4', 'bg-gray-50', 'rounded-xl', 'text-sm', 'text-gray-600', 'font-medium', 'text-sm', 'text-gray-600', 'font-medium', 'border', 'rounded-xl', 'p-4', 'font-medium', 'mb-4', 'grid', 'grid-cols-3', 'gap-4', 'text-sm', 'text-gray-600', 'font-medium', 'border', 'rounded-xl', 'p-4', 'font-medium', 'mb-4', 'flex', 'items-center', 'gap-8', 'flex-1', 'h-2', 'bg-gray-200', 'rounded-full', 'overflow-hidden', 'h-full', 'bg-[#0447A8]', 'text-right', 'font-medium', 'text-sm', 'text-gray-600', 'border', 'rounded-xl', 'p-4', 'font-medium', 'mb-4', 'w-full', 'bg-gray-50', 'px-4', 'py-2', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-2', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-2', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'divide-y', 'divide-gray-200', 'px-4', 'py-2', 'px-4', 'py-2', 'text-center', 'px-4', 'py-2', 'flex', 'justify-center', 'px-2', 'py-1', 'text-sm', 'rounded-lg', 'bg-green-50', 'text-green-700', 'bg-blue-50', 'text-blue-700', 'bg-yellow-50', 'text-yellow-700', 'border', 'rounded-xl', 'p-4', 'font-medium', 'mb-4', 'space-y-4', 'flex', 'justify-between', 'items-center', 'flex', 'gap-1', 'text-gray-300', 'border', 'rounded-xl', 'p-4', 'font-medium', 'mb-4', 'text-gray-600', 'flex', 'justify-between', 'items-center', 'pt-8', 'border-t', 'text-sm', 'text-gray-600', 'text-sm', 'text-gray-600',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            student: student,
            examScores: examScores,
            getLevel: getLevel,
            attendance: attendance,
            healthProfile: healthProfile,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
