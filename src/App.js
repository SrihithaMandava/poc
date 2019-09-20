import React, { useState, createContext } from 'react';
import styles from './App.module.css';
import Button from './Button';
import Button1 from './Components/Button'
import ButtonWithoutDefaultStyle from './ButtonWithoutDefaultStyle';
import ButtenStylesOverridden from './ButtonStylesOverridden';
import ButtonClass from './ButtonClass';
import ExtendedButtonClass from './ExtendedButtonClass';
import Toggle from 'react-toggle'
import 'react-toggle/style.css';

export const ThemeContext = createContext(null);

function App() {
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [overrideBaseStyle, setOverrideBaseStyle] = useState(false);
        return (
          <ThemeContext.Provider value={{ theme: selectedTheme, keepBaseStyle: !overrideBaseStyle }}>
          <div className={styles[selectedTheme]}>
                <div className={styles.appContainer}>
                <div className={styles.toggleContainer}>
                  <div className={styles.toggleButton}>
                 
                        <Toggle
                          checked={selectedTheme === 'default'}
                          onChange={() => setSelectedTheme('default' )} />
                         <span>Default</span>
                   
                  </div>
                  <div className={styles.toggleButton}>
                   
                        <Toggle
                          checked={selectedTheme === 'theme1'}
                          onChange={() => setSelectedTheme('theme1')} />
                        <span>Theme1</span>
                    
                  </div>
                  <div className={styles.toggleButton}>
                    
                        <Toggle
                          checked={selectedTheme === 'theme2'}
                          onChange={() => setSelectedTheme('theme2')} />
                        <span>Theme2</span>
                      
                  </div>
                  <div className={styles.toggleButton}>
                    
                    <Toggle
                      checked={overrideBaseStyle}
                      onChange={() => setOverrideBaseStyle(!overrideBaseStyle)} />
                    <span>Override</span>
                  
              </div>
                </div>
                <div  className={styles.buttonContainer}>
                  {/* <ButtonWithoutDefaultStyle/> */}
                  <Button/>
                  <Button1/>
                  {/* <ButtenStylesOverridden/> */}
                  {/* <ButtonClass/>
                  <ExtendedButtonClass/> */}
                </div>
                </div>
          </div>
          </ThemeContext.Provider>
        );
}

export default App;
