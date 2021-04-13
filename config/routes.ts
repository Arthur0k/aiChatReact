import { defineConfig } from 'umi';

export default defineConfig([
  {
    path: '/',
    // component: '@/pages/index',
    redirect: '/chatRoom',
    // routes: [
    //   {
    //     path: '/chatRoom',
    //     component: '@/pages/chatRoom',
    //   },
    // ],
  },
  {
    path: '/chatRoom',
    component: '@/pages/chatRoom',
  },
]);
