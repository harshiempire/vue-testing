const __VLS_props = defineProps();
const emit = defineEmits();
// Add type guard
const isMatrixOption = (options) => {
    return (typeof options === "object" &&
        !Array.isArray(options) &&
        "column1" in options &&
        "column2" in options);
};
const isMatchingOptions = (options) => {
    return (Array.isArray(options) &&
        options.length > 0 &&
        typeof options[0] === "object" &&
        options[0] !== null &&
        "column1" in options[0]);
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("bg-white rounded-3xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center mb-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: ("text-xl font-bold") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('download');
        } },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('close');
        } },
    ...{ class: ("text-gray-500 hover:text-gray-700") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("bg-white p-8 shadow-lg max-w-[21cm] mx-auto") },
});
if (__VLS_ctx.paper.template.hasSchoolName) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-2xl font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-gray-600") },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-center space-y-2 mb-8") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("text-xl font-bold") },
});
(__VLS_ctx.paper.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between text-sm text-gray-600") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
(__VLS_ctx.paper.class);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
(__VLS_ctx.paper.subject);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between text-sm text-gray-600") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
(__VLS_ctx.paper.duration);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
(__VLS_ctx.paper.totalMarks);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("mb-8") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
    ...{ class: ("font-bold mb-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({
    ...{ class: ("list-decimal list-inside space-y-1 text-sm") },
});
for (const [instruction, index] of __VLS_getVForSourceType((__VLS_ctx.paper.instructions))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        key: ((index)),
    });
    (instruction);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-8") },
});
for (const [section, sectionIndex] of __VLS_getVForSourceType((__VLS_ctx.paper.sections))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((section.id)),
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("font-bold text-lg") },
    });
    (section.title);
    if (section.instructions.length) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mb-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm space-y-1") },
        });
        for (const [instruction, index] of __VLS_getVForSourceType((section.instructions))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((index)),
            });
            (instruction);
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    for (const [question, questionIndex] of __VLS_getVForSourceType((section.questions))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((question.id)),
            ...{ class: ("space-y-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex gap-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("font-medium") },
        });
        (questionIndex + 1);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium whitespace-pre-line") },
        });
        (question.text);
        if (question.type === 'mcq') {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mt-2 space-y-1") },
                ...{ class: ((__VLS_ctx.paper.template.optionsLayout === 'horizontal'
                        ? 'flex gap-8'
                        : '')) },
            });
            for (const [option, i] of __VLS_getVForSourceType((question.options))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: ((i)),
                    ...{ class: ("flex gap-2") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (String.fromCharCode(65 + i));
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (option);
            }
        }
        if (question.type === 'match_following' &&
            __VLS_ctx.isMatchingOptions(question.options)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mt-4 grid grid-cols-2 gap-8") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("font-medium") },
            });
            for (const [item, i] of __VLS_getVForSourceType((question.options))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: ((i)),
                    ...{ class: ("flex gap-2") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (String.fromCharCode(65 + i));
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (item.column1);
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("font-medium") },
            });
            for (const [item, i] of __VLS_getVForSourceType((question.options))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: ((i)),
                    ...{ class: ("flex gap-2") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (i + 1);
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (item.column2);
            }
        }
        if (question.type === 'matrix_matching' &&
            __VLS_ctx.isMatrixOption(question.options)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mt-4 grid grid-cols-2 gap-8") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("font-medium") },
            });
            for (const [item, i] of __VLS_getVForSourceType((question.options.column1))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: ((i)),
                    ...{ class: ("flex gap-2") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (String.fromCharCode(65 + i));
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (item);
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("font-medium") },
            });
            for (const [item, i] of __VLS_getVForSourceType((question.options.column2))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: ((i)),
                    ...{ class: ("flex gap-2") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (i + 1);
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (item);
            }
        }
        if (question.type === 'true_false') {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mt-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex gap-8") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("flex items-center gap-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("flex items-center gap-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
        if (question.type === 'fill_blanks') {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mt-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("border-b border-black w-24 inline-block mx-2") },
            });
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-sm text-gray-600 whitespace-nowrap") },
        });
        (question.marks);
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("mt-8 text-center text-sm text-gray-600") },
});
['fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-4xl', 'max-h-[90vh]', 'overflow-y-auto', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-xl', 'font-bold', 'flex', 'gap-4', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'text-gray-500', 'hover:text-gray-700', 'bg-white', 'p-8', 'shadow-lg', 'max-w-[21cm]', 'mx-auto', 'text-center', 'mb-6', 'text-2xl', 'font-bold', 'text-gray-600', 'text-center', 'space-y-2', 'mb-8', 'text-xl', 'font-bold', 'flex', 'justify-between', 'text-sm', 'text-gray-600', 'flex', 'justify-between', 'text-sm', 'text-gray-600', 'mb-8', 'font-bold', 'mb-2', 'list-decimal', 'list-inside', 'space-y-1', 'text-sm', 'space-y-8', 'space-y-4', 'font-bold', 'text-lg', 'mb-4', 'text-sm', 'space-y-1', 'space-y-6', 'space-y-2', 'flex', 'gap-2', 'font-medium', 'flex-1', 'font-medium', 'whitespace-pre-line', 'mt-2', 'space-y-1', 'flex', 'gap-2', 'mt-4', 'grid', 'grid-cols-2', 'gap-8', 'space-y-2', 'font-medium', 'flex', 'gap-2', 'space-y-2', 'font-medium', 'flex', 'gap-2', 'mt-4', 'grid', 'grid-cols-2', 'gap-8', 'space-y-2', 'font-medium', 'flex', 'gap-2', 'space-y-2', 'font-medium', 'flex', 'gap-2', 'mt-2', 'flex', 'gap-8', 'flex', 'items-center', 'gap-2', 'flex', 'items-center', 'gap-2', 'mt-2', 'border-b', 'border-black', 'w-24', 'inline-block', 'mx-2', 'text-sm', 'text-gray-600', 'whitespace-nowrap', 'mt-8', 'text-center', 'text-sm', 'text-gray-600',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
            isMatrixOption: isMatrixOption,
            isMatchingOptions: isMatchingOptions,
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
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
