import { computed } from "vue";
import DashboardCard from "@/components/dashboard/DashboardCard.vue";
import ActivityCompletionChart from "@/components/reports/ActivityCompletionChart.vue";
import PerformanceChart from "@/components/reports/PerformanceChart.vue";
const props = defineProps();
// Mock class data
const classData = computed(() => ({
    scholastic: {
        activityCompletion: {
            completed: 85,
            total: 100,
            pending: 15,
        },
        eventParticipation: {
            participated: 75,
            total: 100,
        },
        subjectPerformance: {
            Mathematics: {
                average: 82,
                emergent: 5,
                transitional: 20,
                proficient: 15,
            },
            Science: {
                average: 78,
                emergent: 8,
                transitional: 18,
                proficient: 14,
            },
        },
        classPerformance: {
            acceptable: 65,
            needsImprovement: 25,
            unacceptable: 10,
        },
    },
    coScholastic: {
        participation: {
            total: 40,
            participating: 32,
            activities: [
                { name: "Dance", participants: 15 },
                { name: "Music", participants: 12 },
                { name: "Art", participants: 18 },
                { name: "Sports", participants: 25 },
            ],
        },
    },
    health: {
        bmiDistribution: {
            underweight: 5,
            normal: 25,
            overweight: 8,
            obese: 2,
        },
        wellbeingStats: {
            stressLevels: {
                low: 20,
                moderate: 15,
                high: 5,
            },
            anxietyLevels: {
                normal: 30,
                mild: 8,
                severe: 2,
            },
        },
    },
}));
const transformClassData = (data) => {
    return {
        labels: ["Acceptable", "Needs Improvement", "Unacceptable"],
        datasets: [
            {
                label: "Students",
                data: [data.acceptable, data.needsImprovement, data.unacceptable],
                borderColor: "#4F46E5",
                backgroundColor: "#818CF8",
            },
        ],
    };
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-6") },
});
if (__VLS_ctx.activeTab === 'scholastic') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-6") },
    });
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Class Activity Completion"),
    }));
    const __VLS_1 = __VLS_0({
        title: ("Class Activity Completion"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    /** @type { [typeof ActivityCompletionChart, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ActivityCompletionChart, new ActivityCompletionChart({
        data: ((__VLS_ctx.classData.scholastic.activityCompletion)),
    }));
    const __VLS_6 = __VLS_5({
        data: ((__VLS_ctx.classData.scholastic.activityCompletion)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_4.slots.default;
    var __VLS_4;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Class Performance Distribution"),
    }));
    const __VLS_11 = __VLS_10({
        title: ("Class Performance Distribution"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    // @ts-ignore
    /** @type { [typeof PerformanceChart, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(PerformanceChart, new PerformanceChart({
        data: ((__VLS_ctx.transformClassData(__VLS_ctx.classData.scholastic.classPerformance))),
    }));
    const __VLS_16 = __VLS_15({
        data: ((__VLS_ctx.transformClassData(__VLS_ctx.classData.scholastic.classPerformance))),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_14.slots.default;
    var __VLS_14;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Subject-wise Performance"),
    }));
    const __VLS_21 = __VLS_20({
        title: ("Subject-wise Performance"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [data, subject] of __VLS_getVForSourceType((__VLS_ctx.classData.scholastic.subjectPerformance))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((subject)),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-center mb-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (subject);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (data.average);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex gap-2 text-sm") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex-1 p-2 bg-red-50 text-red-700 rounded-lg text-center") },
        });
        (data.emergent);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex-1 p-2 bg-yellow-50 text-yellow-700 rounded-lg text-center") },
        });
        (data.transitional);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex-1 p-2 bg-green-50 text-green-700 rounded-lg text-center") },
        });
        (data.proficient);
    }
    __VLS_24.slots.default;
    var __VLS_24;
}
else if (__VLS_ctx.activeTab === 'co-scholastic') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-6") },
    });
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Activity Participation"),
    }));
    const __VLS_26 = __VLS_25({
        title: ("Activity Participation"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-3xl font-bold text-[#0447A8]") },
    });
    (Math.round((__VLS_ctx.classData.coScholastic.participation.participating /
        __VLS_ctx.classData.coScholastic.participation.total) *
        100));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-500") },
    });
    (__VLS_ctx.classData.coScholastic.participation.participating);
    (__VLS_ctx.classData.coScholastic.participation.total);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    for (const [activity] of __VLS_getVForSourceType((__VLS_ctx.classData.coScholastic.participation
        .activities))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((activity.name)),
            ...{ class: ("flex items-center justify-between p-3 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (activity.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (activity.participants);
    }
    __VLS_29.slots.default;
    var __VLS_29;
}
else if (__VLS_ctx.activeTab === 'health') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-6") },
    });
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("BMI Distribution"),
    }));
    const __VLS_31 = __VLS_30({
        title: ("BMI Distribution"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    for (const [count, category] of __VLS_getVForSourceType((__VLS_ctx.classData.health.bmiDistribution))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((category)),
            ...{ class: ("flex items-center justify-between p-3 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium capitalize") },
        });
        (category);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm") },
        });
        (count);
    }
    __VLS_34.slots.default;
    var __VLS_34;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Well-being Statistics"),
    }));
    const __VLS_36 = __VLS_35({
        title: ("Well-being Statistics"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [count, level] of __VLS_getVForSourceType((__VLS_ctx.classData.health.wellbeingStats
        .stressLevels))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((level)),
            ...{ class: ("flex items-center justify-between p-2 bg-gray-50 rounded-lg") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("capitalize") },
        });
        (level);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (count);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [count, level] of __VLS_getVForSourceType((__VLS_ctx.classData.health.wellbeingStats
        .anxietyLevels))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((level)),
            ...{ class: ("flex items-center justify-between p-2 bg-gray-50 rounded-lg") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("capitalize") },
        });
        (level);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (count);
    }
    __VLS_39.slots.default;
    var __VLS_39;
}
['space-y-6', 'grid', 'grid-cols-2', 'gap-6', 'space-y-4', 'flex', 'justify-between', 'items-center', 'mb-2', 'font-medium', 'text-sm', 'text-gray-600', 'flex', 'gap-2', 'text-sm', 'flex-1', 'p-2', 'bg-red-50', 'text-red-700', 'rounded-lg', 'text-center', 'flex-1', 'p-2', 'bg-yellow-50', 'text-yellow-700', 'rounded-lg', 'text-center', 'flex-1', 'p-2', 'bg-green-50', 'text-green-700', 'rounded-lg', 'text-center', 'grid', 'grid-cols-2', 'gap-6', 'space-y-4', 'text-center', 'mb-6', 'text-3xl', 'font-bold', 'text-[#0447A8]', 'text-sm', 'text-gray-500', 'space-y-3', 'flex', 'items-center', 'justify-between', 'p-3', 'bg-gray-50', 'rounded-xl', 'font-medium', 'text-sm', 'text-gray-600', 'grid', 'grid-cols-2', 'gap-6', 'space-y-3', 'flex', 'items-center', 'justify-between', 'p-3', 'bg-gray-50', 'rounded-xl', 'font-medium', 'capitalize', 'text-sm', 'space-y-4', 'font-medium', 'mb-2', 'space-y-2', 'flex', 'items-center', 'justify-between', 'p-2', 'bg-gray-50', 'rounded-lg', 'capitalize', 'font-medium', 'mb-2', 'space-y-2', 'flex', 'items-center', 'justify-between', 'p-2', 'bg-gray-50', 'rounded-lg', 'capitalize',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DashboardCard: DashboardCard,
            ActivityCompletionChart: ActivityCompletionChart,
            PerformanceChart: PerformanceChart,
            classData: classData,
            transformClassData: transformClassData,
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
