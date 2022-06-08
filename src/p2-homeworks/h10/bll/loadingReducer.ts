
type initStateType = {
    isLoading:boolean
}
const initState = {
    isLoading:false
}

export const loadingReducer = (state:initStateType = initState, action: loadingACType): initStateType => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state,isLoading:!state.isLoading}
        }
        default: return state
    }
}

export type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = ()  => {
    return {
        type: 'SET_LOADING'
    } as const
}