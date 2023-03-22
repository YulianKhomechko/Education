export type Todo = {

}



// interface

// class
export class TodoClass {
    id: number;
    text: string;

    constructor(todoText: string) {
        this.id = Math.floor(new Date().getTime() * Math.random())
        this.text = todoText;
    }
}