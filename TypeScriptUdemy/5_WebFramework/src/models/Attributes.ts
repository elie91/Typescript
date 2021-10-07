

export class Attributes<T> {

    private data: T;

    constructor(data: T) {
        this.data = data;
    }

    /**
     * Need to use arrow function, to be this equal to attributes, and not user
     * when we call user.get()
     * @param key 
     * @returns string
     */
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }

    getAll(): T {
        return this.data
    }

}