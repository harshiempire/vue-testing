import { ref, computed } from 'vue';
import { useJourneyStore } from '@/stores/journey';
import TimelineView from '@/components/journey/TimelineView.vue';
import PortfolioView from '@/components/journey/PortfolioView.vue';
import AchievementsView from '@/components/journey/AchievementsView.vue';
const journeyStore = useJourneyStore();
const activeTab = ref('timeline');
const selectedStudent = ref(null);
const showStudentList = ref(true);
// Mock student data with more details
const students = [
    {
        id: 'student1',
        name: 'Alice Johnson',
        class: '6A',
        rollNo: '6A01',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    },
    {
        id: 'student2',
        name: 'Bob Smith',
        class: '6A',
        rollNo: '6A02',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    },
    {
        id: 'student3',
        name: 'Charlie Brown',
        class: '6A',
        rollNo: '6A03',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    },
    {
        id: 'student4',
        name: 'Diana Miller',
        class: '6A',
        rollNo: '6A04',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diana',
    },
    {
        id: 'student5',
        name: 'Edward Wilson',
        class: '6A',
        rollNo: '6A05',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Edward',
    },
];
const handleStudentSelect = (studentId) => {
    selectedStudent.value = studentId;
    showStudentList.value = false;
};
const selectedStudentData = computed(() => {
    return students.find((s) => s.id === selectedStudent.value);
});
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
if (__VLS_ctx.selectedStudent && !__VLS_ctx.showStudentList) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-3 px-4 py-2 bg-white rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: ((__VLS_ctx.selectedStudentData?.avatar)),
        alt: ((__VLS_ctx.selectedStudentData?.name)),
        ...{ class: ("w-8 h-8 rounded-full") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("font-medium") },
    });
    (__VLS_ctx.selectedStudentData?.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-500") },
    });
    (__VLS_ctx.selectedStudentData?.rollNo);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.selectedStudent && !__VLS_ctx.showStudentList)))
                    return;
                __VLS_ctx.showStudentList = true;
            } },
        ...{ class: ("ml-4 text-[#0447A8] hover:underline text-sm") },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid gap-6") },
    ...{ class: ((__VLS_ctx.showStudentList ? 'grid-cols-12' : 'grid-cols-1')) },
});
if (__VLS_ctx.showStudentList) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("col-span-3 bg-white rounded-3xl border border-[#ECECEC] p-4 h-fit") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-lg font-semibold mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [student] of __VLS_getVForSourceType((__VLS_ctx.students))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.showStudentList)))
                        return;
                    __VLS_ctx.handleStudentSelect(student.id);
                } },
            key: ((student.id)),
            ...{ class: ("w-full p-3 rounded-xl transition-all duration-300 flex items-center gap-3") },
            ...{ class: ((__VLS_ctx.selectedStudent === student.id
                    ? 'bg-blue-50 border-2 border-[#0447A8]'
                    : 'hover:bg-gray-50 border-2 border-transparent')) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: ((student.avatar)),
            alt: ((student.name)),
            ...{ class: ("w-10 h-10 rounded-full") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-left") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (student.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-500") },
        });
        (student.rollNo);
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ((__VLS_ctx.showStudentList ? 'col-span-9' : 'col-span-full')) },
});
if (__VLS_ctx.selectedStudent) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex gap-4 mb-6") },
    });
    for (const [tab] of __VLS_getVForSourceType(['timeline', 'portfolio', 'achievements'])) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.selectedStudent)))
                        return;
                    __VLS_ctx.activeTab = tab;
                } },
            key: ((tab)),
            ...{ class: ("px-4 py-2 rounded-xl transition-all duration-300") },
            ...{ class: ((__VLS_ctx.activeTab === tab
                    ? 'bg-[#0447A8] text-white shadow-lg'
                    : 'bg-white text-gray-700')) },
        });
        (tab.charAt(0).toUpperCase() + tab.slice(1));
    }
    if (__VLS_ctx.activeTab === 'timeline') {
        // @ts-ignore
        /** @type { [typeof TimelineView, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(TimelineView, new TimelineView({
            studentId: ((__VLS_ctx.selectedStudent)),
        }));
        const __VLS_1 = __VLS_0({
            studentId: ((__VLS_ctx.selectedStudent)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    else if (__VLS_ctx.activeTab === 'portfolio') {
        // @ts-ignore
        /** @type { [typeof PortfolioView, ] } */ ;
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(PortfolioView, new PortfolioView({
            studentId: ((__VLS_ctx.selectedStudent)),
        }));
        const __VLS_6 = __VLS_5({
            studentId: ((__VLS_ctx.selectedStudent)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    else {
        // @ts-ignore
        /** @type { [typeof AchievementsView, ] } */ ;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(AchievementsView, new AchievementsView({
            studentId: ((__VLS_ctx.selectedStudent)),
        }));
        const __VLS_11 = __VLS_10({
            studentId: ((__VLS_ctx.selectedStudent)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-8 text-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-6xl mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-xl font-semibold mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-gray-600") },
    });
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'flex', 'items-center', 'gap-4', 'text-2xl', 'font-bold', 'flex', 'items-center', 'gap-3', 'px-4', 'py-2', 'bg-white', 'rounded-xl', 'w-8', 'h-8', 'rounded-full', 'font-medium', 'text-sm', 'text-gray-500', 'ml-4', 'text-[#0447A8]', 'hover:underline', 'text-sm', 'grid', 'gap-6', 'col-span-3', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-4', 'h-fit', 'text-lg', 'font-semibold', 'mb-4', 'space-y-2', 'w-full', 'p-3', 'rounded-xl', 'transition-all', 'duration-300', 'flex', 'items-center', 'gap-3', 'w-10', 'h-10', 'rounded-full', 'text-left', 'font-medium', 'text-sm', 'text-gray-500', 'flex', 'gap-4', 'mb-6', 'px-4', 'py-2', 'rounded-xl', 'transition-all', 'duration-300', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-8', 'text-center', 'text-6xl', 'mb-4', 'text-xl', 'font-semibold', 'mb-2', 'text-gray-600',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TimelineView: TimelineView,
            PortfolioView: PortfolioView,
            AchievementsView: AchievementsView,
            activeTab: activeTab,
            selectedStudent: selectedStudent,
            showStudentList: showStudentList,
            students: students,
            handleStudentSelect: handleStudentSelect,
            selectedStudentData: selectedStudentData,
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
