import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';


export type UserType = {
    _id: string
    name: string
}

let usersArray = []
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([{_id:v1(),name:'Igor'}]) // need to fix any

    const addUserCallback = (name: string) => {

        setUsers([{_id:v1(),name},...users ])
    }

    return (
        <div>

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*<AlternativeGreeting/>*/}

        </div>
    )
}

export default HW3
