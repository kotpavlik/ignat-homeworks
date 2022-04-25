import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Введите текст'

    const showAlert = () => {
        if (error) {
            alert('Всё удалил, теперь жизнь как с чистого листа')
        } else {
            alert(text)
        }
    }
    const deleteInputText =() => {
        if(text) {
            setText('')
            alert('Всё удалил, теперь жизнь как с чистого листа')
        } else {
            alert('Нечего удалять, напиши что нибудь и потом удалим')
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={s.testSpanError}
                />

                <SuperInputText
                    className={s.blue}
                />



                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={deleteInputText}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>



                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    Я согласен с правилами
                </SuperCheckbox>


                <SuperCheckbox checked={checked} onChange={testOnChange} children ='прочитал'/>
            </div>


        </div>
    )
}

export default HW4
