import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    showSideDrawerHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render(){
        return (
            <Aux>
                <Toolbar clicked={()=>{this.showSideDrawerHandler()}}/>
                <SideDrawer 
                    show={this.state.showSideDrawer}
                    clicked={()=>this.sideDrawerClosedHandler()}/>
                {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;