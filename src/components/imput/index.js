import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './style.css';

export default
function Input(props) {
    
    
    const forCheck = useSelector(state => state.formReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!forCheck.hasOwnProperty(props.id)) {
            dispatch({type: '__FORMS__', payload: {formID: props.id, data: ''}})
        }
        // return () => {
            // dispatch({type: '__FORMS__DELETE__', payload: {formID: props.id}}) 
        // }
    }, [])
    const value = useSelector( state => state.formReducer[props.id]) || '';

    return(
        <div className='input-block'>
            <div>
                <span> {props.title} </span>
                <input 
                    value={value} 
                    onChange={(event) => {
                        dispatch({type: '__FORMS__', payload: {formID: props.id, data: event.target.value}})
                    }}
                    disabled={props.disabled}
                />
            </div>
        </div>
    )
}