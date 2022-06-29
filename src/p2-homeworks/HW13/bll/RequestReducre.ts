import {AppDispatch} from '../../h10/bll/store';
import {RequestAPI} from '../RequestsApi';

export type  initialState = {
    success: boolean
    info: string
}
const initialState = {
    success: false,
    info: ''
}

export const RequestReducer = (state = initialState, action: actionsType): initialState => {
    switch (action.type) {
        case 'CHANGE_SUCCESS': {
            return {...state, success: action.value}
        }
        case 'CHANGE_TEXT': {
            return {...state, info: action.text}
        }
        default:
            return state;
    }
}
type actionsType = changeSuccessType | changeInfoType

type changeSuccessType = ReturnType<typeof changeSuccess>
type returnChangeSuccessType = {
    type: 'CHANGE_SUCCESS'
    value: boolean
}
const changeSuccess = (value: boolean): returnChangeSuccessType => {
    return {
        type: 'CHANGE_SUCCESS',
        value
    } as const
}
type changeInfoType = ReturnType<typeof changeInfo>
type returnChangeInfo = {
    type: 'CHANGE_TEXT'
    text: string
}
const changeInfo = (text: string): returnChangeInfo => {
    return {
        type: 'CHANGE_TEXT',
        text
    } as const
}

export const updateSuccess = (value: boolean) => {
    return async (dispatch: AppDispatch) => {
        dispatch(changeSuccess(value));
        let resp = await RequestAPI.updateSuccess(value);
        if (resp.status === 200) {
            dispatch(changeInfo(resp.data.info))
        } else {
            dispatch(changeInfo(resp.data.errorText))
        }
    }
}