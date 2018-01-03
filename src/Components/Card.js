import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class Card extends React.Component{
    render(){
        const { icon, headerText, children } = this.props
        return (
            <div style={styles.card}>
                <div>
                    <FontAwesome 
                        name = {icon} 
                        size={'2x'}/>
                    <span style={styles.headerText}>{headerText}</span>
                </div>
                <hr style={styles.divider}></hr>
                <div>{children}</div>
            </div>
        )
    }
}

const styles = {
    card: {
        padding: '1em',
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.2)',
        fontFamily: 'GE Inspira Sans,sans-serif',
    },
    divider: {
        
    },
    headerText: {
        marginLeft: '0.5em',
        fontWeight: 'bold',
        fontSize: '1.5em',
    }
}

export default Radium(Card)