import moment from 'moment'
import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'


type useStateType = Array<string>

function Clock() {


    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<useStateType>([moment().format('LTS'),moment().format('ll')])
    const [show, setShow] = useState<boolean>(false)
    const stop = () => {
        clearInterval(timerId)
        setDate([moment().format('LTS'),moment().format('ll')])
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate([moment().format('LTS'),moment().format('ll')])
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date[0] // fix with date

    const stringDate = date[1] // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
