import { ref, computed } from 'vue';
import { useQBStore } from '@/stores/qb';
import { useAcademicsStore } from '@/stores/academics';
import QuestionPaperCard from '@/components/qb/QuestionPaperCard.vue';
import QuestionPaperPreview from '@/components/qb/QuestionPaperPreview.vue';
import PublishPaperModal from '@/components/qb/PublishPaperModal.vue';
const qbStore = useQBStore();
const academicsStore = useAcademicsStore();
const showCreateModal = ref(false);
const showPreviewModal = ref(false);
const showPublishModal = ref(false);
const selectedChapters = ref([]);
const selectedTemplate = ref(qbStore.paperTemplates[0].id);
const currentPaper = ref(null);
const isAutomatic = ref(true);
const isEditing = ref(false);
const newPaper = ref({
    title: '',
    subject: '',
    class: '',
    duration: 180,
    instructions: ['Read all questions carefully', 'All questions are compulsory'],
    totalMarks: 0,
    sections: [
        {
            id: crypto.randomUUID(),
            title: 'Section A',
            instructions: ['All questions are compulsory'],
            marks: 0,
            questions: []
        }
    ]
});
const distribution = ref([
    {
        type: 'mcq',
        count: 5,
        marksPerQuestion: 1,
        totalMarks: 5,
        cognitiveDistribution: {
            knowledge: 2,
            understanding: 1,
            application: 1,
            hots: 1
        }
    }
]);
const addDistribution = () => {
    distribution.value.push({
        type: 'mcq',
        count: 0,
        marksPerQuestion: 0,
        totalMarks: 0,
        cognitiveDistribution: {
            knowledge: 0,
            understanding: 0,
            application: 0,
            hots: 0
        }
    });
};
const addSection = () => {
    newPaper.value.sections?.push({
        id: crypto.randomUUID(),
        title: `Section ${String.fromCharCode(65 + (newPaper.value.sections?.length || 0))}`,
        instructions: [],
        marks: 0,
        questions: []
    });
};
const removeSection = (sectionId) => {
    if (!newPaper.value.sections)
        return;
    const index = newPaper.value.sections.findIndex(s => s.id === sectionId);
    if (index > -1) {
        newPaper.value.sections.splice(index, 1);
    }
};
const addQuestionToSection = (sectionId, question) => {
    const section = newPaper.value.sections?.find(s => s.id === sectionId);
    if (section) {
        section.questions.push(question);
        section.marks = section.questions.reduce((total, q) => total + q.marks, 0);
    }
};
const removeQuestionFromSection = (sectionId, questionId) => {
    const section = newPaper.value.sections?.find(s => s.id === sectionId);
    if (section) {
        const index = section.questions.findIndex(q => q.id === questionId);
        if (index > -1) {
            section.questions.splice(index, 1);
            section.marks = section.questions.reduce((total, q) => total + q.marks, 0);
        }
    }
};
const availableQuestions = computed(() => {
    const selectedQuestions = new Set(newPaper.value.sections?.flatMap(s => s.questions.map(q => q.id)) || []);
    return qbStore.questions.filter(q => !selectedQuestions.has(q.id));
});
const totalMarks = computed(() => newPaper.value.sections?.reduce((total, section) => total + section.marks, 0) || 0);
const calculateTotalMarks = () => {
    return distribution.value.reduce((total, dist) => total + (dist.count * dist.marksPerQuestion), 0);
};
const editPaper = (paper) => {
    isEditing.value = true;
    newPaper.value = { ...paper };
    selectedTemplate.value = paper.template.id;
    selectedChapters.value = paper.chapters;
    showCreateModal.value = true;
};
const createOrUpdatePaper = () => {
    let questions;
    if (isAutomatic.value) {
        questions = qbStore.autoGeneratePaper(selectedChapters.value, distribution.value, calculateTotalMarks());
        newPaper.value.sections = [{
                id: crypto.randomUUID(),
                title: 'Section A',
                instructions: ['All questions are compulsory'],
                marks: calculateTotalMarks(),
                questions
            }];
    }
    const template = qbStore.paperTemplates.find(t => t.id === selectedTemplate.value);
    const paperData = {
        ...newPaper.value,
        totalMarks: totalMarks.value,
        chapters: selectedChapters.value,
        sections: newPaper.value.sections || [],
        template
    };
    if (isEditing.value && paperData.id) {
        qbStore.updateQuestionPaper(paperData);
    }
    else {
        const paper = qbStore.createQuestionPaper(paperData);
        currentPaper.value = paper;
    }
    showCreateModal.value = false;
    showPreviewModal.value = true;
    isEditing.value = false;
};
const openPreview = (paper) => {
    currentPaper.value = paper;
    showPreviewModal.value = true;
};
const downloadPaper = (paper) => {
    console.log('Downloading paper:', paper);
};
const handlePublish = (paper) => {
    currentPaper.value = paper;
    showPublishModal.value = true;
};
const publishPaper = ({ dueDate, dueTime }) => {
    if (!currentPaper.value)
        return;
    // Create a new task from the question paper
    const task = {
        id: crypto.randomUUID(),
        title: currentPaper.value.title,
        description: `Question Paper: ${currentPaper.value.title}`,
        type: 'mcq',
        category: 'scholastic',
        subject: currentPaper.value.subject,
        class: currentPaper.value.class,
        dueDate: `${dueDate}T${dueTime}:00`,
        maxMarks: currentPaper.value.totalMarks,
        status: 'assigned',
        createdAt: new Date().toISOString(),
        rubrics: []
    };
    // Add the task to academics store
    academicsStore.tasks.push(task);
    showPublishModal.value = false;
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showCreateModal = true;
        } },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid gap-6") },
});
for (const [paper] of __VLS_getVForSourceType((__VLS_ctx.qbStore.questionPapers))) {
    // @ts-ignore
    /** @type { [typeof QuestionPaperCard, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(QuestionPaperCard, new QuestionPaperCard({
        ...{ 'onEdit': {} },
        ...{ 'onPreview': {} },
        ...{ 'onDownload': {} },
        ...{ 'onPublish': {} },
        key: ((paper.id)),
        paper: ((paper)),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onEdit': {} },
        ...{ 'onPreview': {} },
        ...{ 'onDownload': {} },
        ...{ 'onPublish': {} },
        key: ((paper.id)),
        paper: ((paper)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onEdit: (...[$event]) => {
            __VLS_ctx.editPaper(paper);
        }
    };
    const __VLS_7 = {
        onPreview: (...[$event]) => {
            __VLS_ctx.openPreview(paper);
        }
    };
    const __VLS_8 = {
        onDownload: (...[$event]) => {
            __VLS_ctx.downloadPaper(paper);
        }
    };
    const __VLS_9 = {
        onPublish: (...[$event]) => {
            __VLS_ctx.handlePublish(paper);
        }
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
}
if (__VLS_ctx.showCreateModal) {
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
    (__VLS_ctx.isEditing ? 'Edit' : 'Create');
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showCreateModal)))
                    return;
                __VLS_ctx.showCreateModal = false;
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.newPaper.title)),
        type: ("text"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        placeholder: ("e.g., Mathematics Mid-Term Test"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.newPaper.subject)),
        type: ("text"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        placeholder: ("Mathematics"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.newPaper.class)),
        type: ("text"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        placeholder: ("6A"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("number"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.newPaper.duration);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [instruction, index] of __VLS_getVForSourceType((__VLS_ctx.newPaper.instructions))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((index)),
            ...{ class: ("flex gap-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
            value: ((__VLS_ctx.newPaper.instructions[index])),
            type: ("text"),
            ...{ class: ("flex-1 px-4 py-2 border border-[#ECECEC] rounded-xl") },
            placeholder: ((`Instruction ${index + 1}`)),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.showCreateModal)))
                        return;
                    __VLS_ctx.newPaper.instructions.splice(index, 1);
                } },
            ...{ class: ("text-red-500") },
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showCreateModal)))
                    return;
                __VLS_ctx.newPaper.instructions.push('');
            } },
        ...{ class: ("text-[#0447A8] text-sm") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [chapter] of __VLS_getVForSourceType((__VLS_ctx.qbStore.chapters))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((chapter.id)),
            ...{ class: ("flex items-center gap-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
            type: ("checkbox"),
            id: ((chapter.id)),
            value: ((chapter.id)),
            ...{ class: ("rounded text-[#0447A8]") },
        });
        (__VLS_ctx.selectedChapters);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            for: ((chapter.id)),
        });
        (chapter.name);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("flex items-center gap-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("radio"),
        value: ((true)),
        ...{ class: ("text-[#0447A8]") },
    });
    (__VLS_ctx.isAutomatic);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("flex items-center gap-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("radio"),
        value: ((false)),
        ...{ class: ("text-[#0447A8]") },
    });
    (__VLS_ctx.isAutomatic);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    if (__VLS_ctx.isAutomatic) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-medium mb-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-4") },
        });
        for (const [dist, index] of __VLS_getVForSourceType((__VLS_ctx.distribution))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((index)),
                ...{ class: ("bg-gray-50 rounded-xl p-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("grid grid-cols-3 gap-4 mb-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
                value: ((dist.type)),
                ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                value: ("mcq"),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                value: ("long_answer"),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                value: ("short_answer"),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                value: ("true_false"),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                value: ("match_following"),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                value: ("matrix_matching"),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                value: ("assertion_reasoning"),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                value: ("case_based"),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
                value: ("fill_blanks"),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
                type: ("number"),
                ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
            });
            (dist.count);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
                type: ("number"),
                ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
            });
            (dist.marksPerQuestion);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("grid grid-cols-4 gap-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
                type: ("number"),
                ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
            });
            (dist.cognitiveDistribution.knowledge);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
                type: ("number"),
                ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
            });
            (dist.cognitiveDistribution.understanding);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
                type: ("number"),
                ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
            });
            (dist.cognitiveDistribution.application);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
                type: ("number"),
                ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
            });
            (dist.cognitiveDistribution.hots);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.addDistribution) },
            ...{ class: ("text-[#0447A8] text-sm") },
        });
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-center") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-medium") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.addSection) },
            ...{ class: ("px-3 py-1 text-sm bg-[#0447A8] text-white rounded-lg") },
        });
        for (const [section] of __VLS_getVForSourceType((__VLS_ctx.newPaper.sections))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((section.id)),
                ...{ class: ("bg-gray-50 rounded-xl p-4 space-y-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex justify-between items-start") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
                value: ((section.title)),
                type: ("text"),
                ...{ class: ("px-3 py-1 border border-[#ECECEC] rounded-lg") },
                placeholder: ((section.title)),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("text-sm") },
            });
            (section.marks);
            if (__VLS_ctx.newPaper.sections.length > 1) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                    ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.showCreateModal)))
                                return;
                            if (!(!((__VLS_ctx.isAutomatic))))
                                return;
                            if (!((__VLS_ctx.newPaper.sections.length > 1)))
                                return;
                            __VLS_ctx.removeSection(section.id);
                        } },
                    ...{ class: ("text-red-500") },
                });
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            for (const [instruction, index] of __VLS_getVForSourceType((section.instructions))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: ((index)),
                    ...{ class: ("flex gap-2") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
                    value: ((section.instructions[index])),
                    type: ("text"),
                    ...{ class: ("flex-1 px-3 py-1 border border-[#ECECEC] rounded-lg text-sm") },
                    placeholder: ("Add instruction"),
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                    ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.showCreateModal)))
                                return;
                            if (!(!((__VLS_ctx.isAutomatic))))
                                return;
                            section.instructions.splice(index, 1);
                        } },
                    ...{ class: ("text-red-500 text-sm") },
                });
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.showCreateModal)))
                            return;
                        if (!(!((__VLS_ctx.isAutomatic))))
                            return;
                        section.instructions.push('');
                    } },
                ...{ class: ("text-[#0447A8] text-sm") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
                ...{ class: ("font-medium") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            for (const [question] of __VLS_getVForSourceType((section.questions))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: ((question.id)),
                    ...{ class: ("flex justify-between items-start bg-white p-3 rounded-lg") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("font-medium") },
                });
                (question.text);
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("text-sm text-gray-600") },
                });
                (question.type);
                (question.marks);
                __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                    ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.showCreateModal)))
                                return;
                            if (!(!((__VLS_ctx.isAutomatic))))
                                return;
                            __VLS_ctx.removeQuestionFromSection(section.id, question.id);
                        } },
                    ...{ class: ("text-red-500") },
                });
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
                ...{ class: ("font-medium") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2") },
            });
            for (const [question] of __VLS_getVForSourceType((__VLS_ctx.availableQuestions))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: ((question.id)),
                    ...{ class: ("flex justify-between items-start bg-white p-3 rounded-lg") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("font-medium") },
                });
                (question.text);
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("text-sm text-gray-600") },
                });
                (question.type);
                (question.marks);
                __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                    ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.showCreateModal)))
                                return;
                            if (!(!((__VLS_ctx.isAutomatic))))
                                return;
                            __VLS_ctx.addQuestionToSection(section.id, question);
                        } },
                    ...{ class: ("px-3 py-1 bg-[#0447A8] text-white rounded-lg text-sm") },
                });
            }
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-lg font-medium mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-3 gap-4") },
    });
    for (const [template] of __VLS_getVForSourceType((__VLS_ctx.qbStore.paperTemplates))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.showCreateModal)))
                        return;
                    __VLS_ctx.selectedTemplate = template.id;
                } },
            key: ((template.id)),
            ...{ class: ("border rounded-xl p-4 cursor-pointer") },
            ...{ class: ((__VLS_ctx.selectedTemplate === template.id ? 'border-[#0447A8] bg-blue-50' : 'border-[#ECECEC]')) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
            ...{ class: ("font-medium mb-2") },
        });
        (template.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600 space-y-1") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (template.hasSchoolName ? 'Yes' : 'No');
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (template.hasLogo ? 'Yes' : 'No');
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (template.optionsLayout);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-lg font-medium") },
    });
    (__VLS_ctx.totalMarks);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showCreateModal)))
                    return;
                __VLS_ctx.showCreateModal = false;
            } },
        ...{ class: ("px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.createOrUpdatePaper) },
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
    });
    (__VLS_ctx.isEditing ? 'Update' : 'Create');
}
if (__VLS_ctx.showPreviewModal && __VLS_ctx.currentPaper) {
    // @ts-ignore
    /** @type { [typeof QuestionPaperPreview, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(QuestionPaperPreview, new QuestionPaperPreview({
        ...{ 'onClose': {} },
        ...{ 'onDownload': {} },
        paper: ((__VLS_ctx.currentPaper)),
    }));
    const __VLS_11 = __VLS_10({
        ...{ 'onClose': {} },
        ...{ 'onDownload': {} },
        paper: ((__VLS_ctx.currentPaper)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    let __VLS_15;
    const __VLS_16 = {
        onClose: (...[$event]) => {
            if (!((__VLS_ctx.showPreviewModal && __VLS_ctx.currentPaper)))
                return;
            __VLS_ctx.showPreviewModal = false;
        }
    };
    const __VLS_17 = {
        onDownload: (...[$event]) => {
            if (!((__VLS_ctx.showPreviewModal && __VLS_ctx.currentPaper)))
                return;
            __VLS_ctx.downloadPaper(__VLS_ctx.currentPaper);
        }
    };
    let __VLS_12;
    let __VLS_13;
    var __VLS_14;
}
if (__VLS_ctx.showPublishModal && __VLS_ctx.currentPaper) {
    // @ts-ignore
    /** @type { [typeof PublishPaperModal, ] } */ ;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(PublishPaperModal, new PublishPaperModal({
        ...{ 'onClose': {} },
        ...{ 'onPublish': {} },
        show: ((__VLS_ctx.showPublishModal)),
        paper: ((__VLS_ctx.currentPaper)),
    }));
    const __VLS_19 = __VLS_18({
        ...{ 'onClose': {} },
        ...{ 'onPublish': {} },
        show: ((__VLS_ctx.showPublishModal)),
        paper: ((__VLS_ctx.currentPaper)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    let __VLS_23;
    const __VLS_24 = {
        onClose: (...[$event]) => {
            if (!((__VLS_ctx.showPublishModal && __VLS_ctx.currentPaper)))
                return;
            __VLS_ctx.showPublishModal = false;
        }
    };
    const __VLS_25 = {
        onPublish: (__VLS_ctx.publishPaper)
    };
    let __VLS_20;
    let __VLS_21;
    var __VLS_22;
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'grid', 'gap-6', 'fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-4xl', 'max-h-[90vh]', 'overflow-y-auto', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-xl', 'font-bold', 'text-gray-500', 'hover:text-gray-700', 'space-y-6', 'grid', 'grid-cols-2', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'space-y-2', 'flex', 'gap-2', 'flex-1', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'text-red-500', 'text-[#0447A8]', 'text-sm', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-2', 'space-y-2', 'flex', 'items-center', 'gap-2', 'rounded', 'text-[#0447A8]', 'flex', 'items-center', 'gap-4', 'flex', 'items-center', 'gap-2', 'text-[#0447A8]', 'flex', 'items-center', 'gap-2', 'text-[#0447A8]', 'text-lg', 'font-medium', 'mb-4', 'space-y-4', 'bg-gray-50', 'rounded-xl', 'p-4', 'grid', 'grid-cols-3', 'gap-4', 'mb-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'grid', 'grid-cols-4', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'text-[#0447A8]', 'text-sm', 'space-y-4', 'flex', 'justify-between', 'items-center', 'text-lg', 'font-medium', 'px-3', 'py-1', 'text-sm', 'bg-[#0447A8]', 'text-white', 'rounded-lg', 'bg-gray-50', 'rounded-xl', 'p-4', 'space-y-4', 'flex', 'justify-between', 'items-start', 'space-y-2', 'px-3', 'py-1', 'border', 'border-[#ECECEC]', 'rounded-lg', 'text-sm', 'text-red-500', 'space-y-2', 'flex', 'gap-2', 'flex-1', 'px-3', 'py-1', 'border', 'border-[#ECECEC]', 'rounded-lg', 'text-sm', 'text-red-500', 'text-sm', 'text-[#0447A8]', 'text-sm', 'space-y-2', 'font-medium', 'space-y-2', 'flex', 'justify-between', 'items-start', 'bg-white', 'p-3', 'rounded-lg', 'font-medium', 'text-sm', 'text-gray-600', 'text-red-500', 'space-y-2', 'font-medium', 'space-y-2', 'flex', 'justify-between', 'items-start', 'bg-white', 'p-3', 'rounded-lg', 'font-medium', 'text-sm', 'text-gray-600', 'px-3', 'py-1', 'bg-[#0447A8]', 'text-white', 'rounded-lg', 'text-sm', 'text-lg', 'font-medium', 'mb-4', 'grid', 'grid-cols-3', 'gap-4', 'border', 'rounded-xl', 'p-4', 'cursor-pointer', 'font-medium', 'mb-2', 'text-sm', 'text-gray-600', 'space-y-1', 'flex', 'justify-between', 'items-center', 'text-lg', 'font-medium', 'flex', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-gray-700', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            QuestionPaperCard: QuestionPaperCard,
            QuestionPaperPreview: QuestionPaperPreview,
            PublishPaperModal: PublishPaperModal,
            qbStore: qbStore,
            showCreateModal: showCreateModal,
            showPreviewModal: showPreviewModal,
            showPublishModal: showPublishModal,
            selectedChapters: selectedChapters,
            selectedTemplate: selectedTemplate,
            currentPaper: currentPaper,
            isAutomatic: isAutomatic,
            isEditing: isEditing,
            newPaper: newPaper,
            distribution: distribution,
            addDistribution: addDistribution,
            addSection: addSection,
            removeSection: removeSection,
            addQuestionToSection: addQuestionToSection,
            removeQuestionFromSection: removeQuestionFromSection,
            availableQuestions: availableQuestions,
            totalMarks: totalMarks,
            editPaper: editPaper,
            createOrUpdatePaper: createOrUpdatePaper,
            openPreview: openPreview,
            downloadPaper: downloadPaper,
            handlePublish: handlePublish,
            publishPaper: publishPaper,
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
