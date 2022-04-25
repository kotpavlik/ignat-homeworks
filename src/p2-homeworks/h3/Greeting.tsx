import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    users: Array<UserType>
    onKeyPressInput: (e: KeyboardEvent<HTMLInputElement>) => void
}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users, onKeyPressInput} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper_input}>
                <span className={s.span_total_user}>{totalUsers} names</span>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onKeyPressInput}
                    className={inputClass}
                    placeholder="write please"/>
                <span className={s.span_error}>{error}</span>
                <button className={s.button} onClick={addUser}>add</button>
            </div>
            <div className={s.wrapper_for_overflow}>{users.map(u =>
                <div className={s.wrapper_name} key={u._id}>
                    <div className={s.name}>{u.name}</div>
                </div>)}</div>
        </div>
    )
}

export default Greeting
