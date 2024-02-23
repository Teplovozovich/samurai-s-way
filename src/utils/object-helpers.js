export const updateObjectInArray = (items, itemId, objPropertyName, newObjProps) => {
    return items.map(data => {
        if (data[objPropertyName] === itemId) {
            return {
                ...data,
                ...newObjProps
            }
        } return data
    })
}