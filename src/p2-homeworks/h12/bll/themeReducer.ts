
 export type initStateType = {
    theme:string
 }
const initState = {
    theme:''
};

export const themeReducer = (state = initState, action: changeThemeCType): initStateType => {
    switch (action.type) {
        case "SELECT_MODE": {
            return {...state,theme:action.mode}
        }
        default: return state;
    }
};

export type changeThemeCType = ReturnType<typeof changeThemeC>
 type returnChangeThemeCType = {
     type:'SELECT_MODE'
     mode:string
 }
export const changeThemeC = (mode:string): returnChangeThemeCType => {
    return {
        type:'SELECT_MODE',
        mode
    } as const
};