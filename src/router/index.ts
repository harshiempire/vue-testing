import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';
import AcademicsView from '@/views/AcademicsView.vue';
import SubjectManagementView from '@/views/SubjectManagementView.vue';
import NoticeBoardView from '@/views/NoticeBoardView.vue';
import PTMView from '@/views/PTMView.vue';
import QBView from '@/views/QBView.vue';
import ContentLibraryView from '@/views/ContentLibraryView.vue';
import ReportsView from '@/views/ReportsView.vue';
import CalendarView from '@/views/CalendarView.vue';
import AcademicJourneyView from '@/views/AcademicJourneyView.vue';
import TasksView from '@/views/TasksView.vue';
import AttendanceView from '@/views/AttendanceView.vue';
import CPDView from '@/views/CPDView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/academics',
      name: 'academics',
      component: AcademicsView,
    },
    {
      path: '/subjects',
      name: 'subjects',
      component: SubjectManagementView,
    },
    {
      path: '/notices',
      name: 'notices',
      component: NoticeBoardView,
    },
    {
      path: '/reports',
      name: 'reports',
      component: ReportsView,
    },
    {
      path: '/ptm',
      name: 'ptm',
      component: PTMView,
    },
    {
      path: '/qb',
      name: 'qb',
      component: QBView,
    },
    {
      path: '/library',
      name: 'library',
      component: ContentLibraryView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
    },
    {
      path: '/journey',
      name: 'journey',
      component: AcademicJourneyView,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: AttendanceView,
    },
    {
      path: '/cpd',
      name: 'cpd',
      component: CPDView,
    },
  ],
});

export default router;
