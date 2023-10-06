export function stringToBoolean(value: string | null | undefined) {
    if (!value) {
        return false
    }

    const lowercaseValue = value.toLowerCase();

    if (lowercaseValue === 'true') {
        return true;
    }

    return false;
}