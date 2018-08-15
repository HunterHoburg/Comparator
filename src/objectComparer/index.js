import {TypeComparer} from '../typeComparer';

const typeComparer = new TypeComparer();

export class ObjectComparer {
    compareKeys(obj1, obj2) {
        if (!typeComparer.compareTypes(obj1, obj2)) return false;
        for (let key in obj1) {
            if (!obj2.hasOwnProperty(key)) return false;
            if (typeof obj1[key] === 'object' && !Array.isArray(obj1[key])) return this.compareKeys(obj1[key], obj2[key]);
        }
        for (let key in obj2) {
            if (!obj1.hasOwnProperty(key)) return false;
            if (typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) return this.compareKeys(obj2[key], obj1[key]);
        }
        return true;
    }

    compareValueTypes(obj1, obj2) {
        if (!typeComparer.compareTypes(obj1, obj2)) return false;
        for (let key in obj1) {
            if (!typeComparer.compareTypes(obj1[key], obj2[key])) return false;
            if (typeof obj1[key] === 'object' && !Array.isArray(obj1[key])) {
                return this.compareValueTypes(obj1[key], obj2[key]);
            }
        }
        for (let key in obj2) {
            if (!typeComparer.compareTypes(obj2[key], obj1[key])) return false;
            if (typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) return this.compareValueTypes(obj2[key], obj1[key]);
        }
        return true;
    }

    compareObjects(obj1, obj2) {
        return (this.compareKeys(obj1, obj2) && this.compareValueTypes(obj1, obj2));
    }
}