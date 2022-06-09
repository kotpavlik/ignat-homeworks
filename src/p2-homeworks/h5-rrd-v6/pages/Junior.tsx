import React from 'react';
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';
import HW9 from '../../h9/HW9';
import HW10 from '../../h10/HW10';
import HW11 from '../../h11/HW11';

const HW7Memo = React.memo(HW7)
const HW8Memo = React.memo(HW8)
const HW9Memo = React.memo(HW9)
const HW10Memo = React.memo(HW10)
const HW11Memo = React.memo(HW11)

export const Junior = () => {
    return (
        <div>
            <HW7Memo/>
            <HW8Memo/>
            <HW9Memo/>
            <HW10Memo/>
            <HW11Memo/>
        </div>
    );
};
