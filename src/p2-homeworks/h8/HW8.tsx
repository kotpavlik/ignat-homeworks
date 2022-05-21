import React, {useState} from 'react'
import {CheckAC, homeWorkReducer, SortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW8.module.css'

export type UserType = Array<usersObjType>
export type usersObjType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType>(initialPeople)

    const finalPeople = people.map((p: usersObjType) => (
        <div key={p._id} className={style.wrapper_table}>
            <div className={style.name}>name: {p.name}</div>
            <div className={style.age}>age: {p.age} y.o.</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortAC('down')))
    const Check = () => setPeople(homeWorkReducer(initialPeople, CheckAC(18)))

    return (
        <div className={style.all_wrapper}>
            {finalPeople}
            <div className={style.button_group}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={Check}>check 18</SuperButton></div>
            </div>
        </div>
    )
}

export default HW8
