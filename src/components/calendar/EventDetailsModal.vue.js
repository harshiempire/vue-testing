import { ref } from 'vue';
const props = defineProps();
const emit = defineEmits();
const isEditing = ref(false);
const editedEvent = ref({ ...props.event });
const handleSave = () => {
    emit('edit', editedEvent.value);
    isEditing.value = false;
};
const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
};
const formatTime = (time) => {
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric'
    }).format(new Date(time));
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
        ...{ class: ("flex justify-between items-start mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-bold") },
    });
    (__VLS_ctx.event.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-3 py-1 text-sm rounded-lg") },
        ...{ class: (({
                'bg-blue-50 text-blue-700': __VLS_ctx.event.type === 'exam',
                'bg-green-50 text-green-700': __VLS_ctx.event.type === 'event',
                'bg-red-50 text-red-700': __VLS_ctx.event.type === 'holiday'
            })) },
    });
    (__VLS_ctx.event.type.charAt(0).toUpperCase() + __VLS_ctx.event.type.slice(1));
    if (__VLS_ctx.event.class && __VLS_ctx.event.subject) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-1 text-sm text-gray-600") },
        });
        (__VLS_ctx.event.subject);
        (__VLS_ctx.event.class);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.show)))
                    return;
                __VLS_ctx.emit('close');
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    if (!__VLS_ctx.isEditing) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-6") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-gray-600") },
        });
        (__VLS_ctx.event.description);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-3") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center gap-2 text-sm") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.formatDate(__VLS_ctx.event.startDate));
        if (__VLS_ctx.event.startDate !== __VLS_ctx.event.endDate) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.formatDate(__VLS_ctx.event.endDate));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center gap-2 text-sm") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.formatTime(__VLS_ctx.event.startTime));
        (__VLS_ctx.formatTime(__VLS_ctx.event.endTime));
        if (__VLS_ctx.event.location) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex items-center gap-2 text-sm") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.event.location);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-end gap-4") },
        });
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
            value: ((__VLS_ctx.editedEvent.title)),
            type: ("text"),
            ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
            value: ((__VLS_ctx.editedEvent.description)),
            rows: ("3"),
            ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
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
        (__VLS_ctx.editedEvent.startDate);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
            type: ("date"),
            ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
            min: ((__VLS_ctx.editedEvent.startDate)),
        });
        (__VLS_ctx.editedEvent.endDate);
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
        (__VLS_ctx.editedEvent.startTime);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
            type: ("time"),
            ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        });
        (__VLS_ctx.editedEvent.endTime);
        if (__VLS_ctx.editedEvent.type !== 'holiday') {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
                value: ((__VLS_ctx.editedEvent.location)),
                type: ("text"),
                ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
            });
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-end gap-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.show)))
                        return;
                    if (!(!((!__VLS_ctx.isEditing))))
                        return;
                    __VLS_ctx.isEditing = false;
                } },
            ...{ class: ("px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.handleSave) },
            ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
        });
    }
}
['fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-lg', 'flex', 'justify-between', 'items-start', 'mb-6', 'flex', 'items-center', 'gap-3', 'text-xl', 'font-bold', 'px-3', 'py-1', 'text-sm', 'rounded-lg', 'bg-blue-50', 'text-blue-700', 'bg-green-50', 'text-green-700', 'bg-red-50', 'text-red-700', 'mt-1', 'text-sm', 'text-gray-600', 'text-gray-500', 'hover:text-gray-700', 'space-y-6', 'text-gray-600', 'space-y-3', 'flex', 'items-center', 'gap-2', 'text-sm', 'flex', 'items-center', 'gap-2', 'text-sm', 'flex', 'items-center', 'gap-2', 'text-sm', 'flex', 'justify-end', 'gap-4', 'space-y-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'grid', 'grid-cols-2', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'grid', 'grid-cols-2', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'flex', 'justify-end', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-gray-700', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
            isEditing: isEditing,
            editedEvent: editedEvent,
            handleSave: handleSave,
            formatDate: formatDate,
            formatTime: formatTime,
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
