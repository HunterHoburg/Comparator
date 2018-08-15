import {Checker} from '../typeChecker';

const typeChecker = new Checker();

export class TypeComparer {
    compareTypes(var1, var2) {
        if (typeChecker.checkType(var1) === typeChecker.checkType(var2)) return true;
        return false;
    }
}