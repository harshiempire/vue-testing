import { ref, computed } from 'vue';
import { useAcademicsStore } from '@/stores/academics';
import TeacherReviewForm from './TeacherReviewForm.vue';
// Add this to your imports
// In your setup function
const assessment = ref({
    id: '',
    status: '',
    rubricScores: [],
    reflection: ''
});
const props = defineProps();
const emit = defineEmits();
const academicsStore = useAcademicsStore();
const selectedStudent = ref(null);
const showReviewForm = ref(false);
// Mock student data (in real app, this would come from a store)
const students = [
    { id: 'student1', name: 'Alice Johnson', rollNo: '6A01' },
    { id: 'student2', name: 'Bob Smith', rollNo: '6A02' },
    { id: 'student3', name: 'Charlie Brown', rollNo: '6A03' },
    { id: 'student4', name: 'Diana Miller', rollNo: '6A04' },
    { id: 'student5', name: 'Edward Wilson', rollNo: '6A05' }
];
const evidence = computed(() => academicsStore.getTaskEvidence(props.task.id));
const reviews = computed(() => academicsStore.getTaskReviews(props.task.id));
const getStudentEvidence = (studentId) => evidence.value.find(e => e.studentId === studentId);
const getStudentReviews = (studentId) => {
    const studentReviews = reviews.value.filter(r => r.studentId === studentId);
    return {
        self: studentReviews.find(r => r.type === 'self'),
        peer: studentReviews.filter(r => r.type === 'peer'),
        teacher: studentReviews.find(r => r.type === 'teacher')
    };
};
const getSubmissionStatus = (studentId) => {
    const studentEvidence = getStudentEvidence(studentId);
    if (!studentEvidence)
        return 'Not Submitted';
    return studentEvidence.status;
};
const getStatusColor = (status) => {
    const colors = {
        'Not Submitted': 'red',
        'submitted': 'yellow',
        'self_reviewed': 'blue',
        'peer_reviewed': 'purple',
        'teacher_reviewed': 'green'
    };
    return colors[status] || 'gray';
};
const handleReviewSubmit = (review) => {
    const newReview = {
        ...review,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString()
    };
    academicsStore.reviews.push(newReview);
    // Update evidence status
    const studentEvidence = evidence.value.find(e => e.studentId === review.studentId);
    if (studentEvidence) {
        studentEvidence.status = 'teacher_reviewed';
    }
    showReviewForm.value = false;
    selectedStudent.value = null;
};
const handleApprove = (assessmentId) => {
    academicsStore.updateSelfAssessmentStatus(assessmentId, 'approved');
};
const handleReject = (assessmentId) => {
    academicsStore.updateSelfAssessmentStatus(assessmentId, 'rejected');
};
const getStudentSelfAssessment = (studentId) => {
    return academicsStore.getTaskSelfAssessment(props.task.id, studentId);
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
        ...{ class: ("bg-white rounded-3xl p-6 w-full max-w-[90vw] max-h-[90vh] overflow-y-auto") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-2xl font-bold mb-2") },
    });
    (__VLS_ctx.task.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-gray-600") },
    });
    (__VLS_ctx.task.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-2 space-x-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm") },
    });
    (new Date(__VLS_ctx.task.dueDate).toLocaleDateString());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm") },
    });
    (__VLS_ctx.task.maxMarks);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.show)))
                    return;
                __VLS_ctx.emit('close');
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    if (!__VLS_ctx.showReviewForm) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
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
        for (const [student] of __VLS_getVForSourceType((__VLS_ctx.students))) {
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
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("px-3 py-1 text-sm rounded-lg inline-block") },
                ...{ class: ((`bg-${__VLS_ctx.getStatusColor(__VLS_ctx.getSubmissionStatus(student.id))}-50 
                      text-${__VLS_ctx.getStatusColor(__VLS_ctx.getSubmissionStatus(student.id))}-700`)) },
            });
            (__VLS_ctx.getSubmissionStatus(student.id).replace('_', ' '));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-4 py-3") },
            });
            if (__VLS_ctx.getStudentEvidence(student.id)) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("flex gap-2") },
                });
                for (const [file] of __VLS_getVForSourceType((__VLS_ctx.getStudentEvidence(student.id)?.files))) {
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
                        key: ((file.name)),
                        href: ((file.url)),
                        target: ("_blank"),
                        ...{ class: ("px-2 py-1 bg-white border border-gray-200 rounded text-sm hover:bg-gray-50") },
                    });
                    (file.name);
                }
            }
            else {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                    ...{ class: ("text-sm text-gray-500") },
                });
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-4 py-3") },
            });
            if (__VLS_ctx.getStudentReviews(student.id).self) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("text-sm") },
                });
                (__VLS_ctx.getStudentReviews(student.id).self?.feedback);
            }
            else {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                    ...{ class: ("text-sm text-gray-500") },
                });
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-4 py-3") },
            });
            if (__VLS_ctx.getStudentReviews(student.id).peer.length) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("text-sm") },
                });
                for (const [review] of __VLS_getVForSourceType((__VLS_ctx.getStudentReviews(student.id).peer))) {
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                        key: ((review.id)),
                    });
                    (review.feedback);
                }
            }
            else {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                    ...{ class: ("text-sm text-gray-500") },
                });
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-4 py-3") },
            });
            if (__VLS_ctx.getStudentReviews(student.id).teacher) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("text-sm") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("font-medium") },
                });
                (__VLS_ctx.getStudentReviews(student.id).teacher?.marks);
                (__VLS_ctx.getStudentReviews(student.id).teacher?.feedback);
            }
            else {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                    ...{ class: ("text-sm text-gray-500") },
                });
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-4 py-3") },
            });
            if (__VLS_ctx.getStudentEvidence(student.id) &&
                __VLS_ctx.getSubmissionStatus(student.id) !== 'teacher_reviewed') {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                    ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.show)))
                                return;
                            if (!((!__VLS_ctx.showReviewForm)))
                                return;
                            if (!((__VLS_ctx.getStudentEvidence(student.id) &&
                                __VLS_ctx.getSubmissionStatus(student.id) !== 'teacher_reviewed')))
                                return;
                            __VLS_ctx.selectedStudent = student.id;
                            __VLS_ctx.showReviewForm = true;
                        } },
                    ...{ class: ("px-3 py-1 bg-[#0447A8] text-white rounded-lg text-sm") },
                });
            }
        }
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mb-6") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.show)))
                        return;
                    if (!(!((!__VLS_ctx.showReviewForm))))
                        return;
                    __VLS_ctx.showReviewForm = false;
                } },
            ...{ class: ("text-gray-600 hover:text-gray-800 flex items-center gap-2") },
        });
        if (__VLS_ctx.selectedStudent) {
            // @ts-ignore
            /** @type { [typeof TeacherReviewForm, ] } */ ;
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(TeacherReviewForm, new TeacherReviewForm({
                ...{ 'onSubmit': {} },
                task: ((__VLS_ctx.task)),
                evidence: ((__VLS_ctx.getStudentEvidence(__VLS_ctx.selectedStudent))),
                existingReviews: ((__VLS_ctx.getStudentReviews(__VLS_ctx.selectedStudent))),
            }));
            const __VLS_1 = __VLS_0({
                ...{ 'onSubmit': {} },
                task: ((__VLS_ctx.task)),
                evidence: ((__VLS_ctx.getStudentEvidence(__VLS_ctx.selectedStudent))),
                existingReviews: ((__VLS_ctx.getStudentReviews(__VLS_ctx.selectedStudent))),
            }, ...__VLS_functionalComponentArgsRest(__VLS_0));
            let __VLS_5;
            const __VLS_6 = {
                onSubmit: (__VLS_ctx.handleReviewSubmit)
            };
            let __VLS_2;
            let __VLS_3;
            var __VLS_4;
        }
    }
    if (__VLS_ctx.task.category === 'co-scholastic') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-6") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-semibold mb-4") },
        });
        for (const [student] of __VLS_getVForSourceType((__VLS_ctx.students))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((student.id)),
                ...{ class: ("mb-6") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("bg-gray-50 rounded-xl p-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex justify-between items-start mb-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("font-medium") },
            });
            (student.name);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("text-sm text-gray-600") },
            });
            (student.rollNo);
            if (__VLS_ctx.getStudentSelfAssessment(student.id)) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("px-3 py-1 text-sm rounded-lg") },
                    ...{ class: (({
                            'bg-yellow-50 text-yellow-700': __VLS_ctx.assessment.status === 'pending',
                            'bg-green-50 text-green-700': __VLS_ctx.assessment.status === 'approved',
                            'bg-red-50 text-red-700': __VLS_ctx.assessment.status === 'rejected'
                        })) },
                });
                (__VLS_ctx.assessment.status.charAt(0).toUpperCase() + __VLS_ctx.assessment.status.slice(1));
            }
            if (__VLS_ctx.getStudentSelfAssessment(student.id)) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("space-y-4") },
                });
                for (const [score] of __VLS_getVForSourceType((__VLS_ctx.assessment.rubricScores))) {
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                        key: ((score.rubricId)),
                    });
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                        ...{ class: ("font-medium") },
                    });
                    (__VLS_ctx.task.rubrics.find(r => r.id === score.rubricId)?.criterion);
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                        ...{ class: ("text-sm") },
                    });
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                    (score.level);
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                        ...{ class: ("text-gray-600") },
                    });
                    (score.comment);
                }
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("font-medium") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("text-sm text-gray-600") },
                });
                (__VLS_ctx.assessment.reflection);
                if (__VLS_ctx.assessment.status === 'pending') {
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                        ...{ class: ("flex gap-4") },
                    });
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                        ...{ onClick: (...[$event]) => {
                                if (!((__VLS_ctx.show)))
                                    return;
                                if (!((__VLS_ctx.task.category === 'co-scholastic')))
                                    return;
                                if (!((__VLS_ctx.getStudentSelfAssessment(student.id))))
                                    return;
                                if (!((__VLS_ctx.assessment.status === 'pending')))
                                    return;
                                __VLS_ctx.handleApprove(__VLS_ctx.assessment.id);
                            } },
                        ...{ class: ("px-4 py-2 bg-green-600 text-white rounded-xl text-sm") },
                    });
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                        ...{ onClick: (...[$event]) => {
                                if (!((__VLS_ctx.show)))
                                    return;
                                if (!((__VLS_ctx.task.category === 'co-scholastic')))
                                    return;
                                if (!((__VLS_ctx.getStudentSelfAssessment(student.id))))
                                    return;
                                if (!((__VLS_ctx.assessment.status === 'pending')))
                                    return;
                                __VLS_ctx.handleReject(__VLS_ctx.assessment.id);
                            } },
                        ...{ class: ("px-4 py-2 bg-red-600 text-white rounded-xl text-sm") },
                    });
                }
            }
        }
    }
}
['fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-[90vw]', 'max-h-[90vh]', 'overflow-y-auto', 'flex', 'justify-between', 'items-start', 'mb-6', 'text-2xl', 'font-bold', 'mb-2', 'text-gray-600', 'mt-2', 'space-x-2', 'px-3', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded-lg', 'text-sm', 'px-3', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded-lg', 'text-sm', 'text-gray-500', 'hover:text-gray-700', 'overflow-x-auto', 'w-full', 'border-collapse', 'bg-gray-50', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'px-4', 'py-3', 'text-left', 'text-sm', 'font-medium', 'text-gray-700', 'divide-y', 'divide-gray-200', 'hover:bg-gray-50', 'px-4', 'py-3', 'font-medium', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'px-3', 'py-1', 'text-sm', 'rounded-lg', 'inline-block', 'px-4', 'py-3', 'flex', 'gap-2', 'px-2', 'py-1', 'bg-white', 'border', 'border-gray-200', 'rounded', 'text-sm', 'hover:bg-gray-50', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'text-sm', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'text-sm', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'text-sm', 'font-medium', 'text-sm', 'text-gray-500', 'px-4', 'py-3', 'px-3', 'py-1', 'bg-[#0447A8]', 'text-white', 'rounded-lg', 'text-sm', 'mb-6', 'text-gray-600', 'hover:text-gray-800', 'flex', 'items-center', 'gap-2', 'mt-6', 'text-lg', 'font-semibold', 'mb-4', 'mb-6', 'bg-gray-50', 'rounded-xl', 'p-4', 'flex', 'justify-between', 'items-start', 'mb-4', 'font-medium', 'text-sm', 'text-gray-600', 'px-3', 'py-1', 'text-sm', 'rounded-lg', 'bg-yellow-50', 'text-yellow-700', 'bg-green-50', 'text-green-700', 'bg-red-50', 'text-red-700', 'space-y-4', 'font-medium', 'text-sm', 'text-gray-600', 'font-medium', 'text-sm', 'text-gray-600', 'flex', 'gap-4', 'px-4', 'py-2', 'bg-green-600', 'text-white', 'rounded-xl', 'text-sm', 'px-4', 'py-2', 'bg-red-600', 'text-white', 'rounded-xl', 'text-sm',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TeacherReviewForm: TeacherReviewForm,
            assessment: assessment,
            emit: emit,
            selectedStudent: selectedStudent,
            showReviewForm: showReviewForm,
            students: students,
            getStudentEvidence: getStudentEvidence,
            getStudentReviews: getStudentReviews,
            getSubmissionStatus: getSubmissionStatus,
            getStatusColor: getStatusColor,
            handleReviewSubmit: handleReviewSubmit,
            handleApprove: handleApprove,
            handleReject: handleReject,
            getStudentSelfAssessment: getStudentSelfAssessment,
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
