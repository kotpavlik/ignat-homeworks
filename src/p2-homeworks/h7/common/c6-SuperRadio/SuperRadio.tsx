import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }


    return (
        <>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">XYZ</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="x"
                    name="radio-buttons-group"
                    onChange={(e)=>{onChangeCallback(e)}}
                >
                    <FormControlLabel value="x" control={<Radio />} label="x" />
                    <FormControlLabel value="y" control={<Radio />} label="y" />
                    <FormControlLabel value="z" control={<Radio />} label="z" />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default SuperRadio
