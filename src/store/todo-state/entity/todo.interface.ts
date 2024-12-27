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

export interface TodoState {
  list: TodoItem[] | [];
}


export const todoInitialState: TodoState = {
  list: [{
    title: 'string',
    body: 'string',
    userId: 2,
  }]
}
