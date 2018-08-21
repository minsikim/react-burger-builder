import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../../UI/Button/Button';

import classes from './Modal.css';

const modal = (props) => (
    <Aux>
        <Backdrop
            show={props.show}
            clicked={props.backdropHandler}
        />
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'}}>
            {props.children}
            <strong><p>Total Price: {props.totalPrice.toFixed(2)} dollars</p></strong>
            <Button
            btnType={'Danger'}
            clicked={props.backdropHandler}>CANCEL</Button>
            <Button
            btnType={'Success'}
            clicked={props.purchaseContinueHandler}>CONTINUE</Button>
        </div>
    </Aux>
)

export default modal;