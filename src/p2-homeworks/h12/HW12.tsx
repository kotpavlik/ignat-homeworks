import React from 'react';
import s from './HW12.module.css';
import c from '../h5-rrd-v6/module/Container.module.css'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeC} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';


const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType,string>(state => state.theme.theme)

    const dispatch = useDispatch()

    const onChangeCallback = (mode: string) => {
        dispatch(changeThemeC(mode))
    }

    return (
        <div className={`${s[theme]} ${c.container}`}>
            <span className={s[theme + '-text']}>
                <SuperRadio onChangeOption={(e) => {
                    onChangeCallback(e)
                }} options={themes} name={theme} />
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

        </div>
    );
}

export default HW12;
