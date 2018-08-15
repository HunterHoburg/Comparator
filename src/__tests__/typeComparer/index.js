import {TypeComparer} from '../../typeComparer';

let typeComparer;

beforeAll(() => {
    typeComparer = new TypeComparer();
});

describe('typeComparer', () => {
    it('should compare variables of same type correctly', () => {
        expect(typeComparer.compareTypes(true, false)).toBe(true);
        expect(typeComparer.compareTypes('string', 'another string')).toBe(true);
        expect(typeComparer.compareTypes(2, 3)).toBe(true);
        expect(typeComparer.compareTypes({}, {})).toBe(true);
        expect(typeComparer.compareTypes(undefined, undefined)).toBe(true);
        expect(typeComparer.compareTypes([], [])).toBe(true);
        expect(typeComparer.compareTypes(() => true, () => false)).toBe(true);
        expect(typeComparer.compareTypes(NaN, NaN)).toBe(true);
        expect(typeComparer.compareTypes(null, null)).toBe(true);
    });

    it('should compare variables of different primitive types', () => {
        expect(typeComparer.compareTypes(true, 2)).toBe(false);
        expect(typeComparer.compareTypes({}, [])).toBe(false);
        expect(typeComparer.compareTypes(NaN, 3)).toBe(false);
        expect(typeComparer.compareTypes(null, {})).toBe(false);
        expect(typeComparer.compareTypes(() => {}, {})).toBe(false);
        expect(typeComparer.compareTypes([], {})).toBe(false);
        let stupidvariable;
        expect(typeComparer.compareTypes(undefined, stupidvariable)).toBe(true);
        expect(typeComparer.compareTypes('1', NaN)).toBe(false);
    });
});