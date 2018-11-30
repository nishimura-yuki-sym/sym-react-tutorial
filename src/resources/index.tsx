// サーバリソースに関する処理を記述します。
// API通信に関する処理がここに集約されるようにします。

// import axios from 'axios';
import User from '../models/User';
import Todo from '../models/Todo';

export const getUser = async ({loginId, password}) => {
  // NOTE: 実際にはここでaxiosを使ってAPI通信をします。

  // 通信中のwaitを再現
  await new Promise<void>(resolve => setTimeout(resolve, 500));

  let data = localStorage.getItem('user');
  let user: User;
  if (!data) {
    user = new User({loginId, password});
    console.log(user.toJsonString());
    localStorage.setItem('user', user.toJsonString());
  } else {
    data = JSON.parse(data);
    user = new User(data);
    if (user.loginId !== loginId || user.password !== password) {
      return {error: 'ログインIDまたはパスワードが間違っています。'};
    }
  }

  return {data: user};
};

export const getTodos = async () => {
  // NOTE: 実際にはここでaxiosを使ってAPI通信をします。

  // 通信中のwaitを再現
  await new Promise<void>(resolve => setTimeout(resolve, 500));

  let todos: Todo[] = [];
  const data = localStorage.getItem('todos');
  if (data) {
    todos = JSON.parse(data);
  }
  return {data: todos};
};

export const postTodo = async ({name}) => {
  // NOTE: 実際にはここでaxiosを使ってAPI通信をします。

  // 通信中のwaitを再現
  await new Promise<void>(resolve => setTimeout(resolve, 1000));

  let todos: Todo[] = [];
  const newTodo = new Todo(name);
  const data = localStorage.getItem('todos');
  if (data) {
    todos = JSON.parse(data);
  }

  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));

  return {data: newTodo};
};

export const deleteTodo = async ({todo}) => {
  // NOTE: 実際にはここでaxiosを使ってAPI通信をします。

  // 通信中のwaitを再現
  await new Promise<void>(resolve => setTimeout(resolve, 200));

  const data = localStorage.getItem('todos');
  if (!data) {
    return {error: '対象のデータが存在しません。'};
  }
  const todos: Todo[] = JSON.parse(data);
  const newTodos = todos.filter((t) => {
    return t.id !== todo.id;
  });

  if (todos.length === newTodos.length) {
    return {error: '対象のデータが存在しません。'};
  }

  // 対象のTodoを除外したリストで上書き
  localStorage.setItem('todos', JSON.stringify(newTodos));
  return {data: todo};
};
