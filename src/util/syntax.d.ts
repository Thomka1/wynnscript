export interface Syntax {
    classes: Class[],
    functions: Function[],
    keywords: string[],
    enums: Enum
}

interface Class {
    name: string,
    docs: string,
    isVar: boolean,
    methods: Function[]
}

export interface Function {
    name: string,
    docs: string,
    args: Args[][]
    return: string
}

interface Args {
    name: string,
    type: string,
    docs: string
}

interface Enum {
    mobs: string[]
}