import {useState} from 'react';

import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
    function deleteHandler() {
        console.log("clicked deletebutton ");
        console.log(props.text);
    }
    return (
        <div>
                
            <div className='card'>
                <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            </div>
      </div>
    );
}

export default Todo;