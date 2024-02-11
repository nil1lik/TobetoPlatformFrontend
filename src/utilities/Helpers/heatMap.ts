export function shiftDate(date: Date, numDays: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
}

export function getRange(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
}

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
