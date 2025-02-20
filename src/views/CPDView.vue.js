import { ref } from 'vue';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
import { useCPDStore } from '@/stores/cpd';
const cpdStore = useCPDStore();
const activeTab = ref('records');
const showAddModal = ref(false);
const newRecord = ref({
    eventName: '',
    conductedBy: '',
    date: '',
    keyLearnings: '',
    hoursCompleted: 0,
    type: 'paper_presentation',
    evidence: null
});
const handleFileSelect = (event) => {
    const input = event.target;
    if (input.files && input.files[0]) {
        newRecord.value.evidence = input.files[0];
    }
};
const handleSubmit = () => {
    cpdStore.addRecord({
        ...newRecord.value,
        id: crypto.randomUUID(),
        evidenceUrl: newRecord.value.evidence ? URL.createObjectURL(newRecord.value.evidence) : null,
        createdAt: new Date().toISOString()
    });
    showAddModal.value = false;
    newRecord.value = {
        eventName: '',
        conductedBy: '',
        date: '',
        keyLearnings: '',
        hoursCompleted: 0,
        type: 'paper_presentation',
        evidence: null
    };
};
const activityTypes = [
    { id: 'paper_presentation', label: 'Paper Presentation', target: 5 },
    { id: 'content_development', label: 'Content Development', target: 5 },
    { id: 'examiner', label: 'Examiner', target: 5 },
    { id: 'training', label: 'Training', target: 5 },
    { id: 'workshop', label: 'Workshop', target: 5 }
];
const getCompletionPercentage = (type) => {
    const records = cpdStore.getRecordsByType(type);
    const totalHours = records.reduce((sum, record) => sum + record.hoursCompleted, 0);
    const target = activityTypes.find(t => t.id === type)?.target || 5;
    return Math.min((totalHours / target) * 100, 100);
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("text-2xl font-bold") },
});
if (__VLS_ctx.activeTab === 'records') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.activeTab === 'records')))
                    return;
                __VLS_ctx.showAddModal = true;
            } },
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4 mb-6") },
});
for (const [tab] of __VLS_getVForSourceType(['records', 'report', 'training'])) {
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
if (__VLS_ctx.activeTab === 'records') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [record] of __VLS_getVForSourceType((__VLS_ctx.cpdStore.records))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((record.id)),
            ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-start mb-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-semibold") },
        });
        (record.eventName);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (record.conductedBy);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-2 flex gap-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm") },
        });
        (__VLS_ctx.activityTypes.find(t => t.id === record.type)?.label);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-1 bg-green-50 text-green-700 rounded text-sm") },
        });
        (record.hoursCompleted);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (new Date(record.date).toLocaleDateString());
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-gray-600 mb-4") },
        });
        (record.keyLearnings);
        if (record.evidenceUrl) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex items-center gap-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("text-sm text-gray-600") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
                href: ((record.evidenceUrl)),
                target: ("_blank"),
                ...{ class: ("text-sm text-[#0447A8] hover:underline") },
            });
        }
    }
}
else if (__VLS_ctx.activeTab === 'report') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-6") },
    });
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Hours Completed by Activity Type"),
    }));
    const __VLS_1 = __VLS_0({
        title: ("Hours Completed by Activity Type"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [type] of __VLS_getVForSourceType((__VLS_ctx.activityTypes))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((type.id)),
            ...{ class: ("space-y-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between text-sm") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (type.label);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.getCompletionPercentage(type.id).toFixed(0));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("h-2 bg-gray-200 rounded-full overflow-hidden") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("h-full bg-[#0447A8]") },
            ...{ style: (({ width: `${__VLS_ctx.getCompletionPercentage(type.id)}%` })) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-xs text-gray-500") },
        });
        (__VLS_ctx.cpdStore.getRecordsByType(type.id).reduce((sum, record) => sum + record.hoursCompleted, 0));
        (type.target);
    }
    __VLS_4.slots.default;
    var __VLS_4;
    // @ts-ignore
    /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
        title: ("Recent Activities"),
    }));
    const __VLS_6 = __VLS_5({
        title: ("Recent Activities"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    for (const [record] of __VLS_getVForSourceType((__VLS_ctx.cpdStore.records.slice(0, 5)))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((record.id)),
            ...{ class: ("p-3 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (record.eventName);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-center mt-1 text-sm") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-gray-600") },
        });
        (new Date(record.date).toLocaleDateString());
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("px-2 py-1 bg-blue-50 text-blue-700 rounded") },
        });
        (record.hoursCompleted);
    }
    __VLS_9.slots.default;
    var __VLS_9;
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-6") },
    });
    for (const [course] of __VLS_getVForSourceType((__VLS_ctx.cpdStore.availableCourses))) {
        // @ts-ignore
        /** @type { [typeof DashboardCard, typeof DashboardCard, ] } */ ;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(DashboardCard, new DashboardCard({
            key: ((course.id)),
        }));
        const __VLS_11 = __VLS_10({
            key: ((course.id)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("aspect-video bg-gray-100 rounded-xl overflow-hidden") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: ((course.thumbnail)),
            alt: ((course.title)),
            ...{ class: ("w-full h-full object-cover") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-semibold") },
        });
        (course.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-600 mt-2") },
        });
        (course.description);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-center mt-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (course.duration);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
        });
        __VLS_14.slots.default;
        var __VLS_14;
    }
}
if (__VLS_ctx.showAddModal) {
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
                if (!((__VLS_ctx.showAddModal)))
                    return;
                __VLS_ctx.showAddModal = false;
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        ...{ onSubmit: (__VLS_ctx.handleSubmit) },
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.newRecord.eventName)),
        type: ("text"),
        required: (true),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.newRecord.conductedBy)),
        type: ("text"),
        required: (true),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.newRecord.type)),
        required: (true),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    for (const [type] of __VLS_getVForSourceType((__VLS_ctx.activityTypes))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            key: ((type.id)),
            value: ((type.id)),
        });
        (type.label);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        required: (true),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.newRecord.date);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("number"),
        min: ("0"),
        step: ("0.5"),
        required: (true),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.newRecord.hoursCompleted);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.newRecord.keyLearnings)),
        rows: ("3"),
        required: (true),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        ...{ onChange: (__VLS_ctx.handleFileSelect) },
        type: ("file"),
        accept: (".pdf,.doc,.docx,.jpg,.jpeg,.png"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-end gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showAddModal)))
                    return;
                __VLS_ctx.showAddModal = false;
            } },
        type: ("button"),
        ...{ class: ("px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: ("submit"),
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
    });
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'flex', 'gap-4', 'mb-6', 'px-4', 'py-2', 'rounded-xl', 'space-y-4', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'flex', 'justify-between', 'items-start', 'mb-4', 'text-lg', 'font-semibold', 'text-sm', 'text-gray-600', 'mt-2', 'flex', 'gap-2', 'px-2', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded', 'text-sm', 'px-2', 'py-1', 'bg-green-50', 'text-green-700', 'rounded', 'text-sm', 'text-sm', 'text-gray-600', 'text-gray-600', 'mb-4', 'flex', 'items-center', 'gap-2', 'text-sm', 'text-gray-600', 'text-sm', 'text-[#0447A8]', 'hover:underline', 'grid', 'grid-cols-2', 'gap-6', 'space-y-4', 'space-y-2', 'flex', 'justify-between', 'text-sm', 'h-2', 'bg-gray-200', 'rounded-full', 'overflow-hidden', 'h-full', 'bg-[#0447A8]', 'text-xs', 'text-gray-500', 'space-y-3', 'p-3', 'bg-gray-50', 'rounded-xl', 'font-medium', 'flex', 'justify-between', 'items-center', 'mt-1', 'text-sm', 'text-gray-600', 'px-2', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded', 'grid', 'grid-cols-2', 'gap-6', 'space-y-4', 'aspect-video', 'bg-gray-100', 'rounded-xl', 'overflow-hidden', 'w-full', 'h-full', 'object-cover', 'text-lg', 'font-semibold', 'text-gray-600', 'mt-2', 'flex', 'justify-between', 'items-center', 'mt-4', 'text-sm', 'text-gray-600', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-lg', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-xl', 'font-bold', 'text-gray-500', 'hover:text-gray-700', 'space-y-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'flex', 'justify-end', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-gray-700', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DashboardCard: DashboardCard,
            cpdStore: cpdStore,
            activeTab: activeTab,
            showAddModal: showAddModal,
            newRecord: newRecord,
            handleFileSelect: handleFileSelect,
            handleSubmit: handleSubmit,
            activityTypes: activityTypes,
            getCompletionPercentage: getCompletionPercentage,
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
