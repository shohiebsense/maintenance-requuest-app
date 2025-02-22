// stores/HomePageStore.ts
import { makeAutoObservable, runInAction } from "mobx";
import { RequestType } from "./HomePageView";

class HomePageStore {
    requests: RequestType[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addRequest(request: RequestType) {
        console.log("Adding request:", request); // Debugging
        this.requests.push(request);
        console.log("Adding request:", this.requests); // Debugging

    }

    editRequest(oldTitle: string, updatedRequest: RequestType) {
        const index = this.requests.findIndex((req) => req.title === oldTitle);
        if (index !== -1) {
            this.requests[index] = { ...this.requests[index], ...updatedRequest };
        }
    }
    
}

export default new HomePageStore();