import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Card extends React.Component{
	render(){
		const { icon, headerText, children } = this.props
		return (
			<div style={styles.card}>
				{icon !== undefined && headerText!== undefined && 
					<div>
						<i className = {`fa fa-${icon} fa-2x`} />
						<span style={styles.headerText}>{headerText}</span>
						<hr style={styles.divider}></hr>
					</div>
				}
				<div>{children}</div>
			</div>
		)
	}
}

const styles = {
	card: {
		padding: '1em',
		margin: '1em',
		boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.2)',
		fontFamily: 'sans-serif',
	},
	headerText: {
		marginLeft: '0.5em',
		fontWeight: 'bold',
		fontSize: '1.5em',
	}
}

export default Card;