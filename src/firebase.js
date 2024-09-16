import * as firebase from 'firebase';

const config = {
    apiKey: "ENTER YOURS HERE",
    authDomain: "ENTER YOURS HERE",
    databaseURL: "ENTER YOURS HERE",
    projectId: "ENTER YOURS HERE",
    storageBucket: "ENTER YOURS HERE",
    messagingSenderId: "ENTER YOURS HERE"
  }
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const restaurantsRef = databaseRef.child("todos")

// import {todosRef} from '../firebase'
//
// export const addToDo = newToDo => async dispatch => {
//   todosRef.push().set(newToDo);
// };
//
// export const completeToDo = completeToDo => async dispatch => {
//     todosRef.child(completeToDo).remove();
//  };
//
//  export const fetchToDos = () => async dispatch => {
//    todosRef.on("value", snapshot => {
//      dispatch({
//        type: FETCH_TODOS,
//        payload: snapshot.val()
//      });
//    });
//  };