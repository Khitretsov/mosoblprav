import React from 'react';
import './style.css';

export default 
function Button(props) {
    
    // console.log('ButtonButtonButton', props)
    return(
        props.loading ?
        <button 
            className='login-page-button loading' 
            disabled
        >    
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </button> 
        :
        <button className='login-page-button' disabled={props.disabled}
            onClick={
                () => { props.func() }
            }
        >
            {props.children}
        </button>        
    )
}