import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppDispatch, AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import s from './HW10.module.css'
import container from '../h5-rrd-v6/module/Container.module.css'
import {ExampleAnimation} from './lottie/Lottie';

function HW10() {
    const dispatch:AppDispatch = useDispatch()
    const loading = useSelector<AppStoreType,boolean>(state => state.loading.isLoading)


    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(()=>{dispatch(loadingAC())},3000)
        console.log('loading...')
    };

    return (
        <div className={container.container}>
                {loading
                    ? (
                        <div  className={s.preloader}><ExampleAnimation/></div>
                    ) : (
                        <div  className={s.button}>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
        </div>
    )
}

export default HW10
