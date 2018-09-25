export class Todo {
    id: number;
    title: String = '';
    complete = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);

    }
}
