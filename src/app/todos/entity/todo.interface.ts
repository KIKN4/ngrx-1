export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


export interface TodoItem {
  title: string;
  body: string,
  userId: number,
  id?: number,
}


export enum ActionModel {
  POST = 'POST',
  PUT = 'PUT',
}
