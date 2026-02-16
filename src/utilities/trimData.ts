export function trimData(data: Record<string, any>) : Record<string, any>{
    Object.keys(data).forEach(key => {
        if (typeof data[key] === "string"){
            data[key] = data[key].trim();
        }
    })
    return data;
}