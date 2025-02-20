import { computed } from "vue";
import DashboardCard from "@/components/dashboard/DashboardCard.vue";
import ExamPerformanceChart from "@/components/reports/ExamPerformanceChart.vue";
import SubjectPerformanceChart from "@/components/reports/SubjectPerformanceChart.vue";
const props = defineProps();
const defaultClassAverages = {
    FA1: 0,
    FA2: 0,
    SA1: 0,
    FA3: 0,
    FA4: 0,
    SA2: 0,
};
// Mock student data - In real app, this would come from a store
const studentData = computed(() => ({
    id: props.studentId,
    scholastic: {
        examScores: {
            Mathematics: {
                FA1: 85,
                FA2: 78,
                SA1: 92,
                FA3: 88,
                FA4: 82,
                SA2: 90,
            },
            Science: {
                FA1: 75,
                FA2: 82,
                SA1: 88,
                FA3: 85,
                FA4: 80,
                SA2: 87,
            },
            English: {
                FA1: 88,
                FA2: 85,
                SA1: 90,
                FA3: 92,
                FA4: 87,
                SA2: 91,
            },
        },
        classAverages: {
            Mathematics: {
                FA1: 75,
                FA2: 73,
                SA1: 78,
                FA3: 76,
                FA4: 75,
                SA2: 80,
            },
            Science: {
                FA1: 72,
                FA2: 75,
                SA1: 76,
                FA3: 78,
                FA4: 74,
                SA2: 77,
            },
            English: {
                FA1: 76,
                FA2: 78,
                SA1: 80,
                FA3: 82,
                FA4: 79,
                SA2: 83,
            },
        },
        activityCompletion: {
            completed: 15,
            total: 20,
            pending: 5,
        },
        subjectPerformance: {
            Mathematics: {
                average: 85,
                level: "Proficient",
                activities: [
                    { name: "Activity 1", score: 90, timeSpent: 45 },
                    { name: "Activity 2", score: 85, timeSpent: 30 },
                ],
            },
            Science: {
                average: 78,
                level: "Transitional",
                activities: [
                    { name: "Activity 1", score: 75, timeSpent: 50 },
                    { name: "Activity 2", score: 80, timeSpent: 40 },
                ],
            },
        },
        eventParticipation: [
            { name: "Science Fair", date: "2024-02-15", performance: "Winner" },
            { name: "Math Olympiad", date: "2024-03-01", performance: "Runner-up" },
        ],
    },
    coScholastic: {
        activities: [
            {
                name: "Classical Dance",
                level: "Advanced",
                achievements: ["Best Performer"],
            },
            {
                name: "Chess Club",
                level: "Intermediate",
                achievements: ["Tournament Winner"],
            },
        ],
        badges: [
            { name: "Creative Genius", icon: "🎨", date: "2024-02-10" },
            { name: "Team Player", icon: "🤝", date: "2024-03-01" },
        ],
    },
    health: {
        profile: {
            height: "155 cm",
            weight: "45 kg",
            bmi: 18.7,
            bloodGroup: "B+",
            allergies: ["None"],
        },
        wellbeing: {
            stressLevel: "Low",
            anxietyLevel: "Normal",
            mood: "Positive",
            lastAssessment: "2024-03-01",
        },
        screenings: [
            { type: "Vision", result: "Normal", date: "2024-02-15" },
            { type: "Dental", result: "Good", date: "2024-02-15" },
            { type: "Hearing", result: "Normal", date: "2024-02-15" },
        ],
    },
    achievements: {
        scholastic: [
            {
                title: "Mathematics Olympiad Winner",
                date: "2024-02-15",
                badge: "🏆",
                description: "First place in regional mathematics competition",
            },
        ],
        coScholastic: [
            {
                title: "Best Classical Dance Performance",
                date: "2024-03-01",
                badge: "🎭",
                description: "Outstanding performance in annual cultural fest",
            },
        ],
    },
}));
// Calculate overall exam averages
const examAverages = computed(() => {
    const subjects = Object.keys(studentData.value.scholastic.examScores);
    const exams = ["FA1", "FA2", "SA1", "FA3", "FA4", "SA2"];
    return exams.reduce((acc, exam) => {
        // Calculate student's average across all subjects for this exam
        const studentTotal = subjects.reduce((sum, subject) => sum + (studentData.value.scholastic.examScores[subject][exam] || 0), 0);
        const studentAvg = studentTotal / subjects.length;
        // Calculate class average across all subjects for this exam
        const classTotal = subjects.reduce((sum, subject) => sum +
            (studentData.value.scholastic.classAverages[subject][exam] || 0), 0);
        const classAvg = classTotal / subjects.length;
        return {
            student: { ...acc.student, [exam]: studentAvg },
            class: { ...acc.class, [exam]: classAvg },
        };
    }, { student: {}, class: {} });
});
// Calculate subject-wise averages
const subjectAverages = computed(() => {
    const subjects = Object.keys(studentData.value.scholastic.examScores);
    const exams = ["FA1", "FA2", "SA1", "FA3", "FA4", "SA2"];
    return {
        subjects,
        studentScores: subjects.map((subject) => {
            const total = exams.reduce((sum, exam) => sum + (studentData.value.scholastic.examScores[subject][exam] || 0), 0);
            return total / exams.length;
        }),
        classAverages: subjects.map((subject) => {
            const total = exams.reduce((sum, exam) => sum +
                (studentData.value.scholastic.classAverages[subject][exam] || 0), 0);
            return total / exams.length;
        }),
    };
});
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
        title: ("Overall Exam Performance"),
    }));
    const __VLS_1 = __VLS_0({
        title: ("Overall Exam Performance"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    /** @type { [typeof ExamPerformanceChart, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ExamPerformanceChart, new ExamPerformanceChart({
        studentScores: ((__VLS_ctx.examAverages.student)),
        classAverages: __VLS_ctx.examAverages.class,
    }));
    const __VLS_6 = __VLS_5({
        studentScores: ((__VLS_ctx.examAverages.student)),
        classAverages: __VLS_ctx.examAverages.class,
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_4.slots.default;
    var __VLS_4;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Subject-wise Performance"),
    }));
    const __VLS_11 = __VLS_10({
        title: ("Subject-wise Performance"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    // @ts-ignore
    /** @type { [typeof SubjectPerformanceChart, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(SubjectPerformanceChart, new SubjectPerformanceChart({
        subjects: ((__VLS_ctx.subjectAverages.subjects)),
        studentScores: ((__VLS_ctx.subjectAverages.studentScores)),
        classAverages: ((__VLS_ctx.subjectAverages.classAverages)),
    }));
    const __VLS_16 = __VLS_15({
        subjects: ((__VLS_ctx.subjectAverages.subjects)),
        studentScores: ((__VLS_ctx.subjectAverages.studentScores)),
        classAverages: ((__VLS_ctx.subjectAverages.classAverages)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_14.slots.default;
    var __VLS_14;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Activity Completion"),
    }));
    const __VLS_21 = __VLS_20({
        title: ("Activity Completion"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-3xl font-bold text-[#0447A8]") },
    });
    (Math.round((__VLS_ctx.studentData.scholastic.activityCompletion.completed /
        __VLS_ctx.studentData.scholastic.activityCompletion.total) *
        100));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
    (__VLS_ctx.studentData.scholastic.activityCompletion.completed);
    (__VLS_ctx.studentData.scholastic.activityCompletion.total);
    __VLS_24.slots.default;
    var __VLS_24;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Activity Performance"),
    }));
    const __VLS_26 = __VLS_25({
        title: ("Activity Performance"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [subject] of __VLS_getVForSourceType((Object.keys(__VLS_ctx.studentData.scholastic.subjectPerformance)))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((subject)),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("font-medium mb-2") },
        });
        (subject);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-2") },
        });
        for (const [activity] of __VLS_getVForSourceType((__VLS_ctx.studentData.scholastic.subjectPerformance[subject].activities))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((activity.name)),
                ...{ class: ("flex items-center justify-between p-2 bg-gray-50 rounded-lg") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("text-sm") },
            });
            (activity.name);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex items-center gap-4 text-sm") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (activity.score);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (activity.timeSpent);
        }
    }
    __VLS_29.slots.default;
    var __VLS_29;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Event Participation"),
    }));
    const __VLS_31 = __VLS_30({
        title: ("Event Participation"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    for (const [event] of __VLS_getVForSourceType((__VLS_ctx.studentData.scholastic.eventParticipation))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((event.name)),
            ...{ class: ("p-3 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (event.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-center mt-1 text-sm") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-gray-600") },
        });
        (new Date(event.date).toLocaleDateString());
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-[#0447A8]") },
        });
        (event.performance);
    }
    __VLS_34.slots.default;
    var __VLS_34;
}
else if (__VLS_ctx.activeTab === 'co-scholastic') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-6") },
    });
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Activities & Achievements"),
    }));
    const __VLS_36 = __VLS_35({
        title: ("Activities & Achievements"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [activity] of __VLS_getVForSourceType((__VLS_ctx.studentData.coScholastic.activities))) {
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
            ...{ class: ("space-y-1") },
        });
        for (const [achievement] of __VLS_getVForSourceType((activity.achievements))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((achievement)),
                ...{ class: ("text-sm text-gray-600") },
            });
            (achievement);
        }
    }
    __VLS_39.slots.default;
    var __VLS_39;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Badges Earned"),
    }));
    const __VLS_41 = __VLS_40({
        title: ("Badges Earned"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    for (const [badge] of __VLS_getVForSourceType((__VLS_ctx.studentData.coScholastic.badges))) {
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
    __VLS_44.slots.default;
    var __VLS_44;
}
else if (__VLS_ctx.activeTab === 'health') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-6") },
    });
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Health Profile"),
    }));
    const __VLS_46 = __VLS_45({
        title: ("Health Profile"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    for (const [value, key] of __VLS_getVForSourceType((__VLS_ctx.studentData.health.profile))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((key)),
            ...{ class: ("p-3 bg-gray-50 rounded-xl") },
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
    __VLS_49.slots.default;
    var __VLS_49;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Well-being Assessment"),
    }));
    const __VLS_51 = __VLS_50({
        title: ("Well-being Assessment"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [value, metric] of __VLS_getVForSourceType((__VLS_ctx.studentData.health.wellbeing))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((metric)),
            ...{ class: ("flex justify-between items-center p-3 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (metric);
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
    __VLS_54.slots.default;
    var __VLS_54;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Health Screenings"),
    }));
    const __VLS_56 = __VLS_55({
        title: ("Health Screenings"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    for (const [screening] of __VLS_getVForSourceType((__VLS_ctx.studentData.health.screenings))) {
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
    __VLS_59.slots.default;
    var __VLS_59;
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-6") },
    });
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_60 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Scholastic Achievements"),
    }));
    const __VLS_61 = __VLS_60({
        title: ("Scholastic Achievements"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_60));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [achievement] of __VLS_getVForSourceType((__VLS_ctx.studentData.achievements.scholastic))) {
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
    __VLS_64.slots.default;
    var __VLS_64;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Co-scholastic Achievements"),
    }));
    const __VLS_66 = __VLS_65({
        title: ("Co-scholastic Achievements"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [achievement] of __VLS_getVForSourceType((__VLS_ctx.studentData.achievements.coScholastic))) {
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
    __VLS_69.slots.default;
    var __VLS_69;
}
['space-y-6', 'grid', 'grid-cols-2', 'gap-6', 'text-center', 'mb-4', 'text-3xl', 'font-bold', 'text-[#0447A8]', 'text-sm', 'text-gray-600', 'space-y-4', 'font-medium', 'mb-2', 'space-y-2', 'flex', 'items-center', 'justify-between', 'p-2', 'bg-gray-50', 'rounded-lg', 'text-sm', 'flex', 'items-center', 'gap-4', 'text-sm', 'space-y-3', 'p-3', 'bg-gray-50', 'rounded-xl', 'font-medium', 'flex', 'justify-between', 'items-center', 'mt-1', 'text-sm', 'text-gray-600', 'text-[#0447A8]', 'grid', 'grid-cols-2', 'gap-6', 'space-y-4', 'p-4', 'bg-gray-50', 'rounded-xl', 'flex', 'justify-between', 'items-center', 'mb-2', 'font-medium', 'px-2', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded-lg', 'text-sm', 'space-y-1', 'text-sm', 'text-gray-600', 'space-y-3', 'flex', 'items-center', 'gap-3', 'p-3', 'bg-gray-50', 'rounded-xl', 'text-2xl', 'font-medium', 'text-sm', 'text-gray-600', 'grid', 'grid-cols-2', 'gap-6', 'grid', 'grid-cols-2', 'gap-4', 'p-3', 'bg-gray-50', 'rounded-xl', 'text-sm', 'text-gray-600', 'font-medium', 'space-y-4', 'flex', 'justify-between', 'items-center', 'p-3', 'bg-gray-50', 'rounded-xl', 'font-medium', 'px-2', 'py-1', 'rounded-lg', 'text-sm', 'bg-green-50', 'text-green-700', 'bg-yellow-50', 'text-yellow-700', 'bg-red-50', 'text-red-700', 'space-y-3', 'p-3', 'bg-gray-50', 'rounded-xl', 'flex', 'justify-between', 'items-center', 'font-medium', 'text-sm', 'text-gray-600', 'px-2', 'py-1', 'rounded-lg', 'text-sm', 'bg-green-50', 'text-green-700', 'bg-yellow-50', 'text-yellow-700', 'bg-red-50', 'text-red-700', 'grid', 'grid-cols-2', 'gap-6', 'space-y-4', 'flex', 'items-start', 'gap-3', 'p-4', 'bg-gray-50', 'rounded-xl', 'text-2xl', 'font-medium', 'text-sm', 'text-gray-600', 'mt-1', 'text-sm', 'text-gray-500', 'mt-1', 'space-y-4', 'flex', 'items-start', 'gap-3', 'p-4', 'bg-gray-50', 'rounded-xl', 'text-2xl', 'font-medium', 'text-sm', 'text-gray-600', 'mt-1', 'text-sm', 'text-gray-500', 'mt-1',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DashboardCard: DashboardCard,
            ExamPerformanceChart: ExamPerformanceChart,
            SubjectPerformanceChart: SubjectPerformanceChart,
            studentData: studentData,
            examAverages: examAverages,
            subjectAverages: subjectAverages,
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
