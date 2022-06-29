import {loadingReducer} from './loadingReducer'
import  thunkMiddleware from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {themeReducer} from '../../h12/bll/themeReducer';
import {RequestReducer} from '../../HW13/bll/RequestReducre';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: RequestReducer

})

const store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store // for dev
