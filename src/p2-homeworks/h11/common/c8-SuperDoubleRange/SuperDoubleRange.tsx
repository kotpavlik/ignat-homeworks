import React from 'react'
import {Slider} from '@mui/material';
import Box from '@mui/material/Box';

function valuetext(value: number) {
    return `${value}°C`;
}

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number) => void
    onChangeRange2?: (value: number) => void
    value: number
    value2: number
    minDistance: number

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, onChangeRange2, value, value2, minDistance
        // min, max, step, disable, ...
    }
) => {


    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        debugger
        if (!Array.isArray(newValue)) {
            return;
        }

            if (activeThumb === 0) {
                onChangeRange && onChangeRange(Math.min(newValue[0], value2 - minDistance))
                onChangeRange2 && onChangeRange2(value2)

            } else {
                onChangeRange && onChangeRange(value)
                onChangeRange2 && onChangeRange2(Math.max(newValue[1], value + minDistance))

            }

    };


    return (
        <Box sx={{width: 200}}>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={[value,value2]}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    )
}

export default SuperDoubleRange
