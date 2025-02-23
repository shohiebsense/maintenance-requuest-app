export type RequestType = {
    id?: string;
    title: string;
    date: string;
    status: string; // "open" | "closed"
    urgentLevel: string;
    type?: string;
};
