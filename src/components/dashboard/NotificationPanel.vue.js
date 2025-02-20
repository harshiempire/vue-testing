import { computed } from 'vue';
import { useDashboardStore } from '@/stores/dashboard';
const dashboardStore = useDashboardStore();
const notifications = computed(() => dashboardStore.notifications.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
const markAsRead = (notificationId) => {
    const notification = dashboardStore.notifications.find(n => n.id === notificationId);
    if (notification) {
        notification.read = true;
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-4 max-h-[500px] overflow-y-auto") },
});
for (const [notification] of __VLS_getVForSourceType((__VLS_ctx.notifications))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((notification.id)),
        ...{ class: ("flex gap-3 p-3 rounded-xl transition-colors") },
        ...{ class: ((notification.read ? 'bg-gray-50' : 'bg-blue-50')) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-2 h-2 mt-2 rounded-full flex-shrink-0") },
        ...{ class: (({
                'bg-blue-500': notification.type === 'info',
                'bg-yellow-500': notification.type === 'warning',
                'bg-green-500': notification.type === 'success'
            })) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-sm") },
        ...{ class: (({ 'font-medium': !notification.read })) },
    });
    (notification.message);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-1 flex items-center justify-between") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-xs text-gray-500") },
    });
    (new Date(notification.timestamp).toLocaleString());
    if (!notification.read) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((!notification.read)))
                        return;
                    __VLS_ctx.markAsRead(notification.id);
                } },
            ...{ class: ("text-xs text-[#0447A8] hover:underline") },
        });
    }
}
['space-y-4', 'max-h-[500px]', 'overflow-y-auto', 'flex', 'gap-3', 'p-3', 'rounded-xl', 'transition-colors', 'w-2', 'h-2', 'mt-2', 'rounded-full', 'flex-shrink-0', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'flex-1', 'text-sm', 'font-medium', 'mt-1', 'flex', 'items-center', 'justify-between', 'text-xs', 'text-gray-500', 'text-xs', 'text-[#0447A8]', 'hover:underline',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            notifications: notifications,
            markAsRead: markAsRead,
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
