import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import container from '../h5-rrd-v6/module/Container.module.css'
import style from './HW11.module.css'


function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)
    const minDistance = 5;


    const onChangeRangeVal1 = (value:number) => {
        const x = Math.min(value,value2-minDistance)
        setValue1(x)

    }
    const onChangeRangeVal2 = (value:number) => {
        setValue2(value)
    }


    return (
        <div>

            <div className={`${container.container} ${style.wrapper}`}>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRangeVal1}
                    value={value1}
                />
            </div>

            <div className={`${container.container} ${style.wrapper}`}>
                <span>{value1}</span>
                <SuperDoubleRange value={value1}
                                  value2={value2}
                                  minDistance={minDistance}
                                  onChangeRange={onChangeRangeVal1}
                                  onChangeRange2={onChangeRangeVal2}


                />
                <span>{value2}</span>
            </div>

        </div>
    )
}

export default HW11
