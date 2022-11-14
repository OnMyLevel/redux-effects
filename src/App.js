import './App.css';
import React from 'react';
import ButtonNews from './components/ButtonNews';
import NewsItem from './components/NewsItem';
import ButtonUsers from './components/ButtonUsers';
import UserItem from './components/NewsItem';
import Loading from './components/Loading';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <p>
          Redux effects tests.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
        >
          Learn Redux
        </a>
        <div>
        <ButtonNews />
        <ButtonUsers />
        <Loading />
        <NewsItem />
      </div>
    </div>
    </Provider>
  );
}

export default App;
