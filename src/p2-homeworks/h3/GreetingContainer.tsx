import React, {ChangeEvent,KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';
import {log} from 'util';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (userName: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => {
       let val =  e.currentTarget.value;
        setError('')
        setName(val)
    }
    const addUser = () => {
        if (name.trim() === '') {
            setError('Enter your name, please')
        } else {
            setError('')
            setName(name)
            addUserCallback(name)
            alert(`Hello, ${name}!`)
            setName('')
        }
    }

    const onKeyPressInput = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            addUser();
        }
    }

    const totalUsers = users.length


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            users={users}
            onKeyPressInput={onKeyPressInput}
        />
    )
}

export default GreetingContainer
