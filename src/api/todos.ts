import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2159;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

// Add more methods here
export const addTodo = (title: string) => {
  const newTodo = {
    userId: USER_ID,
    title,
    completed: false,
  };

  return client.post<Todo>('/todos', newTodo);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};
