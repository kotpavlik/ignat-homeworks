import React from 'react'
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Kot Pavlik',
    message: 'Hello Ignat !!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            для личного творчества, могу проверить
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
