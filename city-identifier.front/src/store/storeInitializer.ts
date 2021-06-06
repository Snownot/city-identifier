import SessionStore from "./sessionStore";

export default function initializeStores() {
    return {
        sessionStore: new SessionStore()
    };
}
