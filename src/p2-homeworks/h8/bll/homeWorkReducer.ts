import {UserType} from '../HW8';

export const homeWorkReducer = (state: UserType, action: allHomeworkACType): UserType => {
    switch (action.type) {

        case 'sort': {
            if (action.payload === 'up') {
                return  state.map(el => el).sort((a, b) => a.name > b.name ? 1 : -1)

            } else if (action.payload === 'down') {
                return  state.map(el => el).sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return state
        }
        case 'check': {
            return state.filter(el => el.age > action.age)
        }
        default:
            return state
    }
}

export type allHomeworkACType = SortACType | CheckACType

export type SortACType = ReturnType<typeof SortAC>
export const SortAC = (payload: string) => {
    return {
        type: 'sort',
        payload
    } as const
}

export type CheckACType = ReturnType<typeof CheckAC>
export const CheckAC = (age: number) => {
    return {
        type: 'check',
        age
    } as const
}