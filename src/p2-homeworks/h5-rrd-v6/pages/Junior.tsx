import React from 'react';
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';
import HW9 from '../../h9/HW9';
import HW10 from '../../h10/HW10';
import HW11 from '../../h11/HW11';
import HW12 from '../../h12/HW12';
import {Request} from '../../HW13/Request';

const HW7Memo = React.memo(HW7)
const HW8Memo = React.memo(HW8)
const HW9Memo = React.memo(HW9)
const HW10Memo = React.memo(HW10)
const HW11Memo = React.memo(HW11)
const HW12Memo = React.memo(HW12)
const HW13Memo = React.memo(Request)


export const Junior = () => {
    return (
        <div>
            <HW7Memo/>
            <HW8Memo/>
            <HW9Memo/>
            <HW10Memo/>
            <HW11Memo/>
            <HW12Memo/>
            <HW13Memo/>

        </div>
    );
};
