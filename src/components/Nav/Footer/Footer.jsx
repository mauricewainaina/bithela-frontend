import React, { Component } from 'react'
import styles from './Footer.module.css'

class Footer extends Component {
    render() {
        return (
            <div className={styles.Footer}>
                <div className='container'>
                    <div className='row'>

                        <div className={`${'col-md-8 '} ${styles.FooterTop}`}>
                            <span className={styles.Logo}>Bithela</span>
                            <span className={styles.NavItem}>
                                <a href="/about">About Us</a>
                            </span>
                            <span className={styles.NavItem}>
                                <a href="/about">Contact Us</a>
                            </span>
                            <span className={styles.NavItem}>
                                <a href="/about">HELP/SUPPORT</a>
                            </span>
                            <span className={styles.NavItem}>
                                <a href="/about">Terms and Conditions</a>
                            </span>
                        </div>
                        {/* <div className={styles.FooterLeft}>
                        </div> */}
                        {/* <div class="col-md-4">
                            <span>SOCIAL</span>
                            <span>Right</span>
                        </div> */}
                    </div>
                </div>
            </div>

        )
    }
}

export default Footer
