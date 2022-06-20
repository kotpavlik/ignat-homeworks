import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option:string) => void
    name?: string

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
                <FormLabel id="demo-radio-buttons-group-label">{name}</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={options && options[0]}
                    name="radio-buttons-group"
                    onChange={(e)=>{onChangeCallback(e)}}
                >
                    <FormControlLabel value={options && options[0]} control={<Radio />} label={options && options[0]} />
                    <FormControlLabel value={options && options[1]} control={<Radio />} label={options && options[1]} />
                    <FormControlLabel value={options && options[2]} control={<Radio />} label={options && options[2]}/>
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default SuperRadio
