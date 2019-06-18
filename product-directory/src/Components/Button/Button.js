import React from 'react';

import styles from './Button.module.css';

export class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <button className={styles.btn}>Hello!</button>
        );
    }
}

/*
[1. TODO: Add props setup for this component]
Inputs for props
buttonText = "Save"
buttonHref = "#"
*/