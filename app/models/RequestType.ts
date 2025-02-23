export type RequestType = {
    id?: number;
    title: string;
    date: string;
    status: string; // "open" | "closed"
    urgentLevel: string;
    type?: string;
};
