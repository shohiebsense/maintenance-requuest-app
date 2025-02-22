// stores/HomePageStore.ts
import { makeAutoObservable } from "mobx";
import { RequestType } from "./HomePageView";

class HomePageStore {
    requests: RequestType[] = [
        {
            title: "Front Door Look broken",
            date: "11 Dec 2024",
            status: "Urgent",
            info: "What is a Breakup?",
            type: "The Cracked",
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addRequest(request: RequestType) {
        this.requests.push(request);
    }

    editRequest(oldTitle: string, updatedRequest: RequestType) {
        const index = this.requests.findIndex((req) => req.title === oldTitle);
        if (index !== -1) {
            this.requests[index] = { ...this.requests[index], ...updatedRequest };
        }
    }
    
}

export default new HomePageStore();