import React from 'react';
import styles from './Header.module.css'

class Header extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return(
            <div className={styles.header}>
            </div>
        );
    }
}
export default Header;