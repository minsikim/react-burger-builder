import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css'

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opcacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
)

export default modal;