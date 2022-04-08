import React from 'react'
import s from './AlternativeMessage.module.css'

function AlternativeMessage() {
    return (
        <div className={s.link}>
            <h1>
                <a className={s.tooltip} href="https://github.com/kotpavlik/Ts-React-Redux/tree/master/src">
                    Git with messages page
                    <span>  Tap here</span></a></h1>


        </div>
    )
}

export default AlternativeMessage
