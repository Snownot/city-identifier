import LoadableComponent from './../loadable/index';

export const appRouters: any = [
  {
    path: '/',
    exact: true,
    name: 'home',
    permission: '',
    title: 'Home',

    component: LoadableComponent(() => import('../../component/layout/AppLayout')),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: '/user',
    name: 'user',
    title: 'User',
    component: LoadableComponent(() => import('../../component/layout/UserLayout')),
    isLayout: true,
    showInMenu: false,
  },
];


export const routers = [ ...appRouters];
