import { put, takeLatest, all } from 'redux-saga/effects';
import {GET_NEWS, GET_USERS } from '../actions'

function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json(), ); 
        console.log(json.articles);     
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}

function* actionNewsWatcher() {
     yield takeLatest(GET_NEWS, fetchNews)
}


function* fetchUsers() {
  const json = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json(), ); 
        console.log(json[0]);   
  yield put({ type: "USERS_RECEIVED", json: json, });
}

function* actionUsersWatcher() {
     yield takeLatest(GET_USERS, fetchUsers)
}

export default function* rootSaga() {
   yield all([
   actionNewsWatcher(),
   actionUsersWatcher()
   ]);
}
