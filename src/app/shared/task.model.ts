export interface Task {
    no: number;
    answer: string;
    done: boolean;
    [key: string]: String | number | boolean;
}