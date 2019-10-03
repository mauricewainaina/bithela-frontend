import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

class PageLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <Nav />
                {children}
                <Footer />
                
            </div>
        )
    }
}

export default PageLayout
