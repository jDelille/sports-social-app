/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppStringInterface } from "./@AppStringInterface";
import { capitalize } from 'lodash';

export class AppStringModel implements AppStringInterface {
    static DefaultLanguageKey = 'en' // Make this dynamic in the future

    en: string;
    [key: string]: any;

    constructor(obj: AppStringInterface) {
        this.en = obj.en;
    }

    get value(): string {
        const key = AppStringModel.DefaultLanguageKey;
        return this[key] || this.en
    }

    get capitalizedValue(): string {
        return capitalize(this.value);
    }

    get upperCaseValue(): string {
        return this.value.toUpperCase();
    }

    get lowerCaseValue(): string {
        return this.value.toLowerCase();
    }

    get suffixWithColon(): string {
        return `${this.value}:`
    }

    get error(): Error {
        return new Error(this.value);
    }


}

type StringDictionary = { [key: string]: string };

export type NamedStrings<T extends StringDictionary> = {
    [P in keyof T]: T[P] | AppStringModel;
};

export class StringSheet {
    static create<T extends NamedStrings<any>>(strings: T): NamedStrings<T> {
        const result: NamedStrings<T> = {} as NamedStrings<T>;

        for (const key in strings) {
            if (Object.prototype.hasOwnProperty.call(strings, key)) {
                result[key] = new AppStringModel(strings[key]);
            }
        }

        return result;
    }
}