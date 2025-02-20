import { computed } from 'vue';
import { useRoute } from 'vue-router';
import logoSrc from '@/assets/logo.svg';
const route = useRoute();
const activeRoute = computed(() => route.path);
const navigationItems = [
    {
        section: 'OVERALL',
        items: [
            { name: 'Dashboard', icon: '📊', route: '/' }
        ]
    },
    {
        section: 'EDUCATION CENTER',
        items: [
            { name: 'Subject Management', icon: '📚', route: '/subjects' },
            { name: 'Academics', icon: '🎓', route: '/academics' },
            { name: 'Reports', icon: '📈', route: '/reports' },
            { name: 'Academic Calendar', icon: '🗓', route: '/calendar' },
            { name: 'Academic Journey', icon: '🚀', route: '/journey' },
            { name: 'QB Generation', icon: '📝', route: '/qb' },
            { name: 'Notice Board', icon: '📢', route: '/notices' },
            { name: 'Content Library', icon: '📂', route: '/library' },
            { name: 'CPD', icon: '🎯', route: '/cpd' },
            { name: 'Parent Teacher Meeting', icon: '👨‍🏫', route: '/ptm' }
        ]
    },
    {
        section: 'SYSTEM PREFERENCE',
        items: [
            { name: 'Settings', icon: '⚙', route: '/settings' },
            { name: 'Help', icon: '❓', route: '/help' },
            { name: 'Logout', icon: '🚪', route: '/logout' }
        ]
    }
];
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({
    ...{ class: ("w-64 h-screen bg-white border-r border-[#ECECEC] fixed left-0 top-0") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("p-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("mb-8") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: ((__VLS_ctx.logoSrc)),
    alt: ("LMS Logo"),
    ...{ class: ("h-8") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
for (const [section] of __VLS_getVForSourceType((__VLS_ctx.navigationItems))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((section.section)),
        ...{ class: ("mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-xs font-semibold text-gray-500 mb-2") },
    });
    (section.section);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("space-y-2") },
    });
    for (const [item] of __VLS_getVForSourceType((section.items))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: ((item.name)),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((item.route)),
            ...{ class: ("flex items-center px-4 py-2 text-sm rounded-xl transition-colors") },
            ...{ class: ((__VLS_ctx.activeRoute === item.route ? 'bg-blue-50 text-[#0447A8]' : 'text-gray-700 hover:bg-gray-50')) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("mr-3") },
        });
        (item.icon);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("truncate") },
        });
        (item.name);
    }
}
['w-64', 'h-screen', 'bg-white', 'border-r', 'border-[#ECECEC]', 'fixed', 'left-0', 'top-0', 'p-6', 'mb-8', 'h-8', 'mb-6', 'text-xs', 'font-semibold', 'text-gray-500', 'mb-2', 'space-y-2', 'flex', 'items-center', 'px-4', 'py-2', 'text-sm', 'rounded-xl', 'transition-colors', 'mr-3', 'truncate',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            logoSrc: logoSrc,
            activeRoute: activeRoute,
            navigationItems: navigationItems,
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
