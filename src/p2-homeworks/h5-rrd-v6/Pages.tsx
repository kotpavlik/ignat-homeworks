import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import {Junior} from './pages/Junior';
import {JuniorPlus} from './pages/JuniorPlus';

const PreJuniorMemo = React.memo(PreJunior)
const JuniorMemo = React.memo(Junior)
const JuniorPlusMemo = React.memo(JuniorPlus)

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}

                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJuniorMemo/>}/>
                <Route path={PATH.JUNIOR} element={<JuniorMemo/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlusMemo/>}/>


                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
