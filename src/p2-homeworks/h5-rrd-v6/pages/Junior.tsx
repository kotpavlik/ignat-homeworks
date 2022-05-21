import React from 'react';
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';

const HW7Memo = React.memo(HW7)
const HW8Memo = React.memo(HW8)

export const Junior = () => {
    return (
        <div>
            <HW7Memo/>
            <HW8Memo/>
        </div>
    );
};
