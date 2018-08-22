import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary';

class OrderSummary extends Component {

    render(){
        let ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey)=>{
            return  <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>
                            {igKey}</span>
                        : {this.props.ingredients[igKey]}
                    </li>
        })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Following Ingredients are Selected</p>
                <ul style={{listStyleType: 'none'}}>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout?</p>
            </Aux>
        )
    }
}

export default OrderSummary;