import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style.css';



/* ************* */
import store from './store'
console.log('Initial state: ', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

store.dispatch({type: 'items/itemAdded', payload: {title: 'abc', description: 'good', images: []}})
store.dispatch({type: 'items/itemAdded', payload: {title: 'defg', description: 'very good', images: []}})
store.dispatch({type: 'items/itemAdded', payload: {title: 'hijk', description: 'even better', images: []}})

store.dispatch({type: 'items/itemEdited', payload: {id: 1, title: 'defg Edited', description: 'even better', images: []}})

store.dispatch({type: 'filters/statusChanged', payload: 'topRated'})

store.dispatch({type: 'items/reviewAdded', payload: {id: 0, author: 'Mike Scott', rating: 4, content: 'best ever'}})
store.dispatch({type: 'items/itemDeleted', payload: 2})

unsubscribe()

store.dispatch({type: 'items/itemAdded', payload: {title: 'lmn', description: 'poor', images: []}})

/* ************* */

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
