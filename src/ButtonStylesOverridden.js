import React from 'react';
import styles from './ButtonStylesOverridden.module.css'

function ButtonStylesOverridden () {
    return <div>
    <button className={styles.defaultButton}> Button-3 </button>
    <span> Theme overrides button style </span>
    </div>;
}

export default ButtonStylesOverridden;