import React, {SelectHTMLAttributes, DetailedHTMLProps} from 'react'
import {arrType} from '../../HW7';
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';



type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: arrType
    onChangeOption?: (option: any) => void
    value? : string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {


    const onChangeHandler = (e: SelectChangeEvent) => {
        console.log(e.target.value)
        onChangeOption && onChangeOption(e.target.value)

    }


    return (
        <Box sx={{ minWidth: 120, maxWidth:200 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">XYZ</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ restProps.value}
                label="Age"
                onChange={(e:SelectChangeEvent) => onChangeHandler(e)}
            >
                <MenuItem value={options && options[0]}>{options && options[0]}</MenuItem>
                <MenuItem value={options && options[1]}>{options && options[1]}</MenuItem>
                <MenuItem value={options && options[2]}>{options && options[2]}</MenuItem>
            </Select>
        </FormControl>
            </Box>
    )
}

export default SuperSelect
