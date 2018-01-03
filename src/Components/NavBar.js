import React from 'react';
import FontAwesome from 'react-fontawesome';
import Radium from 'radium';
import PropTypes from 'prop-types';

class NavBar extends React.Component{

    PropTypes = {
        items: PropTypes.array.isRequired
    }

    getActiveTab = (id) => {
        if(id !== ""){
            console.log("Clicked ", id);
            this.setState(state => {
                this.props.items.forEach(item => {
                    item.id === id ? item.active = 'true' : item.active = 'false'
                });
                return state;
            });
        }
    }

    render(){
        const { items } = this.props;
        const { getActiveTab } = this;
        return (
            <div>
                {this.props.vertical === true && 
                    <div style={styles.vertical}>
                        {items.map(item => (
                            <div key={item.id}>
                                {
                                    item.active === 'true' ? 
                                    <div 
                                        key={item.id}
                                        id={item.id}
                                        style={styles.verticalActiveItem}
                                        onClick={(e) => getActiveTab(e.target.id)}>
                                        <FontAwesome 
                                            onClick={(e) => getActiveTab(e.target.parentElement.id)}
                                            style={styles.FontAwesome} 
                                            name = {item.icon} 
                                            size={'2x'}/>
                                        {item.label}
                                    </div> : 
                                    <div 
                                        key={item.id}
                                        id={item.id}
                                        style={styles.item}
                                        onClick={(e) => getActiveTab(e.target.id)}>
                                        <FontAwesome 
                                            onClick={(e) => getActiveTab(e.target.parentElement.id)}
                                            style={styles.FontAwesome} 
                                            name = {item.icon} 
                                            size={'2x'}/>
                                        {item.label}
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                }

                {this.props.vertical !== true && 
                    <div style={styles.horizontal}>
                        {items.map(item => (
                            <div key={item.id}>
                                {
                                    item.active === 'true' ? 
                                    <div 
                                        key={item.id}
                                        id={item.id}
                                        style={styles.horizontalActiveItem}
                                        onClick={(e) => getActiveTab(e.target.id)}>
                                        <FontAwesome 
                                            onClick={(e) => getActiveTab(e.target.parentElement.id)}
                                            style={styles.FontAwesome} 
                                            name = {item.icon} 
                                            size={'2x'}/>
                                        {item.label}
                                    </div> : 
                                    <div 
                                        key={item.id}
                                        id={item.id}
                                        style={styles.item}
                                        onClick={(e) => getActiveTab(e.target.id)}>
                                        <FontAwesome 
                                            onClick={(e) => getActiveTab(e.target.parentElement.id)}
                                            style={styles.FontAwesome} 
                                            name = {item.icon} 
                                            size={'2x'}/>
                                        {item.label}
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                }
            </div>
        )
    }
}

const styles = {
    horizontal: {
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        lineHeight: '1.33333',
        backgroundColor: '#d8e0e5',
        color: '#2c404c',
        fontFamily: 'GE Inspira Sans,sans-serif',
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.2)',
        display: 'flex'
    },
    vertical: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '53px',
        overflow: 'hidden',
        lineHeight: '1.33333',
        backgroundColor: '#d8e0e5',
        color: '#2c404c',
        fontFamily: 'GE Inspira Sans,sans-serif',
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.2)',
        transition: 'width 0.2s',
        ':hover': {
            width: '325px'
        }
    },
    item: {
        padding: '0.7em',
        whiteSpace: 'nowrap',
        ':hover': {
            cursor: 'pointer',
            backgroundColor: '#a3b5bf',
        }
    },
    verticalActiveItem: {
        padding: '0.7em',
        whiteSpace: 'nowrap',
        backgroundColor: 'white',
        borderLeft: '3px solid #09819c'
    },
    horizontalActiveItem: {
        padding: '0.7em',
        whiteSpace: 'nowrap',
        backgroundColor: 'white',
        borderTop: '3px solid #09819c'
    },
    FontAwesome: {
        marginRight: '15px'
    }
}

export default Radium(NavBar);