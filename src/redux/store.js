import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducers)
const middleware = applyMiddleware(logger, promiseMiddleware)
const store = createStore(persistedReducer, middleware)
const persistor = persistStore(store)
export {
  store,
  persistor
}
