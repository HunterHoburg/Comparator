import {Checker} from '../../typeChecker';

let typeChecker;

beforeAll(() => {
    typeChecker = new Checker();
});

describe('typeChecker', () => {
    it('should check the type of a single variable correctly', () => {
        expect(typeChecker.checkType(true)).toBe('boolean');
        expect(typeChecker.checkType('dog')).toBe('string');
        expect(typeChecker.checkType(2)).toBe('number');
        expect(typeChecker.checkType({})).toBe('object');
        expect(typeChecker.checkType(undefined)).toBe('undefined');
        expect(typeChecker.checkType([])).toBe('array');
        expect(typeChecker.checkType(() => true)).toBe('function');
        expect(typeChecker.checkType(null)).toBe('null');
        expect(typeChecker.checkType(NaN)).toBe('NaN');
    });
});