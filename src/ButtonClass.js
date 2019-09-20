import React from 'react';
import Greeting from './Greeting';
import styles from './ButtonClass.module.css'

class ButtonClass extends React.Component {
    render() {
        return <React.Fragment>
            <button className={styles.defaultButton}> Button-4 </button>
            <Greeting/>
        </React.Fragment>;
    }       
}

export default ButtonClass;