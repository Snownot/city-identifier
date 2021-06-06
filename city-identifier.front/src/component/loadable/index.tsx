import Loadable from 'react-loadable';
import Loading from './../loading/index';

const LoadableComponent = (component: any) =>
  Loadable({
    loader: component,
    loading: Loading,
  });

export default LoadableComponent;
