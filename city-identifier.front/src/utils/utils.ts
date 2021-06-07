import {routers} from "../component/router/router.config";

class Utils {

    getRoute = (path: string): any => {
        return routers.filter(route => route.path === path)[0];
    };

}

export default new Utils();
