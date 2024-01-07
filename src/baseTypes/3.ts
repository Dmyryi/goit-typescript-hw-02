let some: unknown;
some = 'Text';

let str: unknown;
if (typeof some === 'string') {
    str = some;
}

let str2: string = some as string;

export {};
