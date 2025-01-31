// import React from 'react'
import ReactDOM from 'react-dom/client'
// import css
import './site/global.css'
import Layout from './site/App'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
// import thunk from 'redux-thunk'
import {
  // applyMiddleware,
  legacy_createStore as createStore
} from 'redux'

import rootReducers from './site/Reducer/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
// Create store with the reducers and
// Apply thunk as a middleware
const Store = createStore(rootReducers)

root.render(
  // <React.StrictMode>
  <Provider store={Store}>
    <Layout />
  </Provider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
