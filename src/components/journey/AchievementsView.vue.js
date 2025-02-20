import { ref, computed } from "vue";
import { useJourneyStore } from "@/stores/journey";
const props = defineProps();
const journeyStore = useJourneyStore();
const selectedType = ref("academic");
const verificationComment = ref("");
const selectedAchievement = ref(null);
const showVerificationModal = ref(false);
const selectedBadge = ref("");
// Comprehensive badge list organized by category
const badges = {
    academic: [
        {
            emoji: "🎓",
            name: "Academic Excellence",
            description: "Outstanding academic performance",
        },
        {
            emoji: "📚",
            name: "Scholar",
            description: "Exceptional dedication to learning",
        },
        {
            emoji: "🔬",
            name: "Science Whiz",
            description: "Excellence in scientific pursuits",
        },
        {
            emoji: "📐",
            name: "Math Master",
            description: "Outstanding mathematical ability",
        },
        {
            emoji: "✍️",
            name: "Literary Star",
            description: "Excellence in language and literature",
        },
    ],
    sports: [
        {
            emoji: "🏆",
            name: "Sports Champion",
            description: "Outstanding athletic achievement",
        },
        {
            emoji: "⚽",
            name: "Team Player",
            description: "Exceptional sportsmanship",
        },
        { emoji: "🏃‍♂️", name: "Track Star", description: "Excellence in athletics" },
        {
            emoji: "🏸",
            name: "Sports Excellence",
            description: "Outstanding performance in sports",
        },
        {
            emoji: "🏅",
            name: "Athletic Achievement",
            description: "Recognition of athletic prowess",
        },
    ],
    arts: [
        {
            emoji: "🎨",
            name: "Creative Genius",
            description: "Excellence in visual arts",
        },
        {
            emoji: "🎭",
            name: "Drama Star",
            description: "Outstanding performance in theater",
        },
        {
            emoji: "🎵",
            name: "Music Maestro",
            description: "Excellence in musical performance",
        },
        {
            emoji: "🎪",
            name: "Performance Star",
            description: "Outstanding stage presence",
        },
        {
            emoji: "🖼️",
            name: "Artistic Excellence",
            description: "Recognition of artistic talent",
        },
    ],
    leadership: [
        {
            emoji: "👑",
            name: "Leadership Excellence",
            description: "Outstanding leadership qualities",
        },
        {
            emoji: "🤝",
            name: "Team Leader",
            description: "Exceptional team management",
        },
        {
            emoji: "📢",
            name: "Public Speaker",
            description: "Excellence in communication",
        },
        {
            emoji: "🎯",
            name: "Goal Achiever",
            description: "Outstanding goal-setting and achievement",
        },
        {
            emoji: "🌟",
            name: "Rising Star",
            description: "Emerging leadership potential",
        },
    ],
    community: [
        {
            emoji: "🌍",
            name: "Community Champion",
            description: "Outstanding community service",
        },
        {
            emoji: "🤲",
            name: "Helping Hand",
            description: "Exceptional volunteer work",
        },
        {
            emoji: "♻️",
            name: "Eco Warrior",
            description: "Environmental stewardship",
        },
        {
            emoji: "🌱",
            name: "Social Impact",
            description: "Making a difference in society",
        },
        {
            emoji: "💝",
            name: "Community Spirit",
            description: "Outstanding community involvement",
        },
    ],
};
const achievements = computed(() => journeyStore.getAchievementsByType(selectedType.value));
const availableBadges = computed(() => badges[selectedType.value] || []);
const handleVerify = (achievementId, status) => {
    if (!selectedBadge && status === "verified") {
        alert("Please select a badge before verifying the achievement");
        return;
    }
    journeyStore.verifyAchievement(achievementId, status);
    showVerificationModal.value = false;
    selectedAchievement.value = null;
    verificationComment.value = "";
    selectedBadge.value = "";
};
const openVerificationModal = (achievement) => {
    selectedAchievement.value = achievement;
    showVerificationModal.value = true;
};
const getStatusColor = (status) => {
    const colors = {
        pending: "yellow",
        verified: "green",
        rejected: "red",
    };
    return colors[status];
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
for (const [type] of __VLS_getVForSourceType(([
    'academic',
    'sports',
    'arts',
    'leadership',
    'community',
]))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectedType = type;
            } },
        key: ((type)),
        ...{ class: ("px-4 py-2 rounded-xl") },
        ...{ class: ((__VLS_ctx.selectedType === type
                ? 'bg-[#0447A8] text-white'
                : 'bg-white text-gray-700')) },
    });
    (type.charAt(0).toUpperCase() + type.slice(1));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-3 gap-6") },
});
for (const [achievement] of __VLS_getVForSourceType((__VLS_ctx.achievements))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((achievement.id)),
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-4xl") },
    });
    (achievement.badge);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-3 py-1 text-sm rounded-lg") },
        ...{ class: ((`bg-${__VLS_ctx.getStatusColor(achievement.verificationStatus)}-50 
              text-${__VLS_ctx.getStatusColor(achievement.verificationStatus)}-700`)) },
    });
    (achievement.verificationStatus.charAt(0).toUpperCase() +
        achievement.verificationStatus.slice(1));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-lg font-semibold mb-2") },
    });
    (achievement.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-gray-600 mb-4") },
    });
    (achievement.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-500 mb-4") },
    });
    (new Date(achievement.date).toLocaleDateString());
    if (achievement.evidence.length) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mb-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm font-medium mb-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-wrap gap-2") },
        });
        for (const [file, index] of __VLS_getVForSourceType((achievement.evidence))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
                key: ((index)),
                href: ((file.url)),
                target: ("_blank"),
                ...{ class: ("px-3 py-1 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 flex items-center gap-2") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (file.type === "image"
                ? "🖼️"
                : file.type === "pdf"
                    ? "📄"
                    : "🔗");
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (file.type);
        }
    }
    if (achievement.verificationStatus === 'pending') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex gap-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((achievement.verificationStatus === 'pending')))
                        return;
                    __VLS_ctx.openVerificationModal(achievement);
                } },
            ...{ class: ("w-full px-3 py-2 bg-[#0447A8] text-white rounded-lg text-sm") },
        });
    }
}
if (__VLS_ctx.showVerificationModal && __VLS_ctx.selectedAchievement) {
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
                if (!((__VLS_ctx.showVerificationModal && __VLS_ctx.selectedAchievement)))
                    return;
                __VLS_ctx.showVerificationModal = false;
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium") },
    });
    (__VLS_ctx.selectedAchievement.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-sm text-gray-600") },
    });
    (__VLS_ctx.selectedAchievement.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-3") },
    });
    for (const [badge] of __VLS_getVForSourceType((__VLS_ctx.availableBadges))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.showVerificationModal && __VLS_ctx.selectedAchievement)))
                        return;
                    __VLS_ctx.selectedBadge = badge.emoji;
                } },
            key: ((badge.name)),
            ...{ class: ("flex items-center gap-2 p-3 rounded-xl border transition-colors") },
            ...{ class: ((__VLS_ctx.selectedBadge === badge.emoji
                    ? 'border-[#0447A8] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300')) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-2xl") },
        });
        (badge.emoji);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-left") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium text-sm") },
        });
        (badge.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-xs text-gray-500") },
        });
        (badge.description);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm font-medium mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [file, index] of __VLS_getVForSourceType((__VLS_ctx.selectedAchievement.evidence))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((index)),
            ...{ class: ("flex items-center justify-between p-3 bg-gray-50 rounded-lg") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center gap-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (file.type === "image"
            ? "🖼️"
            : file.type === "pdf"
                ? "📄"
                : "🔗");
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-sm") },
        });
        (index + 1);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((file.url)),
            target: ("_blank"),
            ...{ class: ("text-sm text-[#0447A8] hover:underline") },
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.verificationComment)),
        rows: ("3"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        placeholder: ("Add a comment about your verification decision..."),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-end gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showVerificationModal && __VLS_ctx.selectedAchievement)))
                    return;
                __VLS_ctx.handleVerify(__VLS_ctx.selectedAchievement.id, 'rejected');
            } },
        ...{ class: ("px-4 py-2 bg-red-600 text-white rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showVerificationModal && __VLS_ctx.selectedAchievement)))
                    return;
                __VLS_ctx.handleVerify(__VLS_ctx.selectedAchievement.id, 'verified');
            } },
        ...{ class: ("px-4 py-2 bg-green-600 text-white rounded-xl") },
        disabled: ((!__VLS_ctx.selectedBadge)),
    });
}
['space-y-6', 'flex', 'gap-4', 'px-4', 'py-2', 'rounded-xl', 'grid', 'grid-cols-3', 'gap-6', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'flex', 'justify-between', 'items-start', 'mb-4', 'text-4xl', 'px-3', 'py-1', 'text-sm', 'rounded-lg', 'text-lg', 'font-semibold', 'mb-2', 'text-gray-600', 'mb-4', 'text-sm', 'text-gray-500', 'mb-4', 'mb-4', 'text-sm', 'font-medium', 'mb-2', 'flex', 'flex-wrap', 'gap-2', 'px-3', 'py-1', 'bg-gray-50', 'rounded-lg', 'text-sm', 'hover:bg-gray-100', 'flex', 'items-center', 'gap-2', 'flex', 'gap-2', 'w-full', 'px-3', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-lg', 'text-sm', 'fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-lg', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-xl', 'font-bold', 'text-gray-500', 'hover:text-gray-700', 'space-y-4', 'font-medium', 'text-sm', 'text-gray-600', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-2', 'grid', 'grid-cols-2', 'gap-3', 'flex', 'items-center', 'gap-2', 'p-3', 'rounded-xl', 'border', 'transition-colors', 'text-2xl', 'text-left', 'font-medium', 'text-sm', 'text-xs', 'text-gray-500', 'text-sm', 'font-medium', 'mb-2', 'space-y-2', 'flex', 'items-center', 'justify-between', 'p-3', 'bg-gray-50', 'rounded-lg', 'flex', 'items-center', 'gap-2', 'text-sm', 'text-sm', 'text-[#0447A8]', 'hover:underline', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-2', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'flex', 'justify-end', 'gap-4', 'px-4', 'py-2', 'bg-red-600', 'text-white', 'rounded-xl', 'px-4', 'py-2', 'bg-green-600', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            selectedType: selectedType,
            verificationComment: verificationComment,
            selectedAchievement: selectedAchievement,
            showVerificationModal: showVerificationModal,
            selectedBadge: selectedBadge,
            achievements: achievements,
            availableBadges: availableBadges,
            handleVerify: handleVerify,
            openVerificationModal: openVerificationModal,
            getStatusColor: getStatusColor,
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
