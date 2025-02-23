export const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0]; // Formats as YYYY-MM-DD
};

export const getCurrentDate = (): string => {
    return formatDate(new Date()); 
};

export function getFileAndLineNumber(depth: number = 2): { file: string; line: number } | null {
    const err = new Error();
    const stackLines = err.stack?.split("\n");

    if (stackLines && stackLines.length > depth) {
        const match = stackLines[depth].match(/(.*):(\d+):(\d+)/);
        if (match) {
            return { file: match[1].trim(), line: parseInt(match[2], 10) };
        }
    }
    return null;
}