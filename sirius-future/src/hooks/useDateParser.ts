export function useDateParser(amount: number) {
    const day = Math.floor(amount / 86400000);
    const hours = Math.floor((amount - (day * 86400000)) / 3600000);
    const minute = Math.floor((amount - (day * 86400000) - (hours * 3600000)) / 60000);

    return { day, hours, minute }
}
