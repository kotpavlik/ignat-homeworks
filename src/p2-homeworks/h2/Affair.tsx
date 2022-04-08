import React from 'react'
import {AffairType} from './HW2';
import style from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={style.wrapper_affair}>
            <div className={style.name}>{props.affair.name}</div>
            <div className={style.butt}>
                <button className="uk-button uk-button-danger" onClick={deleteCallback}>del.</button>
            </div>
        </div>
    )
}

export default Affair
