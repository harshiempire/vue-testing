import { ref } from 'vue';
import { useDropZone } from '@vueuse/core';
const emit = defineEmits();
const dropZone = ref();
const isDragging = ref(false);
const selectedFile = ref(null);
const title = ref('');
const type = ref('textbook');
const { isOverDropZone } = useDropZone(dropZone, {
    onDrop: (files) => {
        if (files && files.length > 0) {
            const file = files[0];
            if (file) {
                selectedFile.value = file;
                // Auto-fill title from filename (without extension)
                title.value = file.name.replace(/\.[^/.]+$/, "");
            }
        }
    },
    onEnter: () => isDragging.value = true,
    onLeave: () => isDragging.value = false
});
const handleFileSelect = (event) => {
    const input = event.target;
    if (input.files && input.files[0]) {
        selectedFile.value = input.files[0];
        title.value = input.files[0].name.replace(/\.[^/.]+$/, "");
    }
};
const handleUpload = () => {
    if (selectedFile.value && title.value) {
        emit('upload', selectedFile.value, title.value, type.value);
        // Reset form
        selectedFile.value = null;
        title.value = '';
        type.value = 'textbook';
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ref: ("dropZone"),
    ...{ class: ("border-2 border-dashed rounded-xl p-8 text-center transition-colors") },
    ...{ class: (({
            'border-gray-300 bg-gray-50': !__VLS_ctx.isOverDropZone,
            'border-blue-400 bg-blue-50': __VLS_ctx.isOverDropZone
        })) },
});
// @ts-ignore navigation for `const dropZone = ref()`
/** @type { typeof __VLS_ctx.dropZone } */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-4xl mb-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: ("text-gray-600") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: ("text-[#0447A8] cursor-pointer hover:underline") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    ...{ onChange: (__VLS_ctx.handleFileSelect) },
    type: ("file"),
    ...{ class: ("hidden") },
    accept: (".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.mp4,.webm"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: ("text-sm text-gray-500") },
});
if (__VLS_ctx.selectedFile) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-xl border p-4 space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-between") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("font-medium") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
    (__VLS_ctx.selectedFile.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.selectedFile)))
                    return;
                __VLS_ctx.selectedFile = null;
            } },
        ...{ class: ("text-red-500 hover:text-red-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.title)),
        type: ("text"),
        ...{ class: ("w-full px-3 py-2 border rounded-lg") },
        placeholder: ("Enter resource title"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.type)),
        ...{ class: ("w-full px-3 py-2 border rounded-lg") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("textbook"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("notes"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("video"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.handleUpload) },
        disabled: ((!__VLS_ctx.title)),
        ...{ class: ("w-full px-4 py-2 bg-[#0447A8] text-white rounded-xl disabled:opacity-50") },
    });
}
['space-y-4', 'border-2', 'border-dashed', 'rounded-xl', 'p-8', 'text-center', 'transition-colors', 'border-gray-300', 'bg-gray-50', 'border-blue-400', 'bg-blue-50', 'space-y-2', 'text-4xl', 'mb-2', 'text-gray-600', 'text-[#0447A8]', 'cursor-pointer', 'hover:underline', 'hidden', 'text-sm', 'text-gray-500', 'bg-white', 'rounded-xl', 'border', 'p-4', 'space-y-4', 'flex', 'items-center', 'justify-between', 'font-medium', 'text-sm', 'text-gray-600', 'text-red-500', 'hover:text-red-700', 'space-y-3', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-3', 'py-2', 'border', 'rounded-lg', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-3', 'py-2', 'border', 'rounded-lg', 'w-full', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'disabled:opacity-50',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            dropZone: dropZone,
            selectedFile: selectedFile,
            title: title,
            type: type,
            isOverDropZone: isOverDropZone,
            handleFileSelect: handleFileSelect,
            handleUpload: handleUpload,
        };
    },
    __typeEmits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
