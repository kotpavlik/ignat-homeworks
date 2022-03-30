import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.message_wrapper}>
            <div className={s.avatar_block}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.message_block}>
                <div className={s.name_message}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.messages}>{props.message}</div>
                </div>
                <div className={s.contain_for_time}>
                    <div className={s.time}>{props.time}</div>
                </div>

            </div>

        </div>
    )
}

export default Message
