export const required = value => {
    if (value) return undefined
    return "field us req";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `max len is ${maxLengthCreator}`
    return undefined;
}