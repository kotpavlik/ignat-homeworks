import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import HW6 from '../../h6/HW6';


const HW1Memo = React.memo(HW1)
const HW2Memo = React.memo(HW2)
const HW3Memo = React.memo(HW3)
const HW4Memo = React.memo(HW4)
const HW6Memo = React.memo(HW6)

function PreJunior() {
    return (
        <div>
            <HW1Memo/>
            <HW2Memo/>
            <HW3Memo/>
            <HW4Memo/>
            <HW6Memo/>

        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз