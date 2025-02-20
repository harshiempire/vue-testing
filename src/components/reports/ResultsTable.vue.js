import { ref } from 'vue';
import { useSubjectStore } from '@/stores/subject';
const props = defineProps();
const subjectStore = useSubjectStore();
const tabs = ['Activities', 'MCQ Tests', 'Exams'];
const activeTab = ref(tabs[0]);
const getStudentScore = (studentId, exam) => {
    const student = subjectStore.students.find(s => s.id === studentId);
    return student?.scores[exam] || '-';
};
const getAssessmentScore = (studentId) => {
    return {
        self: 4,
        peer: 4.5,
        teacher: 4
    };
};
const getMCQScore = (studentId) => {
    return {
        score: 85,
        total: 100,
        accuracy: '85%',
        timeSpent: '45 min'
    };
};
const getLevel = (score) => {
    if (score >= 90)
        return { label: 'Advanced', color: 'green' };
    if (score >= 75)
        return { label: 'Proficient', color: 'blue' };
    return { label: 'Beginner', color: 'yellow' };
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.activeTab = tab;
            } },
        key: ((tab)),
        ...{ class: ("px-4 py-2 rounded-xl") },
        ...{ class: ((__VLS_ctx.activeTab === tab ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700')) },
    });
    (tab);
}
if (__VLS_ctx.activeTab === 'Activities') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] overflow-hidden") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: ("w-full") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({
        ...{ class: ("bg-gray-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
        ...{ class: ("divide-y divide-gray-200") },
    });
    for (const [student] of __VLS_getVForSourceType((__VLS_ctx.students))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: ((student.id)),
            ...{ class: ("hover:bg-gray-50") },
        });
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.selectedStudent || __VLS_ctx.selectedStudent === student.id) }, null, null);
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
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-center") },
        });
        (__VLS_ctx.getAssessmentScore(student.id).self);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-center") },
        });
        (__VLS_ctx.getAssessmentScore(student.id).peer);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-center") },
        });
        (__VLS_ctx.getAssessmentScore(student.id).teacher);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3 text-center") },
        });
        (((__VLS_ctx.getAssessmentScore(student.id).self +
            __VLS_ctx.getAssessmentScore(student.id).peer +
            __VLS_ctx.getAssessmentScore(student.id).teacher) / 3).toFixed(1));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-center") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-1 text-sm rounded-lg") },
            ...{ class: (({
                    'bg-green-50 text-green-700': __VLS_ctx.getLevel(85).color === 'green',
                    'bg-blue-50 text-blue-700': __VLS_ctx.getLevel(85).color === 'blue',
                    'bg-yellow-50 text-yellow-700': __VLS_ctx.getLevel(85).color === 'yellow'
                })) },
        });
        (__VLS_ctx.getLevel(85).label);
    }
}
else if (__VLS_ctx.activeTab === 'MCQ Tests') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] overflow-hidden") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: ("w-full") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({
        ...{ class: ("bg-gray-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
        ...{ class: ("divide-y divide-gray-200") },
    });
    for (const [student] of __VLS_getVForSourceType((__VLS_ctx.students))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: ((student.id)),
            ...{ class: ("hover:bg-gray-50") },
        });
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.selectedStudent || __VLS_ctx.selectedStudent === student.id) }, null, null);
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
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3 text-center") },
        });
        (__VLS_ctx.getMCQScore(student.id).score);
        (__VLS_ctx.getMCQScore(student.id).total);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3 text-center") },
        });
        (__VLS_ctx.getMCQScore(student.id).accuracy);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3 text-center") },
        });
        (__VLS_ctx.getMCQScore(student.id).timeSpent);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-center") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-1 text-sm rounded-lg") },
            ...{ class: (({
                    'bg-green-50 text-green-700': __VLS_ctx.getLevel(85).color === 'green',
                    'bg-blue-50 text-blue-700': __VLS_ctx.getLevel(85).color === 'blue',
                    'bg-yellow-50 text-yellow-700': __VLS_ctx.getLevel(85).color === 'yellow'
                })) },
        });
        (__VLS_ctx.getLevel(85).label);
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] overflow-hidden") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: ("w-full") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({
        ...{ class: ("bg-gray-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
        ...{ class: ("divide-y divide-gray-200") },
    });
    for (const [student] of __VLS_getVForSourceType((__VLS_ctx.students))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: ((student.id)),
            ...{ class: ("hover:bg-gray-50") },
        });
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.selectedStudent || __VLS_ctx.selectedStudent === student.id) }, null, null);
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
        for (const [exam] of __VLS_getVForSourceType((['FA1', 'FA2', 'SA1', 'FA3', 'FA4', 'SA2', 'SAFAL']))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                key: ((exam)),
                ...{ class: ("px-4 py-3 text-center") },
            });
            (__VLS_ctx.getStudentScore(student.id, exam));
        }
    }
}
['space-y-6', 'flex', 'gap-4', 'px-4', 'py-2', 'rounded-xl', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'overflow-hidden', 'w-full', 'bg-gray-50', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'divide-y', 'divide-gray-200', 'hover:bg-gray-50', 'px-4', 'py-3', 'font-medium', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'flex', 'justify-center', 'px-4', 'py-3', 'flex', 'justify-center', 'px-4', 'py-3', 'flex', 'justify-center', 'px-4', 'py-3', 'text-center', 'px-4', 'py-3', 'flex', 'justify-center', 'px-2', 'py-1', 'text-sm', 'rounded-lg', 'bg-green-50', 'text-green-700', 'bg-blue-50', 'text-blue-700', 'bg-yellow-50', 'text-yellow-700', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'overflow-hidden', 'w-full', 'bg-gray-50', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'divide-y', 'divide-gray-200', 'hover:bg-gray-50', 'px-4', 'py-3', 'font-medium', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'text-center', 'px-4', 'py-3', 'text-center', 'px-4', 'py-3', 'text-center', 'px-4', 'py-3', 'flex', 'justify-center', 'px-2', 'py-1', 'text-sm', 'rounded-lg', 'bg-green-50', 'text-green-700', 'bg-blue-50', 'text-blue-700', 'bg-yellow-50', 'text-yellow-700', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'overflow-hidden', 'w-full', 'bg-gray-50', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'divide-y', 'divide-gray-200', 'hover:bg-gray-50', 'px-4', 'py-3', 'font-medium', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'text-center',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            tabs: tabs,
            activeTab: activeTab,
            getStudentScore: getStudentScore,
            getAssessmentScore: getAssessmentScore,
            getMCQScore: getMCQScore,
            getLevel: getLevel,
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
