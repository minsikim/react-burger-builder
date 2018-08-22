import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../../UI/Button/Button';

import classes from './Modal.css';

class Modal extends Component {

    /**
     * Reason not using PureComponent is that in this case
     * is cause PureComponents check every props and state changes
     * so it will take more time
     * */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show ;
    }

    // componentWillUpdate() {
    //     console.log('[Modal] WillUpdate')
    // }

    render () {
        return (
        <Aux>
            <Backdrop
                show={this.props.show}
                clicked={this.props.backdropHandler}
            />
            <div 
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'}}>
                {this.props.children}
                <strong><p>Total Price: {this.props.totalPrice.toFixed(2)} dollars</p></strong>
                <Button
                    btnType={'Danger'}
                    clicked={this.props.backdropHandler}>CANCEL</Button>
                <Button
                    btnType={'Success'}
                    clicked={this.props.purchaseContinueHandler}>CONTINUE</Button>
            </div>
        </Aux>
        )
    }
}

export default Modal;