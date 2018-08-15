import {TypeComparer} from '../typeComparer';

const typeComparer = new TypeComparer();

export class ObjectComparer {
    compareKeys(obj1, obj2) {
        for (let key in obj1) {
            if (!obj2.hasOwnProperty(key)) return false;
        }
        for (let key in obj2) {
            if (!obj1.hasOwnProperty(key)) return false;
        }
        return true;
    }

    compareObjects(obj1, obj2) {

        return true;
    }
}