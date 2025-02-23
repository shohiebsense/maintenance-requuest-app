// stores/HomePageStore.ts
import { makeAutoObservable, runInAction } from "mobx";
import { RequestType } from "./HomePageView";

class HomePageStore {
    requests: RequestType[] = [];
    socket: WebSocket | null = null;

    constructor() {
        makeAutoObservable(this);
        this.connectWebSocket();
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

    connectWebSocket() {
        this.socket = new WebSocket("ws://0.0.0.0:18080/ws");

        this.socket.onopen = () => {
            console.log("WebSocket connected.");
        };

        this.socket.onmessage = (event) => {
            console.log("WebSocket message received:", event.data);
            try {
                const newRequest: RequestType = JSON.parse(event.data);

                if (Array.isArray(newRequest)) {
                    const validRequests = newRequest.filter(req => req?.title && req.title.length > 0 && !this.requests.some(existing => existing.id === req.id));
                    if (validRequests.length > 0) {
                        this.requests.push(...validRequests);
                    } else {
                        console.error("Unparsed request (array with no valid entries)", newRequest);
                    }
                } else if (typeof newRequest === "object" && newRequest !== null && "title" in newRequest && typeof (newRequest as any).title === "string" && (newRequest as any).title.length > 0 && !this.requests.some(existing => existing.id === (newRequest as any).id)) {
                    this.requests.push(newRequest as RequestType);
                } else {
                    console.error("Unparsed request", newRequest);
                }

            } catch (error) {
                console.error("Error parsing WebSocket message:", error);
            }
        };

        this.socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        this.socket.onclose = () => {
            console.log("WebSocket disconnected. Reconnecting...");
            setTimeout(() => this.connectWebSocket(), 5000); // Auto-reconnect after 5s
        };
    }


}

export default new HomePageStore();