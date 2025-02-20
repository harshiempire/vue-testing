import { ref } from 'vue';
const props = defineProps();
const emit = defineEmits();
const title = ref('');
const description = ref('');
const type = ref('event');
const startDate = ref('');
const endDate = ref('');
const startTime = ref('');
const endTime = ref('');
const location = ref('');
const selectedClass = ref('');
const subject = ref('');
const classes = ['6A', '6B', '7A', '7B', '8A', '8B'];
const subjects = ['Mathematics', 'Science', 'English', 'Social Studies'];
const handleCreate = () => {
    emit('create', {
        title: title.value,
        description: description.value,
        type: type.value,
        startDate: startDate.value,
        endDate: endDate.value,
        startTime: `${startDate.value}T${startTime.value}:00`,
        endTime: `${endDate.value}T${endTime.value}:00`,
        location: location.value,
        class: selectedClass.value,
        subject: subject.value
    });
    resetForm();
};
const resetForm = () => {
    title.value = '';
    description.value = '';
    type.value = 'event';
    startDate.value = '';
    endDate.value = '';
    startTime.value = '';
    endTime.value = '';
    location.value = '';
    selectedClass.value = '';
    subject.value = '';
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
                if (!((__VLS_ctx.show)))
                    return;
                __VLS_ctx.emit('close');
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
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.type)),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("event"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("exam"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("holiday"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.title)),
        type: ("text"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        placeholder: ("Event title"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.description)),
        rows: ("3"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        placeholder: ("Event description"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.startDate);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        min: ((__VLS_ctx.startDate)),
    });
    (__VLS_ctx.endDate);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("time"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.startTime);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("time"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.endTime);
    if (__VLS_ctx.type !== 'holiday') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
            value: ((__VLS_ctx.location)),
            type: ("text"),
            ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
            placeholder: ("Event location"),
        });
    }
    if (__VLS_ctx.type === 'exam') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("grid grid-cols-2 gap-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
            value: ((__VLS_ctx.selectedClass)),
            ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            value: (""),
        });
        for (const [class_] of __VLS_getVForSourceType((__VLS_ctx.classes))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                key: ((class_)),
                value: ((class_)),
            });
            (class_);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
            value: ((__VLS_ctx.subject)),
            ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            value: (""),
        });
        for (const [sub] of __VLS_getVForSourceType((__VLS_ctx.subjects))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                key: ((sub)),
                value: ((sub)),
            });
            (sub);
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-end gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.show)))
                    return;
                __VLS_ctx.emit('close');
            } },
        ...{ class: ("px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.handleCreate) },
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
        disabled: ((!__VLS_ctx.title || !__VLS_ctx.startDate || !__VLS_ctx.endDate)),
    });
}
['fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-lg', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-xl', 'font-bold', 'text-gray-500', 'hover:text-gray-700', 'space-y-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'grid', 'grid-cols-2', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'grid', 'grid-cols-2', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'grid', 'grid-cols-2', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'flex', 'justify-end', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-gray-700', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
            title: title,
            description: description,
            type: type,
            startDate: startDate,
            endDate: endDate,
            startTime: startTime,
            endTime: endTime,
            location: location,
            selectedClass: selectedClass,
            subject: subject,
            classes: classes,
            subjects: subjects,
            handleCreate: handleCreate,
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
