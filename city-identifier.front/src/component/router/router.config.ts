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
  },
  {
    path: '/user',
    name: 'user',
    title: 'User',
    component: LoadableComponent(() => import('../../component/layout/UserLayout')),
    isLayout: true,
  },
  {
    path: '/Identifier',
    name: 'Identifier',
    permission: '',
    title: 'Identifier',
    showInMenu: true,
    component: LoadableComponent(() => import('../../stage/Identifier')),
  }
];


export const routers = [ ...appRouters];
