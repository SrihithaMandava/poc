import React, { useContext } from 'react';
import { ThemeContext } from './App';
import styles from './App.module.css';
import baseStyles from './Button.module.css';

var classNames = require('classnames');

function Button () {
    const themeContext = useContext(ThemeContext);
    return <div>
        <button className={classNames({ [`${baseStyles.baseStyle}`] : themeContext.keepBaseStyle }, styles[`${themeContext.theme}Button`])}> Button-2 </button>
        </div>;
}

export default Button;