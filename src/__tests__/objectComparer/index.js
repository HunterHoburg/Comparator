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

    it('should compare complex objects', () => {
        const obj1 = {
            key1: 'something',
            key2: {
                key2a: 2
            }
        };
        const obj2 = {
            key1: 'something else',
            key2: {
                key2a: 3
            }
        };
        const obj3 = {
            key1: 'something more else',
            key2: 4
        };

        expect(objectComparer.compareObjects(obj1, obj2)).toBe(true);
        expect(objectComparer.compareObjects(obj1, obj3)).toBe(false);
    })
});