import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'

const arr = ['x', 'y', 'z']
export type arrType = Array<string>
function HW7() {
    const [value, onChangeOption] = useState(arr[0])

    return (
        <div className={s.XYZ_wrapper}>
            <div className={s.superSelect}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div className={s.superRadio} >
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>


        </div>
    )
}

export default HW7
