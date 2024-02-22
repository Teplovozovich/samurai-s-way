export const updateObjectInArray = (items, itemId, objPropertyName, newObjProps) => {
    items.map(data => {
        if (data[objPropertyName] === itemId) {
            return {
                ...data,
                ...newObjProps
            }
        } return data
    })
}