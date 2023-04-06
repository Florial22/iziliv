export function createElement(tag, attributes = {}){
    const element = document.createElement(tag)

    for (const [key, vallue] of Object.entries(attributes)){
        element.setAttribute(key, vallue)
    }

    return element
}