import React from 'react';

import classes from './Backdrop';

const backdrop = (props) => (
        <div className={classes.Backdrop} disabled={!props.show}></div>
)

export default backdrop;