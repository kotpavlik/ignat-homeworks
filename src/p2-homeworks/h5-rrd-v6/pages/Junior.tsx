import React from 'react';
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';
import HW9 from '../../h9/HW9';

const HW7Memo = React.memo(HW7)
const HW8Memo = React.memo(HW8)
const HW9Memo = React.memo(HW9)

export const Junior = () => {
    return (
        <div>
            <HW7Memo/>
            <HW8Memo/>
            <HW9Memo/>
        </div>
    );
};
