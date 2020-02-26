import * as firebase from "firebase/app";
import 'firebase/firestore';

export const addTodo = todo => {
  const db = firebase.firestore();
  return db.collection('todos').add(todo);
};

export const listTodos = () => {
  const db = firebase.firestore();
  const todoRef = db.collection('todos');
  return todoRef.get()
};

export const removeTodo = todo => {
  const db = firebase.firestore();
  return db.collection('todos').add(todo);
};
