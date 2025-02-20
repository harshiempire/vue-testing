import { ref } from 'vue';
import { useSubjectStore } from '@/stores/subject';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
import ResourceUploader from '@/components/subject/ResourceUploader.vue';
const subjectStore = useSubjectStore();
const activeTab = ref('overview');
const showCreateNoticeModal = ref(false);
const showResourceUploader = ref(false);
const newNotice = ref({
    title: '',
    content: '',
    class: '6A',
    subject: 'Mathematics'
});
const selectedChapterId = ref('');
// Mock activity performance data
const activityPerformance = [
    {
        studentName: 'Alice Johnson',
        rollNo: '6A01',
        activities: [
            { name: 'Activity 1', score: 90, timeSpent: 45, status: 'completed' },
            { name: 'Activity 2', score: 85, timeSpent: 30, status: 'completed' },
            { name: 'Activity 3', score: null, timeSpent: null, status: 'pending' }
        ],
        averageScore: 87.5,
        completionRate: 66.7
    },
    {
        studentName: 'Bob Smith',
        rollNo: '6A02',
        activities: [
            { name: 'Activity 1', score: 75, timeSpent: 50, status: 'completed' },
            { name: 'Activity 2', score: 80, timeSpent: 35, status: 'completed' },
            { name: 'Activity 3', score: 88, timeSpent: 40, status: 'completed' }
        ],
        averageScore: 81,
        completionRate: 100
    },
    {
        studentName: 'Charlie Brown',
        rollNo: '6A03',
        activities: [
            { name: 'Activity 1', score: 95, timeSpent: 40, status: 'completed' },
            { name: 'Activity 2', score: null, timeSpent: null, status: 'pending' },
            { name: 'Activity 3', score: null, timeSpent: null, status: 'pending' }
        ],
        averageScore: 95,
        completionRate: 33.3
    }
];
const handleCreateNotice = () => {
    subjectStore.addNotice(newNotice.value);
    showCreateNoticeModal.value = false;
    newNotice.value = {
        title: '',
        content: '',
        class: '6A',
        subject: 'Mathematics'
    };
};
const handleResourceUpload = async (file, title, type) => {
    const fakeUrl = URL.createObjectURL(file);
    subjectStore.addResource(selectedChapterId.value, {
        title,
        type,
        url: fakeUrl
    });
    showResourceUploader.value = false;
};
const performanceGroups = subjectStore.getStudentsByPerformance();
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("text-2xl font-bold") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4 mb-6") },
});
for (const [tab] of __VLS_getVForSourceType((['overview', 'students', 'syllabus']))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.activeTab = tab;
            } },
        key: ((tab)),
        ...{ class: ("px-4 py-2 rounded-xl") },
        ...{ class: ((__VLS_ctx.activeTab === tab ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700')) },
    });
    (tab.charAt(0).toUpperCase() + tab.slice(1));
}
if (__VLS_ctx.activeTab === 'overview') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-6") },
    });
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Academic Performance"),
    }));
    const __VLS_1 = __VLS_0({
        title: ("Academic Performance"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-3xl font-bold mb-2") },
    });
    (Math.round(__VLS_ctx.subjectStore.averageClassScore));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
    __VLS_4.slots.default;
    var __VLS_4;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Upcoming Activities"),
    }));
    const __VLS_6 = __VLS_5({
        title: ("Upcoming Activities"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    for (const [activity] of __VLS_getVForSourceType((__VLS_ctx.subjectStore.upcomingActivities))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((activity.id)),
            ...{ class: ("flex justify-between items-center p-3 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (activity.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (new Date(activity.dueDate).toLocaleDateString());
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-3 py-1 text-sm rounded-lg") },
            ...{ class: (({
                    'bg-blue-50 text-blue-700': activity.type === 'test',
                    'bg-green-50 text-green-700': activity.type === 'assignment',
                    'bg-purple-50 text-purple-700': activity.type === 'activity'
                })) },
        });
        (activity.type);
    }
    __VLS_9.slots.default;
    var __VLS_9;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Activity Performance"),
    }));
    const __VLS_11 = __VLS_10({
        title: ("Activity Performance"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("overflow-x-auto") },
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
    for (const [i] of __VLS_getVForSourceType((3))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            key: ((i)),
            ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
        });
        (i);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-4 py-3 text-center text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
        ...{ class: ("divide-y divide-gray-200") },
    });
    for (const [student] of __VLS_getVForSourceType((__VLS_ctx.activityPerformance))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: ((student.rollNo)),
            ...{ class: ("hover:bg-gray-50") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (student.studentName);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-500") },
        });
        (student.rollNo);
        for (const [activity] of __VLS_getVForSourceType((student.activities))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                key: ((activity.name)),
                ...{ class: ("px-4 py-3 text-center") },
            });
            if (activity.status === 'completed') {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("font-medium") },
                });
                (activity.score);
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("text-sm text-gray-500") },
                });
                (activity.timeSpent);
            }
            else {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("text-sm text-gray-500") },
                });
            }
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3 text-center") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-1 text-sm rounded-lg") },
            ...{ class: (({
                    'bg-green-50 text-green-700': student.averageScore >= 85,
                    'bg-yellow-50 text-yellow-700': student.averageScore >= 70 && student.averageScore < 85,
                    'bg-red-50 text-red-700': student.averageScore < 70
                })) },
        });
        (student.averageScore);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-4 py-3 text-center") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-1 text-sm rounded-lg") },
            ...{ class: (({
                    'bg-green-50 text-green-700': student.completionRate === 100,
                    'bg-yellow-50 text-yellow-700': student.completionRate >= 50 && student.completionRate < 100,
                    'bg-red-50 text-red-700': student.completionRate < 50
                })) },
        });
        (student.completionRate);
    }
    __VLS_14.slots.default;
    var __VLS_14;
}
else if (__VLS_ctx.activeTab === 'students') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    for (const [group, status] of __VLS_getVForSourceType((__VLS_ctx.performanceGroups))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((status)),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-semibold mb-3 capitalize") },
        });
        (status);
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
            ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            ...{ class: ("px-4 py-3 text-left text-sm font-medium text-gray-700") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
            ...{ class: ("divide-y divide-gray-200") },
        });
        for (const [student] of __VLS_getVForSourceType((group))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
                key: ((student.id)),
                ...{ class: ("hover:bg-gray-50") },
            });
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
            (student.scores.FA1 || '-');
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-4 py-3") },
            });
            (student.scores.FA2 || '-');
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-4 py-3") },
            });
            (student.scores.SA1 || '-');
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-4 py-3") },
            });
            (student.scores.SA2 || '-');
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-4 py-3") },
            });
            (student.scores.FA3 || '-');
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-4 py-3") },
            });
            (student.scores.FA4 || '-');
        }
    }
}
else if (__VLS_ctx.activeTab === 'syllabus') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    for (const [chapter] of __VLS_getVForSourceType((__VLS_ctx.subjectStore.chapters))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((chapter.id)),
            ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-start mb-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-semibold") },
        });
        (chapter.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-3 py-1 text-sm rounded-lg") },
            ...{ class: ((chapter.completed ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700')) },
        });
        (chapter.completed ? 'Completed' : 'In Progress');
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(!((__VLS_ctx.activeTab === 'overview'))))
                        return;
                    if (!(!((__VLS_ctx.activeTab === 'students'))))
                        return;
                    if (!((__VLS_ctx.activeTab === 'syllabus')))
                        return;
                    __VLS_ctx.subjectStore.toggleChapterCompletion(chapter.id);
                } },
            ...{ class: ("px-3 py-1 text-sm rounded-lg border") },
            ...{ class: ((chapter.completed ? 'border-red-200 text-red-700' : 'border-green-200 text-green-700')) },
        });
        (chapter.completed ? 'Mark Incomplete' : 'Mark Complete');
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-4") },
        });
        if (chapter.resources.length > 0) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
                ...{ class: ("text-sm font-medium text-gray-700 mb-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex flex-wrap gap-2") },
            });
            for (const [resource] of __VLS_getVForSourceType((chapter.resources))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
                    key: ((resource.id)),
                    href: ((resource.url)),
                    target: ("_blank"),
                    ...{ class: ("px-3 py-1 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 flex items-center gap-2") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (resource.title);
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                    ...{ class: ("text-xs text-gray-500") },
                });
                (resource.type);
            }
        }
        if (__VLS_ctx.selectedChapterId === chapter.id) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            if (__VLS_ctx.showResourceUploader) {
                // @ts-ignore
                /** @type { [typeof ResourceUploader, ] } */ ;
                // @ts-ignore
                const __VLS_15 = __VLS_asFunctionalComponent(ResourceUploader, new ResourceUploader({
                    ...{ 'onUpload': {} },
                }));
                const __VLS_16 = __VLS_15({
                    ...{ 'onUpload': {} },
                }, ...__VLS_functionalComponentArgsRest(__VLS_15));
                let __VLS_20;
                const __VLS_21 = {
                    onUpload: (__VLS_ctx.handleResourceUpload)
                };
                let __VLS_17;
                let __VLS_18;
                var __VLS_19;
            }
            else {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("flex justify-end") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                    ...{ onClick: (...[$event]) => {
                            if (!(!((__VLS_ctx.activeTab === 'overview'))))
                                return;
                            if (!(!((__VLS_ctx.activeTab === 'students'))))
                                return;
                            if (!((__VLS_ctx.activeTab === 'syllabus')))
                                return;
                            if (!((__VLS_ctx.selectedChapterId === chapter.id)))
                                return;
                            if (!(!((__VLS_ctx.showResourceUploader))))
                                return;
                            __VLS_ctx.showResourceUploader = true;
                        } },
                    ...{ class: ("px-3 py-1 text-sm bg-[#0447A8] text-white rounded-lg") },
                });
            }
        }
        else {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.activeTab === 'overview'))))
                            return;
                        if (!(!((__VLS_ctx.activeTab === 'students'))))
                            return;
                        if (!((__VLS_ctx.activeTab === 'syllabus')))
                            return;
                        if (!(!((__VLS_ctx.selectedChapterId === chapter.id))))
                            return;
                        __VLS_ctx.selectedChapterId = chapter.id;
                    } },
                ...{ class: ("text-sm text-[#0447A8]") },
            });
        }
    }
}
if (__VLS_ctx.showCreateNoticeModal) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl p-6 w-full max-w-lg") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showCreateNoticeModal)))
                    return;
                __VLS_ctx.showCreateNoticeModal = false;
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.newNotice.title)),
        type: ("text"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        placeholder: ("Notice title"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.newNotice.content)),
        rows: ("4"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        placeholder: ("Notice content"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-end gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showCreateNoticeModal)))
                    return;
                __VLS_ctx.showCreateNoticeModal = false;
            } },
        ...{ class: ("px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.handleCreateNotice) },
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
    });
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'flex', 'gap-4', 'mb-6', 'px-4', 'py-2', 'rounded-xl', 'space-y-6', 'grid', 'grid-cols-2', 'gap-6', 'text-3xl', 'font-bold', 'mb-2', 'text-sm', 'text-gray-600', 'space-y-3', 'flex', 'justify-between', 'items-center', 'p-3', 'bg-gray-50', 'rounded-xl', 'font-medium', 'text-sm', 'text-gray-600', 'px-3', 'py-1', 'text-sm', 'rounded-lg', 'bg-blue-50', 'text-blue-700', 'bg-green-50', 'text-green-700', 'bg-purple-50', 'text-purple-700', 'overflow-x-auto', 'w-full', 'bg-gray-50', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'divide-y', 'divide-gray-200', 'hover:bg-gray-50', 'px-4', 'py-3', 'font-medium', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'text-center', 'font-medium', 'text-sm', 'text-gray-500', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'text-center', 'px-2', 'py-1', 'text-sm', 'rounded-lg', 'bg-green-50', 'text-green-700', 'bg-yellow-50', 'text-yellow-700', 'bg-red-50', 'text-red-700', 'px-4', 'py-3', 'text-center', 'px-2', 'py-1', 'text-sm', 'rounded-lg', 'bg-green-50', 'text-green-700', 'bg-yellow-50', 'text-yellow-700', 'bg-red-50', 'text-red-700', 'space-y-6', 'text-lg', 'font-semibold', 'mb-3', 'capitalize', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'overflow-hidden', 'w-full', 'bg-gray-50', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'divide-y', 'divide-gray-200', 'hover:bg-gray-50', 'px-4', 'py-3', 'font-medium', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'px-4', 'py-3', 'px-4', 'py-3', 'px-4', 'py-3', 'px-4', 'py-3', 'px-4', 'py-3', 'space-y-6', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'flex', 'justify-between', 'items-start', 'mb-4', 'text-lg', 'font-semibold', 'mt-2', 'px-3', 'py-1', 'text-sm', 'rounded-lg', 'px-3', 'py-1', 'text-sm', 'rounded-lg', 'border', 'space-y-4', 'text-sm', 'font-medium', 'text-gray-700', 'mb-2', 'flex', 'flex-wrap', 'gap-2', 'px-3', 'py-1', 'bg-gray-50', 'rounded-lg', 'text-sm', 'hover:bg-gray-100', 'flex', 'items-center', 'gap-2', 'text-xs', 'text-gray-500', 'flex', 'justify-end', 'px-3', 'py-1', 'text-sm', 'bg-[#0447A8]', 'text-white', 'rounded-lg', 'text-sm', 'text-[#0447A8]', 'fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-lg', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-xl', 'font-bold', 'text-gray-500', 'hover:text-gray-700', 'space-y-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'flex', 'justify-end', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-gray-700', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DashboardCard: DashboardCard,
            ResourceUploader: ResourceUploader,
            subjectStore: subjectStore,
            activeTab: activeTab,
            showCreateNoticeModal: showCreateNoticeModal,
            showResourceUploader: showResourceUploader,
            newNotice: newNotice,
            selectedChapterId: selectedChapterId,
            activityPerformance: activityPerformance,
            handleCreateNotice: handleCreateNotice,
            handleResourceUpload: handleResourceUpload,
            performanceGroups: performanceGroups,
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
