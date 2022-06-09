import moment from 'moment'
import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './Clock.module.css'
import container from '../h5-rrd-v6/module/Container.module.css'


type useStateType = Array<string>

function Clock() {


    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<useStateType>([moment().format('LTS'), moment().format('ll')])
    const [show, setShow] = useState<boolean>(false)
    const stop = () => {
        clearInterval(timerId)
        setDate([moment().format('LTS'), moment().format('ll')])
        setTimerId(0)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate([moment().format('LTS'), moment().format('ll')])
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
        <div className={container.container}>

                <div className={timerId === 0 ? style.time : style.active_time}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                    {show && (
                        <div className={ style.date }>
                            {stringDate}
                        </div>
                    )}
                </div>

                <div className={style.button_wrapper}>
                    <SuperButton onClick={start}>start</SuperButton>
                    <SuperButton disabled={timerId === 0} onClick={stop}>stop</SuperButton>
                </div>


        </div>
    )
}

export default Clock
