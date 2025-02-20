import { RouterView } from 'vue-router';
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("min-h-screen bg-[#F5F5F5]") },
});
// @ts-ignore
/** @type { [typeof Sidebar, ] } */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Sidebar, new Sidebar({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
// @ts-ignore
/** @type { [typeof Header, ] } */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(Header, new Header({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_10 = {}.RouterView;
/** @type { [typeof __VLS_components.RouterView, ] } */ ;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
['min-h-screen', 'bg-[#F5F5F5]',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterView: RouterView,
            Sidebar: Sidebar,
            Header: Header,
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
