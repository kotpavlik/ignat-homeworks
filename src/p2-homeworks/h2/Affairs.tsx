import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'



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
        <div>

            {mappedAffairs}

            <div className="uk-button-group">
                <button className="uk-button uk-button-default" onClick={setAll}>All</button>
                <button className="uk-button uk-button-danger" onClick={setHigh}>High</button>
                <button className="uk-button uk-button-secondary" onClick={setMiddle}>Middle</button>
                <button className="uk-button uk-button-primary" onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
