import { ref, computed } from 'vue';
const props = defineProps();
const emit = defineEmits();
const feedback = ref('');
const rubricScores = ref(props.task.rubrics.map(rubric => ({
    rubricId: rubric.id,
    level: 0,
    comment: ''
})));
const totalMarks = computed(() => {
    return rubricScores.value.reduce((total, score) => {
        const rubric = props.task.rubrics.find(r => r.id === score.rubricId);
        if (!rubric)
            return total;
        const level = rubric.levels.find(l => l.level === score.level);
        return total + (level?.marks || 0);
    }, 0);
});
const submitReview = () => {
    emit('submit', {
        taskId: props.task.id,
        studentId: props.evidence.studentId,
        reviewerId: 'teacher1', // This would come from auth context
        marks: totalMarks.value,
        feedback: feedback.value,
        type: 'teacher',
        rubricScores: rubricScores.value
    });
};
const taxonomyColors = {
    remember: 'blue',
    understand: 'green',
    apply: 'yellow',
    analyze: 'orange',
    evaluate: 'purple',
    create: 'red'
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-2 gap-4 mb-6") },
});
if (__VLS_ctx.existingReviews.self) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-gray-50 rounded-xl p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-medium mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-sm text-gray-600") },
    });
    (__VLS_ctx.existingReviews.self.feedback);
}
if (__VLS_ctx.existingReviews.peer.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-gray-50 rounded-xl p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("font-medium mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [review] of __VLS_getVForSourceType((__VLS_ctx.existingReviews.peer))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((review.id)),
            ...{ class: ("text-sm text-gray-600") },
        });
        (review.feedback);
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("overflow-x-auto") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
    ...{ class: ("w-full border-collapse") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
    ...{ class: ("bg-gray-50") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
    ...{ class: ("px-4 py-3 text-left font-medium text-gray-700") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
    ...{ class: ("px-4 py-3 text-left font-medium text-gray-700") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
    ...{ class: ("px-4 py-3 text-left font-medium text-gray-700") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
    ...{ class: ("px-4 py-3 text-left font-medium text-gray-700") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
    ...{ class: ("px-4 py-3 text-left font-medium text-gray-700") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
    ...{ class: ("divide-y divide-gray-200") },
});
for (const [rubric] of __VLS_getVForSourceType((__VLS_ctx.task.rubrics))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
        key: ((rubric.id)),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
        ...{ class: ("px-4 py-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("font-medium") },
    });
    (rubric.criterion);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
        ...{ class: ("px-4 py-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("inline-block px-2 py-1 text-xs rounded") },
        ...{ class: ((`bg-${__VLS_ctx.taxonomyColors[rubric.taxonomyLevel]}-50 
                  text-${__VLS_ctx.taxonomyColors[rubric.taxonomyLevel]}-700`)) },
    });
    (rubric.taxonomyLevel.charAt(0).toUpperCase() + rubric.taxonomyLevel.slice(1));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
        ...{ class: ("px-4 py-3 text-sm") },
    });
    (rubric.weightage);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
        ...{ class: ("px-4 py-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [level] of __VLS_getVForSourceType((rubric.levels))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((level.level)),
            ...{ class: ("flex items-start gap-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
            type: ("radio"),
            name: ((`rubric-${rubric.id}`)),
            value: ((level.level)),
            ...{ class: ("mt-1") },
        });
        (__VLS_ctx.rubricScores.find(score => score.rubricId === rubric.id).level);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (level.level);
        (level.marks);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-600") },
        });
        (level.description);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
        ...{ class: ("px-4 py-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.rubricScores.find(score => score.rubricId === rubric.id).comment)),
        rows: ("2"),
        ...{ class: ("w-full px-3 py-2 border border-gray-200 rounded-lg text-sm") },
        placeholder: ("Add specific feedback..."),
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-2 gap-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: ("block font-medium mb-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
    value: ((__VLS_ctx.feedback)),
    rows: ("4"),
    ...{ class: ("w-full px-4 py-2 border border-gray-200 rounded-xl") },
    placeholder: ("Provide overall feedback..."),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex flex-col justify-end") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-lg font-medium mb-4") },
});
(__VLS_ctx.totalMarks);
(__VLS_ctx.task.maxMarks);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.submitReview) },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl w-full") },
});
['space-y-6', 'grid', 'grid-cols-2', 'gap-4', 'mb-6', 'bg-gray-50', 'rounded-xl', 'p-4', 'font-medium', 'mb-2', 'text-sm', 'text-gray-600', 'bg-gray-50', 'rounded-xl', 'p-4', 'font-medium', 'mb-2', 'space-y-2', 'text-sm', 'text-gray-600', 'overflow-x-auto', 'w-full', 'border-collapse', 'bg-gray-50', 'px-4', 'py-3', 'text-left', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'font-medium', 'text-gray-700', 'divide-y', 'divide-gray-200', 'px-4', 'py-3', 'font-medium', 'px-4', 'py-3', 'inline-block', 'px-2', 'py-1', 'text-xs', 'rounded', 'px-4', 'py-3', 'text-sm', 'px-4', 'py-3', 'space-y-2', 'flex', 'items-start', 'gap-2', 'mt-1', 'text-sm', 'font-medium', 'text-gray-600', 'px-4', 'py-3', 'w-full', 'px-3', 'py-2', 'border', 'border-gray-200', 'rounded-lg', 'text-sm', 'grid', 'grid-cols-2', 'gap-4', 'block', 'font-medium', 'mb-2', 'w-full', 'px-4', 'py-2', 'border', 'border-gray-200', 'rounded-xl', 'flex', 'flex-col', 'justify-end', 'text-lg', 'font-medium', 'mb-4', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'w-full',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            feedback: feedback,
            rubricScores: rubricScores,
            totalMarks: totalMarks,
            submitReview: submitReview,
            taxonomyColors: taxonomyColors,
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
