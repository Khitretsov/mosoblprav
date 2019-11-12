import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './style.css';

export default
function InformMessage(props) {

    return (
        props.children === null ? 
        <div className='informMessage' ></div>
        :
        <div className='informMessage' >
            { props.children }
        </div>
    )
}