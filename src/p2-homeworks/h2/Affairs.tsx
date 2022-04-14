import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'



type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={style.wrapper_all}>

            <div className={style.list}>{mappedAffairs}</div>
            <div className={style.button_wrap_down}>
                <div className="uk-button-group">
                    <button className="uk-button uk-button-default" onClick={setAll}>All</button>
                    <button className="uk-button uk-button-default" onClick={setHigh}>High</button>
                    <button className="uk-button uk-button-default" onClick={setMiddle}>Middle</button>
                    <button className="uk-button uk-button-default" onClick={setLow}>Low</button>
                </div>
            </div>
        </div>
    )
}

export default Affairs
