import LoadableComponent from './../loadable/index';

export const appRouters: any = [
  {
    path: '/user',
    name: 'user',
    title: 'User',
    component: LoadableComponent(() => import('../../component/layout/UserLayout')),
    isLayout: true,
  },
  {
    path: '/',
    name: 'Identifier',
    permission: '',
    title: 'Identifier',
    showInMenu: true,
    component: LoadableComponent(() => import('../../stage/Identifier')),
  }
];


export const routers = [ ...appRouters];
