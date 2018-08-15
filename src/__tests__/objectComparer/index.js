import {ObjectComparer} from '../../objectComparer';

let objectComparer;

beforeAll(() => {
    objectComparer = new ObjectComparer();
});

describe('objectComparer', () => {
    it('should compare flat objects with same keys correctly', () => {
        expect(objectComparer.compareKeys({}, {})).toBe(true);
        expect(objectComparer.compareKeys({test: 'something'}, {test: 'something else'})).toBe(true);
        expect(objectComparer.compareKeys({test: 'something'}, {test: 2})).toBe(true);
    });

    it('should compare flat objects with different keys correctly', () => {
        expect(objectComparer.compareKeys({test: 'something'}, {})).toBe(false);
        expect(objectComparer.compareKeys({test: 'something'}, {notTest: 2})).toBe(false);
        expect(objectComparer.compareKeys({}, {notTest: 2})).toBe(false);
    });

    const obj1 = {
        key1: 'something',
    }
    const obj2 = {
        key1: 'something else'
    }
    const obj3 = {
        key1: 4
    }
    const obj4 = {
        key1: null,
        key2: {
            key2a: 'nested key'
        }
    }
    const obj5 = {
        key1: undefined,
        key2: {
            key2a: []
        }
    }
    const obj6 = {
        key1: 'something',
        key2: 'something else'
    }

    it('should compare complex object keys', () => {
        expect(objectComparer.compareKeys(obj1, obj2)).toBe(true);
        expect(objectComparer.compareKeys(obj1, obj3)).toBe(true);
        expect(objectComparer.compareKeys(obj1, obj4)).toBe(false);
        expect(objectComparer.compareKeys(obj5, obj4)).toBe(true);
    });

    it('should compare complex object values', () => {
        expect(objectComparer.compareValueTypes(obj1, obj2)).toBe(true);
        expect(objectComparer.compareValueTypes(obj1, obj3)).toBe(false);
        expect(objectComparer.compareValueTypes(obj2, obj4)).toBe(false);
        expect(objectComparer.compareValueTypes(obj1, obj6)).toBe(false);
        expect(objectComparer.compareValueTypes(obj4, obj5)).toBe(false);
        expect(objectComparer.compareValueTypes(obj4, obj5)).toBe(false);
    });

    it('should compare everything about an object', () => {
        expect(objectComparer.compareObjects(obj1, obj2)).toBe(true);
        expect(objectComparer.compareObjects(obj1, obj3)).toBe(false);
        expect(objectComparer.compareObjects(obj2, obj4)).toBe(false);
        expect(objectComparer.compareObjects(obj1, obj6)).toBe(false);
        expect(objectComparer.compareObjects(obj4, obj5)).toBe(false);
        expect(objectComparer.compareObjects(obj4, obj5)).toBe(false);
    })
});