import { ref, computed } from 'vue';
import { useContentStore } from '@/stores/content';
import { useSubjectStore } from '@/stores/subject';
import ResourceUploadModal from '@/components/content/ResourceUploadModal.vue';
const contentStore = useContentStore();
const subjectStore = useSubjectStore();
const activeTab = ref('library');
const selectedSubject = ref('all');
const selectedType = ref('all');
const selectedSource = ref('all');
const selectedSubCategory = ref('all');
const showUploader = ref(false);
const selectedResource = ref(null);
const showPopularSection = computed(() => activeTab.value === 'library');
// Mock user ID for likes functionality
const currentUserId = 'user1';
const filteredResources = computed(() => {
    const filters = {};
    if (selectedSubject.value !== 'all') {
        filters.subject = selectedSubject.value;
    }
    if (selectedType.value !== 'all') {
        filters.type = selectedType.value;
    }
    if (selectedSource.value !== 'all') {
        filters.source = selectedSource.value;
    }
    if (activeTab.value === 'library') {
        // Show all resources in library tab
    }
    else if (activeTab.value === 'scholastic') {
        filters.category = 'academic';
    }
    else {
        filters.category = 'co-scholastic';
        if (selectedSubCategory.value !== 'all') {
            filters.subCategory = selectedSubCategory.value;
        }
    }
    return contentStore.filterResources(filters);
});
const mostViewedResources = computed(() => contentStore.getMostViewed());
const mostLikedResources = computed(() => contentStore.getMostLiked());
const handleResourceUpload = async (file, title, type) => {
    // In a real application, you would upload the file to a server here
    const fakeUrl = URL.createObjectURL(file);
    contentStore.addResource({
        title,
        type,
        url: fakeUrl,
        subject: 'Mathematics', // This would come from selected subject
        source: 'teacher',
        thumbnail: type === 'video' ? 'https://placehold.co/400x225' : undefined,
        category: activeTab.value === 'co-scholastic' ? 'co-scholastic' : 'academic',
        subCategory: activeTab.value === 'co-scholastic' ? selectedSubCategory.value : undefined
    });
    showUploader.value = false;
};
const openResource = (resource) => {
    selectedResource.value = resource;
    contentStore.incrementViews(resource.id);
};
const closeResource = () => {
    selectedResource.value = null;
};
const toggleLike = (resource) => {
    contentStore.toggleLike(resource.id, currentUserId);
};
const isLiked = (resource) => {
    return resource.likedBy.includes(currentUserId);
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
            __VLS_ctx.showUploader = true;
        } },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4 mb-6") },
});
for (const [tab] of __VLS_getVForSourceType(['library', 'scholastic', 'co-scholastic'])) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.activeTab = tab;
            } },
        key: ((tab)),
        ...{ class: ("px-4 py-2 rounded-xl") },
        ...{ class: ((__VLS_ctx.activeTab === tab ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700')) },
    });
    (tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-'));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-4 mb-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: ((__VLS_ctx.selectedSubject)),
    ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("all"),
});
for (const [subject] of __VLS_getVForSourceType((__VLS_ctx.contentStore.subjects))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: ((subject)),
        value: ((subject)),
    });
    (subject);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: ((__VLS_ctx.selectedType)),
    ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("all"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("video"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("pdf"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("image"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: ((__VLS_ctx.selectedSource)),
    ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("all"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("global"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("teacher"),
});
if (__VLS_ctx.activeTab === 'co-scholastic') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.selectedSubCategory)),
        ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("all"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("visual-arts"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("performance-arts"),
    });
}
if (__VLS_ctx.showPopularSection) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-6 mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [resource] of __VLS_getVForSourceType((__VLS_ctx.mostViewedResources))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.showPopularSection)))
                        return;
                    __VLS_ctx.openResource(resource);
                } },
            key: ((resource.id)),
            ...{ class: ("flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center gap-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-sm") },
        });
        (resource.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-0.5 text-xs rounded-lg") },
            ...{ class: (({
                    'bg-blue-50 text-blue-700': resource.type === 'video',
                    'bg-red-50 text-red-700': resource.type === 'pdf',
                    'bg-green-50 text-green-700': resource.type === 'image'
                })) },
        });
        (resource.type);
        if (resource.category) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("px-2 py-0.5 text-xs rounded-lg") },
                ...{ class: (({
                        'bg-purple-50 text-purple-700': resource.category === 'academic',
                        'bg-orange-50 text-orange-700': resource.category === 'co-scholastic'
                    })) },
            });
            (resource.category === 'academic' ? 'Scholastic' : 'Co-Scholastic');
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (resource.views);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [resource] of __VLS_getVForSourceType((__VLS_ctx.mostLikedResources))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.showPopularSection)))
                        return;
                    __VLS_ctx.openResource(resource);
                } },
            key: ((resource.id)),
            ...{ class: ("flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center gap-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-sm") },
        });
        (resource.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-0.5 text-xs rounded-lg") },
            ...{ class: (({
                    'bg-blue-50 text-blue-700': resource.type === 'video',
                    'bg-red-50 text-red-700': resource.type === 'pdf',
                    'bg-green-50 text-green-700': resource.type === 'image'
                })) },
        });
        (resource.type);
        if (resource.category) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("px-2 py-0.5 text-xs rounded-lg") },
                ...{ class: (({
                        'bg-purple-50 text-purple-700': resource.category === 'academic',
                        'bg-orange-50 text-orange-700': resource.category === 'co-scholastic'
                    })) },
            });
            (resource.category === 'academic' ? 'Scholastic' : 'Co-Scholastic');
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (resource.likes);
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-4 gap-6") },
});
for (const [resource] of __VLS_getVForSourceType((__VLS_ctx.filteredResources))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((resource.id)),
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] overflow-hidden hover:shadow-lg transition-shadow") },
    });
    if (resource.thumbnail) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    if (!((resource.thumbnail)))
                        return;
                    __VLS_ctx.openResource(resource);
                } },
            ...{ class: ("aspect-video bg-gray-100 cursor-pointer") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: ((resource.thumbnail)),
            alt: ((resource.title)),
            ...{ class: ("w-full h-full object-cover") },
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-start justify-between gap-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.openResource(resource);
            } },
        ...{ class: ("font-medium cursor-pointer hover:text-[#0447A8]") },
    });
    (resource.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-wrap gap-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-2 py-1 text-xs rounded-lg") },
        ...{ class: (({
                'bg-blue-50 text-blue-700': resource.type === 'video',
                'bg-red-50 text-red-700': resource.type === 'pdf',
                'bg-green-50 text-green-700': resource.type === 'image'
            })) },
    });
    (resource.type.toUpperCase());
    if (__VLS_ctx.activeTab === 'library' && resource.category) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-2 py-1 text-xs rounded-lg") },
            ...{ class: (({
                    'bg-purple-50 text-purple-700': resource.category === 'academic',
                    'bg-orange-50 text-orange-700': resource.category === 'co-scholastic'
                })) },
        });
        (resource.category === 'academic' ? 'Scholastic' : 'Co-Scholastic');
    }
    if (resource.description) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-2 text-sm text-gray-600 line-clamp-2") },
        });
        (resource.description);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-2 text-sm text-gray-600") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (resource.uploadedBy.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (resource.uploadedBy.school);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-2 flex items-center justify-between text-sm text-gray-500") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (new Date(resource.uploadedAt).toLocaleDateString());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (resource.views);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleLike(resource);
            } },
        ...{ class: ("flex items-center gap-1 hover:text-red-500") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.isLiked(resource) ? '❤️' : '🤍');
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (resource.likes);
}
if (__VLS_ctx.showUploader) {
    // @ts-ignore
    /** @type { [typeof ResourceUploadModal, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ResourceUploadModal, new ResourceUploadModal({
        ...{ 'onUpload': {} },
        ...{ 'onClose': {} },
        show: ((__VLS_ctx.showUploader)),
        activeTab: ((__VLS_ctx.activeTab)),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onUpload': {} },
        ...{ 'onClose': {} },
        show: ((__VLS_ctx.showUploader)),
        activeTab: ((__VLS_ctx.activeTab)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onUpload: (__VLS_ctx.handleResourceUpload)
    };
    const __VLS_7 = {
        onClose: (...[$event]) => {
            if (!((__VLS_ctx.showUploader)))
                return;
            __VLS_ctx.showUploader = false;
        }
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
}
if (__VLS_ctx.selectedResource) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-bold") },
    });
    (__VLS_ctx.selectedResource.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-sm text-gray-600") },
    });
    (__VLS_ctx.selectedResource.subject);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-2 flex items-center gap-4 text-sm") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.selectedResource.views);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.selectedResource)))
                    return;
                __VLS_ctx.toggleLike(__VLS_ctx.selectedResource);
            } },
        ...{ class: ("flex items-center gap-1 hover:text-red-500") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.isLiked(__VLS_ctx.selectedResource) ? '❤️' : '🤍');
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.selectedResource.likes);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.closeResource) },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    if (__VLS_ctx.selectedResource.type === 'pdf') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({
            src: ((__VLS_ctx.selectedResource.url)),
            ...{ class: ("w-full h-[70vh] border rounded-lg") },
        });
    }
    else if (__VLS_ctx.selectedResource.type === 'video') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)({
            src: ((__VLS_ctx.selectedResource.url)),
            controls: (true),
            ...{ class: ("w-full rounded-lg") },
        });
    }
    else if (__VLS_ctx.selectedResource.type === 'image') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.selectedResource.url)),
            alt: ((__VLS_ctx.selectedResource.title)),
            ...{ class: ("w-full rounded-lg") },
        });
    }
    if (__VLS_ctx.selectedResource.description) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-gray-600") },
        });
        (__VLS_ctx.selectedResource.description);
    }
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'flex', 'gap-4', 'mb-6', 'px-4', 'py-2', 'rounded-xl', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-4', 'mb-6', 'flex', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'grid', 'grid-cols-2', 'gap-6', 'mb-6', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-4', 'font-medium', 'mb-4', 'space-y-2', 'flex', 'items-center', 'justify-between', 'p-2', 'hover:bg-gray-50', 'rounded-lg', 'cursor-pointer', 'flex', 'items-center', 'gap-2', 'text-sm', 'px-2', 'py-0.5', 'text-xs', 'rounded-lg', 'bg-blue-50', 'text-blue-700', 'bg-red-50', 'text-red-700', 'bg-green-50', 'text-green-700', 'px-2', 'py-0.5', 'text-xs', 'rounded-lg', 'bg-purple-50', 'text-purple-700', 'bg-orange-50', 'text-orange-700', 'text-sm', 'text-gray-600', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-4', 'font-medium', 'mb-4', 'space-y-2', 'flex', 'items-center', 'justify-between', 'p-2', 'hover:bg-gray-50', 'rounded-lg', 'cursor-pointer', 'flex', 'items-center', 'gap-2', 'text-sm', 'px-2', 'py-0.5', 'text-xs', 'rounded-lg', 'bg-blue-50', 'text-blue-700', 'bg-red-50', 'text-red-700', 'bg-green-50', 'text-green-700', 'px-2', 'py-0.5', 'text-xs', 'rounded-lg', 'bg-purple-50', 'text-purple-700', 'bg-orange-50', 'text-orange-700', 'text-sm', 'text-gray-600', 'grid', 'grid-cols-4', 'gap-6', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'overflow-hidden', 'hover:shadow-lg', 'transition-shadow', 'aspect-video', 'bg-gray-100', 'cursor-pointer', 'w-full', 'h-full', 'object-cover', 'p-4', 'flex', 'items-start', 'justify-between', 'gap-2', 'font-medium', 'cursor-pointer', 'hover:text-[#0447A8]', 'flex', 'flex-wrap', 'gap-1', 'px-2', 'py-1', 'text-xs', 'rounded-lg', 'bg-blue-50', 'text-blue-700', 'bg-red-50', 'text-red-700', 'bg-green-50', 'text-green-700', 'px-2', 'py-1', 'text-xs', 'rounded-lg', 'bg-purple-50', 'text-purple-700', 'bg-orange-50', 'text-orange-700', 'mt-2', 'text-sm', 'text-gray-600', 'line-clamp-2', 'mt-2', 'text-sm', 'text-gray-600', 'flex', 'items-center', 'gap-1', 'flex', 'items-center', 'gap-1', 'mt-2', 'flex', 'items-center', 'justify-between', 'text-sm', 'text-gray-500', 'flex', 'items-center', 'gap-4', 'flex', 'items-center', 'gap-1', 'flex', 'items-center', 'gap-1', 'hover:text-red-500', 'fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-4xl', 'max-h-[90vh]', 'overflow-y-auto', 'flex', 'justify-between', 'items-start', 'mb-6', 'text-xl', 'font-bold', 'text-sm', 'text-gray-600', 'mt-2', 'flex', 'items-center', 'gap-4', 'text-sm', 'flex', 'items-center', 'gap-1', 'flex', 'items-center', 'gap-1', 'hover:text-red-500', 'text-gray-500', 'hover:text-gray-700', 'space-y-4', 'w-full', 'h-[70vh]', 'border', 'rounded-lg', 'w-full', 'rounded-lg', 'w-full', 'rounded-lg', 'text-gray-600',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ResourceUploadModal: ResourceUploadModal,
            contentStore: contentStore,
            activeTab: activeTab,
            selectedSubject: selectedSubject,
            selectedType: selectedType,
            selectedSource: selectedSource,
            selectedSubCategory: selectedSubCategory,
            showUploader: showUploader,
            selectedResource: selectedResource,
            showPopularSection: showPopularSection,
            filteredResources: filteredResources,
            mostViewedResources: mostViewedResources,
            mostLikedResources: mostLikedResources,
            handleResourceUpload: handleResourceUpload,
            openResource: openResource,
            closeResource: closeResource,
            toggleLike: toggleLike,
            isLiked: isLiked,
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
