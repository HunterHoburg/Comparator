export class Checker {
    checkType(variable) {
        if (Array.isArray(variable)) return 'array';
        if (variable === null) return 'null';
        if (typeof variable === 'number' && isNaN(variable)) return 'NaN';
        return typeof variable;
    }
}