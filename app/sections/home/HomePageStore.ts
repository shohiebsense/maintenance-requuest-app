// stores/HomePageStore.ts
import { makeAutoObservable, runInAction, action, computed } from "mobx";
import { RequestType } from "../../models/RequestType";
import { REACT_APP_WEBSOCKET_URL } from '@env';
import { getFileAndLineNumber } from '../../util/common_utils';
class HomePageStore {
    requests: RequestType[] = [];
    socket: WebSocket | null = null;

    constructor() {
        makeAutoObservable(this, {
            editRequest: action,
            addRequest: action,
            getOpenRequestsTotal: computed,
            getUrgentRequestsTotal: computed,
            getAvgResolutionTime: computed,
        });
        this.connectWebSocket();
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

    get getOpenRequestsTotal() {
        return this.requests.filter((req) => req.status.toLowerCase() === "open").length;
    }

    get getUrgentRequestsTotal() {
        return this.requests.filter((req) => req.type && req.type.toLowerCase() === "urgent").length;
    }

    get getAvgResolutionTime() {
        const resolvedRequests = this.requests.filter(
            (req) => req.status.toLowerCase() === "resolved"
        );

        if (resolvedRequests.length === 0) return 0;

        const today = new Date();
        const totalDays = resolvedRequests.reduce((sum, req) => {
            const requestDate = new Date(req.date);
            const diffInTime = today.getTime() - requestDate.getTime();
            return sum + diffInTime / (1000 * 3600 * 24);
        }, 0);

        return Number((totalDays / resolvedRequests.length).toFixed(1));
    }

    connectWebSocket() {
        if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
            console.log("WebSocket already connected. Skipping reconnection.");
            return;
        }


        this.socket = new WebSocket(REACT_APP_WEBSOCKET_URL || "ws://localhost:18080");

        this.socket.onopen = () => {
            console.log("WebSocket connected.");
        };
    
        this.socket.onmessage = (event) => {
            console.log("WebSocket message received:", event.data);
            try {
                const newRequest: RequestType | RequestType[] = JSON.parse(event.data);
                

                if (Array.isArray(newRequest)) {
                    const validRequests = newRequest.filter(
                        (req) =>
                            req?.title &&
                            req.title.length > 0 &&
                            !this.requests.some((existing) => existing.id === req.id)
                    );
                    if (validRequests.length > 0) {
                        this.requests.push(...validRequests);
                    } else {
                        console.error(getFileAndLineNumber(3), "Unparsed request (array with no valid entries)", newRequest);
                    }
                } else if (
                    typeof newRequest === "object" &&
                    newRequest !== null &&
                    "title" in newRequest &&
                    typeof newRequest.title === "string" &&
                    newRequest.title.length > 0 &&
                    !this.requests.some((existing) => existing.id === newRequest.id)
                ) {
                    this.requests.push(newRequest);
                } else {
                    console.log("unparsed request", newRequest, getFileAndLineNumber(2),);
                }
            } catch (error) {
                console.error("Error parsing WebSocket message:", error);
            }
        };

        this.socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        this.socket.onclose = () => {
            console.log("WebSocket disconnected. Reconnecting in 5 seconds...");
            this.socket = null;
            setTimeout(() => this.connectWebSocket(), 5000);
        };
    }
}

export default new HomePageStore();