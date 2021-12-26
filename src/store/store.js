import thunk from 'redux-thunk'
import { createStore,applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

// export const  setupStore = () => {
//     return configureStore({
//     reducer: rootReducer
//   })
// }
