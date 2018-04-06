console.log('helpers.js');
class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }
    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].array.forEach(callback => callback(arg));
        } else {
            console.log(`listener ${type} is undefined`)
        }
    }
}

function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => {
        if (key.startsWith('data-')) {
            element.setAttribute(key, props[key]);
        } else {
            element[key] = props[key];
        }
    });

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
}

export {
    EventEmitter,
    createElement
};