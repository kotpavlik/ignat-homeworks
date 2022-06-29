import React, {useState} from 'react';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import container from '../h5-rrd-v6/module/Container.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {updateSuccess} from './bll/RequestReducre';
import style from './Request.module.css'


export const Request = () => {
    const info = useSelector<AppStoreType, string>(state => state.request.info)
    const dispatch = useDispatch()
    const [check, setCheck] = useState<boolean>(false)

    const changeCheck = (check: boolean) => {
        setCheck(check)
    }
    const sendCheckboxValue = () => {
        dispatch(updateSuccess(check) as any)
    }

    return (
        <div className={container.container}>
            <div className={style.text}>{info}</div>
            <SuperCheckbox onChangeChecked={(check) => {
                changeCheck(check)
            }}/>
            <SuperButton onClick={() => {
                sendCheckboxValue()
            }}>post</SuperButton>
        </div>
    );
};

