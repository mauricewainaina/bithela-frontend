import React, { Component } from 'react'
import TradingViewWidget from 'react-tradingview-widget';


class Charts extends Component {
    render() {
        return (
            <div>
                <TradingViewWidget 
                    symbol="BTCUSD"
                    width='600' 
                    height='500'
                />
            </div>
        )
    }
}


export default Charts
