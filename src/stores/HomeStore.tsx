import {observable, action, transaction, computed, useStrict} from 'mobx';
import Todo from '../models/Todo';

useStrict(true);

export default class HomeStore {

  @observable initialized = false;
  @observable todos: Todo[] = [];
  @observable taskName = '';
  @observable submitting = false;
  @observable errors: (Object | null) = null;

  @action setInitialized = (initialized) => {
    this.initialized = initialized;
  }
  @action setTaskName = (taskName) => {
    this.taskName = taskName;
  }
  @action setSubmitting = (submitting) => {
    this.submitting = submitting;
  }
  @action setErrors = (errors) => {
    this.errors = errors;
  }

  @action setTodos = (todos) => {
    this.todos = todos;
  }
  @action addTodo = (todo) => {
    this.todos.push(todo);
  }
  @action removeTodo = (todo) => {
    this.todos = this.todos.filter((t) => {
      return t.id !== todo.id;
    });
  }

  @computed get errorMessageTaskName() {
    return this.errors ? this.errors['taskName'] : null;
  }

  @computed get isSubmittable(): boolean {
    return this.taskName.length > 0;
  }

  @computed get hasTodo() {
    return this.todos.length > 0;
  }

}
