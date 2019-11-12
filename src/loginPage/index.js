import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './style/LoginPage.css';
import Logo from './style/Logo.svg';

import Button from '../components/button';
import Input from '../components/imput';
import InformMessage from '../components/informMessage';

const FORMS_ROOT_TITLE = 'loginPage'

export default 
function LoginPage() {
    const dataInForms = useSelector(state => state.formReducer);
    const isLoading = useSelector(state => state.user.isLoading);
    const informMessage = useSelector(state => state.user.informMessage);
    const dispatch = useDispatch();
    return (
        <div className='LoginPage-background'>
            <div className='logo-container'>
                <img src={Logo} className={'big-logo'}/>
                <div className='modal-window'>
                    <h2>
                        Добро пожаловать!
                    </h2>
                    <div className='input-block'>
                        <Input id={FORMS_ROOT_TITLE + '1'} title='Логин:' disabled={isLoading} />
                        <Input id={FORMS_ROOT_TITLE + '2'} title='Пароль:' disabled={isLoading} />
                    </div>
                    <div className='input-block'>
                        <InformMessage>
                            { informMessage }
                        </InformMessage>
                    </div>
                    <Button 
                        loading={isLoading} 
                        disabled={false} 
                        func={() => dispatch({
                            type: 'LOGIN_BUTTON_CLICKED', 
                            payload: {
                                email: dataInForms[FORMS_ROOT_TITLE + '1'],
                                password: dataInForms[FORMS_ROOT_TITLE + '2']
                            }
                        })}
                    >
                        Войти
                    </Button>
                
                </div>
            </div>
        </div>
    )
}
